import Footer from "@/components/footer";
import { metadata } from "@/components/constants";
import Header from "@/components/header";
import "@/styles/globals.scss";
import "@/styles/bootstrap.min.css";
import "swiper/css/grid";
import "swiper/css";
import type { AppProps } from "next/app";
import Head from "next/head";
import NextNProgress from "nextjs-progressbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>{metadata.title}</title>
        <meta property="og:image" content={metadata.image} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:site_name" content={metadata.site_name} />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
      </Head>
      <NextNProgress color="#b73697" options={{ showSpinner: false }} />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
