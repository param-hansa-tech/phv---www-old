import Page from "@/components/common/page";
import Section from "@/components/misc";
import { TextSans, TextSerif } from "@/components/atoms/text";
import { InfiniteSlider } from "@/lib/components/motion-primitives/infinite-slider";
import Link from "@/components/atoms/link";
import { ArrowRight } from "lucide-react";
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
                Investing in <i>good</i>,
              </span>
              <br />
              <span className="float-right">where purpose meets growth</span>
            </TextSerif>

            <div className="grid grid-cols-4 -mb-32 md:-mb-64">
              <TextSans
                className="col-start-1 col-span-4 md:col-start-3 md:col-span-2 w-full px-2 py-16 md:py-32"
                tScale="p1"
                tColor="secondary"
              >
                Discover Param Hansa Investments : Where spiritual wisdom meets
                disciplined value investing. We empower startups to mature
                ventures with direct stakes and fund allocations, driving
                innovation and societal good for lasting impact.
              </TextSans>

              <Link
                className="col-start-1 col-span-4 md:col-start-3 md:col-span-1"
                href="/about"
                suffix={<ArrowRight className="h-8 mr-4" />}
              >
                Our Investments
              </Link>
              <Link
                className="col-start-1 col-span-4 md:col-start-4 md:col-span-1"
                href="/about"
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
            <div className="bg-white w-full aspect-square flex flex-col items-center justify-end">
              <TextSerif tScale="h5" className="pb-16">
                Paramhansa Yogananda
              </TextSerif>
            </div>
            <div className="bg-white w-full aspect-square flex flex-col items-center justify-end">
              <TextSerif tScale="h5" className="pb-16">
                Ben Graham
              </TextSerif>
            </div>
          </div>
        </Section>

        {/* ABOUT */}
        <Section>
          <div className="pt-32 pb-16">
            <TextSans className="md:pr-12 px-2" tScale="h2" as="h2">
              Param Hansa Values is Swapna and Dheeraj Pandey&apos;s private
              investment firm.{" "}
              <TextSans className="opacity-60" as="span">
                At Param Hansa Values, we believe in investing for good –
                driving growth, innovation, and positive change.
              </TextSans>
            </TextSans>
            <div className="grid grid-cols-4 mt-16">
              <TextSans
                className="border-y border-guides col-start-1 col-span-4 md:col-start-3 md:col-span-2 px-2 pt-8 pb-16"
                tColor="secondary"
                tScale="p1"
                as="p"
              >
                Our approach combines direct investments in public and private
                companies with indirect capital allocations to funds, venture
                capital, and private equity.
              </TextSans>
              <TextSans
                className="border-y border-guides col-start-1 col-span-4 md:col-start-3 md:col-span-2 px-2 pt-8 pb-16"
                tColor="secondary"
                tScale="p1"
                as="p"
              >
                We actively support businesses at all stages of their growth
                journey, from early and emerging startups to late-stage growth
                equity ventures. By making anchor investments and co-investing
                with leading venture capital firms, we help unlock potential and
                foster sustainable progress.
              </TextSans>
            </div>
          </div>
        </Section>

        {/* ABOUT */}
        <Section>
          <div className="grid grid-cols-2 md:grid-cols-4 pb-32 ">
            {new Array(8).fill(0).map((o, i) => (
              <div
                key={i}
                className="bg-white w-full aspect-square border border-guides flex flex-col items-center justify-center"
              >
                <TextSans tScale="h5">LOGO</TextSans>
              </div>
            ))}
          </div>
        </Section>
      </Page>
    </>
  );
}
