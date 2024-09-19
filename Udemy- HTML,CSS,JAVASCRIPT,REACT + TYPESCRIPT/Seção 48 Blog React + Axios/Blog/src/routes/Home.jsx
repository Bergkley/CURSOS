import { useEffect, useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import blogFetch from "../axios/config";

const Home = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    try {
      const response = await blogFetch.get(
        "/posts"
      );

      const data = response.data;

      setPosts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="home">
      <h1>Últimos posts</h1>
      {posts.length === 0 ? (
        <p>Carregando...</p>
      ) : (
        posts.map((post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <Link className="btn" to={`/posts/${post.id}`}>Ler mais</Link>
          </div>
        ))
      )}
    </div>
  );
};

export default Home;
