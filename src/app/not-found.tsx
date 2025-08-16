import { TextSans } from "@/lib/components/atoms/text";
import Page from "@/lib/components/common/page";
import Section from "@/lib/components/misc";
import { InfiniteSlider } from "@/lib/components/motion-primitives/infinite-slider";

export default function NotFound() {
  return (
    <Page>
      <Section contained={false}>
        <InfiniteSlider
          className="py-64 text-dark"
          gap={24}
        >
          <TextSans tScale="h1">
            404 Not Found&nbsp;&nbsp;&nbsp;404 Not Found&nbsp;&nbsp;&nbsp;404
            Not Found&nbsp;&nbsp;&nbsp;
          </TextSans>
        </InfiniteSlider>
      </Section>
    </Page>
  );
}
