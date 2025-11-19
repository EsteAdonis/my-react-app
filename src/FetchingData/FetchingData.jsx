import { useState, useEffect } from 'react';
const BASE_URL = 'https://jsonplaceholder.typicode.com/';

// const Post;

function FetchingData() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) return <div>Loading ... </div>;
    const fetchPosts = async () => {
      // const response = await fetch(`${BASE_URL}/posts`);
      // const posts = await response.reson();
      setIsLoading(true);
      fetch(`${BASE_URL}/posts`)
      .then(response => response.json())
      .then(posts => setPosts(posts))
      .catch(error => setError(error))

      console.log('Post: ', posts);
      setIsLoading(false);
    };

    fetchPosts();
  }, []);


  return (
    <div className="tutorial">
      <h1 className="mb-4 text-2xl">Data Fetching in React</h1>
      <div>Loading ... </div>
        <ul>
          { posts.map (post => {
            return <li key={post.id}>{post.title}</li>
          })}
        </ul>
    </div>
  )
}

export default FetchingData