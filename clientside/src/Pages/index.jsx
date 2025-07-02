import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "../component/navbar";
import TeamList from '../components/TeamList';
import ProjectList from '../components/ProjectList';


function Index() {
  return (
    <div className="bg-light min-vh-100">
      <Navbar/>
      <div className="container-fluid">
        <div className="row">
          {/* Sidebar */}
          <div className="col-md-2 bg-white shadow-sm vh-100 p-0">
            <div className="d-flex flex-column align-items-center py-4 h-100">
              <h4 className="mb-4 text-primary">Menu</h4>
              <ul className="nav nav-pills flex-column w-100">
                <li className="nav-item mb-2">
                  <a className="nav-link active" href="#project">
                    <i className="bi bi-kanban"></i> Projects
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a className="nav-link" href="#team">
                    <i className="bi bi-people"></i> Team
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#settings">
                    <i className="bi bi-gear"></i> Settings
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Main Content */}
          <div className="col-md-10 p-5">
            <div className="mb-4">
              <h2 className="fw-bold text-dark">Welcome to Your Project Dashboard</h2>
              <p className="text-muted">Manage your projects and team efficiently.</p>
            </div>

           
                     
            {/* Projects Section */}
            <section id="project" className="mb-5">
              <div
                className="card shadow border-0"
                style={{
                  background: "linear-gradient(90deg, #e3ffe6 0%, #f9f9f9 100%)",
                  borderRadius: "1rem"
                }}
              >
                <div className="card-body">
                  <div className="d-flex align-items-center mb-4">
                    <div
                      className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3"
                      style={{ width: 48, height: 48 }}
                    >
                      <i className="bi bi-kanban" style={{ fontSize: 24 }}></i>
                    </div>
                    <div>
                      <h4 className="card-title mb-0 fw-bold">Projects</h4>
                      <small className="text-muted">Your current projects at a glance</small>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <ProjectList />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
            
    
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
// ...existing code...