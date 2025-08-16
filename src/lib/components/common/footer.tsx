import { PHPLogo } from "./brand";
import NextLink from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-t-zinc-500/20 bg-white">
    <div className="w-full h-16 m-auto max-w-7xl px-2 grid grid-cols-16">
    <div className="col-start-1 col-span-16 md:col-span-4 flex justify-start items-center">
          <NextLink href="/" className="flex flex-row items-center">
              <PHPLogo className="ml-2 h-9 w-9" />
              <p className="pl-3 font-bold tracking-[-0.04em] text-sm leading-[1.1]">
                Param Hansa <br />
                <span className="opacity-50">Investments</span>
              </p>
          </NextLink>
        </div>
    </div>
    <div className="h-96"></div>
    </footer>
  );
}