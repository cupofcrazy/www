import { groq } from "next-sanity";

export const projectsQuery = groq`*[_type == 'project'] | order(content.created_at desc) {
  ...,
  "id": _id,
  content {
    created_at,
    title,
    subtitle,
    description,
    slug,
    tags,
    url,
    color,
    "cover": cover.image.asset->,
  }
}
`

export const projectQuery = groq`*[_type == 'project' && content.slug.current == $slug]  | order(content.created_at desc) [0]  {
  'project': {
    "id": _id,
    ...,
    content {
      title,
      subtitle,
      description,
      tags,
      url,
      created_at,
      "cover": cover.image.asset->,
      "modules": modules[] {
        _key,
        text,
        "image": image.asset->,
        _type,
        position,
        "caption": caption,
        titleExists,
        title,
        body,
        "left": left.asset->,
        "right": right.asset->,
        "video": file.asset->
      }
    }
  },
  'previousProject': *[_type == 'project' && content.created_at > ^.content.created_at] | order(content.created_at asc) [0] {
    "id": _id,
    content {
      created_at,
      title,
      subtitle,
      slug,
      "cover": cover.image.asset->
    }
  },
  'nextProject': *[_type == 'project' && content.created_at < ^.content.created_at] | order(content.created_at desc) [0] {
    "id": _id,
    content {
      created_at,
      title,
      subtitle,
      slug,
      "cover": cover.image.asset->,
    }
  }
}
`