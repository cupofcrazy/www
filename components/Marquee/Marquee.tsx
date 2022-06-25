import { useEffect } from "react";
import styled from "styled-components";
import Marquee3k from "marquee3000";
import { mq } from "utils";


interface MarqueeProps {
  speed?: number;
  pausable?: boolean;
  textColor?: string;
}

export const Marquee: React.FC<MarqueeProps> = ({
  speed = .5,
  textColor = 'var(--accent-color)',
  pausable = true,
  children,
}) => {
  useEffect(() => {
    Marquee3k.init();
  }, []);
  return (
    <MarqueeEl
      className="marquee3k"
      data-speed={speed}
      data-pausable={pausable}
      textColor={textColor}
    >
      <Container>{children}</Container>
    </MarqueeEl>
  );
};

const MarqueeEl = styled.div<Pick<MarqueeProps, 'textColor'>>`
  font-family: var(--font-family-heading);
  font-style: italic;
  font-size: 6rem;
  font-weight: 100;
  overflow: hidden;
  color: ${({ textColor }) => textColor };
  letter-spacing: -0.1rem;

  @media ${mq.xl2} {
    font-size: 12rem;
  }
`;
const Container = styled.div`
  margin-right: 1rem;
`;
