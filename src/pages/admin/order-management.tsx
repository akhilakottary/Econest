import BackButton from "../../common-components/back-button";
import { useState } from "react";
import "./order-management.css";

// Define the Order interface
interface Order {
  id: string;
  user: string;
  total: number;
  status: "Pending" | "Processing" | "Shipped" | "Delivered";
}

const OrderManagement = () => {
  const [orders, setOrders] = useState<Order[]>([
    { id: "1", user: "Akhil Kottary", total: 150, status: "Pending" },
    { id: "2", user: "Priya Sharma", total: 75, status: "Processing" },
    { id: "3", user: "Ravi Kumar", total: 200, status: "Shipped" },
  ]);

  const updateStatus = (id: string, newStatus: Order["status"]) => {
    setOrders(orders.map((order) =>
      order.id === id ? { ...order, status: newStatus } : order
    ));
  };

  return (
    <div className="order-management">
      <BackButton className="back-button" />
      <h1 className="title">📦 Order Management</h1>
      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>User</th>
              <th>Total (₹)</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.user}</td>
                <td>{order.total}</td>
                <td>{order.status}</td>
                <td>
                  <select
                    value={order.status}
                    onChange={(e) =>
                      updateStatus(order.id, e.target.value as Order["status"])
                    }
                    className="status-select"
                  >
                    <option value="Pending">Pending</option>
                    <option value="Processing">Processing</option>
                    <option value="Shipped">Shipped</option>
                    <option value="Delivered">Delivered</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderManagement;