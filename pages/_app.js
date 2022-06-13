import "../styles/globals.css";
import React from "react";
import Preloader from "./preloader/index";

import { NextUIProvider } from "@nextui-org/react";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  return (
    <NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp;
