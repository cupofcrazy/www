import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import cn from 'classnames'
import { ease } from '../../utils';


type Props = {
  href: string
}

export const NavLink: React.FC<Props> = ({ href, children }) => {
  const router = useRouter()
  return (
    <Link href={href} passHref scroll={false}>
      <StyledLink className={cn({ active: router.asPath === href})}>
        <StyledPulse />
        <span className="container">
          <span className="hover">{children}</span>
          <span className="text">{children}</span>
      </span>
      </StyledLink>
    </Link>
  )
};

const StyledPulse = styled.span`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--pulse-color);
  z-index: -1;
  transform: scale(0);
  border-radius: 15rem;
  transition: all .3s ease;
  transform-origin: center center;
  width: 0%;
`
const StyledLink = styled.a`
  color: var(--secondary-color);
  transition: all .3s ease;
  display: inline-block;
  position: relative;
  overflow: hidden;
  padding: .25rem .5rem;
  border-radius: .5rem;

  &:hover {
    background-color: var(--border-color);
    transition: all .3s ease;

    ${StyledPulse} {
      transform: scale(1);
      transition: all .3s ease;
      border-radius: 0;
      width: 100%;
    }
  }

  &.active {
    background-color: var(--border-color);
    color: var(--accent-color);
    transition: all .3s ${ease.easeInOutExpo};

    .text {
      transform: translateY(-100%);
      transition: all .5s ease;
    }
    .hover {
      transform: translateY(0%);
      transition: all .5s ease;
    }
  }

  .container {
    display: block;
    position: relative;
    overflow: hidden !important;
    /* padding-right: 1rem; */
  }
  .text {
    display: block;
    transform: translateY(0%);
    transition: all .5s ease;
  }
  .hover {
    position: absolute;
    font-size: 1.1rem;
    top: 0;
    left: 0;
    font-family: 'Newsreader', serif;
    font-style: italic;
    transform: translateY(100%);
    transition: all .5s ease;
    color: var(--accent-color);
    
    
    
  }
`