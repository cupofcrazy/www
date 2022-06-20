import Head from "next/head";

type Props = {
  title: string;
  description?: string;
  image?: any
  keywords?: string;
};

export const PageHead = ({ title, description, image, keywords }: Props) => {
  return (
    <Head>
      {/* Main Meta Tags */}
      <title>Tobi | {title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords}></meta>

      {/* OpenGraph Meta Tags */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={title} />
      <meta property="og:url" content={"https://tobi.computer/"} />
      <meta
        property="og:image"
        content={image.url}
      />
      
      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:url" content="https://twitter.com/istobihere" />
      <meta name="twitter:title" content={title} />
      <meta
        name="twitter:description"
        content={title}
      />
      <meta
        name="twitter:image"
        content={image.url}
      />
      <meta name="twitter:creator" content="@istobihere" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};
