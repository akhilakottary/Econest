import Button from "../../common-components/button";
import { useNavigate } from "react-router-dom";
import "./admin-dashboard.css";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <div className="admin-dashboard">
      <h1 className="title">🌱 Admin Dashboard</h1>
      <div className="widget-grid">
        <div className="widget">
          <h2>Total Plants</h2>
          <p className="value">150</p>
        </div>
        <div className="widget">
          <h2>Pending Orders</h2>
          <p className="value">12</p>
        </div>
        <div className="widget">
          <h2>Total Sales</h2>
          <p className="value">₹25,000</p>
        </div>
      </div>
      <div className="nav-buttons">
        <Button
          onClick={() => handleNavigate("/plant-management")}
          ariaLabel="Manage Plants"
          className="nav-button"
        >
          Plant Management
        </Button>
        <Button
          onClick={() => handleNavigate("/order-management")}
          ariaLabel="Manage Orders"
          className="nav-button"
        >
          Order Management
        </Button>
        {/* Removed User Management button since page is reverted */}
        <Button

          onClick={() => handleNavigate("/admin-login")}

          ariaLabel="Logout"
          className="nav-button logout"
        >
          Logout
        </Button>
      </div>
    </div>
  );
};

export default AdminDashboard;