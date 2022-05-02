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
  console.log({ project });
  return (
    <Container
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn({ large: id % 3 == 0 && id % 6 == 0 })}
      data-grid={id}
      >
      <StyledLink href={`/projects/${project.content.slug.current}`} passHref>
        <a>
          <ProjectImage>
            <Image
              src={project.content.cover.url}
              alt={"Project Image"}
              aspectRatio={1}
            />
            <ProjectOverlay>
              <div>
                <ArrowIcon stroke="var(--accent-color)" />
              </div>
            </ProjectOverlay>
          </ProjectImage>
          <ProjectInfo>
            <p>{project.content.title}</p>
            <Badge>{format(new Date(project.content.created_at), "MMM Y")}</Badge>
          </ProjectInfo>

        </a>
        </StyledLink>
      </Container>
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
  
  div {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background-color: var(--main-color);
    display: flex;
    align-items: center;
    justify-content: center;
  }

`
const StyledLink = styled(Link)`
  &:hover {
    ${ProjectOverlay} {
      opacity: 1;
    }
  }
  @media ${mq.md} {
    grid-column: 1 / 6;
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
  font-size: 0.85rem;
  color: var(--accent-color);

  @media ${mq.md} {
    font-size: 1rem;
  }

  p {
  }
`;


