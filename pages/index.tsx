import type { GetServerSideProps, NextPage } from "next";
import { useEffect } from "react";
import styled from "styled-components";
import { groq } from "next-sanity";

import { client } from "../lib/sanity";
import { homeQuery, projectsQuery } from "../lib/queries";
import { useWindowResize } from "../hooks";

import { Image } from "../components/Image";
import { PageHead } from "../components/Seo";
import ProjectContainer from "../components/Project/ProjectContainer";
import { Badge } from "../components/Badge/Badge";
import { CoverImage } from "../components/Image/CoverImage";

import { colors, formatNumber, mq } from "../utils";
import type { HomeDoc, ProjectDoc } from "../types";
import { Marquee } from "../components/Marquee";


type Props = {
  home: HomeDoc;
  projects: ProjectDoc[];
};

// Home badge color
const badgeColor = colors.find(color => color.name === 'green')

const Home: NextPage<Props> = ({ home, projects }) => {
  const { width, height } = useWindowResize();

  useEffect(() => {
    // document.documentElement.style.setProperty("--vh", `${height}px`);
  }, [height]);

  return (
    <Container>
      <PageHead
        title={home.seo.title}
        description={home.seo.description}
      />
      <CoverImage>
        <Image
          src={home.seo.image.url}
          alt="Home Image"
          aspectRatio={1}
          color={home.seo.image.metadata.palette.vibrant.background}
        />
      </CoverImage>

      <BioSection>
        <BioSectionText>{home.bio}</BioSectionText>

        <Badge textColor="var(--black)" bgColor={badgeColor!.background}>{home.status}</Badge>
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
      <Marquee>{home.seo.title}</Marquee>
    </Container>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {

  const home = await client.fetch(homeQuery);
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
  color: var(--secondary-color);
  margin-bottom: 1rem;
  font-size: 2.25rem;
  width: 100%;
  font-weight: 500;
  background: #000000;
  background: linear-gradient(to top, var(--border-color) 0%, var(--accent-color) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  /* font-family: 'Apple Garamond'; */

  @media ${mq.md} {
    width: 50%;
    font-size: 2rem;
  }
  @media ${mq.lg} {
    width: 65%;
    font-size: 2.625rem;
  }
`;
const Container = styled.div`
  padding: 0;
  height: var(--vh);
`;
