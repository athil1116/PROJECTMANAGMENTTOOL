import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyCalendar from '../components/Calendar'; // ✅ Correct import
import TeamList from '../components/TeamList';
import ProjectList from '../components/ProjectList';

function Dashboard() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          {/* Sidebar */}
          <div className="col-md-2 bg-light vh-100 p-3">
            <h5>Menu</h5>
            <ul className="nav flex-column">
              <li className="nav-item">
                <a className="nav-link active" href="#projects">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#calendar">Calendar</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#team">Team</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#settings">Settings</a>
              </li>
            </ul>
          </div>

          {/* Main Content */}
          <div className="col-md-10 p-4">
            <h2>Welcome to Your Project  Dashboard</h2>

            {/* Projects Section */}
            <section id="project" className="mt-4">
              <h4>Projects</h4>
              <ProjectList />
            </section>

            {/* Calendar Section */}
            <section id="calendar" className="mt-5">
              <h4>Calendar</h4>
              <MyCalendar /> {/* ✅ Correct usage */}
            </section>

           {/* Team Section */}
<section id="team" className="mt-5">
  <h4>Team</h4>
  <TeamList />
</section>

            {/* Settings Section */}
            <section id="settings" className="mt-5">
              <h4>Settings</h4>
              <p>Profile and preferences will be configurable here.</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
