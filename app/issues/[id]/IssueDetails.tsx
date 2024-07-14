import React from "react";
import { Issue } from "@prisma/client";
import ReactMarkdown from "react-markdown";
import { IssueStatusBadge } from "@/app/components";
import { Heading, Flex, Card, Text } from "@radix-ui/themes";

const IssueDetails = ({ issue }: { issue: Issue }) => {
  return (
    <>
      <Heading>{issue.title}</Heading>
      <Flex className="gap-2 my-2 items-center">
        <IssueStatusBadge status={issue.status} />
        <Text>{issue.createdAt.toDateString()}</Text>
      </Flex>
      <Card className="prose" mt={"4"}>
        <ReactMarkdown>{issue.description}</ReactMarkdown>
      </Card>
    </>
  );
};

export default IssueDetails;
