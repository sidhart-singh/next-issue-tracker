import React from "react";
import prisma from "@/prisma/client";
import { Flex } from "@radix-ui/themes";
import { Status } from "@prisma/client";

import IssuesActions from "./IssuesActions";
import { Pagination } from "@/app/components";
import IssueTable, { columnName, IssueQuery } from "./IssueTable";

interface Props {
  searchParams: IssueQuery;
}

const IssuesPage = async ({ searchParams }: Props) => {
  const statuses = Object.values(Status);
  const status = statuses.includes(searchParams.status)
    ? searchParams.status
    : undefined;

  const orderBy = columnName.includes(searchParams.orderBy)
    ? { [searchParams.orderBy]: "asc" }
    : undefined;

  const page = parseInt(searchParams.page) || 1;
  const pageSize = 5;

  const where = {
    status,
  };
  const issues = await prisma.issue.findMany({
    where,
    orderBy,
    skip: (page - 1) * pageSize,
    take: pageSize,
  });
  const issueCount = await prisma.issue.count({ where });

  return (
    <Flex direction={"column"} gap={"3"}>
      <IssuesActions />
      <IssueTable searchParams={searchParams} issues={issues} />
      <Pagination
        pageSize={pageSize}
        currentPage={page}
        itemCount={issueCount}
      />
    </Flex>
  );
};

// opt-out of caching
export const dynamic = "force-dynamic";

export default IssuesPage;
