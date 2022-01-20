import Link from "next/link";
import styles from "../../styles/Home.module.css";
import { useModule } from "../../contexts/module";

export default function index() {
  const { title } = useModule();
  return (
    <div className={styles.main}>
      <h2>{title}</h2>
      <Link href="/">
        <div className={styles.button}>goto home page</div>
      </Link>
    </div>
  );
}
