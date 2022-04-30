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

interface StyleProps {
  color?: string
}

export const StyledBadge = styled.span<StyleProps>`
  display: inline-block;
  /* margin: .5rem 0; */
  padding: .15rem .5rem;
  color: ${({ color }) => color ? '#111' : 'var(--accent-color)' };
  background-color: ${({ color }) => color ? color :  'var(--border-color)' };
  border: 1px solid var(--border-color);
  border-radius: .5rem;
  font-size: 1rem;

  @media ${mq.md} {
    font-size: 1rem;
  }
`
