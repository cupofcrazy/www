import styled from 'styled-components'
import { mq } from '../utils'


const Section = styled.section`
  margin: 1rem 0 0 0;
`
const SectionHeading = styled.h2`
  color: var(--accent-color);
  font-weight: 400;
  font-size: 1.25rem;
  margin-bottom: .5rem;
  font-family: 'Newsreader', serif;
  font-style: italic;
`
const SectionText = styled.p`
  color: var(--secondary-color);
  font-weight: 400;
  font-size: 1rem;
  /* width: 60%; */
`

const SectionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1rem 1rem;
  margin-top: 1rem;

  @media ${mq.md} {
    grid-template-columns: repeat(2, 1fr);
  }
`
const Divider = styled.div`
  margin: 2rem 0 1rem 0;
  border-bottom: 1px solid var(--border-color);
`

const SectionList = styled.ul`

`

export const Styled = {
  Section,
  SectionHeading,
  SectionText,
  SectionGrid,
  SectionList,
  Divider
}