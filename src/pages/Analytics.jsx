
// // //above code crt

import { useEffect, useState } from "react";
import API from "../api/axios";

export default function Analytics() {
  const [overall, setOverall] = useState({});
  const [progress, setProgress] = useState([]);
  const [latest, setLatest] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      API.get("/analytics/overall"),
      API.get("/analytics/progress"),
      API.get("/analytics/latest"),
    ])
      .then(([o, p, l]) => {
        setOverall(o.data);
        setProgress(p.data);
        setLatest(l.data);
      })
      .finally(() => setLoading(false));
  }, []);

  // 🔥 Insight Logic
  const getInsight = () => {
    const score = overall.avgScore || 0;

    if (overall.totalAnswers < 2) {
      return {
        text: "Complete more interviews to unlock detailed analytics 📊",
        color: "text-yellow-600",
      };
    }

    if (score >= 80) {
      return {
        text: "You are performing excellent! 🚀 Keep it up!",
        color: "text-green-600",
      };
    }

    if (score >= 50) {
      return {
        text: "Good progress 👍 Practice more to improve.",
        color: "text-blue-600",
      };
    }

    return {
      text: "Needs improvement 📉 Focus on practice.",
      color: "text-red-600",
    };
  };

  const insight = getInsight();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        Loading analytics...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        {/* <h1 className="text-3xl font-bold mb-8 text-gray-800">
          Analytics Dashboard
        </h1> */}

        <h1 className="text-4xl font-extrabold mb-8 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
  Analytics Dashboard
</h1>

        {/* ================= OVERVIEW ================= */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">

          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <p className="text-gray-500">Average Score</p>
            <h2 className="text-3xl font-bold text-indigo-600">
              {overall.avgScore ? overall.avgScore.toFixed(1) : 0}%
            </h2>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <p className="text-gray-500">Total Answers</p>
            <h2 className="text-3xl font-bold text-purple-600">
              {overall.totalAnswers || 0}
            </h2>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <p className="text-gray-500">Latest Score</p>
            <h2 className="text-3xl font-bold text-pink-600">
              {latest.score || 0}%
            </h2>
            <p className="text-sm text-gray-400">
              {latest.status || "No recent data"}
            </p>
          </div>

        </div>

        {/* ================= INSIGHT ================= */}
        <div className="bg-white p-6 rounded-2xl shadow mb-10 hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            Performance Insight
          </h2>

          <p className={`text-lg font-medium ${insight.color}`}>
            {insight.text}
          </p>
        </div>

        {/* ================= ATTEMPTS SUMMARY ================= */}
        <div className="bg-white p-6 rounded-2xl shadow mb-10 hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            Attempts Summary
          </h2>

          <p className="text-gray-600">
            You have completed{" "}
            <span className="font-bold text-indigo-600">
              {overall.totalAnswers || 0}
            </span>{" "}
            interview questions.
          </p>

          {overall.totalAnswers < 3 && (
            <p className="text-sm text-yellow-600 mt-2">
              Complete more interviews to see deeper insights.
            </p>
          )}
        </div>

        {/* ================= RECENT PERFORMANCE ================= */}
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-6 text-gray-800">
            Recent Performance
          </h2>

          {progress.length === 0 && (
            <p className="text-gray-400">No progress data yet</p>
          )}

          <div className="space-y-4">
            {progress.map((p, i) => (
              <div
                key={i}
                className="flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition p-4 rounded-xl"
              >
                <span className="text-gray-600">
                  {p._id.month}/{p._id.year}
                </span>

                <span className="font-semibold text-indigo-600">
                  {p.avgScore.toFixed(0)}%
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
