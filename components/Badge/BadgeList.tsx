import styled from "styled-components";
import { Badge } from "./Badge";
import { colors } from "utils";

interface Props {
  badgeList: React.ReactNode[];
}

export const BadgeList = ({ badgeList }: Props) => {
  return (
    <BadgeContainer>
      {badgeList.map((badge, index) => (
        <Badge key={index} textColor={'var(--black)'} bgColor={colors[index % colors.length].background}>{badge}</Badge>
      ))}
    </BadgeContainer>
  );
};

const BadgeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;
