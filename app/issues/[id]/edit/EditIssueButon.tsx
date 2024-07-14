import { Button } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";
import { HiOutlinePencilSquare } from "react-icons/hi2";

const EditIssueButon = ({ issueId }: { issueId: number }) => {
  return (
    <Button>
      <HiOutlinePencilSquare size={18} />
      <Link href={`/issues/${issueId}/edit`}>Edit Issue</Link>
    </Button>
  );
};

export default EditIssueButon;
