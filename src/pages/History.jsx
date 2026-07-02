



import { useEffect, useState } from "react";
import API from "../api/axios";
import { useNavigate } from "react-router-dom";

export default function History() {
  const [data, setData] = useState([]);
  const nav = useNavigate();

  useEffect(() => {
    API.get("/interviews")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#eef2ff] via-[#fdf2f8] to-[#f0f9ff]">

      {/* 🔥 COMPACT NAVBAR */}
      <div className="sticky top-0 z-50 backdrop-blur-md bg-white/60 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-3 py-1 flex justify-between items-center">

          <h1 className="text-sm md:text-base font-semibold text-gray-900">
            Intervexa<span className="text-purple-600">AI</span>
          </h1>

          <button
            onClick={() => nav("/")}
            className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-3 py-1 rounded text-xs shadow-sm hover:scale-105 transition"
          >
            + New
          </button>

        </div>
      </div>

      {/* 🔥 MAIN */}
      <div className="max-w-6xl mx-auto px-6 py-10">

        {/* HEADER */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900">
            Interview History
          </h2>
          <p className="text-gray-500 mt-2">
            Review your past interviews and performance
          </p>
        </div>

        {/* EMPTY STATE */}
        {data.length === 0 && (
          <div className="flex flex-col items-center justify-center mt-32 text-center">
            <div className="text-5xl mb-4">📊</div>
            <p className="text-xl font-semibold text-gray-700">
              No interviews yet
            </p>
            <p className="text-gray-500 mt-2 text-sm">
              Start practicing to see your history here
            </p>
          </div>
        )}

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {data.map((i) => (
            <div
              key={i._id}
              onClick={() => nav(`/detail/${i._id}`)}   // ✅ whole card clickable
              className="group relative bg-white/70 backdrop-blur-xl border border-gray-200 p-6 rounded-2xl shadow-md cursor-pointer transition hover:shadow-xl hover:-translate-y-1"
            >

              {/* ✅ FIXED overlay (no click blocking) */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-10 transition pointer-events-none"></div>

              {/* TOP */}
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {i.category || "Interview"}
                </h3>

                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    i.score >= 70
                      ? "bg-green-100 text-green-600"
                      : i.score >= 40
                      ? "bg-yellow-100 text-yellow-600"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {i.score || 0}%
                </span>
              </div>

              {/* DETAILS */}
              <div className="text-sm text-gray-600 mb-5 space-y-2">

                {i.difficulty && (
                  <p>
                    ⚡ Difficulty:{" "}
                    <span className="text-gray-800 font-medium">
                      {i.difficulty}
                    </span>
                  </p>
                )}

                <p>
                  📅{" "}
                  <span className="text-gray-800">
                    {new Date(i.createdAt).toLocaleDateString()}
                  </span>
                </p>

                <p className="text-xs text-gray-400">
                  Status: {i.status || "Completed"}
                </p>
              </div>

              {/* CTA (optional visual only) */}
              <div className="text-sm font-medium text-purple-600 group-hover:underline">
                View Details →
              </div>

            </div>
          ))}

        </div>
      </div>
    </div>
  );
}
