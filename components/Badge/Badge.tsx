import styled from "styled-components"
import { mq } from '../../utils'

type Props = {
  children: React.ReactNode
}

export const Badge = ({ children }: Props) => {
  return (
    <StyledBadge>
      {children}
    </StyledBadge>
  )
}


export const StyledBadge = styled.span`
  display: inline-block;
  /* margin: .5rem 0; */
  padding: .4rem .75rem;
  color: var(--secondary-color);
  background-color: var(--border-color);
  border-radius: .75rem;
  font-size: 1rem;

  @media ${mq.md} {
    font-size: 1rem;
  }
`
