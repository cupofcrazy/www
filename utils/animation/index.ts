export const variants = {
  hidden: {
    opacity: 0
  },
  appear: {
    opacity: 1,
    transition: {
      type: 'tween'
    }
  },
}

export const pageTransitionVariants = {
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