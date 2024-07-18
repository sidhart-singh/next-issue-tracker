"use client";

import React from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import { BiSolidBug } from "react-icons/bi";
import {
  Avatar,
  Box,
  Container,
  DropdownMenu,
  Flex,
  Text,
} from "@radix-ui/themes";
import classNames from "classnames";

const Navbar = () => {
  const currentPath = usePathname();
  const { status, data: session } = useSession();

  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues/list" },
  ];

  return (
    <nav className="border-b mb-5 px-5 py-3">
      <Container>
        <Flex justify={"between"}>
          <Flex gap={"6"} align={"center"}>
            <Link href={"/"}>
              <BiSolidBug size={"30"} />
            </Link>
            <ul className="flex space-x-4">
              {links.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className={classNames(
                      { "text-zinc-900": link.href === currentPath },
                      { "text-zinc-500": link.href !== currentPath },
                      { "hover:text-zinc-800 transition-colors": true }
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Flex>
          <Box>
            {status === "authenticated" && (
              <DropdownMenu.Root>
                <DropdownMenu.Trigger>
                  <Avatar
                    src={session.user!.image!}
                    fallback
                    size={"3"}
                    radius={"full"}
                    className="cursor-pointer"
                  />
                </DropdownMenu.Trigger>
                <DropdownMenu.Content>
                  <DropdownMenu.Label>
                    <Text>{session.user?.email}</Text>
                  </DropdownMenu.Label>
                  <DropdownMenu.Item>
                    <Link href={"/api/auth/signout"}>Log Out</Link>
                  </DropdownMenu.Item>
                </DropdownMenu.Content>
              </DropdownMenu.Root>
            )}
            {status === "unauthenticated" && (
              <Link href={"/api/auth/signin"}>Log In</Link>
            )}
          </Box>
        </Flex>
      </Container>
    </nav>
  );
};

export default Navbar;
