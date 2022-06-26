import styled from "styled-components"
import { ArrowIcon } from './ArrowIcon';


type Props = {
  type?: 'normal' | 'fancy'
  children: React.ReactNode
  href: string
} & React.HTMLProps<HTMLAnchorElement>

export const SiteLink = ({ type="normal", children, href }: Props) => {
  return (
    <StyledLink target="_blank" rel="noopener noreferrer" href={href} className={type}>
      <Text>{ children }</Text>
      <ArrowIcon stroke="var(--secondary-color)" size={14} />
    </StyledLink>
  )
}

const StyledLink = styled.a`
  display: inline-flex;
  /* width: fit-content; */
  padding: .1rem .45rem .1rem .45rem;
  border-radius: .5rem;
  align-items: center;
  gap: .25rem;
  transition: all .3s ease;

  svg {
    transition: all .5s ease;
  }

  &.fancy {
    padding: .25rem .5rem .25rem 0rem;
  }
  
  &:hover, :focus {
    background-color: var(--border-color);
    /* padding: .25rem .5rem .25rem .5rem; */
    transition: all .3s ease;

    svg {
      transform: rotate(-45deg);
      transition: all .5s ease;
    }

    &.fancy {
      padding: .25rem .5rem .25rem .5rem;
    }
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