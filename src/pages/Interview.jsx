
//       </div>
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import API from "../api/axios";
import { useNavigate } from "react-router-dom";

export default function Interview() {
  const nav = useNavigate();

  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const [answers, setAnswers] = useState([]);
  const [loading, setLoading] = useState(false);

  const interviewData = JSON.parse(
    localStorage.getItem("interviewData") || "{}"
  );

  const interviewId = localStorage.getItem("interviewId");

  useEffect(() => {
    const stored = localStorage.getItem("questions");
    if (stored) setQuestions(JSON.parse(stored));
  }, []);

  const currentQuestion = questions[index];

  const handleNext = async () => {
    if (!answer.trim()) return alert("Please write an answer");

    const updated = [...answers, { question: currentQuestion, answer }];

    setAnswers(updated);
    setAnswer("");

    if (index + 1 < questions.length) {
      setIndex(index + 1);
    } else {
      await submit(updated);
    }
  };

  const submit = async (finalAnswers) => {
    try {
      setLoading(true);

      const token = localStorage.getItem("token");

      const res = await API.post(
        "/responses",
        {
          interviewId,
          answers: finalAnswers,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const safeResult = {
        msg: res.data.msg,
        score: res.data.score,
        responses: res.data.responses || [],
      };

      localStorage.setItem("result", JSON.stringify(safeResult));
      nav("/result");
    } catch (err) {
      alert(err.response?.data?.msg || "Submit failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#eef2ff] via-[#fdf2f8] to-[#f0f9ff] flex">

      {/* LEFT PANEL */}
      <div className="w-1/3 m-4 rounded-2xl backdrop-blur-xl border border-gray-200 p-6 flex flex-col shadow-md relative overflow-hidden bg-white/60">

        <div className="absolute inset-0 bg-gradient-to-br from-[#eef2ff] via-[#fdf2f8] to-[#f0f9ff] opacity-80"></div>

        <div className="relative z-10 flex flex-col h-full">

          <h2 className="text-lg font-semibold text-gray-900 mb-6">
            Interview Info
          </h2>

          <div className="space-y-3 text-sm text-gray-700">
            <p><b>Role:</b> {interviewData.role || "N/A"}</p>
            <p><b>Category:</b> {interviewData.category || "N/A"}</p>
            <p><b>Responsibilities:</b> {interviewData.responsibilities || "N/A"}</p>
            <p><b>Job Description:</b> {interviewData.jobDesc || "N/A"}</p>
            <p><b>Job Link:</b> {interviewData.jobLink || "N/A"}</p>
          </div>

          {/* PROGRESS */}
          <div className="mt-auto">
            <p className="text-sm font-semibold text-gray-700 mb-2">
              Progress
            </p>

            <p className="text-xs text-gray-500 mb-2">
              {questions.length ? `${index + 1} / ${questions.length}` : "0 / 0"}
            </p>

            <div className="w-full bg-white/60 h-2 rounded-full overflow-hidden">
              <div
                className="h-2 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-500"
                style={{
                  width: questions.length
                    ? `${((index + 1) / questions.length) * 100}%`
                    : "0%",
                }}
              />
            </div>
          </div>

        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="flex-1 m-4 rounded-2xl backdrop-blur-xl border border-gray-200 p-6 shadow-md flex flex-col relative overflow-hidden bg-white/60">

        <div className="absolute inset-0 bg-gradient-to-br from-[#eef2ff] via-[#fdf2f8] to-[#f0f9ff] opacity-80"></div>

        <div className="relative z-10 flex flex-col h-full">

          {!currentQuestion ? (
            <div className="flex flex-col items-center justify-center h-full">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Ready to Start Interview 🚀
              </h2>

              <button
                onClick={() => setIndex(0)}
                className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-3 rounded-xl shadow hover:scale-105 transition"
              >
                Start Interview
              </button>
            </div>
          ) : (
            <>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                {currentQuestion}
              </h2>

              <textarea
                className="flex-1 w-full p-4 rounded-xl border border-gray-200 bg-white
                focus:outline-none focus:ring-2 focus:ring-purple-400 resize-none"
                placeholder="Type your answer here..."
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
              />

              <button
                onClick={handleNext}
                disabled={loading}
                className="mt-4 w-full py-3 rounded-xl font-semibold text-white 
                bg-gradient-to-r from-purple-600 to-pink-500 hover:scale-[1.01] transition disabled:opacity-50"
              >
                {loading
                  ? "Submitting..."
                  : index + 1 === questions.length
                  ? "Finish Interview 🎯"
                  : "Next Question →"}
              </button>
            </>
          )}

        </div>
      </div>

    </div>
  );
}
