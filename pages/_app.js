import App, { Container } from "next/app"
import Head from "next/head"
import Router from "next/router"
import React from "react"
import { ThemeProvider } from "styled-components"

import * as gtag from "../lib/gtag"
import { theme, GlobalStyle } from "@as0n/layout"

Router.events.on("routeChangeComplete", url => gtag.pageview(url))

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>gnab.fr</title>
          <meta name="Description" content="Nathan Gaberel's homepage" />
          <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon-16x16.png" />
          <link rel="manifest" href="/static/manifest.json" />
          <link rel="preconnect" href="https://www.google-analytics.com" />
          <link rel="preconnect" href="https://api.github.com" />
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}');
          `,
            }}
          />
          <meta property="og:title" content="gnab.fr" />
          <meta property="og:description" content="Nathan Gaberel" />
          <meta property="og:image" content="https://gnab.fr/static/android-chrome-144x144.png" />
        </Head>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Container>
    )
  }
}
