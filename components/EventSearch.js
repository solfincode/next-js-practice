import { useRef } from "react";
import { useModule } from "../contexts/module";

export default function searchInput({ searchHandle }) {
  const inputRef = useRef();
  const handleSummit = (e) => {
    e.preventDefault();
    searchHandle(inputRef.current.value);
  };
  const onHandle = () => {
    searchHandle(inputRef.current.value);
  };
  return (
    <>
      <input
        type="text"
        placeholder="type text"
        ref={inputRef}
        onChange={onHandle}
      />
      <button onClick={(e) => handleSummit(e)}>search</button>
    </>
  );
}
