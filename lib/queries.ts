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
`

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
`

export const homeQuery = groq`*[_type == 'home'][0] {
  bio,
  status,
  seo {
    title,
    description,
    "image": seoImage.asset-> {
      metadata,
      url

    }
  }
}`