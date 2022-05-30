import styled from "styled-components"
import { mq } from '../../utils'

type Props = {
  textColor?: string;
  bgColor?: string;
  children: React.ReactNode
}

export const Badge = ({ children, textColor="var(--secondary-color)", bgColor="var(--border-color)" }: Props) => {
  return (
    <StyledBadge textColor={textColor} bgColor={bgColor}>
      {children}
    </StyledBadge>
  )
}

type StyleProps = Pick<Props, 'bgColor' | 'textColor'>

export const StyledBadge = styled.span<StyleProps>`
  display: inline-block;
  padding: .15rem .5rem;
  color: ${({ textColor }) => textColor };
  background-color: ${({ bgColor }) => bgColor };
  border-radius: .5rem;
  font-size: 1rem;

  @media ${mq.md} {
    font-size: 1rem;
  }
`
