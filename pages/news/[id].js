import { useRouter } from "next/router";

export default function index() {
  const router = useRouter();
  return <div>this is news dynamic page for {router.query.id}</div>;
}
