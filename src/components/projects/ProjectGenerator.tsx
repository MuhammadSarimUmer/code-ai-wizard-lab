import { useState, useEffect } from 'react';
import { ProjectService } from '../../services/ProjectService';

const projectService = new ProjectService();

export function ProjectGenerator() {
  const [templateId, setTemplateId] = useState('');
  const [options, setOptions] = useState({});
  const [downloadUrl, setDownloadUrl] = useState('');
  const [premadeProjects, setPremadeProjects] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPremadeProjects = async () => {
      const projects = await projectService.getPremadeProjects();
      setPremadeProjects(projects);
    };
    fetchPremadeProjects();
  }, []);

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const url = await projectService.generateProject(templateId, options);
      setDownloadUrl(url);
    } catch (error) {
      setDownloadUrl('Error: Unable to generate project.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Generate a Project</h2>
      <div className="mb-4">
        <input
          type="text"
          value={templateId}
          onChange={(e) => setTemplateId(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="Enter Template ID"
        />
      </div>
      <button
        onClick={handleGenerate}
        disabled={loading}
        className="px-4 py-2 bg-green-500 text-white rounded"
      >
        {loading ? 'Generating...' : 'Generate Project'}
      </button>
      {downloadUrl && (
        <div className="mt-4">
          <a href={downloadUrl} className="text-blue-500 underline" download>
            Download Generated Project
          </a>
        </div>
      )}

      <h2 className="text-xl font-bold mt-8 mb-4">Premade Projects</h2>
      <ul>
        {premadeProjects.map((project) => (
          <li key={project.id} className="mb-2">
            <a href={project.downloadUrl} className="text-blue-500 underline" download>
              {project.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}