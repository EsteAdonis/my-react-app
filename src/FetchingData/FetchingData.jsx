// ...existing code...
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const BASE_URL = 'https://jsonplaceholder.typicode.com/';

export const FetchingData = ({ url = 'posts' }) => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchPosts = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const fullUrl = url.startsWith('http') ? url : `${BASE_URL}${url.replace(/^\/+/, '')}`;
        const res = await fetch(fullUrl, { signal });
        if (!res.ok) throw new Error(`Request failed: ${res.status} ${res.statusText}`);
        const data = await res.json();
        setPosts(data);
      } catch (err) {
        if (err.name !== 'AbortError') setError(err.message ?? 'Unknown error');
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();

    return () => controller.abort();
  }, [url]);

  return (
    <div className="tutorial">
      {isLoading && <h3 className="mb-4 text-2xl">Loading…</h3>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {!isLoading && !error && (
        <ul>
          {Array.isArray(posts)
            ? posts.map((p, i) => <li key={p.id ?? i}>{p.title ?? JSON.stringify(p)}</li>)
            : <li>No posts</li>}
        </ul>
      )}
    </div>
  );
};

FetchingData.propTypes = {
  url: PropTypes.string,
};

export default FetchingData;