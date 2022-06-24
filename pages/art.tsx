import { GetStaticProps } from "next";
import { groq } from "next-sanity";
import { Image } from "components/Image";
import styled from "styled-components";
import { CoverImage } from "components/Image/CoverImage";
import { PageHead } from "components/Seo";
import { client } from "lib/sanity";
import { Styled } from "styles";
import { artPageQuery } from "lib/queries";
import { ImageWithCaption } from "components/Modules";



const Art = ({ art }: { art: any }) => {
  return (
    <>
      <PageHead
        title={art.seo.title}
        description={art.seo.description}
        image={art.seo.image}
        keywords={art.seo.keywords}
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
              <ImageWithCaption
                src={module.image.url}
                aspectRatio={module.image.metadata.dimensions.aspectRatio}
                color={module.image.metadata.palette.vibrant.background}
                alt={module.image.caption}
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
  const art = await client.fetch(artPageQuery);

  return {
    props: {
      art,
    },
  };
};

const Content = styled.div``;

const ImageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  border-radius: 0.5rem;
  gap: 1.5rem;
`;

const ImageRow = styled.div`
  border-radius: 0.5rem;
  overflow: hidden;
`;
