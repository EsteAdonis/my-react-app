import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';

// Lazy load the About component
const About = lazy(() => import('./About'));

function App() {
  return (
    <BrowserRouter>
      <nav style={{ padding: '1rem', background: '#eee' }}>
        <Link to="/">Home</Link> | 
        <Link to="/about">About</Link>
      </nav>

      {/* Suspense wraps lazy-loaded components */}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;

export default function About() {
  return <h2>This is the About page, loaded lazily!</h2>;
}
