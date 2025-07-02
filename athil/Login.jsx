import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate("");
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        // ✅ Save token (optional)
        // localStorage.setItem("token", data.token);

        // 👇 Redirect to dashboard
        navigate("/dashboard");
      } else {
        setError(data.message || "Login failed. Please try again.");
      }
    } catch (err) {
      setError("Server error. Please try again later.");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow-lg p-4 w-100" style={{ maxWidth: "400px" }}>
        <h3 className="text-center mb-4">🔐 Login to ProjectTool</h3>

        {error && (
          <div className="alert alert-danger text-center py-2" role="alert">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email address"
              required
            />
            <label htmlFor="email">Email address</label>
          </div>

          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              required
            />
            <label htmlFor="password">Password</label>
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Log In
            </button>
          </div>
        </form>

        <p className="text-center mt-3 mb-0">
          Don’t have an account?{" "}
          <a href="http://localhost:5173/Register" className="text-decoration-none">
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
