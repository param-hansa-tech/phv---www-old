import NextLink from "next/link";
import { TextSans } from "./text";
import { cn } from "@/lib/utils";

export default function Link({ children, href, className, suffix, border = true }: { children?: React.ReactNode, href: string, className?: string, suffix?: React.ReactNode, border?: boolean }) {
  return (
    <NextLink
      className={cn("group hover:text-blue-500 flex flex-row items-center justify-between px-2 h-16 bg-white", border && "border border-guides", className)}
      href={href}
    >
      <TextSans tScale="p1" className="group-hover:text-blue-500 underline underline-offset-2"> {children} </TextSans>
        {suffix ? suffix : null}
    </NextLink>
  );
}
