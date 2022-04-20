import styled from "styled-components"
import { motion } from 'framer-motion'
import { mq } from "../../utils"
import { ProjectItem } from "./"
import { type ProjectDoc } from "../../types"

type Props = {
  projects: ProjectDoc[]
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
    <Container 
      variants={container}
      initial="hidden"
      animate="show">
      { projects.map(project => (
        <ProjectItem key={project._id} project={project} />
      ))}
    </Container>
  )
}

export default ProjectContainer


const Container = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin: 1rem 0;
  
  @media ${mq.md} {
    /* grid-template-columns: repeat(12, 1fr); */
  }
  @media ${mq.lg} {
    grid-template-columns: repeat(3, 1fr);
  }
`