export default function Card({ title, styles }) {
  return (
    <div className={styles.container}>
      <p>{title}</p>
    </div>
  );
}
