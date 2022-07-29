import styled from "styled-components";
import { mq } from "../../utils";

type BadgeProps = {
  textColor?: string;
  bgColor?: string;
  children: React.ReactNode;
};

export const Badge = ({
  children,
  textColor = "var(--secondary-color)",
  bgColor = "var(--border-color)",
}: BadgeProps) => {
  return (
    <StyledBadge textColor={textColor} bgColor={bgColor}>
      {children}
    </StyledBadge>
  );
};

type StyleProps = Pick<BadgeProps, "bgColor" | "textColor">;

export const StyledBadge = styled.span<StyleProps>`
  display: inline-block;
  padding: 0.15rem 0.5rem;
  color: ${({ textColor }) => textColor};
  background-color: ${({ bgColor }) => bgColor};
  border-radius: 0.5rem;
  font-size: 1rem;

  @media ${mq.md} {
    font-size: 1rem;
  }
`;
