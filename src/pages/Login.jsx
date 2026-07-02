
//   );
// }


import { useState } from "react";
import API from "../api/axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();

  const submit = async () => {
    const res = await API.post("/auth/login", { email, password });
    // localStorage.setItem("token", res.data.token);
    localStorage.setItem("token", res.data.token);
localStorage.setItem("user", JSON.stringify(res.data.user));
    nav("/dashboard");
  };

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-[#eef2ff] via-[#fdf2f8] to-[#f0f9ff]">

      {/* LEFT SIDE (Branding) */}
      <div className="hidden md:flex w-1/2 items-center justify-center relative">

        {/* Glow */}
        <div className="absolute w-[400px] h-[400px] bg-blue-300 rounded-full blur-3xl opacity-30"></div>

        <div className="relative z-10 text-center px-10">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Intervexa<span className="text-purple-600">AI</span>
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Welcome back! Continue your journey and master your interviews.
          </p>
        </div>
      </div>

      {/* RIGHT SIDE (FORM) */}
      <div className="w-full md:w-1/2 flex items-center justify-center px-6 py-12">

        <div className="w-full max-w-md bg-white/70 backdrop-blur-xl border border-gray-200 rounded-2xl shadow-xl p-8">

          {/* Title */}
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-2">
            Welcome Back
          </h2>
          <p className="text-center text-gray-500 text-sm mb-6">
            Login to continue your journey
          </p>

          {/* EMAIL */}
          <div className="mb-4">
            <label className="block text-sm mb-1 text-gray-600">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
            />
          </div>

          {/* PASSWORD */}
          <div className="mb-6">
            <label className="block text-sm mb-1 text-gray-600">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
            />
          </div>

          {/* BUTTON */}
          <button
            onClick={submit}
            className="relative w-full bg-gradient-to-r from-purple-600 via-pink-500 to-red-400 text-white py-3 rounded-lg font-medium overflow-hidden group"
          >
            <span className="relative z-10 flex justify-center items-center gap-2">
              Login →
            </span>

            {/* Shine */}
            <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition duration-700 bg-white/20 skew-x-12"></span>
          </button>

          {/* FOOTER */}
          <p className="text-center text-sm text-gray-500 mt-6">
            Don’t have an account?{" "}
            <span
              onClick={() => nav("/register")}
              className="text-purple-600 cursor-pointer hover:underline"
            >
              Sign up
            </span>
          </p>
<div className="flex justify-center mb-4 mt-2">
  <span
    onClick={() => nav("/forgot-password")}
    className="text-sm text-purple-600 cursor-pointer hover:underline"
  >
    Forgot Password?
  </span>
</div>
        </div>
        
      </div>
      
    </div>
  );
}
