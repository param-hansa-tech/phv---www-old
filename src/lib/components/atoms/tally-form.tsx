"use client";

import Script from "next/script";
import { useEffect } from "react";

export default function TallyForm() {
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any)?.Tally?.loadEmbeds?.();
  }, []);
  return (
    <>
      <Script
        id="tally-form"
        async={false}
        dangerouslySetInnerHTML={{
          __html: `var d=document,w="https://tally.so/widgets/embed.js",v=function(){"undefined"!=typeof Tally?Tally.loadEmbeds():d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((function(e){e.src=e.dataset.tallySrc}))};if("undefined"!=typeof Tally)v();else if(d.querySelector('script[src="'+w+'"]')==null){var s=d.createElement("script");s.src=w,s.onload=v,s.onerror=v,d.body.appendChild(s);}`,
        }}
      />
      <iframe
        data-tally-src="https://tally.so/embed/nGGr1L?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
        loading="lazy"
        width="100%"
        height="324"
        title="Contact form"
        onLoad={() => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (window as any)?.Tally?.loadEmbeds?.();
        }}
      />
    </>
  );
}
