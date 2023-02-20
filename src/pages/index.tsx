import Head from 'next/head';
import Link from 'next/link';
const Home = () => {
  return (
    <>
      <Head>
        <title>Exploratorium</title>
        <meta name="description" content="Maximiliano Ayalas knowledge transfer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Maximiliano Ayala</h1>
        <p>
          <a href="mailto:hello@mxmlnyl.com">hello@mxmlnyl.com</a>
        </p>
        <p>
          <Link href="/dsap">DSAP</Link>
        </p>
      </main>
    </>
  );
};

Home.getLayout = 'Home';

export default Home;
