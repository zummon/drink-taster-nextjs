import Head from 'next/head';

export default function Seo({
  cover = {},
  date,
  description,
  title,
  siteName,
}) {
  title += ` - ${siteName}`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="date" content={date} />
      <meta name="description" content={description} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={cover.src} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={cover.src} />
    </Head>
  );
}
