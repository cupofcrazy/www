import type { AppProps } from "next/app";
import nProgress from "nprogress";
import Router from "next/router"
import { GlobalStyles } from "../styles/GlobalStyles";
import "../styles/nprogress.custom.css";
import { Footer, Header, Layout } from "components/Layout";

// handle page load progress
Router.events.on("routeChangeStart", nProgress.start);
Router.events.on("routeChangeError", nProgress.done);
Router.events.on("routeChangeComplete", nProgress.done);


// Main App component
function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
      />
        <GlobalStyles />
        <Header />
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <Footer />
    </>
  );
}

export default MyApp;