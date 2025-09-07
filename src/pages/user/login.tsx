import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import "./login.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Dummy check for now (replace later with backend validation)
    if (email === "admin@example.com" && password === "1234") {
      navigate("/dashboard"); // ✅ Updated to admin dashboard
    } else {
      alert("Invalid credentials, try again.");
    }
  };

  const handleForgotPassword = () => {
    alert("Forgot Password feature coming soon! Please contact support."); // Placeholder
    // Later, replace with: navigate("/forgot-password");
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>
      <form className="login-form" onSubmit={handleLogin}>
        <div className="input-group">
          <UserOutlined className="input-icon" />
          <input
            type="email"
            placeholder="Enter email"
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

export default Login;