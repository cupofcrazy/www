import React from 'react';
import { Image } from '../components/Image'
import { NextPage, GetServerSideProps, GetStaticProps } from 'next';
import { client } from '../lib/sanity';
import { groq } from 'next-sanity';
import styled from 'styled-components';
import { PageHead } from '../components/Seo';
import { Styled } from '../styles';
import { SiteLink } from '../components/SiteLink';
import { CoverImage } from '../components/Image/CoverImage';
import { BadgeList } from '../components/Badge';




type Props = {
  info: any
}
const Info: NextPage<Props> = ({ info }) => {
  console.log({ info })
  return (
    <Content>
      <PageHead title="Information" description='About Me' />
      {/* <p>Information</p> */}
      <CoverImage>
        <Image src={info.seo.image.url} color={info.seo.image.metadata.palette.vibrant.background} alt="Logo" aspectRatio={1} />
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
              <SiteLink type="fancy" key={contact.label} href={contact.href}>{contact.label}</SiteLink>
            ))}
          </Styled.SectionList>
        </Styled.Section>
        <Styled.Section>
          <Styled.SectionHeading>Experiments</Styled.SectionHeading>
          <Styled.SectionList>
            {info.experiments.map((experiment: any) => (
              <SiteLink type="fancy" key={experiment.label} href={experiment.href}>{experiment.label}</SiteLink>
            ))}
          </Styled.SectionList>
        </Styled.Section>
      </Styled.SectionGrid>
    </Content>
  )
};

export const getStaticProps: GetStaticProps = async () => {
  const query = groq`*[_type == 'information'][0] {
    ...,
    seo {
      ...,
      "image": seoImage.asset->
    }
  }
  `
  const info = await client.fetch(query)
  console.log({ info })
  return {
    props: {
      info
    }
  }
}

export default Info;


const Content = styled.div`

`
const InfoImageContainer = styled.div`
  width: 200px;
  background-color: red;
  overflow: hidden;
  border-radius: var(--border-radius);
`


const Divider = styled.div`
  margin: 2rem 0 1rem 0;
  border-bottom: 1px solid var(--border-color);
`