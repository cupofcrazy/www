import cn from "classnames";
import { ArrowIcon } from "components/ArrowIcon";
import { BadgeList } from "components/Badge";
import format from "date-fns/format";
import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import styled from "styled-components";
import { type ProjectDoc } from "../../types";
import { ease, mq } from "../../utils";
import { Badge } from "../Badge/Badge";
import { Image } from "../Image";


interface Props {
  project: ProjectDoc;
  id: number
}

const variants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {},
  },
};

export const ProjectItem: React.FC<Props> = ({ project, id }) => {
  return (
    <Link href={`/projects/${project.slug.current}`} passHref>
      <StyledLink>
        <ProjectImageContainer>
        <Image src={project.cover.url} alt={project.title} />

        </ProjectImageContainer>
        <ProjectDetails>
          <ProjectInfo>
            <h3>{project.title}</h3>
            <p>{project.subtitle}</p>
        {/* <BadgeList badgeList={project.tags} /> */}
          </ProjectInfo>
          <Badge>{format(new Date(project.publishedAt), "MMM Y")}</Badge>
        </ProjectDetails>
      </StyledLink>
    </Link>
  );
};
const StyledLink = styled.a`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  transition: all .3s ease;
  border: 1px solid transparent;
  border-radius: 1rem;
  padding: .5rem .5rem .5rem 0;
  /* border: 1px solid var(--border-color);
  background-color: var(--border-color); */
  
  &:hover {
    /* border: 1px solid var(--border-color); */
    padding: .5rem .5rem .5rem .5rem;
    background-color: var(--border-color);
    transition: all .3s ease;
  }
`;

const ProjectImageContainer = styled.div`
  position: relative;
  width: 100%;
  border-radius: .5rem;
  overflow: hidden;
  width: 20%;

  @media ${mq.sm} {
    width: 15%;
  }
`
const ProjectDetails = styled.div`
  width: 80%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  @media ${mq.sm} {
    width: 85%;
  }

  p {
    
  }
`
const ProjectInfo = styled.div`
  width: 70%;
  h3 {
    font-family: var(--font-family-heading);
    font-size: 1.5rem;
    font-style: italic;
    font-weight: 500;
  }
  p {
    width: 80%;
    color: var(--secondary-color);
    font-size: 1rem;
  }
`




