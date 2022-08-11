import Link from 'next/link';

export const A = ({ text, href }) => {
  return (
    <Link href={href}>
      <a>{text}</a>
    </Link>
  );
};
