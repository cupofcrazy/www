import Head from "next/head";

type Props = {
  title: string;
  description?: string;
  subtitle?: string;
};

export const PageHead = ({ title, description, subtitle }: Props) => {
  return (
    <Head>
      <title>Tobi | {title}</title>
      <meta name="description" content={description} />
      <meta
        property="og:title"
        content={subtitle}
      />
      <meta
        property="og:description"
        content={description}
      />
      <meta property="og:url" content={"https://tobi.computer/"} />
      <meta property="og:type" content="website"></meta>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};
