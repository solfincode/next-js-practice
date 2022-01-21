import { useRouter } from "next/router";

export default function index() {
  const router = useRouter();
  const goToMain = () => {
    router.push("/news");
  };
  return (
    <div>
      <h3>this is news dynamic page for {router.query.id}</h3>
      <button onClick={goToMain}>go to main news</button>
    </div>
  );
}
