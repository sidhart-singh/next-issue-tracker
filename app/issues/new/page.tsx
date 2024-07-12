"use client";

import React from "react";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { Button, TextField } from "@radix-ui/themes";
import { useForm } from "react-hook-form";

interface IssueForm {
  title: string;
  description: string;
}

const NewIssuePage = () => {
  const { register } = useForm<IssueForm>();

  return (
    <div className="max-w-xl space-y-3">
      <TextField.Root placeholder="Title" {...register("title")} />
      <SimpleMDE />
      <Button>Submit</Button>
    </div>
  );
};

export default NewIssuePage;
