import Link from 'next/link';

export default {
  a: (props) => {
    const { href, children } = props;

    if (href.startsWith('/')) {
      return <Link href={href}>{children}</Link>;
    } else if (href.startsWith('#')) {
      return <a {...props} />;
    }

    return <a target="_blank" {...props} />;
  },
};
