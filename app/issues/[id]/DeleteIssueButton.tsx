import React from "react";
import { Button } from "@radix-ui/themes";
import { MdOutlineDeleteForever } from "react-icons/md";

const DeleteIssueButton = ({ issueId }: { issueId: number }) => {
  return (
    <Button color="red">
      <MdOutlineDeleteForever size={20} />
      Delete Issue
    </Button>
  );
};

export default DeleteIssueButton;
