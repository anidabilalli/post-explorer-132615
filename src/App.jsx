import {useEffect, useState} from 'react'
import './App.css'
function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
          if (!response.ok)
          {
            throw new Error("Failed to fetch posts");
          }
          return response.json();
        })
    .then((data) => {
      setPosts(data);
      setLoading(false);
    })
    .catch((error) => {
      setError(error.message);
      setLoading(false);
    })
  }, []);
  if(loading)
  {
    return <h2>Loading posts...</h2>;
  }
  if(error)
  {
    return <h2>Something went wrong!{error}</h2>;
  }
  return <div>
    <h1>Post Explorer</h1>
    {posts.map(post => (
        <div key={post.id}>
          <p>ID: {post.id}</p>
          <p>User ID: {post.userId}</p>
          <p>Title: {post.title}</p>
          <p>Body: {post.body}</p>
        </div>
    ))}
  </div>
}
export default App
