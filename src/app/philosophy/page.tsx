import { TextSans, TextSerif } from "@/lib/components/atoms/text";
import Page from "@/lib/components/common/page";
import Section from "@/lib/components/misc";
import UnicornComponent from "@/lib/components/misc/unicorn";

export default function Philosophy() {
  return (
    <Page>
         <Section>
        <div className="w-full h-screen flex flex-col">
          <div className="flex-grow" />
          <TextSerif className="w-full px-2" tScale="h1" as="h1">
            <span className="float-left">Inspired by wisdom,</span>
            <br />
            <span className="float-right">and guided by discipline.</span>
          </TextSerif>

          <div className="grid grid-cols-4 -mb-32 md:-mb-64">
            <TextSans
              className="col-start-1 col-span-4 md:col-start-3 md:col-span-2 w-full px-2 py-16 md:py-32"
              tScale="p1"
              tColor="secondary"
            >
              Our portfolio is more than a list—it’s a collection of ideas we
              believe in, ventures we nurture, and leaders who shape industries.
            </TextSans>

            {/* <Link
              className="col-start-1 col-span-4 md:col-start-3 md:col-span-1"
              href="/portfolio"
              suffix={<ArrowRight className="h-8 mr-4" />}
            >
              Our Investments
            </Link>
            <Link
              className="col-start-1 col-span-4 md:col-start-4 md:col-span-1"
              href="/philosophy"
              suffix={<ArrowRight className="h-8 mr-4" />}
            >
              Our Philosophy
            </Link> */}
          </div>
          <div className="flex-grow pointer-events-none" />
        </div>
      </Section>

      {/* ASSET */}
      <Section sectionProps={{ className: "-mt-60 md:-mt-40" }}>
        <div className="border border-guides">
          <UnicornComponent />
        </div>
      </Section>
    </Page>
  );
}