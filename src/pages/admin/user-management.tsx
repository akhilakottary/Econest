import Button from "../../common-components/button";
import BackButton from "../../common-components/back-button";
import { useState } from "react";
import "./user-management.css";

// Define the User interface
interface User {
  id: string;
  name: string;
  email: string;
  isActive: boolean;
}

const UserManagement = () => {
  const [users, setUsers] = useState<User[]>([
    { id: "1", name: "Akhil Kottary", email: "akhil@example.com", isActive: true },
    { id: "2", name: "Priya Sharma", email: "priya@example.com", isActive: false },
    { id: "3", name: "Ravi Kumar", email: "ravi@example.com", isActive: true },
  ]);

  const toggleUserStatus = (id: string) => {
    setUsers(users.map((user) =>
      user.id === id ? { ...user, isActive: !user.isActive } : user
    ));
  };

  return (
    <div className="user-management">
      <BackButton className="back-button" />
      <h1 className="title">👤 User Management</h1>
      <div className="user-table">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.isActive ? "Active" : "Inactive"}</td>
                <td>
                  <Button
                    onClick={() => toggleUserStatus(user.id)}
                    ariaLabel={user.isActive ? "Disable User" : "Enable User"}
                    className={`status-toggle ${user.isActive ? "active" : "inactive"}`}
                  >
                    {user.isActive ? "Disable" : "Enable"}
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserManagement;