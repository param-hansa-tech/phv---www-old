import { TextSans, TextSerif } from "@/lib/components/atoms/text";
import Page from "@/lib/components/common/page";
import Section from "@/lib/components/misc";

export default function Portfolio() {
  return (
    <Page>
      <Section>
        <div className="w-full h-screen flex flex-col">
          <div className="flex-grow" />
          <TextSerif className="w-full px-2 -mt-12 md:-mt-24" tScale="h1" as="h1">
            <span className="float-left">Investments across sectors,</span>
            <br />
            <span className="float-right">rooted in vision and values.</span>
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
      <Section sectionProps={{ className: "-mt-60 md:-mt-40" }}>
        <div className="w-full pb-40">
          {/* Investments table with 3 columns: name, sector, and company description */}
          <table className="w-full bg-background border-x border-x-guides">
            <tbody className="border-t border-t-guides">
              {INVESTMENTS.map((o, i) => (
                <tr
                  key={i}
                  className="bg-white grid grid-cols-16 border-b border-b-guides min-h-32 py-2"
                >
                  <td className="flex flex-row items-center col-span-16 md:col-span-8">
                    <div className="hidden md:block rounded-full bg-stone-200 w-3 h-3 mx-16" />
                    <TextSans className="pl-2 pr-4" tScale="h6" as="p">
                      {o.name}
                    </TextSans>
                  </td>
                  {/* 
                    <td className="flex flex-row items-center col-span-4">
                        <TextSans tColor="secondary" className="px-2" tScale="p1" as="p">
                        {o.sector}
                        </TextSans>
                    </td>
                   */}
                  <td className="flex flex-row items-center col-span-16 md:col-span-8">
                    <TextSans
                      className="pl-2 pr-8"
                      tScale="p1"
                      tColor="secondary"
                      as="p"
                    >
                      {o.desc}
                    </TextSans>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>
    </Page>
  );
}

const INVESTMENTS = [
  {
    name: "DevRev",
    sector: "Software as a Service (SaaS)",
    desc: "DevRev is an AI-native platform built for the SaaS vertical, offering CRM apps for support, product, and growth teams to connect developers with customers and enhance collaboration.",
  },
  {
    name: "Graphwear",
    sector: "Health Technology / Wearables",
    desc: "GraphWear develops needle-free continuous glucose monitoring wearables that measure molecules like glucose on the skin's surface for chronic condition monitoring.",
  },
  {
    name: "Carta",
    sector: "Financial Technology (FinTech)",
    desc: "Carta provides capitalization table management and valuation software, helping startups and private companies manage equity and streamline fundraising processes.",
  },
  {
    name: "Innovaccer",
    sector: "Health Technology",
    desc: "Innovaccer is a digital healthcare company offering a data activation and analytics platform to support value-based care and improve outcomes for healthcare organizations.",
  },
  {
    name: "Ballistic Ventures",
    sector: "Venture Capital",
    desc: "Ballistic Ventures is a venture capital firm dedicated exclusively to funding and incubating early-stage innovations in cybersecurity.",
  },
  {
    name: "D2G Oncology",
    sector: "Biotechnology / Oncology",
    desc: "D2G Oncology specializes in developing precision cancer therapeutics by relating drugs to genotypes using genomic data to transform oncology treatments.",
  },
  {
    name: "Red Tree Venture Capital",
    sector: "Venture Capital",
    desc: "Red Tree Venture Capital is an early-stage life science venture firm that invests in therapeutics targeting oncology, neurology, and immunology through partnerships with leading research institutions.",
  },
  {
    name: "Lightspeed",
    sector: "Venture Capital",
    desc: "Lightspeed Venture Partners is a multi-stage venture capital firm focused on accelerating disruptive innovations in enterprise, consumer, health, fintech, and other technology sectors.",
  },
  {
    name: "Audacious Ventures",
    sector: "Venture Capital",
    desc: "Audacious Ventures is a venture capital firm partnering with founders in technology sectors, including cybersecurity, artificial intelligence, and commercial products.",
  },
  {
    name: "MXV",
    sector: "Venture Capital",
    desc: "m]x[v Capital is an early-stage venture fund dedicated to funding and founding companies shaping the future of cloud computing and related technologies.",
  },
  {
    name: "Firebolt Ventures",
    sector: "Venture Capital",
    desc: "Firebolt Ventures is a venture capital firm investing in software across enterprise B2B applications, infrastructure, fintech, and consumer sectors.",
  },
  {
    name: "OpenDoor",
    sector: "Real Estate Technology (PropTech)",
    desc: "Opendoor is an e-commerce platform for residential real estate, enabling instant cash offers to buy and sell homes digitally.",
  },
  {
    name: "ArmorCode",
    sector: "Cybersecurity / Software",
    desc: "ArmorCode offers an AI-powered Application Security Posture Management (ASPM) platform to unify security ecosystems, prioritize risks, and automate remediation.",
  },
  {
    name: "GoodMeetings",
    sector: "Software / Productivity Tools",
    desc: "GoodMeetings is an AI-powered platform for meeting insights and automation, transforming revenue teams by enhancing video conferencing and customer interactions.",
  },
  {
    name: "LightBeam",
    sector: "Health Technology",
    desc: "Lightbeam Health Solutions provides a population health management platform that aggregates healthcare data for 360-degree patient insights and improved outcomes.",
  },
  {
    name: "100ms",
    sector: "Communication Software / Video Infrastructure",
    desc: "100ms is a cloud-based infrastructure platform for building and deploying enterprise-class live video applications and real-time video calls.",
  },
  {
    name: "Neythri Futures Fund",
    sector: "Venture Capital",
    desc: "Neythri Futures Fund is a venture fund investing in female founders and diverse teams building innovative tech-enabled solutions for global markets, with a focus on South Asian women investors.",
  },
  {
    name: "Gilmartin Capital",
    sector: "Venture Capital",
    desc: "Gilmartin Capital invests in healthcare innovators developing platforms for large or underserved diseases, including medical devices, life science tools, diagnostics, and digital health.",
  },
  {
    name: "GTM Capital",
    sector: "Venture Capital",
    desc: "GTM Capital is a venture capital firm focused on accelerating customer traction for portfolio companies in sectors like security, AI, machine learning, and cloud infrastructure.",
  },
  {
    name: "Accel",
    sector: "Venture Capital",
    desc: "Accel is a global venture capital firm investing in seed, early, and growth-stage startups across technology sectors, including consumer, enterprise, and cleantech.",
  },
  {
    name: "Atomicwork",
    sector: "Software / IT Management",
    desc: "Atomicwork is an agentic service management platform using AI to streamline IT services, employee experiences, and boost productivity in digital workplaces.",
  },
  {
    name: "Cortex6",
    sector: "Software Development Tools",
    desc: "Cortex is a platform that helps engineering teams build better software at scale by tracking services, standards, and enabling machine learning model deployment.",
  },
];
