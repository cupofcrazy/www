import { useEffect } from "react";
import styled from "styled-components";
import Marquee3k from "marquee3000";


interface MarqueeProps {
  speed?: number;
  pausable?: boolean;
}

export const Marquee: React.FC<MarqueeProps> = ({
  speed = 1,
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
    >
      <div>{children}</div>
    </MarqueeEl>
  );
};

const MarqueeEl = styled.div`
  font-size: 6rem;
  overflow: hidden;
  color: var(--accent-color);
`;
