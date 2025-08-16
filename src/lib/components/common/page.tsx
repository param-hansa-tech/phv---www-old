/* eslint-disable @typescript-eslint/no-explicit-any */

import Footer from "./footer";
import Header from "./header";


export default function Page({
  headerProps,
  children,
}: {
  headerProps?: any;
  children: React.ReactNode;
}) {
  return (
  <>
    <Header {...headerProps} />
    {children}
    {/* <NewsLetter /> */}
    <Footer />
  </>
  );
}
