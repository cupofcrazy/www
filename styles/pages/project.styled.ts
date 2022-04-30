import styled from "styled-components";
import { motion } from 'framer-motion'
import { StyledBadge } from "../../components/Badge/Badge";
import { mq } from "../../utils";


const ProjectTitle = styled.p`
  margin: 1rem 0;
  font-size: 2.5rem;
  color: var(--accent-color);

`
const ProjectSubtitle = styled(StyledBadge)`
  margin-top: .25rem;
  display: inline-block;
  /* font-family: 'Newsreader', serif;
  font-style: italic; */
  color: var(--secondary-color);
  font-size: 1rem;
`
const ProjectInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  
  @media ${mq.lg} {
    grid-template-columns: 1fr 1fr;
  }
`

const Section = styled(motion.section)`
  margin: 0rem 0 1rem 0;
`
const SectionHeading = styled.h2`
  color: var(--accent-color);
  font-weight: 400;
  font-size: 1.25rem;
  margin-bottom: .5rem;
  /* font-family: 'Newsreader', serif;
  font-style: italic; */
`
const SectionText = styled.p`
  /* text-indent: 1rem; */
  color: var(--secondary-color);
  font-weight: 400;
  font-size: 1rem;
  position: relative;

  /* &:before {
    content: '-';
    position: absolute;
    top: 0;
    left: -1rem;
  } */
  /* width: 60%; */
`


const ProjectImage = styled.div`

`


const FlexSection = styled.div`
  /* display: flex; */
  flex: 1 2;
  gap: 1rem;
  margin: 0 0 0 0;
`

const FlexSectionTitle = styled.h2`
  color: var(--accent-color);
  font-weight: 400;
  font-size: 1rem;
  margin-bottom: .5rem;
  /* margin-right: 2rem; */
`
const FlexSectionText = styled.p`
  color: var(--secondary-color);
  font-weight: 400;
  font-size: 1rem;
  display: block;
`
export const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: .75rem;
`

const Styled = {
  ProjectTitle,
  ProjectSubtitle,
  ProjectImage,
  ProjectInfo,
  Section,
  SectionHeading,
  SectionText,
  FlexSection,
  FlexSectionTitle,
  FlexSectionText,
  TagList
}
export default Styled