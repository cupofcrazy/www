import {
  createClient,
  createImageUrlBuilder,
} from "next-sanity";
import styled from "styled-components";
import { PortableText as PortableTextComponent } from "@portabletext/react";
import { Styled } from "styles";
import React from "react";
import { ImageWithCaption } from "components/Modules";

type PropsWithChildren<T = any> = T & { children: React.ReactNode };

const videoStyles = {
  maxWidth: "100%",
  maxHeight: "100%",
  width: "100%",
  border: "1px solid var(--border-color)",
  borderRadius: ".75rem",
  overflow: "hidden",
}

const Link = styled.a`
  color: var(--secondary-color);
  background-color: var(--border-color);
  /* padding: .1rem .5rem; */
  /* border-radius: .5rem; */
  display: inline-block;
  /* text-decoration: underline; */
`

const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2021-08-11",
  useCdn: process.env.NODE_ENV === "production",
};

const ExternalLink = styled.a`
  color: var(--accent-color);
  display: inline-block;
  position: relative;
  opacity: .5;
  transition: all .3s ease;

  &:hover {
    color: var(--secondary-color);
    opacity: 1;
    transition: all .3s ease;

    &:after {
      width: 100%;
      transition: all .3s ease;
    }
  }
  &:before {
    position: absolute;
    content: "";
    display: inline-block;
    width: 100%;
    height: 1.5px;
    background-color: var(--accent-color);
    /* margin-bottom: .5rem; */
    bottom: 0;
    left: 0;
    opacity: .5;
  }
  &:after {
    position: absolute;
    content: "";
    display: inline-block;
    width: 0%;
    height: 1.5px;
    background-color: var(--accent-color);
    /* margin-bottom: .5rem; */
    bottom: 0;
    left: 0;
    transition: all .3s ease;
  }
`

// Custom Components for Sanity Block types
const components = {
  marks: {
    link: ({ children, value }: { children: any; value: any }) => (
      <ExternalLink href={value.href}>{children}</ExternalLink>
    ),
    span: ({ children }: PropsWithChildren) => (
      <Styled.SectionText>{children}</Styled.SectionText>
    ),
    em: ({ children }: PropsWithChildren) => (
      <span style={{ fontFamily: 'var(--font-family-heading)', fontStyle: 'italic' }}>{ children }</span>
    )
  },
  block: {
    h2: ({ children }: PropsWithChildren) => (
      <Styled.SectionHeading>{children}</Styled.SectionHeading>
    ),
    h3: ({ children }: PropsWithChildren) => (
      <Styled.SectionHeading>{children}</Styled.SectionHeading>
    ),
    normal: ({ children }: PropsWithChildren) => (
      <Styled.SectionText>{children}</Styled.SectionText>
    ),
  },
  types: {
    imageType: ({ value }: { value: any }) => {
      const { aspectRatio } = value.image.metadata.dimensions;
      const { background } = value.image.metadata.palette.vibrant;
      return (
        <ImageWithCaption
          caption={value.alt}
          src={value.image.url}
          alt={value.alt}
          aspectRatio={aspectRatio}
          color={background}
        />
      );
    },
    video: ({ value }: { value: any }) => {
      const { caption, fallback, _type } = value;
      return (
        <video
          style={videoStyles}
          title={caption}
          loop
          muted
          autoPlay
          playsInline
        >
          <source src={fallback.url} type={`video/${fallback.extension}`} />
          <source src={fallback.url} type={`video/${fallback.extension}`} />
        </video>
      );
    },
  },
};

export const urlFor = (src: string) => createImageUrlBuilder(config).image(src);
export const imageBuilder = (src: string) => createImageUrlBuilder(config).image(src);
export const PortableText = (props: any) => {
  console.log({ props });
  return <PortableTextComponent components={components} {...props} />;
};

export const client = createClient(config);
