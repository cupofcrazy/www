import cn from "classnames";
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
              aspectRatio={project.content.cover.metadata.dimensions.aspectRatio}
            />
          </ProjectImage>
          <ProjectInfo>
            <p>{project.content.title}</p>
            <p>{format(new Date(project.content.created_at), "MMM Y")}</p>
          </ProjectInfo>

        </a>
        {/* <input type="number" onChange={(e) => setInput(+e.target.value)} /> */}
        </StyledLink>
      </Container>
  );
};

const StyledLink = styled(Link)`
  /* display: block;
  transform: rotate(45deg); */

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
    /* font-size: 1rem; */
    /* width: 60%; */
    font-weight: 400;

    @media ${mq.md} {
      width: 60%;
    }
  }
`;

const ProjectImage = styled.div`
  overflow: hidden;
  margin-bottom: 1rem;
  /* border: 1px solid red; */
  transition: all 0.3s ease;
  position: relative;
  border-radius: .75rem;
  /* padding: 5%; */
`;
const Container = styled(motion.a)`
  width: 33.3%;
  /* background-color: var(--border-color); */
  /* padding: 1rem; */
  border-radius: 1rem;

  @media ${mq.md} {
    width: 30%;
  }
  
  /* &:nth-of-type(odd) {
    grid-row: auto / span 2;
    grid-column: auto / span 2;
  } */

  &.large {
    /* grid-row: auto / span 2;
    grid-column: auto / span 2; */
  }

  
  /* padding: 1rem; */
  /* margin-bottom: 1rem; */
  display: block;
  /* border-radius: 1rem; */
  /* transition: all .3s ease; */
  /* width: 100%;
  height: 100%; */

  &:hover,
  :focus {
    transform: scale(1);
    /* background-color: ${({ color }) => `${color}34`}; */
    /* transition: all .3s ease; */
    /* background: #111111ac; */
    ${ProjectImage} {
      /* border: 1px solid var(--secondary-color); */
      /* transition: all .3s ease; */
    }
    ${ProjectDetails} {
      opacity: 1;
      backdrop-filter: blur(32px) saturate(300%);
      transition: all 0.3s ease;
    }
  }
`;

const ProjectInfo = styled.div`
  /* border-radius: .75rem; */
  margin-top: 0.25rem;
  z-index: 100;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.85rem;
  color: var(--accent-color);
  /* margin: .5rem; */

  @media ${mq.md} {
    font-size: 1rem;
  }

  p {
  }
`;
