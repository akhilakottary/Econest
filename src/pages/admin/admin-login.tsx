import Button from "../../common-components/button";
import { useNavigate } from "react-router-dom";
import "./admin-login.css";

const AdminLogin = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Placeholder for login logic; navigate to Admin Dashboard
    navigate("/admin/dashboard");
  };

  return (
    <div className="admin-login">
      <div className="login-container">
        <h1 className="title">🔒 Admin Login</h1>
        <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
          <input
            type="text"
            className="input-field"
            placeholder="Username or Email"
            required
          />
          <input
            type="password"
            className="input-field"
            placeholder="Password"
            required
          />
          <a href="#" className="forgot-password">
            Forgot Password?
          </a>
          <Button
            onClick={handleLogin}
            ariaLabel="Login"
            className="login-button"
          >
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;