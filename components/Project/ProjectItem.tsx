import cn from "classnames";
import { ArrowIcon } from "components/ArrowIcon";
import format from "date-fns/format";
import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import styled from "styled-components";
import { type ProjectDoc } from "../../types";
import { mq } from "../../utils";
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
        <ProjectImage>
          <ProjectOverlay>
            <div className="arrow">
              <ArrowIcon stroke="var(--black)" size={16} />
            </div>
          </ProjectOverlay>
          <Image
            src={project.cover.url}
            alt={"Project Image"}
            aspectRatio={0.8}
            className="image"
          />
        </ProjectImage>
        <ProjectInfo>
          <p>{project.title}</p>
          <Badge>{format(new Date(project.publishedAt), "MMM Y")}</Badge>
        </ProjectInfo>

      </StyledLink>
    </Link>
  );
};

const ProjectOverlay = styled.div`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, .5);
  width: 100%;
  height: 100%;
  display: flex;
  align-items:  center;
  justify-content: center;
  z-index: 2;
  transition: all .3s ease;
  
  div {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    background-color: var(--white);
    display: flex;
    align-items: center;
    justify-content: center;
  }

`
const StyledLink = styled.a`
  position: relative;
  overflow: hidden;
  /* transform: scale(1); */

  .arrow {
    transform: scale(0) translateY(2rem);
    transition: all .3s ease;
  }

  .image {
    transition: all 1s ease;
  }
  
  
  &:hover, :focus  {
    ${ProjectOverlay} {
      opacity: 1;
    }
    .arrow {
      transform: scale(1) translateY(0rem);
      transition: all .5s ease;
    }
    
    .image {
      transform: scale(1.25);
      transition: all 1s ease;
    }
  }
  @media ${mq.md} {
  }
`;


const ProjectDetails = styled.div`
  background-color: var(--background-color);
  
  z-index: 2;
  padding: 1rem;
  opacity: 0;
  transition: all 0.3s ease;
  color: var(--accent-color);
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  p {
    font-weight: 400;

    @media ${mq.md} {
      width: 60%;
    }
  }
`;

const ProjectImage = styled.div`
  overflow: hidden;
  margin-bottom: 1rem;
  transition: all 0.3s ease;
  position: relative;
  border-radius: .75rem;
`;
const Container = styled(motion.div)`
  border-radius: 1rem;

  @media ${mq.md} {
  }

  &.large {
  }
  display: block;

  &:hover,
  :focus {
    transform: scale(1);
    ${ProjectImage} {
      
    }
    ${ProjectDetails} {
      opacity: 1;
      backdrop-filter: blur(32px) saturate(300%);
      transition: all 0.3s ease;
    }
  }
`;

const ProjectInfo = styled.div`
  margin-top: 0.25rem;
  z-index: 100;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;
  color: var(--accent-color);
  

  p {
    color: var(--accent-color);
  }
`;


