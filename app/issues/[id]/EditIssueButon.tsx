import React from "react";
import Link from "next/link";
import { Button } from "@radix-ui/themes";
import { HiOutlinePencilSquare } from "react-icons/hi2";

const EditIssueButon = ({ issueId }: { issueId: number }) => {
  return (
    <Button>
      <HiOutlinePencilSquare size={18} />
      <Link href={`/issues/edit/${issueId}`}>Edit Issue</Link>
    </Button>
  );
};

export default EditIssueButon;
