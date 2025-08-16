import { TextSans } from "@/lib/components/atoms/text";
import Page from "@/lib/components/common/page";
import Section from "@/lib/components/misc";

export default function Contact() {
  return (
    <Page>
        <Section>
            <TextSans tScale="h1" as="h1">
                Get in touch
            </TextSans>
        </Section>
    </Page>
  );
}