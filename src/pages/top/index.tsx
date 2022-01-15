import React from "react";
import { TopIndexTemplate } from "~/component/template/Top";
import { RequireAuthenticated } from "~/component/container/RequireAuthenticated";

const TopIndexPage: React.FC = () => {
  return (
    <RequireAuthenticated>
      <TopIndexTemplate />
    </RequireAuthenticated>
  );
};

export default TopIndexPage;
