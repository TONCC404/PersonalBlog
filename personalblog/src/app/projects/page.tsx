'use client'
import { useState } from "react";
import { ProjectCard } from "../../components/ProjectCard";

export default function Projects() {
  const [projects, setProjects] = useState([
    { title: "Project 1", description: "A cool app I built.", link: "#" },
  ]);

  const [editing, setEditing] = useState(false);
  const [newProject, setNewProject] = useState({ title: "", description: "", link: "" });

  function addProject() {
    setProjects([...projects, newProject]);
    setNewProject({ title: "", description: "", link: "" });
  }

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      {editing && (
        <div className="space-y-2 mb-6">
          <input
            className="w-full p-2 border rounded"
            placeholder="Title"
            value={newProject.title}
            onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
          />
          <input
            className="w-full p-2 border rounded"
            placeholder="Description"
            value={newProject.description}
            onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
          />
          <input
            className="w-full p-2 border rounded"
            placeholder="Link"
            value={newProject.link}
            onChange={(e) => setNewProject({ ...newProject, link: e.target.value })}
          />
          <button
            onClick={addProject}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Add Project
          </button>
        </div>
      )}
      <div className="grid gap-4">
        {projects.map((proj, idx) => (
          <ProjectCard key={idx} {...proj} />
        ))}
      </div>
      <button
        onClick={() => setEditing(!editing)}
        className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        {editing ? "Done" : "Edit Projects"}
      </button>
    </div>
  );
}