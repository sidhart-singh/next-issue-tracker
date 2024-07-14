"use client";

import prisma from "@/prisma/client";
import { notFound } from "next/navigation";

import IssueForm from "../_components/IssueForm";

const NewIssuePage = async ({ params }: { params: { id: string } }) => {
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!issue) notFound();

  return <IssueForm issue={issue} />;
};

export default NewIssuePage;
