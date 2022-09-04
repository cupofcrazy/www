import type { GetServerSideProps, NextPage } from "next";
import styled from "styled-components";
import { useRef } from "react";
import { client, PortableText } from "lib/sanity";
import { useOnScreen } from "hooks";

import { PageHead } from "components/Seo";
import { Image } from "components/Image";
import { SiteLink } from "components/SiteLink";
import { CoverImage } from "components/Image/CoverImage";
import { Badge } from "components/Badge/Badge";

import { Styled as AppStyles } from 'styles'
import Styled from "styles/pages/project.styled";
import { type ProjectDoc } from "types";
import { Marquee } from "components/Marquee";
import { projectQuery } from "lib/queries";
import { ProjectCard } from "components/Project/ProjectCard";
import { mq } from "utils";
import { BadgeList } from "components/Badge/BadgeList";

type Props = {
  projects: {
    project: ProjectDoc
    previousProject: ProjectDoc | null
    nextProject: ProjectDoc | null
  }
};

const variants = {
  initial: {
    opacity: 0,
    y: 30
  },
  animate: {
    opacity: 1,
    y: 0
  }
}

const ProjectPage: NextPage<Props> = ({ projects }) => {
  const ref = useRef<HTMLDivElement>()
  const onScreen = useOnScreen<HTMLDivElement>(ref)
  const { project, previousProject, nextProject } = projects

  return (
    <>
      <PageHead
        title={project.title}
        description={project.subtitle}
        image={project.seo.image}
        keywords={project.seo.keywords}
      />
  
      <Content>
        <CoverImage>
          <Image
            src={project.cover.url}
            alt="Project Image"
            color={project.cover.metadata.palette.dominant.background}
            aspectRatio={1}
          />
        </CoverImage>
        <Styled.ProjectTitle>{project.title}</Styled.ProjectTitle>
        <Badge>
          {project.subtitle}
        </Badge>

        <AppStyles.Divider />
        <Styled.ProjectInfo>
          <Styled.Section initial="initial" animate="animate" variants={variants}>
            <Styled.FlexSectionTitle>Description</Styled.FlexSectionTitle>
            <Styled.SectionText>{project.description}</Styled.SectionText>
          </Styled.Section>

          <Styled.FlexSection>
            <Styled.FlexSectionTitle>Tags</Styled.FlexSectionTitle>
            <BadgeList badgeList={project.tags} />
          </Styled.FlexSection>


          <Styled.FlexSection>
            <Styled.FlexSectionTitle style={{ paddingTop: ".25rem" }}>
              See Online (URL)
            </Styled.FlexSectionTitle>
            <Styled.FlexSectionText>
              { project.url ? <SiteLink type="fancy" href={project.url}>
                Live Website
              </SiteLink> : <p>Not Live Yet</p> }
            </Styled.FlexSectionText>
          </Styled.FlexSection>
        </Styled.ProjectInfo>

        <AppStyles.Divider />
        <div className="modules" style={{ marginTop: "2rem" }}>
          <PortableText value={project.content} />
          <Marquee speed={.8}>{project.subtitle}</Marquee>
          <AppStyles.Divider />
        </div>
        {
          <OtherProjectsContainer style={{ justifyContent: !nextProject ? 'flex-start' : 'flex-end'}}>
            { previousProject && <ProjectCard title="Previous Project" project={previousProject}  /> }
            { nextProject && <ProjectCard title="Next Project" project={nextProject} /> }
          </OtherProjectsContainer>
        }
      </Content>
    </>
  );
};

export default ProjectPage;

const OtherProjectsContainer = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;

  @media ${mq.md} {
    flex-direction: row;
  }
  
`

export const getServerSideProps: GetServerSideProps = async (context) => {
  const projects = await client.fetch(projectQuery, {
    slug: context.params?.slug
  })
  if (!projects) {
    return {
      notFound: true
    }
  }
  return {
    props: {
      projects,
    },
  };
};

const Content = styled.div``;


const ProjectHeader = styled.div``
const ProjectLink = styled.div`
  position: fixed;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 300;
  opacity: 0;
  transform: translateY(30px);
  transition: all .3s ease-in-out;

  &.active {
    opacity: 1;
    transform: translateY(0px);
    transition: all .3s ease-in-out;
  }
`