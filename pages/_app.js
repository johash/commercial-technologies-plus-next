import "../styles/globals.css";
import { NextUIProvider } from "@nextui-org/react/";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
    </>
  );
}

export default MyApp;
