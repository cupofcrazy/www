import type { GetServerSideProps, NextPage } from "next";
import { useEffect } from "react";
import styled from "styled-components";
import { groq } from "next-sanity";

import { client } from "../lib/sanity";
import { projectsQuery } from "../lib/queries";
import { useWindowResize } from "../hooks";

import { Image } from "../components/Image";
import { PageHead } from "../components/Seo";
import ProjectContainer from "../components/Project/ProjectContainer";
import { Badge } from "../components/Badge/Badge";
import { CoverImage } from "../components/Image/CoverImage";

import { colors, formatNumber, mq } from "../utils";
import type { HomeDoc, ProjectDoc } from "../types";
import { Marquee } from "components/Marquee";

type Props = {
  home: HomeDoc;
  projects: ProjectDoc[];
};

const Home: NextPage<Props> = ({ home, projects }) => {
  const { width, height } = useWindowResize();

  useEffect(() => {
    // document.documentElement.style.setProperty("--vh", `${height}px`);
  }, [height]);

  return (
    <Container>
      <PageHead
        title={home.content.seo.title}
        description={home.content.seo.description}
      />
      <CoverImage>
        <Image
          src={home.content.seo.image.url}
          alt="Home Image"
          aspectRatio={1}
          color={home.content.seo.image.metadata.palette.vibrant.background}
        />
      </CoverImage>

      <BioSection>
        <BioSectionText>{home.content.bio}</BioSectionText>

        <Badge color={colors[1].background}>{home.content.status}</Badge>
      </BioSection>
      <Section>
        <SectionTitle>
          <h2>Projects</h2>
          <p>
            <span>{formatNumber(projects.length)}</span>
          </p>
        </SectionTitle>
        <ProjectContainer projects={projects} />
      </Section>
      <Marquee>{home.content.seo.title}</Marquee>
    </Container>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const query = groq`*[_type == 'home'][0] { 
    ...,
    content {
      ...,
      seo {
        ...,
        "image": image.asset->
      }
    }
   }`;

  const home = await client.fetch(query);
  const projects = await client.fetch(projectsQuery);

  return {
    props: {
      home,
      projects,
    },
  };
};

const Section = styled.section`
  margin-top: 2.5rem;
`;

const SectionTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  h2 {
    font-family: "Newsreader", serif;
    font-size: 1.75rem;
    color: var(--accent-color);
    font-style: italic;
    font-weight: 500;
  }

  p {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    background-color: var(--border-color);
    border-radius: 50%;
    font-size: 0.85rem;

    color: var(--accent-color);
    background-color: var(--border-color);
  }
`;

const BioSection = styled.div`
  margin: 1rem 0;
`;
const BioSectionText = styled.p`
  color: var(--accent-color);
  margin-bottom: 1rem;
  font-size: 1.25rem;
  width: 80%;

  @media ${mq.md} {
    width: 50%;
    font-size: 1.5rem;
  }
`;
const Container = styled.div`
  padding: 0;
  height: var(--vh);
`;
