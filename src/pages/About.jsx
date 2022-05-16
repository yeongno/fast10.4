import { useLocation } from "react-router-dom";
import queryString from "query-string";
export default function About() {
  const searchParames = useLocation();
  const searchParam = searchParames.search;
  // console.log(searchParames.search);
  // const obj = new URLSearchParams(uselocation1.search);
  // console.log(obj);
  // console.log(obj.get("name"));
  const query = queryString.parse(searchParam);
  console.log(query.name);
  return (
    <div>
      <h2>여기는 About입니다.</h2>
      {query.name && <p> name 은 {query.name} 입니다.</p>}
    </div>
  );
}
