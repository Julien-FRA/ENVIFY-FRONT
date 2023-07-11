import { LinkProps } from "@/utils/types/component.type";
import { Button } from "@mantine/core";
import Link from "next/link";
import React from "react";

function PrimaryPutton({ href, children }: LinkProps) {
  return (
    <Button color="violet" c="white.3">
      <Link href={href}>{children}</Link>
    </Button>
  );
}

export default PrimaryPutton;
