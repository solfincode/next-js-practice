import Link from "next/link";
import styles from "../styles/events.module.css";

export default function EventDeatails({ title, location, description, date }) {
  return (
    <div className={styles.box}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.paragraph}>{location}</p>
      <p className={styles.paragraph}>{description}</p>
      <p className={styles.paragraph}>{date}</p>
      <Link href="/events">go to back event page</Link>
    </div>
  );
}
