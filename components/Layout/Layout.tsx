import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import styled from "styled-components"
import { mq, sizes } from "utils";
import { pageTransitionVariants } from "utils/animation";
import { Header, Footer } from "./";


interface LayoutProps {
  children: React.ReactNode;
}

const onPageExitComplete = () => {
  if (typeof window !== "undefined") {
    window.scrollTo({ top: 0 });
  }
}

export const Layout = ({ children }: LayoutProps) => {
  const router  = useRouter();
  return (
    <LayoutContainer>
      <AnimatePresence
        onExitComplete={onPageExitComplete}
        exitBeforeEnter
      >
        <Main
          transition={{ ease: "easeOut" }}
          key={router.asPath}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={pageTransitionVariants}
        >
          { children }
        </Main>
      </AnimatePresence>
    </LayoutContainer>
  )
}


const LayoutContainer = styled.div`
  padding: 1rem;
  margin: 8rem auto 8rem auto;

  @media ${mq.md} {
    margin: 8rem auto 8rem auto;
    width: ${sizes.md};
  }
  @media ${mq.xl2} {
    width: ${sizes.lg};
  }
`

const Main = styled(motion.main)``