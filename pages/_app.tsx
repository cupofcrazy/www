import type { AppProps } from "next/app";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import nProgress from "nprogress";
import Router from "next/router";
import { Header } from "../components/Layout/Header";
import { GlobalStyles } from "../styles/GlobalStyles";
import "../styles/nprogress.custom.css";
import { mq, sizes } from "../utils";
import { ThemeProvider } from "../contexts/ThemeContext";
import { Footer } from "../components/Layout/Footer";
import { Marquee } from "../components/Marquee";

Router.events.on("routeChangeStart", nProgress.start);
Router.events.on("routeChangeError", nProgress.done);
Router.events.on("routeChangeComplete", nProgress.done);

const pageTransitionVariants = {
  initial: {
    opacity: 0,
    y: 10,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: -10,
  },
};

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
      />
      <ThemeProvider>
        <Header />
        <Container>
          <GlobalStyles />
          <AnimatePresence
            onExitComplete={() => {
              if (typeof window !== 'undefined') {
                window.scrollTo({ top: 0 })
              }
            }}
            exitBeforeEnter>
            <motion.div
              transition={{ ease: "easeOut" }}
              key={router.asPath}
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageTransitionVariants}
            >
              <Component {...pageProps} />
            </motion.div>
          </AnimatePresence>
        </Container>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default MyApp;

const Container = styled.div`
  padding: 1rem;
  margin: 8rem auto 8rem auto;

  @media ${mq.md} {
    margin: 10rem auto 10rem auto;
    padding: 1rem;
    width: ${sizes.md};
  }
  @media ${mq.xl2} {
    width: ${sizes.xl};
    padding: 1rem;
  }
`;
