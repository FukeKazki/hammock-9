import type { NextApiRequest, NextApiResponse } from "next";
import { Octokit } from "@octokit/core";
import dayjs from "dayjs";

type Contributions = {
  user: {
    contributionsCollection: {
      contributionCalendar: {
        weeks: [
          {
            contributionDays: [
              {
                date: string;
                contributionCount: number;
              },
            ];
          },
        ];
      };
    };
  };
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { userName } = req.query;

  const octokit = new Octokit({
    auth: process.env.NEXT_PUBLIC_GITHUB_API_KEY,
  });

  const now = dayjs().format("YYYY-MM-DDThh:mm:ss");

  const query = `
    query contributions ($userName:String!, $now:DateTime!) {
          user(login: $userName) {
              # fromを12/31にしないと1/1が含まれない
              contributionsCollection(to: $now, from: "2021-12-31T00:00:00") {
                  contributionCalendar {
                      weeks {
                          contributionDays {
                              date
                              contributionCount
                          }
                      }
                  }
              }
          }
      }`;

  const response = await octokit.graphql<Contributions>(query, { userName, now: now });

  const weeks = response?.user?.contributionsCollection?.contributionCalendar?.weeks;

  const flatten = weeks
    .reduce(
      (previousValue, currentValue) => {
        previousValue.push(currentValue.contributionDays);
        return previousValue;
      },
      [] as Array<
        Array<{
          date: string;
          contributionCount: number;
        }>
      >,
    )
    .flat();

  // 1つめの要素の2021-12-31を削除する。
  flatten.splice(0, 1);

  const total = flatten.reduce((previousValue, currentValue) => {
    return previousValue + currentValue?.contributionCount;
  }, 0);

  return res.status(200).json({
    weeks: flatten,
    total,
  });
}
