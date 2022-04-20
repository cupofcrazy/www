import {
  createClient,
  createPortableTextComponent,
  createImageUrlBuilder,
  createPreviewSubscriptionHook,
} from 'next-sanity'


const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2021-08-11',
  useCdn: process.env.NODE_ENV === 'production'
}

export const urlFor = (src: string) => createImageUrlBuilder(config).image(src)
export const imageBuilder = (src: string) => createImageUrlBuilder(config).image(src)
export const client = createClient(config)
