import { useState } from 'react';

export default function Settings() {
  const [refreshRate, setRefreshRate] = useState(30);
  return (
    <div>
      <h2>Settings</h2>
      <label>
        Auto-refresh interval (seconds):
        <input type="number" value={refreshRate} onChange={e => setRefreshRate(e.target.value)} />
      </label>
    </div>
  );
}