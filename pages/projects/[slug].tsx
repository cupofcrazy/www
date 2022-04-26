import type { GetServerSideProps, NextPage } from "next";
import styled from "styled-components";
import { useRef } from "react";

import cn from "classnames";
import { client } from "../../lib/sanity";
import { useOnScreen } from "../../hooks";

import { PageHead } from "../../components/Seo";
import { Image } from "../../components/Image";
import { SiteLink } from "../../components/SiteLink";
import { ModuleImage, DoubleImageModule } from "../../components/Modules";
import { TextSectionModule } from "../../components/Modules";
import { CoverImage } from "../../components/Image/CoverImage";
import { Badge } from "../../components/Badge/Badge";

import { Styled as AppStyles } from '../../styles'
import Styled from "../../styles/pages/project.styled";
import { type ProjectDoc } from "../../types";
import { Marquee } from "../../components/Marquee";
import { projectQuery } from "../../lib/queries";
import ProjectContainer from "../../components/Project/ProjectContainer";
import { ProjectCard } from "../../components/Project/ProjectCard";

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
  console.log(project.content.title)

  
  return (
    <>
      <PageHead
        title={project.content.title}
        description={project.content.subtitle}
      />
  
      <Content>
        <CoverImage>
          <Image
            src={project.content.cover.url}
            alt="Project Image"
            color={project.content.cover.metadata.palette.dominant.background}
            aspectRatio={1}
          />
        </CoverImage>
        <Styled.ProjectTitle>{project.content.title}</Styled.ProjectTitle>
        <Styled.ProjectSubtitle>
          {project.content.subtitle}
        </Styled.ProjectSubtitle>

        <AppStyles.Divider />
        <Styled.ProjectInfo>
          <Styled.Section initial="initial" animate="animate" variants={variants}>
            <Styled.SectionHeading>Description</Styled.SectionHeading>
            <Styled.SectionText>{project.content.description}</Styled.SectionText>
          </Styled.Section>

          <Styled.FlexSection>
            <Styled.FlexSectionTitle>Tags</Styled.FlexSectionTitle>
            <Styled.TagList>
              {project.content.tags?.map((tag: any) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </Styled.TagList>
          </Styled.FlexSection>


          <Styled.FlexSection>
            <Styled.FlexSectionTitle style={{ paddingTop: ".25rem" }}>
              See Online (URL)
            </Styled.FlexSectionTitle>
            <Styled.FlexSectionText>
              <SiteLink href={project.content.url}>
                {project.content.url}
              </SiteLink>
            </Styled.FlexSectionText>
          </Styled.FlexSection>
        </Styled.ProjectInfo>

        <AppStyles.Divider />

        <div className="modules" style={{ marginTop: "2rem" }}>
          {project.content.modules.map((module: any) => {
            switch (module._type) {
              case "alignedImage":
                return (
                  <ModuleImage>
                    <Image
                      src={module.image.url}
                      aspectRatio={module.image.metadata.dimensions.aspectRatio}
                      color={module.image.metadata.palette.vibrant.background}
                      alt="Image"
                    />
                  </ModuleImage>
                );
              case "textModule":
                return (
                  <TextSectionModule title={module.title} body={module.body} />
                );
              case "doubleImage":
                return (
                  <DoubleImageModule module={module} />
                );
            }
          })}
          <Marquee speed={.8}>{project.content.subtitle}</Marquee>
        </div>
        {
          previousProject && nextProject && <div style={{ display: 'flex', gap: '1rem', width: '100%' }}>
            <ProjectCard project={previousProject} />
            <ProjectCard project={nextProject} />
          </div>
        }
      </Content>
    </>
  );
};

export default ProjectPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const projects = await client.fetch(projectQuery, {
    slug: context.params?.slug
  })
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