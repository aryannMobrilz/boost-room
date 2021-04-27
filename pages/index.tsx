import Link from 'next/link';
// import layout from '@/components/layout';

const IndexPage = () => (
  // <layout title="custom title">
  <div>
    <h1>BoostRoom</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </div>
);

export default IndexPage;
