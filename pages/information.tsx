import React from 'react';
import { Image } from '../components/Image'
import { NextPage, GetServerSideProps, GetStaticProps } from 'next';
import { client } from '../lib/sanity';
import { groq } from 'next-sanity';
import styled from 'styled-components';
import { PageHead } from '../components/Seo';
import { colors, mq } from '../utils';
import { Styled } from '../styles';
import { TagList } from '../styles/pages/project.styled'
import { SiteLink } from '../components/SiteLink';
import { CoverImage } from '../components/Image/CoverImage';
import { Badge } from '../components/Badge';




type Props = {
  info: any
}
const Info: NextPage<Props> = ({ info }) => {
  console.log(info)
  return (
    <Content>
      <PageHead title="Information" description='About Me' />
        {/* <p>Information</p> */}
        <CoverImage>
          <Image src={info.content.seo.image.url} color={info.content.seo.image.metadata.palette.vibrant.background} alt="Logo" aspectRatio={1} />
        </CoverImage>
        <Styled.SectionGrid>
          <Styled.Section>
            <Styled.SectionHeading>About</Styled.SectionHeading>
            <Styled.SectionText>{ info.content.short_bio }</Styled.SectionText>
          </Styled.Section>
          <Styled.Section>
            <Styled.SectionHeading>Capabilities</Styled.SectionHeading>
            <TagList>{ info.content.capabilities.map((capability: any, index: number) => (
              <Badge key={capability} color={colors[index % colors.length].background}>{capability}</Badge>
            )) }</TagList>
          </Styled.Section>
          <Styled.Section>
            <Styled.SectionHeading>Technologies</Styled.SectionHeading>
            <TagList>{ info.content.tools.map((tool: string, index: number) => (
              <Badge key={tool} color={colors[index % colors.length].background}>{tool}</Badge>
            )) }</TagList>
          </Styled.Section>
          
        </Styled.SectionGrid>
        <Divider />
        <Styled.SectionGrid>
          <Styled.Section>
            <Styled.SectionHeading>Contact</Styled.SectionHeading>
            <Styled.SectionList>
              {info.content.contacts.map((contact: any) => (
                <SiteLink key={contact.name} href={contact.href}>{contact.name}</SiteLink>
              ))}
            </Styled.SectionList>
          </Styled.Section>
          <Styled.Section>
            <Styled.SectionHeading>Experiments</Styled.SectionHeading>
            <Styled.SectionList>
              {info.content.experiments.map((experiment: any) => (
                <SiteLink key={experiment.name} href={experiment.href}>{experiment.name}</SiteLink>
              ))}
            </Styled.SectionList>
          </Styled.Section>
        </Styled.SectionGrid>
    </Content>
  )
};

export const getStaticProps: GetStaticProps = async () => {
  const query = groq`*[_type == 'info'][0] {
    ...,
    content {
      ...,
      seo {
        ...,
        "image": image.asset->
      }
    }
  }`
  const info = await client.fetch(query)
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