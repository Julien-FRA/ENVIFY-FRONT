import { LinkProps } from "@/utils/types/component.type";
import { Button } from "@mantine/core";
import Link from "next/link";
import React from "react";

function ArrowButton({ href, children }: LinkProps) {
  return <Link href={href}>{children}</Link>;
}

export default ArrowButton;
