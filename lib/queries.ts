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
    ...,
    title,
    subtitle,
    description,
    tags,
    url,
    color,
    created_at,
    "cover": cover.asset->,
    "content": content[] {
      ...,
      "image": image.asset->
    }
  },
  'previousProject': *[_type == 'project' && publishedAt > ^.publishedAt] | order(publishedAt asc) [0] {
    "id": _id,
    created_at,
    title,
    subtitle,
    slug,
    "cover": cover.asset->
  },
  'nextProject': *[_type == 'project' && publishedAt < ^.publishedAt] | order(publishedAt desc) [0] {
    "id": _id,
    created_at,
    title,
    subtitle,
    slug,
    "cover": cover.asset->,
  }
}
`