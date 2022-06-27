import Document, { Html, Head, Main, NextScript } from "next/document";
import { CssBaseline } from "@nextui-org/react";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: <>{initialProps.styles}</>,
    };
  }
  render() {
    return (
      <Html lang="en">
        <Head>
          {CssBaseline.flush()}

          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />

          <meta charset="UTF-8" />
          <meta httpEquiv="content-language" content="en-US" />
          <meta
            property="og:title"
            content="Commericialize Your Ideas | Commercial Technologies Plus"
          />
          <meta
            property="og:description"
            content="A trusted SaaS based product development company excels at building secure and scalable enterprise-class software solutions."
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:image"
            content="https://www.commercialtp.com/assets/ctp_socialBanner.png"
          />
          <meta property="og:url" content="https://www.commercialtp.com/" />
          <meta property="og:locale" content="en-US" />
          <meta
            property="og:site_name"
            content="Commercial Technologies Plus"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@commercialtech" />
          <meta name="twitter:creator" content="@commercialtech" />
          <meta
            name="twitter:title"
            content="Commericialize Your Ideas | Commercial TechnologiesPlus"
          />
          <meta
            name="twitter:description"
            content="A trusted SaaS based product development company excels at building secure and scalable enterprise-class software solutions."
          />
          <meta
            name="twitter:image"
            content="https://www.commercialtp.com/assets/ctp_socialBanner.png"
          ></meta>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
