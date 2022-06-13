import "../styles/globals.css";
import React from "react";
import Preloader from "../components/UI/PreLoader/Preloader";

import { NextUIProvider } from "@nextui-org/react";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  return (
    <>
      {!loading ? (
        <NextUIProvider>
          <Component {...pageProps} />
        </NextUIProvider>
      ) : (
        <Preloader />
      )}
    </>
  );
}

export default MyApp;
