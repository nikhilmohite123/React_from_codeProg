import { useState, useEffect } from "react";
import PostDetail from "../component/PostDetail";

const url = "https://jsonplaceholder.typicode.com/posts";
function Post() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const respones = await fetch(url);
      const data = await respones.json();
      setData(data);
    };

    fetchData();
  }, [url]);
  return (
    <div>
      {data.map((post) => {
        return <PostDetail key={post.id} {...post} />;
      })}
    </div>
  );
}

export default Post;
