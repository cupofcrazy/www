import styled from 'styled-components'
import { mq, sizes } from '../../utils'

export const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <Container>
      <Content>
        <p>✺ Building Interfaces.</p>
        <p>© {year}</p>
      </Content>
    </Container>
  )
}

const Container = styled.footer`
  padding: 1.5rem 1rem;
  border-top: 1px solid var(--border-color);

  p {
    color: var(--accent-color);
  }
`
const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 0 auto;
  /* padding: 0 1rem; */

  @media ${mq.md} {
    width: ${sizes.md};
  }
  @media ${mq.xl2} {
    width: ${sizes.lg};
  }
`
