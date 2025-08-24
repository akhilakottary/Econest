import { Routes, Route } from "react-router-dom";
import Login from "./pages/user/login";
import Dashboard from "./pages/user/dashboard";
import CartPage from "./pages/user/cartpage";
import AdminLogin from "./pages/admin/admin-login";
import AdminDashboard from "./pages/admin/admin-dashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/cartpage" element={<CartPage />} />
      <Route path="/admin-login" element={<AdminLogin />} />
      <Route path="/admin-dashboard" element={<AdminDashboard />} />

    </Routes>
  );
}

export default App;
