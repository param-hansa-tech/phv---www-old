import { TextSans } from "@/components/atoms/text";
import Section from "@/components/misc";
import { InfiniteSlider } from "@/components/motion-primitives/infinite-slider";
import { PHPLogo } from "./brand";
import NextLink from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-t-zinc-500/20 bg-white">
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
    </div>
    <div className="h-96"></div>
    {/* MARQUEE */}
    <Section sectionProps={{ className: "border-t border-t-guides" }} guides={false} contained={false}>
          <InfiniteSlider
            className="py-8"
            gap={24}
          >
            <TextSans className="opacity-50" tScale="h1">
            Param Hansa Investments. Param Hansa Investments.
            </TextSans>
          </InfiniteSlider>
        </Section>
    </footer>
  );
}