import Link from "next/link";
import styles from "../../styles/Home.module.css";

export default function MainHeader() {
  return (
    <header
      style={{
        display: "flex",
        flexFlow: "row nowrap",
        padding: "5px",
        width: "600px",
        margin: "0 auto",
      }}
    >
      <Link href="/">
        <div className={styles.button} style={{ marginRight: "15px" }}>
         home page
        </div>
      </Link>
      <Link href="/news">
        <div className={styles.button} style={{ marginRight: "15px" }}>
          news page
        </div>
      </Link>
      <Link href="/events">
        <div className={styles.button}>events page</div>
      </Link>
    </header>
  );
}
