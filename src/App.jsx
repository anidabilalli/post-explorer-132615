import {useEffect, useState} from 'react'
import './App.css'
import PostCard from './components/PostCard'

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
        <PostCard key={post.id} post={post} />
    ))}
  </div>
}
export default App
