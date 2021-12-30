import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import axios from "axios";
import Card from "../components/Card";

export default function Home({ data }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next JS app practice</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h3>this is data fetched from json placeholder api site</h3>
        <Link href="/news">
          <div className={styles.button}>goto news page</div>
        </Link>
        {data.map((el) => {
          return <Card title={el.title} key={el.id} styles={styles} />;
        })}
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
  const element = await res.data;

  if (!element) {
    return { notFound: true };
  }
  return {
    props: {
      data: element,
    },
  };
}
