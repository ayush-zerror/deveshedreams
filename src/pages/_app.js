import SmoothScroller from "@/components/common/SmoothScroller";
import Layout from "@/components/layout/Layout";
import "@/styles/globals.css";
import "@/components/home/home.css";
import "@/components/common/card/PolaroidCard/polaroid.css";

import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <SmoothScroller />
        <Component {...pageProps} />
      </Layout>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}
