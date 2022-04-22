import styled, { keyframes } from 'styled-components'
import NextImage from 'next/image'
import { useState } from 'react';
import cn from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';


type Props = {
  src: string;
  alt?: string;
  aspectRatio?: number;
  color?: string;
}

const variants = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    
  },
  exit: {
    opacity: 0,
  }
}

export const Image: React.FC<Props> = ({ src, alt, aspectRatio=1, color="var(--border-color)" }) => {
  const [imageLoaded, setImageLoaded] = useState(false)
  return (
    <Container aspectRatio={aspectRatio} color={color}>
      <AnimatePresence exitBeforeEnter>
        { !imageLoaded && 
        <Backdrop
          variants={variants}
          initial="initial"
          exit="exit"
          animate="animate"
          transition={{ delay: .3 }}
          className={cn({ loaded: imageLoaded })} color={color}>
          <BackdropLoader />
        </Backdrop>
        }
        </AnimatePresence>
      <StyledImg src={src} alt={alt} layout="fill" onLoadingComplete={() => setImageLoaded(true)} />
    </Container>
  )
};

// Styles
type StyleProps = Partial<Pick<Props, 'aspectRatio' | 'color'>> & {}

const Container = styled.div`
  position: relative;
  overflow: hidden;
  padding-top: ${(props: StyleProps) => `calc(100% / ${props.aspectRatio || 1})`};
  width: 100%;
  background-color: ${(props: StyleProps) => `${props.color}`};
  /* border-radius: .25rem; */
`
const StyledImg = styled(NextImage)`
  display: block;
  object-fit: cover;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`

const Backdrop = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 1;
  visibility: visible;
  position: absolute;
  background-color: ${(props: StyleProps) => `${props.color}`};
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  /* transition: all .3s ease-out;
  transition-delay: .3s; */
  z-index: 5;

  &.loaded {
    /* opacity: 0;
    visibility: hidden;
    transition: all .3s ease-out;
    transition-delay: .3s; */
  }
`
const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
  
`
const BackdropLoader = styled.span`
  display: inline-block;
  border: 2px solid rgba(255, 255, 255, 0.25);
  border-left-color: white;
  border-radius: 50%;
  width: 1.5rem;
  height: 1.5rem;
  animation: ${rotate} 1.2s linear infinite;
`


