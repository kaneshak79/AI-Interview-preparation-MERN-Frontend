import { useState } from "react";
import API from "../api/axios";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const submit = async () => {
    await API.post("/auth/forgot-password", { email });
    setMsg("Reset link sent to your email");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#eef2ff] via-[#fdf2f8] to-[#f0f9ff] px-4">
      
      <div className="bg-white/70 backdrop-blur-xl border border-gray-200 rounded-2xl shadow-xl p-8 w-full max-w-md">
        
        <h2 className="text-2xl font-bold text-center mb-4">
          Forgot Password
        </h2>

        <p className="text-sm text-gray-500 text-center mb-6">
          Enter your email to receive reset link
        </p>

        <input
          type="email"
          placeholder="you@example.com"
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-gray-200 rounded-lg px-4 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        <button
          onClick={submit}
          className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white py-3 rounded-lg"
        >
          Send Reset Link
        </button>

        {msg && (
          <p className="text-green-600 text-center mt-4 text-sm">
            {msg}
          </p>
        )}

      </div>
    </div>
  );
}