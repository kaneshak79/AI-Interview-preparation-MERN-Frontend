import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../api/axios";

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const { token } = useParams();
  const nav = useNavigate();

  const submit = async () => {
    await API.post(`/auth/reset-password/${token}`, { password });
    nav("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#eef2ff] via-[#fdf2f8] to-[#f0f9ff] px-4">

      <div className="bg-white/70 backdrop-blur-xl border border-gray-200 rounded-2xl shadow-xl p-8 w-full max-w-md">

        <h2 className="text-2xl font-bold text-center mb-4">
          Reset Password
        </h2>

        <input
          type="password"
          placeholder="New password"
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border border-gray-200 rounded-lg px-4 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        <button
          onClick={submit}
          className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white py-3 rounded-lg"
        >
          Update Password
        </button>

      </div>
    </div>
  );
}