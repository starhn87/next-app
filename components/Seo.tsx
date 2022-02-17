import Head from "next/head";

interface ISeo {
  title: string;
}

export default function Seo({ title }: ISeo) {
  return (
    <Head>
      <title>{title} | Next Movies</title>
    </Head>
  );
}
