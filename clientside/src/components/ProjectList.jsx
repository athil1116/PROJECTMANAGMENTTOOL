import React, { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";

function ProjectList() {
  const [projects, setProjects] = useState([
    { id: 1, name: "Sample Project" }
  ]);
  const [newProject, setNewProject] = useState("");
  const [file, setFile] = useState(null);
  const [editId, setEditId] = useState(null);
  const [editValue, setEditValue] = useState("");

  const handleAdd = async (e) => {
    e.preventDefault();
    if (newProject.trim() === "") return;

    setProjects([
      ...projects,
      { id: Date.now(), name: newProject, fileName: file ? file.name : null }
    ]);
    setNewProject("");
    setFile(null);
  };

  const handleDelete = (id) => {
    setProjects(projects.filter(p => p.id !== id));
  };

  const handleEdit = (id, name) => {
    setEditId(id);
    setEditValue(name);
  };

  const handleEditSave = (id) => {
    setProjects(projects.map(p =>
      p.id === id ? { ...p, name: editValue } : p
    ));
    setEditId(null);
    setEditValue("");
  };

  const handleEditCancel = () => {
    setEditId(null);
    setEditValue("");
  };

  return (
    <div>
      <Form onSubmit={handleAdd} className="mb-3">
        <InputGroup>
          <Form.Control
            type="text"
            placeholder="New project name"
            value={newProject}
            onChange={e => setNewProject(e.target.value)}
          />
          <Form.Control
            type="file"
            onChange={e => setFile(e.target.files[0])}
            style={{ maxWidth: 200 }}
          />
          <Button type="submit" variant="primary">Add</Button>
        </InputGroup>
      </Form>
      <ul className="list-group">
        {projects.map(project => (
          <li key={project.id} className="list-group-item d-flex justify-content-between align-items-center">
            {editId === project.id ? (
              <InputGroup>
                <Form.Control
                  type="text"
                  value={editValue}
                  onChange={e => setEditValue(e.target.value)}
                  autoFocus
                />
                <Button variant="success" size="sm" onClick={() => handleEditSave(project.id)}>Save</Button>
                <Button variant="secondary" size="sm" onClick={handleEditCancel}>Cancel</Button>
              </InputGroup>
            ) : (
              <>
                <span>
                  {project.name}
                  {project.fileName && (
                    <span className="badge bg-info ms-2">{project.fileName}</span>
                  )}
                </span>
                <div>
                  <Button
                    variant="outline-secondary"
                    size="sm"
                    className="me-2"
                    onClick={() => handleEdit(project.id, project.name)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => handleDelete(project.id)}
                  >
                    Delete
                  </Button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectList;