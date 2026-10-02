import { useState, useEffect } from 'react';
import { fetchProjects } from '../utils/api';

export default function Dashboard() {
  const [projects, setProjects] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetchProjects().then(setProjects).catch(console.error);
  }, []);

  const filtered = projects.filter(p =>
    p.description?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Arc Projects</h1>
      <input
        placeholder="Search projects..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <div className="grid">
        {filtered.map(p => (
          <div key={p.id} className="card">
            <h3>{p.description || 'Untitled'}</h3>
            <p>{p.timestamp}</p>
          </div>
        ))}
      </div>
    </div>
  );
}