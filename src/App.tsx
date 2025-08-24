import { Routes, Route } from "react-router-dom";
import Login from "./pages/user/login";
import Dashboard from "./pages/user/dashboard";
import CartPage from "./pages/user/cartpage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/cartpage" element={<CartPage />} />
    </Routes>
  );
}

export default App;
