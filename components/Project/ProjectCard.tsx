import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import { mq } from 'utils'
import { ProjectDoc } from '../../types'
import { Image } from '../Image'


interface Props {
  title: string
  project: ProjectDoc
}


export const ProjectCard: React.FC<Props> = ({ title, project, ...props }) => {
  return (
    <Link href={`/projects/${project.content.slug.current}`} passHref>
      <Content {...props}>
        <ProjectImage>
          <Image src={project.content.cover.url} alt="Project Image" aspectRatio={1} className="image" />
        </ProjectImage>
        <ProjectInfo>
          <span>{title}</span>
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
  align-items: flex-start;
  gap: 1rem;
  background-color: var(--main-color);
  padding: .5rem;
  flex-basis: 0 0 auto;
  border-radius: 1rem;
  /* border: 1px solid var(--border-color); */
  transition: all .5s ease;
  transform: scale(1);

  .image {
    transition: all 1s ease;

  }

  @media ${mq.md} {
    width: 50%;
  }

  &:hover, :focus {
    transform: scale(1.01);
    transition: all .3s ease;
    box-shadow: 0px 2px 4 px rgba(0, 0, 0, .15);
    background-color: var(--border-color);
    
    .image {
      transform: scale(1.25);
      transition: all .5s ease;

    }
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

  span {
    display: block;
    margin-bottom: .5rem;
    text-transform: uppercase;
    font-size: .8rem;
    font-weight: 700;
    color: var(--secondary-color);
  }

  h3 {
    font-weight: 500;
    margin-bottom: .25rem;
  }
  p {
    color: var(--secondary-color);
  }
`
