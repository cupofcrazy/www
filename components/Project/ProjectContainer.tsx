import styled from "styled-components"
import { motion } from 'framer-motion'
import { mq } from "../../utils"
import { ProjectItem } from "./"
import { type ProjectDoc } from "../../types"
import classNames from "classnames"

type Props = {
  projects: ProjectDoc[],
}


const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      // delayChildren: 0.3,
      // staggerChildren: 0.05,
      // when: 'beforeChildren'
    }
  }
}

function ProjectContainer({ projects }: Props)  {
  return (
    <Container>
      { projects.map((project, index) => (
        <ProjectItem key={project._id} project={project} id={index} />
      ))}
    </Container>
  )
}

export default ProjectContainer


const Container = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 0rem;
  margin: 1rem 0;
  
  @media ${mq.sm} {
    grid-template-columns: repeat(1, 1fr);
  }
  @media ${mq.md} {
    grid-template-columns: repeat(1, 1fr);
  }
  @media ${mq.lg} {
    grid-template-columns: repeat(1, 1fr);
  }
  @media ${mq.xl2} {
    grid-template-columns: repeat(1, 1fr);
  }
`