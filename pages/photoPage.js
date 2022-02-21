import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "../styles/PhotoPage.module.css";

// client side data fetching in nextjs

const photoPage = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(data);
  if (isLoading) return <div className={styles.container}>loading...</div>;
  return (
    <div className={styles.container}>
      <h2>photo page</h2>
      {data.map((el) => {
        return (
          <div key={el.id} className={styles.photoContainer}>
            <img src={el.thumbnailUrl} />
            <div>{el.title}</div>
          </div>
        );
      })}
    </div>
  );
};

export default photoPage;
