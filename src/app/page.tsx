import Page from "@/components/common/page";
import Section from "@/components/misc";
import { TextSans, TextSerif } from "@/components/atoms/text";
import { InfiniteSlider } from "@/lib/components/motion-primitives/infinite-slider";
import Link from "@/components/atoms/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import NextLink from "next/link";
// import UnicornComponent from "@/lib/components/misc/unicorn";

export default function Home() {
  return (
    <>
      <Page>
        {/* HOMEPAGE HERO */}
        <Section>
          <div className="w-full h-screen flex flex-col">
            <div className="flex-grow" />
            <TextSerif className="w-full px-2" tScale="h1" as="h1">
              <span className="float-left">
                Investing for <i>good</i> — where
              </span>
              <br />
              <span className="float-right">wisdom meets growth.</span>
            </TextSerif>

            <div className="grid grid-cols-4 -mb-20 md:-mb-40">
              <TextSans
                className="col-start-1 col-span-4 md:col-start-3 md:col-span-2 w-full px-2 py-10 md:py-20"
                tScale="p1"
                tColor="secondary"
              >
                Discover Param Hansa Investments, where spiritual wisdom meets
                disciplined value investing. We empower startups to mature
                ventures with direct stakes and fund allocations, driving
                innovation and societal good for lasting impact.
              </TextSans>

              <Link
                className="col-start-1 col-span-4 md:col-start-3 md:col-span-1 border-x-[0.5]"
                href="/portfolio"
                suffix={<ArrowRight className="h-8 mr-4" />}
              >
                Our Investments
              </Link>
              <Link
                className="col-start-1 col-span-4 md:col-start-4 md:col-span-1 border-x-[0.5] border-r-1"
                href="/philosophy"
                suffix={<ArrowRight className="h-8 mr-4" />}
              >
                Our Philosophy
              </Link>
            </div>
            <div className="flex-grow pointer-events-none" />
          </div>
        </Section>

        {/* MARQUEE */}
        <Section contained={false}>
          <InfiniteSlider
            className="py-8 md:py-8 lg:py-16 xl:py-32 text-dark"
            gap={24}
          >
            <TextSans tScale="h1">
              Inspired investments, grounded returns : Fostering harmony through
              capital.
            </TextSans>
          </InfiniteSlider>
        </Section>

        {/* ASSET */}
        <Section>
          <div className="grid grid-cols-1 md:grid-cols-2 border border-guides py-32">
            <div className="bg-white w-full aspect-square flex flex-col items-center justify-end border-y border-y-guides border-r-[0.5] border-r-guides">
              <Image
                src="/paramhansa.png"
                alt="Paramhansa Yogananda"
                width={1000}
                height={1000}
              />
              {/* <TextSerif tScale="h5" className="pb-8">
                Paramhansa Yogananda
                </TextSerif> */}
            </div>
            <div className="bg-white w-full aspect-square flex flex-col items-center justify-end border-y border-y-guides border-l-[0.5] border-l-guides">
              <Image
                src="/ben-graham.png"
                alt="Ben Graham"
                width={1000}
                height={1000}
              />
              {/* <TextSerif tScale="h5" className="pb-8">
                Ben Graham
              </TextSerif> */}
            </div>
          </div>
        </Section>

        {/* ABOUT */}
        <Section>
          <div className="pt-32 pb-16">
            <TextSans className="px-2" tScale="h2" as="h2">
              Param Hansa Values is Swapna and Dheeraj Pandey&apos;s private
              investment firm.{" "}
              <TextSans className="opacity-60" as="span">
                At Param Hansa Values, we believe in investing for good —
                driving growth, innovation, and positive change.
              </TextSans>
            </TextSans>
            <div className="grid grid-cols-4 mt-16">
              <div className="border-y border-guides col-start-1 col-span-4 md:col-start-3 md:col-span-2 px-2">
                <TextSans
                  className="bg-background pt-8 pb-16"
                  tColor="secondary"
                  tScale="p1"
                  as="p"
                >
                  Our approach combines direct investments in public and private
                  companies with indirect capital allocations to funds, venture
                  capital, and private equity.
                </TextSans>
              </div>
              <div className="border-b border-b-guides col-start-1 col-span-4 md:col-start-3 md:col-span-2 px-2">
                <TextSans
                  className="bg-background pt-8 pb-16"
                  tColor="secondary"
                  tScale="p1"
                  as="p"
                >
                  We actively support businesses at all stages of their growth
                  journey, from early and emerging startups to late-stage growth
                  equity ventures. By making anchor investments and co-investing
                  with leading venture capital firms, we help unlock potential
                  and foster sustainable progress.
                </TextSans>
              </div>
            </div>
          </div>
        </Section>

        {/* ABOUT */}
        <Section>
          <div className="grid grid-cols-2 md:grid-cols-4 border border-guides">
            {["/logo_1.png", "/logo_2.png", "/logo_3.png", "/logo_5.png"].map(
              (o, i) => (
                <div key={i} className="p-4">
                  <Image
                    unoptimized
                    className="bg-white w-full aspect-square border border-guides"
                    src={o}
                    alt="Logo"
                    width={1000}
                    height={1000}
                  />
                  {/* <div
                className="bg-white w-full aspect-square border border-guides flex flex-col items-center justify-center"
              >
                <TextSans tScale="h5">LOGO</TextSans>
              </div> */}
                </div>
              )
            )}
          </div>
        </Section>
        <Section>
          <div className="grid grid-cols-2 md:grid-cols-4 mb-32 border border-guides border-t-0">
            {["/logo_6.png", "/logo_8.png", "/logo_7.png"].map((o, i) => (
              <div key={i} className="p-4">
                <Image
                  unoptimized
                  className="bg-white w-full aspect-square border border-guides"
                  src={o}
                  alt="Logo"
                  width={1000}
                  height={1000}
                />

                {/* <div
                className="bg-white w-full aspect-square border border-guides flex flex-col items-center justify-center"
              >
                <TextSans tScale="h5">LOGO</TextSans>
              </div> */}
              </div>
            ))}
            <div className="p-4">
              <NextLink
                href="/portfolio"
                className="transition-all duration-300 ease-in-out group bg-white w-full aspect-square border border-primary flex flex-col items-center justify-center hover:border-blue-500"
              >
                <TextSans className="flex flex-row items-center group-hover:text-blue-500" tScale="p1">
                  and many more <ArrowRight className="ml-2 h-5 w-5" />
                </TextSans>
              </NextLink>
            </div>
          </div>
        </Section>
      </Page>
    </>
  );
}
