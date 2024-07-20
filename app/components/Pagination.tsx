import { Button, Flex, Text } from "@radix-ui/themes";
import React from "react";
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
  const pageCount = Math.ceil(itemCount / pageSize);
  if (pageCount <= 1) return null;

  return (
    <Flex align={"center"} gap={"2"}>
      <Button variant={"soft"} disabled={currentPage == 1}>
        <MdKeyboardDoubleArrowLeft />
      </Button>
      <Button variant={"soft"} disabled={currentPage == 1}>
        <BiChevronLeft />
      </Button>
      <Text size={"2"}>
        Page {currentPage} of {pageCount}
      </Text>
      <Button variant={"soft"} disabled={currentPage == pageCount}>
        <BiChevronRight />
      </Button>
      <Button variant={"soft"} disabled={currentPage == pageCount}>
        <MdKeyboardDoubleArrowRight />
      </Button>
    </Flex>
  );
};

export default Pagination;
