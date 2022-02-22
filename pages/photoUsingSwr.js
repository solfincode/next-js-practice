import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "../styles/PhotoPage.module.css";
import useSWR from "swr";

// client side data fetching in nextjs

const photoPage = () => {
  const [pageData, setPageData] = useState([]);

  //fetcher function and conver response into json format
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  // destructure data and error from useSWR
  const { data, error } = useSWR(
    "https://jsonplaceholder.typicode.com/photos",
    fetcher
  );
  // render is finished and execute setPageData
  useEffect(() => {
    if (data) {
      setPageData(data);
    }
  }, [data]);
  if (error) return <div className={styles.container}>error...</div>;
  if (!data || !pageData)
    return <div className={styles.container}>loading...</div>;
  return (
    <div className={styles.container}>
      <h2>photo page</h2>
      {pageData.map((el) => {
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
