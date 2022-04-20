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
  width: 200px;
  border-radius: .75rem;
  overflow: hidden;

  @media ${mq.md} {
    width: 320px;
  }
`