import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const url = "https://jsonplaceholder.typicode.com/posts";

function PostInfo() {
  const { id } = useParams();
  console.log(id);
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const respones = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      const data = await respones.json();
      console.log(data);
      setData(data);
    };

    fetchData();
  }, [url]);

  return (
    <div
      style={{
        margin: "1rem",
        padding: "1rem",
        border: "1px solid black",
      }}
    >
      <p>userId: {data.id}</p>
      <p>title:{data.title}</p>
      <p>body :{data.body}</p>
    </div>
  );
}

export default PostInfo;
