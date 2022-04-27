import styled from "styled-components"
import { mq } from '../../utils'

type Props = {
  color?: string;
  children: React.ReactNode
}

export const Badge = ({ children, color='var(--border-color)' }: Props) => {
  return (
    <StyledBadge color={color}>
      {children}
    </StyledBadge>
  )
}


export const StyledBadge = styled.span`
  display: inline-block;
  /* margin: .5rem 0; */
  padding: .4rem .75rem;
  color: #111;
  background-color: ${({ color }: { color: string }) => color ? color :  'var(--border-color)' };
  border: 1px solid var(--border-color);
  border-radius: .75rem;
  font-size: 1rem;

  @media ${mq.md} {
    font-size: 1rem;
  }
`
