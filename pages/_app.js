import "../styles/globals.css";
import { NextUIProvider } from "@nextui-org/react/";
import Head from "next/head";
import { motion, AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
  return (
    <AnimatePresence>
      <motion.div
        key={router.route}
        initial="pageInitial"
        animate="pageAnimate"
        exit="pageExit"
        variants={{
          pageInitial: {
            opacity: 0,
          },
          pageAnimate: {
            opacity: 1,
          },
          pageExit: {
            backgroundColor: "white",
            opacity: 0,
          },
        }}
      >
        <Head>
          <link rel="shortcut icon" href="/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <NextUIProvider>
          <Component {...pageProps} />
        </NextUIProvider>
      </motion.div>
    </AnimatePresence>
  );
}

export default MyApp;
