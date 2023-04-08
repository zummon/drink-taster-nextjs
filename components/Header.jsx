import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Menu as IconMenu, X as IconX } from 'react-feather';

export default function Header({ siteName }) {
  const { pathname } = useRouter();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="sm:flex flex-wrap p-4">
      <div
        className={`bg-white ${
          pathname === '/' ? '' : 'bg-opacity-75 hover:bg-opacity-100'
        } flex items-center justify-between sm:rounded-l-lg`}
      >
        <Link href="/" className="text-lg font-semibold p-4">
          {siteName}
        </Link>
        <button
          className="text-lg font-semibold p-4 sm:hidden"
          onClick={() => setShowMenu(!showMenu)}
        >
          {showMenu ? <IconX /> : <IconMenu />}
        </button>
      </div>
      <Link
        href="/about"
        className={`bg-white ${
          pathname.startsWith('/about')
            ? ''
            : 'bg-opacity-75 hover:bg-opacity-100'
        } transition duration-500 ease-in-out text-lg font-semibold p-4 sm:block ${
          showMenu ? 'inline-block' : 'hidden'
        }`}
      >
        About
      </Link>
      <Link
        href="/blog"
        className={`bg-white ${
          pathname.startsWith('/blog')
            ? ''
            : 'bg-opacity-75 hover:bg-opacity-100'
        } transition duration-500 ease-in-out text-lg font-semibold p-4 sm:rounded-r-lg sm:block ${
          showMenu ? 'inline-block' : 'hidden'
        }`}
      >
        Blog
      </Link>
    </div>
  );
}
