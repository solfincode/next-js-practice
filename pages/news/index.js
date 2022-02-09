import Link from "next/link";
import styles from "../../styles/Home.module.css";
import { useModule } from "../../contexts/module";
import axios from "axios";

export default function index({ data }) {
  const { title } = useModule();
  return (
    <div className={styles.main}>
      <h2>{title}</h2>
      <Link href="/">
        <div className={styles.button}>goto home page</div>
      </Link>
      {data.map((el) => {
        return (
          <Link href={`/news/${el.id}`} key={el.id}>
            {el.title}
          </Link>
        );
      })}
    </div>
  );
}

export async function getStaticProps() {
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts/");
    const element = res.data;
    return {
      props: {
        data: element,
      },
    };
  } catch (err) {
    return {
      props: {
        data: "not found",
      },
    };
  }
}
