import { GetStaticProps } from "next";
import { groq } from "next-sanity";
import { Image } from "../components/Image";
import styled from "styled-components";
import { CoverImage } from "../components/Image/CoverImage";
import { PageHead } from "../components/Seo";
import { client } from "../lib/sanity";
import { Styled } from "../styles";

const Art = ({ art }: { art: any }) => {
  return (
    <>
      <PageHead
        title={art.seo.title}
        description={art.seo.description}
      />
      <Content>
        <CoverImage>
          <Image src={art.seo.image.url} color={art.seo.image.metadata.palette.vibrant.background} alt={"Hello"} />
        </CoverImage>

        <Styled.Section>
          <Styled.SectionHeading>{art.seo.title}</Styled.SectionHeading>
          <Styled.SectionText>{art.seo.description}</Styled.SectionText>
        </Styled.Section>

        <Styled.Divider />

        <ImageContainer>
          {art.modules.map((module: any) => (
            <ImageRow key={module._key}>
              <Image
                src={module.image.url}
                aspectRatio={module.image.metadata.dimensions.aspectRatio}
                color={module.image.metadata.palette.vibrant.background}
                alt="Image"
              />
            </ImageRow>
          ))}
        </ImageContainer>
      </Content>
    </>
  );
};

export default Art;

export const getStaticProps: GetStaticProps = async () => {
  const query = groq`*[_type == 'art'][0] { 
    ...,
    seo {
      ...,
      "image": seoImage.asset->,
    },
    "modules": modules[] {
      _key,
      "image": image.asset->,
      _type,
      position,
      "caption": caption,
    }
   }`;

   const p = await client.fetch(groq`*[_type == 'project' && slug.current == 'spotify-state'][0]{
     'project': {
       ...
     },
     'previousPost': *[_type == 'project' && created_at < ^.created_at][0]
   }`)

  const art = await client.fetch(query);

  return {
    props: {
      art,
    },
  };
};

const Content = styled.div``;

const ImageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-radius: 0.5rem;
  gap: 1rem;
`;

const ImageRow = styled.div`
  border-radius: 0.5rem;
  overflow: hidden;
`;
