import { ArrowRight } from "lucide-react";
import { PHPLogo } from "./brand";
import NextLink from "next/link";
import Link from "../atoms/link";

export default function Header() {
  return (
    <header className="z-100 fixed w-full border-b border-b-zinc-500/20 bg-white">
      <div className="w-full h-16 m-auto max-w-6xl px-2 grid grid-cols-16">
        <div className="col-start-1 col-span-16 md:col-span-4 flex justify-start items-center">
          <NextLink href="/" className="flex flex-row items-center">
              <PHPLogo className="ml-2 h-9 w-9" />
              <p className="pl-3 font-bold tracking-[-0.04em] text-sm leading-[1.1]">
                Param Hansa <br />
                <span className="opacity-60">Investments</span>
              </p>
          </NextLink>
        </div>

        <div className="hidden md:block col-start-13 col-span-4">
          <Link
            border={false}
            href="/about"
            suffix={<ArrowRight className="h-8 mr-4" />}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
}
