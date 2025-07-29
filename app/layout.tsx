import "@mantine/core/styles.css";
import React from "react";
import {
  MantineProvider,
  ColorSchemeScript,
  mantineHtmlProps,
} from "@mantine/core";
import { theme } from "../theme";
import { appConfig } from "../config";
import { FloatingActionButton } from "./components/FloatingActionButton";

export const metadata = {
  title: appConfig.name,
  description: appConfig.description,
  metadataBase: new URL(appConfig.productionUrl),
  openGraph: {
    title: appConfig.name,
    description: appConfig.description,
    url: appConfig.productionUrl,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: appConfig.name,
    description: appConfig.description,
  },
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider theme={theme} defaultColorScheme="auto">
          {children}
          <FloatingActionButton />
        </MantineProvider>
      </body>
    </html>
  );
}
