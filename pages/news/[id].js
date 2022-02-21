import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";

export default function index({ data }) {
  const [state, setState] = useState(data);
  const router = useRouter();
  const goToMain = () => {
    router.push("/news");
  };
  return (
    <div style={{ margin: "0 auto", width: "500px" }}>
      <h3>this is news dynamic page for {router.query.id}</h3>
      <button onClick={goToMain}>go to main news</button>

      <div key={data.id}>
        <h2>
          {data.id}. {data.title}
        </h2>
        <p>{data.body}</p>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const posts = await axios.get("https://jsonplaceholder.typicode.com/posts");
  const patharr = posts.data.map((el) => {
    return {
      params: {
        id: el.id.toString(),
      },
    };
  });
  return {
    paths: patharr,
    fallback: false,
  };
}

export const getStaticProps = async (context) => {
  const resp = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );
  const element = resp.data;
  return {
    props: {
      data: element,
    },
  };
};
