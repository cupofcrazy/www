import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import { mq } from 'utils'
import { ProjectDoc } from '../../types'
import { Image } from '../Image'


interface Props {
  project: ProjectDoc
}


export const ProjectCard = ({ project }: Props) => {
  return (
    <Link href={`/projects/${project.content.slug.current}`} passHref>
      <Content>
        <ProjectImage>
          <Image src={project.content.cover.url} alt="Project Image" aspectRatio={1} />
        </ProjectImage>
        <ProjectInfo>
          <h3>{project.content.title}</h3>
          <p>{project.content.subtitle}</p>
        </ProjectInfo>
      </Content>
    </Link>
  )
}

const Content = styled.a`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
  background-color: var(--border-color);
  padding: .5rem;
  flex-basis: 0 0 auto;
  border-radius: 1rem;
  border: 1px solid transparent;
  transition: all .5s ease;
  transform: scale(1) translateY(0px);

  @media ${mq.md} {
    width: 50%;
  }

  &:hover, :focus {
    border: 1px solid var(--secondary-color);
    transform: scale(1) translateY(-4px);
    transition: all .3s ease;
    box-shadow: 0px 2px 4 px rgba(0, 0, 0, .15);
  }
`


const ProjectImage = styled.div`
  width: 30%;
  overflow: hidden;
  border-radius: .5rem;
  `
const ProjectInfo = styled.div`
  color: var(--accent-color);
  width: 70%;

  h3 {
    font-weight: 500;
  }
`
