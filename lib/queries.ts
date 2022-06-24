import { groq } from "next-sanity";

export const projectsQuery = groq`*[_type == 'project'] | order(publishedAt desc) {
  ...,
  "id": _id,
  publishedAt,
  title,
  subtitle,
  description,
  slug,
  tags,
  url,
  color,
  "cover": cover.asset->,
}
`;

export const projectQuery = groq`*[_type == 'project' && slug.current == $slug]  | order(publishedAt desc) [0]  {
  'project': {
    "id": _id,
    title,
    subtitle,
    description,
    tags,
    url,
    isLive,
    publishedAt,
    seo {
      title,
      description,
      keywords,
      "image": seoImage.asset-> {
        url,
        metadata
      }
    },
    "cover": cover.asset-> {
      url,
      metadata
    },
    "content": content[] {
      ...,
      "image": image.asset->,
      "fallback": fallback.asset->
    }
  },
  'previousProject': *[_type == 'project' && publishedAt > ^.publishedAt] | order(publishedAt asc) [0] {
    "id": _id,
    title,
    subtitle,
    slug,
    "cover": cover.asset-> {
      metadata,
      url
    }
  },
  'nextProject': *[_type == 'project' && publishedAt < ^.publishedAt] | order(publishedAt desc) [0] {
    "id": _id,
    title,
    subtitle,
    slug,
    "cover": cover.asset-> {
      metadata,
      url
    },
  }
}
`;

export const homeQuery = groq`*[_type == 'home'][0] {
  bio,
  status,
  "mainImage": mainImage {
    alt,
    "image": image.asset-> {
      url,
      metadata
    }
  },
  seo {
    title,
    description,
    keywords,
    "image": seoImage.asset-> {
      metadata,
      url

    }
  }
}`;

export const informationQuery = groq`*[_type == 'information'][0] {
  short_bio,
  capabilities,
  tools,
  contacts,
  experiments,
  "mainImage": mainImage {
    "image": image.asset-> {
      url,
      metadata
    },
    alt
  },
  seo {
    title,
    description,
    "image": seoImage.asset-> {
      url,
      metadata
    }
  }
}
`;

export const artPageQuery = groq`*[_type == 'art'][0] {
  subtitle,
  seo {
    title,
    description,
    keywords,
    "image": seoImage.asset-> {
      url,
      metadata
    },
  },
  "modules": modules[] {
    _key,
    "image": image.asset->,
    _type,
    position,
    "caption": caption,
  }
}
`;
