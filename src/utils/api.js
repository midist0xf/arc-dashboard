const API_BASE = 'https://studio.arc.io';

export async function fetchProjects(pageSize = 200) {
  const res = await fetch(`${API_BASE}/api/apps?pageSize=${pageSize}`);
  if (!res.ok) throw new Error(`API error: ${res.status}`);
  const json = await res.json();
  return json.data || [];
}
