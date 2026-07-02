

import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const commonMenu = [
    { name: "Start Interview", path: "/start" },
    { name: "History", path: "/history" },
    { name: "Analytics", path: "/analytics" },
    { name: "Profile", path: "/profile" },
    { name: "Upload CV", path: "/upload" },
    { name: "Upgrade Plan", path: "/payment" }
  ];

  const adminMenu = [
    { name: "Admin Users", path: "/admin/users" },
    { name: "Admin Questions", path: "/admin/questions" },
  ];

  const menu =
    user?.role === "admin"
      ? [...commonMenu, ...adminMenu]
      : commonMenu;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#eef2ff] via-[#fdf2f8] to-[#f0f9ff]">

      {/* 🔥 NAVBAR */}
      {/* <div className="backdrop-blur-lg bg-white/70 border-b border-gray-200 shadow-sm px-6 py-4 flex justify-between items-center sticky top-0 z-50">
        <h1 className="text-2xl font-bold text-gray-900">
          Intervexa<span className="text-purple-600">AI</span>
        </h1>

        <button
          onClick={() => {
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            navigate("/");
          }}
          className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-5 py-2 rounded-lg shadow hover:scale-105 transition"
        >
          Logout
        </button>
      </div> */}
      {/* 🔥 NAVBAR */}
      {/* 🔥 COMPACT FLOATING NAVBAR */}

 <div className="sticky top-0 z-50 backdrop-blur-md bg-white/60 border-b border-gray-200">
  <div className="max-w-6xl mx-auto px-6 py-1 flex justify-between items-center">

    
    <h1 className="text-lg md:text-xl font-semibold text-gray-900 tracking-tight">
      Intervexa<span className="text-purple-600">AI</span>
    </h1>

    
    <div className="flex items-center gap-4">

    
      {user?.name && (
        <span className="hidden sm:block text-sm text-gray-600">
          Hi, {user.name}
        </span>
      )}

     
      <button
        onClick={() => {
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          navigate("/");
        }}
        className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-4 py-1.5 rounded-md text-sm shadow hover:scale-105 transition"
      >
        Logout
      </button>

      <button
        onClick={() => {
          // localStorage.removeItem("token");
          // localStorage.removeItem("user");
          navigate("/");
        }}
        className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-4 py-1.5 rounded-md text-sm shadow hover:scale-105 transition"
      >
        Home
      </button>

    </div>
  </div>
</div> 

      {/* 🔥 MAIN */}
      <div className="max-w-6xl mx-auto px-6 py-10">
{/* <div className="h-[2px] bg-gradient-to-r from-purple-500 via-pink-500 to-transparent"> */}
        {/* Welcome */}
        <div className="mb-10 animate-fadeUp">
          <h2 className="text-3xl font-bold text-gray-900">
            Welcome{user?.name ? `, ${user.name}` : ""} 👋
          </h2>
          <p className="text-gray-500 mt-2">
            Track your progress and improve your interview skills
          </p>
        </div>

        {/* 🔥 MENU */}
        <div className="grid md:grid-cols-3 gap-6">
          {menu.map((item, i) => (
            <div
              key={i}
              onClick={() => navigate(item.path)}
              className="group relative bg-white/70 backdrop-blur-xl border border-gray-200 p-6 rounded-2xl shadow-md cursor-pointer transition hover:shadow-xl hover:-translate-y-1 animate-fadeUp"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Glow hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-10 transition"></div>

              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {item.name}
              </h3>

              <p className="text-gray-500 text-sm">
                Go to {item.name}
              </p>
            </div>
          ))}
        </div>

        {/* 🔥 STATS */}
        <div className="mt-14 grid md:grid-cols-3 gap-6">

          <div className="bg-white/70 backdrop-blur-xl border border-gray-200 p-6 rounded-2xl shadow-md hover:shadow-xl transition animate-fadeUp">
            <h3 className="text-gray-500 text-sm mb-2">
              Total Interviews
            </h3>
            <p className="text-3xl font-bold text-gray-900">12</p>
          </div>

          <div className="bg-white/70 backdrop-blur-xl border border-gray-200 p-6 rounded-2xl shadow-md hover:shadow-xl transition animate-fadeUp">
            <h3 className="text-gray-500 text-sm mb-2">
              Avg Score
            </h3>
            <p className="text-3xl font-bold text-gray-900">78%</p>
          </div>

          <div className="bg-white/70 backdrop-blur-xl border border-gray-200 p-6 rounded-2xl shadow-md hover:shadow-xl transition animate-fadeUp">
            <h3 className="text-gray-500 text-sm mb-2">
              Weak Area
            </h3>
            <p className="text-3xl font-bold text-gray-900">
              Communication
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}
