import React from "react";
import Head from "next/head";
import Router from "next/router";
import { ThemeProvider } from "styled-components";

import * as gtag from "../lib/gtag";
import { theme, GlobalStyle } from "@as0n/layout";

Router.events.on("routeChangeComplete", (url) => gtag.pageview(url));

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>gnab.fr</title>
        <meta name="Description" content="Nathan Gaberel's homepage" />
        <link rel="icon" type="image/svg" href="/favicon.svg" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://api.github.com" />
        <meta property="og:title" content="gnab.fr" />
        <meta property="og:description" content="Nathan Gaberel" />
        <meta
          property="og:image"
          content="https://gnab.fr/android-chrome-144x144.png"
        />
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export function reportWebVitals({ id, name, label, value }) {
  gtag.event({
    action: name,
    params: {
      event_category: `Next.js ${label} metric`,
      event_label: id, // id unique to current page load
      value: Math.round(name === "CLS" ? value * 1000 : value), // values must be integers
      non_interaction: true, // avoids affecting bounce rate.
    },
  });
}

export default MyApp;
