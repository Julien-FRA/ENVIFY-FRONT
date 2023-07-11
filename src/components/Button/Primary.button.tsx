import { LinkProps } from "@/utils/types/component.type";
import Link from "next/link";
import React from "react";

function PrimaryPutton({ href, children }: LinkProps) {
  return (
    <Link href={href} className="">
      {children}
    </Link>
  );
}

export default PrimaryPutton;
