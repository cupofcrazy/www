import styled from "styled-components"
import { ArrowIcon } from './ArrowIcon';


type Props = {
  children: React.ReactNode
  href: string
} & React.HTMLProps<HTMLAnchorElement>

export const SiteLink = (props: Props) => {
  return (
    <StyledLink target="_blank" rel="noopener noreferrer" href={props.href}>
      <Text>{ props.children }</Text>
      <ArrowIcon stroke="var(--secondary-color)" size={14} />
    </StyledLink>
  )
}

const StyledLink = styled.a`
  display: flex;
  width: fit-content;
  padding: .25rem .5rem .25rem 0;
  border-radius: .5rem;
  align-items: center;
  gap: .25rem;
  transition: all .3s ease;
  
  &:hover, :focus {
    background-color: var(--border-color);
    padding-left: .5rem;
    transition: all .3s ease;
  }
  &.active {
    opacity: 1;
    transition: all .3s ease;
  }
`

const Text = styled.span`
  /* color: var(--accent-color); */
  color: var(--secondary-color);
`