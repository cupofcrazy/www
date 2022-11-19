import React from "react";
import { Image } from "../components/Image";
import { NextPage, GetServerSideProps } from "next";
import { client } from "../lib/sanity";
import styled from "styled-components";
import { PageHead } from "../components/Seo";
import { Styled } from "../styles";
import { SiteLink } from "../components/SiteLink";
import { CoverImage } from "../components/Image/CoverImage";
import { BadgeList } from "../components/Badge";
import { informationQuery } from "lib/queries";
import { Marquee } from "components/Marquee";

type Props = {
  info: any;
};
const Info: NextPage<Props> = ({ info }) => {
  return (
    <Content>
      <PageHead
        title={info.seo.title}
        description={info.seo.description}
        image={info.seo.image}
        keywords={info.seo.keywords}
      />
      {/* <p>Information</p> */}
      <CoverImage>
        <Image
          src={info.mainImage.image.url}
          color={info.seo.image.metadata.palette.vibrant.background}
          alt={info.mainImage.alt}
          aspectRatio={1}
        />
      </CoverImage>
      <Styled.SectionGrid>
        <Styled.Section>
          <Styled.SectionHeading>About</Styled.SectionHeading>
          <Styled.SectionText>{info.short_bio}</Styled.SectionText>
        </Styled.Section>
        <Styled.Section>
          <Styled.SectionHeading>Capabilities</Styled.SectionHeading>
          <BadgeList badgeList={info.capabilities} />
        </Styled.Section>
        <Styled.Section>
          <Styled.SectionHeading>Technologies</Styled.SectionHeading>
          <BadgeList badgeList={info.tools} />
        </Styled.Section>
      </Styled.SectionGrid>
      <Divider />
      <Styled.SectionGrid>
        <Styled.Section>
          <Styled.SectionHeading>Contact</Styled.SectionHeading>
          <Styled.SectionList>
            {info.contacts.map((contact: any) => (
              <li key={contact.label}>
                <SiteLink type="fancy" href={contact.href}>
                  {contact.label}
                </SiteLink>
              </li>
            ))}
          </Styled.SectionList>
        </Styled.Section>
        <Styled.Section>
          <Styled.SectionHeading>Experiments</Styled.SectionHeading>
          <Styled.SectionList>
            {info.experiments.map((experiment: any) => (
              <li key={experiment.label}>
                <SiteLink type="fancy" href={experiment.href}>
                  {experiment.label}
                </SiteLink>
              </li>
            ))}
          </Styled.SectionList>
        </Styled.Section>
      </Styled.SectionGrid>
      <Marquee>Reach Out! Open for Collaborations.</Marquee>
    </Content>
  );
};

export const getStaticProps: GetServerSideProps = async () => {
  const info = await client.fetch(informationQuery);
  return {
    props: {
      info,
    },
  };
};

export default Info;

const Content = styled.div``;
const InfoImageContainer = styled.div`
  width: 200px;
  background-color: red;
  overflow: hidden;
  border-radius: var(--border-radius);
`;

const Divider = styled.div`
  margin: 2rem 0 1rem 0;
  border-bottom: 1px solid var(--border-color);
`;
