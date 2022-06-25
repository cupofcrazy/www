import {
  createClient,
  createImageUrlBuilder,
} from "next-sanity";
import { PortableText as PortableTextComponent } from "@portabletext/react";
import { Image, type Props as ImageProps } from "components/Image";
import { SiteLink } from "components/SiteLink";
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

const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2021-08-11",
  useCdn: process.env.NODE_ENV === "production",
};

// Custom Components for Sanity Block types
const components = {
  marks: {
    link: ({ children, value }: { children: any; value: any }) => (
      <SiteLink href={value.href}>{children}</SiteLink>
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
