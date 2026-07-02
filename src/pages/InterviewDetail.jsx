
//     </div>
//   );
// }


import { useEffect, useState } from "react";
import API from "../api/axios";
import { useParams } from "react-router-dom";

export default function InterviewDetail() {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    API.get(`/responses/interview/${id}`).then(res => setData(res.data));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#eef2ff] via-[#fdf2f8] to-[#f0f9ff] px-6 py-10">

      <div className="max-w-4xl mx-auto">

        {/* HEADER */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-gray-900">
            Interview Details
          </h1>
          <p className="text-gray-500 mt-2 text-sm">
            Review your answers and performance
          </p>
        </div>

        {/* EMPTY */}
        {data.length === 0 && (
          <div className="text-center text-gray-500 mt-20">
            No responses found 📭
          </div>
        )}

        {/* LIST */}
        <div className="space-y-6">

          {data.map((r, index) => (
            <div
              key={r._id}
              className="group relative bg-white/70 backdrop-blur-xl border border-gray-200 p-6 rounded-2xl shadow-md hover:shadow-lg transition"
            >

              {/* Glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-10 transition pointer-events-none"></div>

              {/* Question Number */}
              <div className="mb-3 text-sm font-semibold text-purple-600">
                Question {index + 1}
              </div>

              {/* Answer */}
              <p className="text-gray-800 text-sm leading-relaxed mb-4">
                {r.answer}
              </p>

              {/* SCORE */}
              <div className="flex justify-between items-center">

                <span className="text-xs text-gray-400">
                  Response Score
                </span>

                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    r.score >= 70
                      ? "bg-green-100 text-green-600"
                      : r.score >= 40
                      ? "bg-yellow-100 text-yellow-600"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {r.score || 0}%
                </span>

              </div>

            </div>
          ))}

        </div>

      </div>
    </div>
  );
}
