import Link from 'next/link';
import { getAllContents } from '../../lib/content-parser';
import { ChevronsRight as IconChevronsRight } from 'react-feather';

export function getStaticProps() {
  return {
    props: {
      title: 'Blog. Lorem.',
      description:
        'Officia, officiis. Neque, molestias! Laborum, dolor necessitatibus! Repudiandae laborum unde dolorem dolorum dicta cumque optio! Neque perspiciatis debitis quas suscipit, esse vel.',
      cover: {
        src: 'https://images.unsplash.com/photo-1607543306027-d2a0520106b7?w=1920',
        alt: 'Hot chocolate',
      },
      blogs: getAllContents('blog'),
    },
  };
}

export default function BlogPage({ title, description, blogs }) {
  return (
    <>
      <div className="bg-white bg-opacity-75 hover:bg-opacity-100 transition ease-in-out duration-500 rounded-lg max-w-screen-md mx-auto p-4 mb-4 text-center">
        <h1 className="text-3xl font-bold mb-6">{title}</h1>
        <p className="text-xl font-semibold mb-4">{description}</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 m-4">
        {blogs.map(({ title, description, cover, date, slug, tags }, index) => (
          <div
            className="bg-white bg-opacity-75 hover:bg-opacity-100 transition ease-in-out duration-500 rounded-lg"
            key={`blog-${index}`}
          >
            <img className="rounded-t-lg" {...cover} />
            <h2 className="text-2xl pt-4 px-4 font-bold">{title}</h2>
            <p className="italic my-2 px-4 ml-2">
              {date}{' '}
              {tags.map((tag, tagIndex) => (
                <a
                  className="underline"
                  href="#"
                  key={`tag-${index}-${tagIndex}`}
                >
                  {tag}{' '}
                </a>
              ))}
            </p>
            <p className="text-lg px-4 pb-4 ml-2 font-semibold">
              {description}
            </p>
            <Link
              href={`/blog/${slug}`}
              className="text-lg px-4 pb-4 italic flex items-center justify-end"
            >
              <span>Read </span>
              <IconChevronsRight />
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
