import { useParams } from "react-router-dom";

export default function Profile(props) {
  const { id } = useParams();
  console.log(props);
  return (
    <div>
      <h2>profile 페이지 입니다.</h2>
      <p>id는 {id}입니다. </p>
    </div>
  );
}
