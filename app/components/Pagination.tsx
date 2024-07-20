"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { Button, Flex, Text } from "@radix-ui/themes";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";

interface Props {
  itemCount: number;
  pageSize: number;
  currentPage: number;
}

const Pagination = ({ itemCount, pageSize, currentPage }: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const pageCount = Math.ceil(itemCount / pageSize);
  if (pageCount <= 1) return null;

  const changePage = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());
    router.push("?" + params.toString());
  };

  return (
    <Flex align={"center"} gap={"2"}>
      <Button
        variant={"soft"}
        disabled={currentPage == 1}
        onClick={() => changePage(1)}
      >
        <MdKeyboardDoubleArrowLeft />
      </Button>
      <Button
        variant={"soft"}
        disabled={currentPage == 1}
        onClick={() => changePage(currentPage - 1)}
      >
        <BiChevronLeft />
      </Button>
      <Text size={"2"}>
        Page {currentPage} of {pageCount}
      </Text>
      <Button
        variant={"soft"}
        disabled={currentPage == pageCount}
        onClick={() => changePage(currentPage + 1)}
      >
        <BiChevronRight />
      </Button>
      <Button
        variant={"soft"}
        disabled={currentPage == pageCount}
        onClick={() => changePage(pageCount)}
      >
        <MdKeyboardDoubleArrowRight />
      </Button>
    </Flex>
  );
};

export default Pagination;
