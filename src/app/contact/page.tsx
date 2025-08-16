import TallyForm from "@/lib/components/atoms/tally-form";
import { TextSans } from "@/lib/components/atoms/text";
import Page from "@/lib/components/common/page";
import Section from "@/lib/components/misc";
import {
  ArrowUpRightIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
} from "lucide-react";
import Link from "next/link";

export default function Contact() {
  return (
    <Page>
      <Section>
        <div className="grid grid-cols-2 pt-16">
          <div className="flex flex-col gap-0 py-16 px-2">
            <TextSans tScale="h3" as="h1">
              Get in touch
            </TextSans>

            <div className="flex flex-row items-center gap-2 mt-12">
              <MapPinIcon className="h-6 w-6" />
              <TextSans as="p" tScale="p1" className="">
                ADDRESS
              </TextSans>
            </div>
            <TextSans as="p" tScale="p2" color="secondary" className=" mt-1 ml-8">
              Param Hansa Values, Tampa, Florida - 33558, USA <br />
              {/* Bilimora - 396325, Dist. Navsari, Gujarat, India. <br /> */}
              {/* <Link
                href="https://maps.app.goo.gl/eX6NABa3afremgeu5"
                target="_blank"
                className="text-blue-600 underline underline-offset-2 flex flex-row items-center gap-1 text-blue-600"
              >
                Google Maps <ArrowUpRightIcon className="h-4 w-4" />
              </Link> */}
            </TextSans>

            <div className="flex flex-row items-center gap-3 mt-12">
              <PhoneIcon className="h-5 w-5" />
              <TextSans as="p" tScale="p1" className="">
                PHONE
              </TextSans>
            </div>

            <TextSans as="p" tScale="p2" color="secondary" className=" mt-1 ml-8">
              Rakesh Kumar&nbsp;&nbsp;—&nbsp;&nbsp;
              <Link
                href="tel:+919558817397"
                className="text-blue-600 underline underline-offset-2"
              >
                +91 98765 43210
              </Link>

            </TextSans>

            <div className="flex flex-row items-center gap-3 mt-12">
              <MailIcon className="h-5 w-5" />
              <TextSans as="p" tScale="p1" className="">
                EMAIL
              </TextSans>
            </div>

            <TextSans
              as="span"
              tScale="p2"
              color="secondary"
              className="text-blue-600 underline underline-offset-2 mt-1 ml-8"
            >
              <Link href="mailto:info@phvalues.org">
                info@phvalues.org
              </Link>
            </TextSans>
          </div>
          <div className="flex flex-col gap-4 p-2">
            <div className="border border-guides bg-white h-full flex items-center justify-center py-8 pl-6 pr-8">
              <TallyForm />
            </div>
          </div>
        </div>
      </Section>
    </Page>
  );
}
