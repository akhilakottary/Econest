import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import "./admin-login.css"; // Reuse the existing CSS

const AdminLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Dummy check for admin credentials (replace later with backend validation)
    if (email === "admin@example.com" && password === "1234") {
      // Set a token in localStorage (simulating auth)
      localStorage.setItem("authToken", "adminToken");
      navigate("/admin-dashboard");
    } else {
      alert("Invalid admin credentials, try again.");
    }
  };

  const handleForgotPassword = () => {
    alert("Forgot Password feature coming soon! Please contact support."); // Placeholder
    // Later, replace with: navigate("/admin/forgot-password");
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Admin Login</h2>
      <form className="login-form" onSubmit={handleLogin}>
        <div className="input-group">
          <UserOutlined className="input-icon" />
          <input
            type="email"
            placeholder="Enter admin email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <LockOutlined className="input-icon" />
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="login-btn">
          Login
        </button>
        <a href="#" onClick={handleForgotPassword} className="forgot-password">
          Forgot Password?
        </a>
      </form>
    </div>
  );
};

export default AdminLogin;