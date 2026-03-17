import React, { useState } from "react";
import { useContext } from "react";
import ThemeContext from './ThemeContext'
// --- Role-specific components ---
function StudentDashboard({ user }) {
  return (
    <div>
      <h2>Student Dashboard</h2>
      <p>Welcome, {user.name}. Here are your assignments and grades.</p>
      <ul>
        <li>Math: Algebra worksheet</li>
        <li>Science: Lab report</li>
      </ul>
    </div>
  );
}

function TeacherDashboard({ user }) {
  return (
    <div>
      <h2>Teacher Dashboard</h2>
      <p>Welcome, {user.name}. Create quizzes and track class progress.</p>
      <button>Create Quiz</button>
      <button style={{ marginLeft: 10 }}>View Submissions</button>
    </div>
  );
}

function AdminPanel({ user }) {
  return (
    <div>
      <h2>Admin Panel</h2>
      <p>Welcome, {user.name}. Manage users and system settings.</p>
      <button>Manage Users</button>
      <button style={{ marginLeft: 10 }}>System Settings</button>
    </div>
  );
}

function AccessDenied() {
  return (
    <div>
      <h2>Access Denied</h2>
      <p>You don’t have permission to view this page.</p>
    </div>
  );
}

function LoginPrompt() {
  return (
    <div>
      <h2>Please log in</h2>
      <p>Select a role above to simulate logging in.</p>
    </div>
  );
}

// --- Wrapper that decides what to show ---
function RoleBasedDB({ user }) {
  // 1) Not logged in
  if (!user) return <LoginPrompt />;

  // 2) Logged in, choose component by role
  switch (user.role) {
    case "student":
      return <StudentDashboard user={user} />;
    case "teacher":
      return <TeacherDashboard user={user} />;
    case "admin":
      return <AdminPanel user={user} />;
    default:
      return <AccessDenied />;
  }
}

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const { theme } = useContext(ThemeContext);
  

  const buttonStyle = {
    padding: "10px 12px",
    borderRadius: 10,
    background: theme === "light" ? "#f8f8f8" : "#0822ea", 
    color: theme === "light" ? "#000" : "#fff", 
    textAlign: "center" ,
    border: "none",
    cursor: "pointer",
    fontWeight: 600,
  };

  return (
    <div style={{ padding: 20, fontFamily: "system-ui, Arial" }}>
      <h1>Role-Based Conditional Rendering</h1>

      {/* Role selector (simulates login) */}
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 16 }}>
        <button
          style={buttonStyle}
          onClick={() => setUser({ name: "Geetha", role: "student" })}
        >
          Login as Student
        </button>

        <button
          style={buttonStyle}
          onClick={() => setUser({ name: "Geetha", role: "teacher" })}
        >
          Login as Teacher
        </button>

        <button
          style={buttonStyle}
          onClick={() => setUser({ name: "Geetha", role: "admin" })}
        >
          Login as Admin
        </button>

        <button style={buttonStyle} onClick={() => setUser({ name: "Geetha", role: "guest" })}>
          Login as Guest (invalid role)
        </button>

        <button style={buttonStyle} onClick={() => setUser(null)}>
          Logout
        </button>
      </div>

      <hr />

      {/* Conditional rendering happens here */}
      <RoleBasedDB user={user} />
    </div>
  );
}