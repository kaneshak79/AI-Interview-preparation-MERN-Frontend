


import { useEffect, useState } from "react";
import API from "../api/axios";

export default function AdminUsers() {
  const [users, setUsers] = useState([]);
  const [msg, setMsg] = useState("");

  const loadUsers = () => {
    API.get("/users")
      .then((res) => setUsers(res.data))
      .catch(() => setMsg("Failed to load users ❌"));
  };

  useEffect(() => {
    loadUsers();
  }, []);

  // CHANGE ROLE
  const changeRole = async (id, role) => {
    try {
      await API.put(`/users/${id}/role`, { role });
      setMsg("Role updated ✅");
      loadUsers();
    } catch {
      setMsg("Role update failed ❌");
    }
  };

  // DELETE USER
  const deleteUser = async (id) => {
    try {
      await API.delete(`/users/${id}`);
      setMsg("User deleted ✅");
      loadUsers();
    } catch {
      setMsg("Delete failed ❌");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <div className="max-w-6xl mx-auto bg-white p-6 rounded-2xl shadow">

        {/* HEADER */}
        <h1 className="text-2xl font-bold mb-6">
          Admin - Users
        </h1>

        {/* MESSAGE */}
        {msg && (
          <p className="mb-4 text-sm text-gray-600">{msg}</p>
        )}

        {/* TABLE */}
        <div className="overflow-x-auto">
          <table className="w-full border">

            <thead className="bg-gray-100">
              <tr>
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Email</th>
                <th className="p-3 text-left">Role</th>
                <th className="p-3 text-left">Actions</th>
              </tr>
            </thead>

            <tbody>
              {users.map((u) => (
                <tr key={u._id} className="border-t">

                  <td className="p-3">{u.name}</td>
                  <td className="p-3">{u.email}</td>

                  <td className="p-3">
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        u.role === "admin"
                          ? "bg-green-100 text-green-700"
                          : "bg-gray-200 text-gray-700"
                      }`}
                    >
                      {u.role}
                    </span>
                  </td>

                  <td className="p-3 space-x-2">

                    {/* ROLE BUTTON */}
                    {u.role === "user" ? (
                      <button
                        onClick={() => changeRole(u._id, "admin")}
                        className="bg-blue-600 text-white px-3 py-1 rounded"
                      >
                        Make Admin
                      </button>
                    ) : (
                      <button
                        onClick={() => changeRole(u._id, "user")}
                        className="bg-yellow-500 text-white px-3 py-1 rounded"
                      >
                        Remove Admin
                      </button>
                    )}

                    {/* DELETE */}
                    <button
                      onClick={() => deleteUser(u._id)}
                      className="bg-red-600 text-white px-3 py-1 rounded"
                    >
                      Delete
                    </button>

                  </td>

                </tr>
              ))}
            </tbody>

          </table>
        </div>

      </div>
    </div>
  );
}
