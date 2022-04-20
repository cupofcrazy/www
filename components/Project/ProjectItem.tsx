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

export const ProjectItem: React.FC<Props> = ({ project }) => {
  console.log({ project });
  return (
    <StyledLink href={`/projects/${project.content.slug.current}`} passHref>
      <Container
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <ProjectImage>
          <ProjectDetails color={"var(--blur-background)"}>
            <p>{project.content.subtitle}</p>
          </ProjectDetails>
          <Image
            src={project.content.cover.url}
            alt={"Project Image"}
            aspectRatio={1}
            color={project.content.cover.metadata.palette.vibrant.background}
          />
        </ProjectImage>
        <ProjectInfo>
          <p>{project.content.title}</p>
          <Badge>{format(new Date(project.content.created_at), "MMM Y")}</Badge>
        </ProjectInfo>
        {/* <input type="number" onChange={(e) => setInput(+e.target.value)} /> */}
      </Container>
    </StyledLink>
  );
};

const StyledLink = styled(Link)`
  display: block;
  transform: rotate(45deg);
  @media ${mq.md} {
    grid-column: 1 / 6;
  }
`;

const ProjectDetails = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
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
  border: 1px solid transparent;
  border-radius: 0.75rem;
  transition: all 0.3s ease;
  position: relative;
`;
const Container = styled(motion.a)`
  /* padding: 1rem; */
  /* margin-bottom: 1rem; */
  display: block;
  border-radius: 0.5rem;
  /* transition: all .3s ease; */
  width: 100%;
  height: 100%;

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
  background: var(--blur-background);
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
