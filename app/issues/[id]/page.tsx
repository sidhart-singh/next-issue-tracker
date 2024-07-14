import React from "react";
import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import { Box, Grid } from "@radix-ui/themes";

import EditIssueButon from "./edit/EditIssueButon";
import IssueDetails from "./IssueDetails";

interface Props {
  params: { id: string };
}

const IssueDetailPage = async ({ params }: Props) => {
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });

  // notFound() return type is 'never' : no need to add return keyword
  if (!issue) notFound();

  return (
    <Grid columns={{ initial: "1", md: "2" }} gap={"5"}>
      <Box>
        <IssueDetails issue={issue} />
      </Box>
      <Box>
        <EditIssueButon issueId={issue.id} />
      </Box>
    </Grid>
  );
};

export default IssueDetailPage;
