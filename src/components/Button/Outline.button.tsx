import { LinkProps } from "@/utils/types/component.type";
import { Button } from "@mantine/core";
import Link from "next/link";
import React from "react";

function OutlineButton({ href, children }: LinkProps) {
  return (
    <Button variant="outline" color="violet">
      <Link href={href}>{children}</Link>
    </Button>
  );
}

export default OutlineButton;
