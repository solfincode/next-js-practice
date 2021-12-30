import Link from "next/link";
import styles from "../../styles/Home.module.css";

export default function index() {
  return (
    <div className={styles.main}>
      <h2>this is news page</h2>
      <Link href="/">
        <div className={styles.button}>goto home page</div>
      </Link>
    </div>
  );
}
