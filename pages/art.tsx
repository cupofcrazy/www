import { GetStaticProps } from "next";
import { groq } from "next-sanity";
import { Image } from "../components/Image";
import styled from "styled-components";
import { CoverImage } from "../components/Image/CoverImage";
import { PageHead } from "../components/Seo";
import { client } from "../lib/sanity";
import { Styled } from "../styles";

const Art = ({ art }: { art: any }) => {
  console.log({ art });
  return (
    <>
      <PageHead
        title={art.content.seo.title}
        description={art.content.seo.description}
      />
      <Content>
        <CoverImage>
          <Image src={art.content.seo.image.url} color={art.content.seo.image.metadata.palette.vibrant.background} alt={"Hello"} />
        </CoverImage>

        <Styled.Section>
          <Styled.SectionHeading>{art.content.seo.title}</Styled.SectionHeading>
          <Styled.SectionText>{art.content.seo.description}</Styled.SectionText>
        </Styled.Section>

        <Styled.Divider />

        <ImageContainer>
          {art.content.modules.map((module: any) => (
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
    content {
      ...,
      seo {
        ...,
        "image": image.asset->,
      },
      "modules": modules[] {
        _key,
        "image": image.asset->,
        _type,
        position,
        "caption": caption,
      }
    }
   }`;

   const p = await client.fetch(groq`*[_type == 'project' && content.slug.current == 'spotify-state'][0]{
     'project': {
       ...
     },
     'previousPost': *[_type == 'project' && content.created_at < ^.content.created_at][0]
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
  gap: 1rem;
`;

const ImageRow = styled.div`
  border-radius: 0.5rem;
  overflow: hidden;
`;
