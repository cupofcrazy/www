import styled from "styled-components"
import { mq } from '../../utils'

type Props = {
  color?: string
  children: React.ReactNode
}

export const Badge = ({ children, color="var(--border-color)" }: Props) => {
  return (
    <StyledBadge color={color}>
      {children}
    </StyledBadge>
  )
}

type StyleProps = Pick<Props, 'color'>

export const StyledBadge = styled.span<StyleProps>`
  display: inline-block;
  padding: .15rem .5rem;
  color: ${({ color }) => '#111' };
  background-color: ${({ color }) => color };
  border-radius: .5rem;
  font-size: 1rem;

  @media ${mq.md} {
    font-size: 1rem;
  }
`
