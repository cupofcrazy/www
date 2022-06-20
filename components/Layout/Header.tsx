import styled from "styled-components";
import { mq, sizes } from "../../utils";
import { ThemeIcon } from "../ThemeIcon"
import { NavLink } from "../NavLink";


const navItems = [
  { href: '/', name: 'Index' },
  { href: '/art', name: 'Art' },
  { href: '/information', name: 'Information' },
]

const toggleTheme = () => {
  if (document.body.classList.contains('dark')) {
    document.body.classList.remove('dark')
    return
  }
  document.body.classList.add('dark')
}

export const Header = () => {
  return (
    <Container>
      <Content>
        <ul>
          {navItems.map(item => (
            <li key={item.href}><NavLink href={item.href}>{item.name}</NavLink></li>
          ))}
        </ul>
      <ThemeButton aria-label="Change Theme" onClick={toggleTheme}>
        <ThemeIcon stroke="var(--secondary-color)" />
      </ThemeButton>
      </Content>
    </Container>
  )
};


const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 0 auto;

  @media ${mq.md} {
    width: ${sizes.md};
  }
  @media ${mq.xl2} {
    width: ${sizes.xl};
  }
`

const Container = styled.header`
  padding: .75rem 1rem;
  border-bottom: 1px solid var(--border-color);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: var(--blur-background);
  z-index: 100;
  backdrop-filter: blur(32px) saturate(500%);

  ul {
    display: flex;
    align-items: center;
    gap: 1rem;
    
    li {
      margin-top: .15rem;
    }
  }
`

const ThemeButton = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: .5rem;
  
  &:hover, :focus {
    background-color: var(--border-color);
  }
`
