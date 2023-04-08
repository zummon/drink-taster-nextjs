import mdHtmlParser from '../lib/md-html-parser';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { getContent } from '../lib/content-parser';

export async function getStaticProps({}) {
  const { content, ...others } = getContent('', 'about');

  return {
    props: {
      ...others,
      sourceContent: await serialize(content, {
        mdxOptions: {
          remarkPlugins: [],
          rehypePlugins: [],
        },
      }),
    },
  };
}

export default function AboutPage({ description, title, sourceContent }) {
  return (
    <>
      <div className="bg-white bg-opacity-75 hover:bg-opacity-100 transition ease-in-out duration-500 rounded-lg max-w-screen-md mx-auto p-4 mb-4 text-center">
        <h1 className="text-3xl font-bold mb-6">{title}</h1>
        <p className="text-xl font-semibold mb-4">{description}</p>
      </div>
      <div className="prose prose-lg max-w-screen-md mx-auto bg-white bg-opacity-75 hover:bg-opacity-100 transition ease-in-out duration-500 rounded-lg p-4">
        <MDXRemote {...sourceContent} components={mdHtmlParser} />
      </div>
    </>
  );
}
