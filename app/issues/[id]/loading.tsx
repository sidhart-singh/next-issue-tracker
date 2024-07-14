import React from "react";
import { Flex, Card, Box } from "@radix-ui/themes";

import { Skeleton } from "@/app/components";

const LoadingIssueDetailPage = async () => {
  return (
    <Box className="max-w-xl">
      <Skeleton />
      <Flex className="gap-2 my-2 items-center">
        <Skeleton width={"5rem"} />
        <Skeleton width={"5rem"} />
      </Flex>
      <Card className="prose" mt={"4"}>
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </Card>
    </Box>
  );
};

export default LoadingIssueDetailPage;
