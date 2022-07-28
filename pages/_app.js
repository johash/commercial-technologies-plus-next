import "../styles/globals.css";
import { NextUIProvider } from "@nextui-org/react/";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import * as ga from "../lib/analytics";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
    </>
  );
}

export default MyApp;
