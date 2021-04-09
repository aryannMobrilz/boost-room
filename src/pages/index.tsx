import Link from 'next/link';
// import Layout from '../components/Layout';

const IndexPage = () => (
  // <Layout title="custom title">
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
