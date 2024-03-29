import { createGlobalStyle } from "styled-components";
import { mq } from "../utils";

export const GlobalStyles = createGlobalStyle`

  /* Fonts */
  /* @font-face {
    font-family: "Graphik";
    font-weight: 300;
    src: url('/fonts/Graphik.woff2') format('woff2');
    font-display: swap;
  } */
  
  /* Box sizing rules */
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* Remove default padding */
  ul[class],
  ol[class] {
    /* padding: 0; */
  }

  /* Remove default margin */
  body,
  h1,
  h2,
  h3,
  h4,
  p,
  ul[class],
  ol[class],
  figure,
  blockquote,
  dl,
  dd {
    margin: 0;
    line-height: 1.25;
    color: var(--accent-color);
  }

  li {
    margin-bottom: .15rem;
  }

  /* CSS Variables */
  :root {
    --white: #FFF;
    --black: #111;
    --main-color: #FFF;
    --accent-color: #111;
    --secondary-color: #505050;
    --background-color: #ececec;
    --border-color: rgba(1, 1, 1, .075);
    --border-radius: .75rem;
    --blur-background: #ffffffd1;
    --font-family-base: 'Inter', sans-serif;
    --font-family-heading: 'Newsreader', sans-serif;
    --pulse-color: rgba(0, 0, 0, .05)
    /* --vh */
  }

  /* Set core root defaults */
  html {
    font-weight: 400;
    /* scroll-behavior: smooth; */
    font-size: 14px;
    letter-spacing: 0.25px;
    font-family: Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;

    @media ${mq.md} {
      font-size: 14px;
    }
    @media ${mq.xl} {
      font-size: 14px;
    }
    
    @media ${mq.xl2} {
      font-size: 14px;
    }
    @media ${mq.xl3} {
      font-size: 14px;
    }
  }

  ::-webkit-scrollbar {
    width: 6px;
    /* height: 10px; */
  }
  ::-webkit-scrollbar-track {
      background: transparent;
  }
  ::-webkit-scrollbar-thumb {
      background: var(--accent-color);
  }

  /* Set core body defaults */
  body {
    background-color: var(--main-color);
    /* min-height: var(--vh); */
    text-rendering: optimizeSpeed;

    &.dark {
      --main-color: #1e1e1e;
      --accent-color: #FFF;
      --secondary-color: #BBB;
      --background-color: #2f2f2f;
      --border-color: rgba(255, 255, 255, .15);
      --border-radius: .75rem;
      --blur-background: #1e1e1ed1;
      --pulse-color: rgba(255, 255, 255, .05)
    }
  }

  /* Remove list styles on ul, ol elements with a class attribute */
  ul[class],
  ol[class] {
    list-style: none;
  }

  li {
    color: var(--accent-color);
    list-style-type: none;
  }

  /* A elements that don't have a class get default styles */
  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  /* Make images easier to work with */
  img,
  picture {
    max-width: 100%;
    display: block;
  }

  /* Natural flow and rhythm in articles by default */
  article > * + * {
    margin-top: 1em;
  }

  /* Inherit fonts for inputs and buttons */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  /* Blur images when they have no alt attribute */
  img:not([alt]) {
    filter: blur(10px);
  }

  /* Remove all animations and transitions for people that prefer not to see them */
  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  a {
    color: inherit;
    text-decoration: none;
    display: block;
    color: var(--accent-color);
  }


  button {
    font-family: inherit;
    cursor: pointer;
    border: 0;
    display: block;
    background: transparent;

    &:disabled {
      cursor: not-allowed;
      opacity: .5;
    }
  }
`