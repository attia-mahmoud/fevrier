import { AppProps } from "next/app";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Fevrier</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: "light",
          colors: {
            brand: [
              "#edede9",
              "#f5ebe0",
              "#e9dbca",
              "#e3d5ca",
              "#dcc2a7",
              "#d5bdaf",
              "#dcbba7",
              "#cea981",
              "#c2915b",
              "#aa7842",
            ],
          },
          headings: { fontFamily: "Bodoni Moda, serif" },
          fontFamily: "Segoe UI",
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}
