export default function ProjectCard({ project }) {
  return (
    <div className="card">
      <h3>{project.description || 'Untitled Project'}</h3>
      <span className="date">{new Date(project.timestamp).toLocaleDateString()}</span>
    </div>
  );
}
