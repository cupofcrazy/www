import {
  SanityAsset,
  SanityImageHotspot,
  SanityImageCrop,
} from "@sanity/image-url/lib/types/types";

export type ProjectDoc = {
  seo: Seo;
  _id: string;
  _key: string;
  _created_at: string;
  _type: string;
  _updatedAt: string;
  publishedAt: string;
  title: string;
  subtitle: string;
  description: string;
  url: string;
  slug: {
    current: string;
  };
  cover: SanityAsset & { url: string };
  tags: string[];
  color: {
    hex: string;
  };
  content: any;
};

export type Seo = {
  title: string;
  description: string;
  image: SanityAsset & { url: string };
  keywords: string;
};
export type HomeDoc = {
  bio: string;
  status: string;
  mainImage: SanityAsset & { url: string };
  image: {
    url: string;
  };
  seo: Seo;
};