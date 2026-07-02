

// // //       </div>
// // //     </div>
// // //   );
// // // }

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/axios";

export default function InterviewSetup() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({});
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const next = () => setStep((s) => s + 1);

  const handle = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const Option = ({ field, value }) => (
    <button
      onClick={() => handle(field, value)}
      className={`w-full p-3 rounded-xl border transition text-left
        ${
          form[field] === value
            ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md"
            : "bg-white/70 hover:bg-white border-gray-200 text-gray-700"
        }`}
    >
      {value}
    </button>
  );

  // 🚀 START INTERVIEW (NO CHANGE LOGIC)
  const startInterview = async () => {
    try {
      setLoading(true);

      const token = localStorage.getItem("token");

      const res = await API.post(
        "/interviews/start",
        { ...form },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("AI RESPONSE:", res.data);

      // save questions
      localStorage.setItem("questions", JSON.stringify(res.data.questions));

      // save interviewId
      // localStorage.setItem("interviewId", res.data.interviewId);

     console.log("START API RESPONSE:", res.data);

localStorage.setItem("interviewId", res.data.interviewId);
// localStorage.setItem("interviewId", res.data._id);

      // save setup data for left panel
      localStorage.setItem("interviewData", JSON.stringify(form));

      navigate("/interview");
    } catch (err) {
      alert(err.response?.data?.msg || "Failed to start interview");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#eef2ff] via-[#fdf2f8] to-[#f0f9ff] p-4">

      <div className="w-full max-w-3xl rounded-2xl bg-white/70 backdrop-blur-xl border border-gray-200 shadow-xl p-8">

        {/* STEP 0 */}
        {step === 0 && (
          <>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              Welcome to IntervexaAI Interview 🚀
            </h2>

            <p className="text-gray-600 mb-6">
              Let’s personalize your experience
            </p>

            <button
              onClick={next}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white"
            >
              Next
            </button>
          </>
        )}

        {/* STEP 1 */}
        {step === 1 && (
          <>
            <h2 className="text-xl font-semibold mb-4">Your Role</h2>

            <input
              className="w-full p-3 rounded-xl border border-gray-200"
              onChange={(e) => handle("role", e.target.value)}
              placeholder="HR / Developer"
            />

            <button
              onClick={next}
              className="w-full mt-4 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white"
            >
              Next
            </button>
          </>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <>
            <h2 className="text-xl font-semibold mb-4">Category</h2>

            <input
              className="w-full p-3 rounded-xl border border-gray-200"
              onChange={(e) => handle("category", e.target.value)}
              placeholder="Frontend / Backend / HR"
            />

            <button
              onClick={next}
              className="w-full mt-4 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white"
            >
              Next
            </button>
          </>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <>
            <h2 className="text-xl font-semibold mb-4">Job Description</h2>

            <textarea
              className="w-full p-3 rounded-xl border border-gray-200"
              onChange={(e) => handle("jobDesc", e.target.value)}
              placeholder="Describe job..."
            />

            <button
              onClick={next}
              className="w-full mt-4 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white"
            >
              Next
            </button>
          </>
        )}

        {/* STEP 4 */}
        {step === 4 && (
          <>
            <h2 className="text-xl font-semibold mb-4">Job Link</h2>

            <input
              className="w-full p-3 rounded-xl border border-gray-200"
              onChange={(e) => handle("jobLink", e.target.value)}
              placeholder="https://company.com/job"
            />

            <button
              onClick={next}
              className="w-full mt-4 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white"
            >
              Next
            </button>
          </>
        )}

        {/* STEP 5 */}
        {step === 5 && (
          <>
            <h2 className="text-xl font-semibold mb-4">Responsibilities</h2>

            <textarea
              className="w-full p-3 rounded-xl border border-gray-200"
              onChange={(e) => handle("responsibilities", e.target.value)}
              placeholder="Job responsibilities..."
            />

            <button
              onClick={next}
              className="w-full mt-4 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white"
            >
              Next
            </button>
          </>
        )}

        {/* STEP 6 */}
        {step >= 6 && step < 9 && (
          <div className="text-center">
            <h2 className="text-xl font-semibold mb-4">
              Continue Setup 🚀
            </h2>

            <button
              onClick={next}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white"
            >
              Next
            </button>
          </div>
        )}

        {/* STEP 9 - FIXED */}
        {/* {step >= 9 && (
          <div className="text-center">
            <h2 className="text-xl font-semibold mb-4">
              Ready for AI Interview 🚀
            </h2>

            <button
              disabled={loading}
              onClick={startInterview}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white"
            >
              {loading ? "Generating AI Interview..." : "Start Interview"}
            </button>
          </div>
        )} */}

        {step >= 9 && (
  <div className="text-center">
    <h2 className="text-xl font-semibold mb-4">
      Ready for AI Interview 🚀
    </h2>

    <button
      disabled={loading}
      onClick={async () => {
        await startInterview();

        // 🔥 extra safety check (prevents undefined issues)
        const interviewId = localStorage.getItem("interviewId");

        if (!interviewId || interviewId === "undefined") {
          alert("Interview ID missing. Please try again.");
          return;
        }

        navigate("/interview");
      }}
      className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white"
    >
      {loading ? "Generating AI Interview..." : "Start Interview"}
    </button>
  </div>
)}

      </div>
    </div>
  );
}

// //only submit failed issue



