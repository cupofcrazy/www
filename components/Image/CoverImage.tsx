import styled from 'styled-components'
import { mq } from '../../utils'


type Props = {
  children: React.ReactNode
}
export const CoverImage = ({ children }: Props) => {
  return (
    <Container>
      {children}
    </Container>
  )
}


const Container = styled.div`
  width: 240px;
  border-radius: 1.25rem;
  overflow: hidden;

  @media ${mq.sm} {
    border-radius: 1rem;
    width: 320px;
  }
  @media ${mq.xl2} {
    border-radius: 1rem;
    width: 480px;
  }
`