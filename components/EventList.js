import Link from "next/link";
import styles from "../styles/events.module.css";

export default function EventList({ title, location, description, date, id }) {
  const url = `/events/${id}`;
  return (
    <div className={styles.box}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.paragraph}>{location}</p>
      <p className={styles.paragraph}>{description}</p>
      <p className={styles.paragraph}>{date}</p>
      <Link href={url}>go to detail</Link>
    </div>
  );
}
