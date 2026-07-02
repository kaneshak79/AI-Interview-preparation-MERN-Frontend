
// //     </div>
// //   );
// // }


import { useState } from "react";
import API from "../api/axios";
import { useNavigate } from "react-router-dom";

export default function StartInterview() {
  const nav = useNavigate();

  const [step, setStep] = useState(1);

  const [data, setData] = useState({
    role: "",
    category: "",
    difficulty: "",
    jobDesc: "",
    jobLink: "",
    responsibilities: "",
    resume: null,
  });

  // 🔥 START INTERVIEW API
  const startInterview = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return alert("Login required");

      // ✅ FORM DATA (IMPORTANT for file upload)
      const formData = new FormData();

      formData.append("role", data.role);
      formData.append("category", data.category);
      formData.append("difficulty", data.difficulty);
      formData.append("jobDesc", data.jobDesc);
      formData.append("jobLink", data.jobLink);
      formData.append("responsibilities", data.responsibilities);

      if (data.resume) {
        formData.append("resume", data.resume);
      }

      const res = await API.post("/interviews/start", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      const interview = res.data?.interview;

      const questions = Array.isArray(res.data?.questions)
        ? res.data.questions
        : [];

      if (!interview?.id || !questions.length) {
        alert("Invalid AI response");
        return;
      }

      // 🔥 SAVE DATA
      localStorage.setItem("interviewId", interview.id);
      localStorage.setItem("questions", JSON.stringify(questions));

      // 🔥 SAVE FULL CONTEXT (IMPORTANT FOR LEFT PANEL)
      localStorage.setItem(
        "interviewData",
        JSON.stringify({
          role: data.role,
          category: data.category,
          difficulty: data.difficulty,
          jobDesc: data.jobDesc,
          jobLink: data.jobLink,
          responsibilities: data.responsibilities,
        })
      );

      nav("/interview");

    } catch (err) {
      console.log(err);
      alert("Failed to start interview");
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-[#eef2ff] via-[#fdf2f8] to-[#f0f9ff] px-4">

      <div className="w-full max-w-2xl animate-popIn">

        <div className="bg-white/70 backdrop-blur-xl border border-gray-200 rounded-3xl shadow-2xl p-8">

          {/* HEADER */}
          <h2 className="text-2xl font-bold text-gray-900">
            Start Interview 🚀
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            Step {step} of 6
          </p>

          {/* PROGRESS BAR */}
          <div className="mt-4 h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-purple-600 to-pink-500 transition-all duration-500"
              style={{ width: `${(step / 6) * 100}%` }}
            />
          </div>

          {/* STEP 1 */}
          {step === 1 && (
            <div className="mt-6 space-y-4 animate-fadeIn">

              <input
                className="w-full p-3 border rounded-xl"
                placeholder="Role (Frontend Developer)"
                onChange={(e) =>
                  setData({ ...data, role: e.target.value })
                }
              />

              <button
                onClick={() => setStep(2)}
                className="w-full bg-purple-600 text-white p-3 rounded-xl"
              >
                Next
              </button>
            </div>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <div className="mt-6 animate-fadeIn">

              <div className="grid grid-cols-2 gap-3">
                {["Technical", "HR", "Behavioral", "Managerial"].map((c) => (
                  <div
                    key={c}
                    onClick={() => setData({ ...data, category: c })}
                    className={`p-3 border rounded-xl text-center cursor-pointer ${
                      data.category === c
                        ? "bg-purple-600 text-white"
                        : "bg-white"
                    }`}
                  >
                    {c}
                  </div>
                ))}
              </div>

              <button
                onClick={() => setStep(3)}
                className="mt-6 w-full bg-purple-600 text-white p-3 rounded-xl"
              >
                Next
              </button>
            </div>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <div className="mt-6 space-y-3 animate-fadeIn">

              {["Easy", "Medium", "Hard"].map((d) => (
                <div
                  key={d}
                  onClick={() =>
                    setData({ ...data, difficulty: d })
                  }
                  className={`p-3 border rounded-xl cursor-pointer ${
                    data.difficulty === d
                      ? "bg-green-600 text-white"
                      : "bg-white"
                  }`}
                >
                  {d}
                </div>
              ))}

              <button
                onClick={() => setStep(4)}
                className="w-full bg-purple-600 text-white p-3 rounded-xl"
              >
                Next
              </button>
            </div>
          )}

          {/* STEP 4 — JOB DETAILS */}
          {step === 4 && (
            <div className="mt-6 space-y-3 animate-fadeIn">

              <input
                className="w-full p-3 border rounded-xl"
                placeholder="Job Description"
                onChange={(e) =>
                  setData({ ...data, jobDesc: e.target.value })
                }
              />

              <input
                className="w-full p-3 border rounded-xl"
                placeholder="Job Link"
                onChange={(e) =>
                  setData({ ...data, jobLink: e.target.value })
                }
              />

              <textarea
                className="w-full p-3 border rounded-xl"
                placeholder="Responsibilities"
                onChange={(e) =>
                  setData({ ...data, responsibilities: e.target.value })
                }
              />

              <button
                onClick={() => setStep(5)}
                className="w-full bg-purple-600 text-white p-3 rounded-xl"
              >
                Next
              </button>
            </div>
          )}

          {/* STEP 5 — RESUME */}
          {step === 5 && (
            <div className="mt-6 space-y-4 animate-fadeIn">

              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={(e) =>
                  setData({ ...data, resume: e.target.files[0] })
                }
              />

              <button
                onClick={() => setStep(6)}
                className="w-full bg-green-600 text-white p-3 rounded-xl"
              >
                Next
              </button>
            </div>
          )}

          {/* STEP 6 — REVIEW */}
          {step === 6 && (
            <div className="mt-6 space-y-4 animate-fadeIn">

              <div className="border p-4 rounded-xl space-y-1">
                <p><b>Role:</b> {data.role}</p>
                <p><b>Category:</b> {data.category}</p>
                <p><b>Difficulty:</b> {data.difficulty}</p>
                <p><b>Job Link:</b> {data.jobLink}</p>
              </div>

              <button
                onClick={startInterview}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-xl"
              >
                Start Interview 🚀
              </button>
            </div>
          )}

        </div>
      </div>

      {/* ANIMATION */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }

          .animate-fadeIn {
            animation: fadeIn 0.4s ease-out;
          }

          @keyframes popIn {
            from { opacity: 0; transform: scale(0.95); }
            to { opacity: 1; transform: scale(1); }
          }

          .animate-popIn {
            animation: popIn 0.5s ease-out;
          }
        `}
      </style>

    </div>
  );
}


// import { useState } from "react";
// import API from "../api/axios";
// import { useNavigate } from "react-router-dom";

// export default function StartInterview() {
//   const nav = useNavigate();

//   const [step, setStep] = useState(1);
//   const [data, setData] = useState({
//     role: "",
//     category: "",
//     difficulty: "",
//     jobDesc: "",
//     responsibilities: "",
//     jobLink: "",
//   });

//   const startInterview = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       if (!token) return alert("Login required");

//       const res = await API.post(
//         "/interviews/start",
//         data,
//         { headers: { Authorization: `Bearer ${token}` } }
//       );

//       const interview = res.data?.interview;
//       const questions = res.data?.questions || [];

//       if (!interview?._id || !questions.length) {
//         return alert("Invalid AI response");
//       }

//       // ✅ SAVE FULL CONTEXT
//       localStorage.setItem(
//         "interviewData",
//         JSON.stringify({
//           interviewId: interview._id,
//           ...data,
//         })
//       );

//       localStorage.setItem("interviewId", interview._id);
//       localStorage.setItem("questions", JSON.stringify(questions));

//       nav("/interview");
//     } catch (err) {
//       console.log(err);
//       alert("Failed to start interview");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#eef2ff] via-[#fdf2f8] to-[#f0f9ff] p-6">

//       <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-xl">

//         <h2 className="text-2xl font-bold mb-4">Start Interview</h2>

//         {/* STEP 1 */}
//         {step === 1 && (
//           <>
//             <input
//               className="border p-2 w-full mb-3"
//               placeholder="Job Role"
//               onChange={(e) => setData({ ...data, role: e.target.value })}
//             />

//             <input
//               className="border p-2 w-full mb-3"
//               placeholder="Job Description"
//               onChange={(e) => setData({ ...data, jobDesc: e.target.value })}
//             />

//             <button
//               className="bg-black text-white w-full p-2"
//               onClick={() => setStep(2)}
//             >
//               Next
//             </button>
//           </>
//         )}

//         {/* STEP 2 */}
//         {step === 2 && (
//           <>
//             <input
//               className="border p-2 w-full mb-3"
//               placeholder="Responsibilities"
//               onChange={(e) =>
//                 setData({ ...data, responsibilities: e.target.value })
//               }
//             />

//             <input
//               className="border p-2 w-full mb-3"
//               placeholder="Job Link"
//               onChange={(e) => setData({ ...data, jobLink: e.target.value })}
//             />

//             <button
//               className="bg-black text-white w-full p-2"
//               onClick={() => setStep(3)}
//             >
//               Next
//             </button>
//           </>
//         )}

//         {/* STEP 3 */}
//         {step === 3 && (
//           <>
//             {["Technical", "HR", "Behavioral", "Managerial"].map((c) => (
//               <div
//                 key={c}
//                 onClick={() => setData({ ...data, category: c })}
//                 className={`p-2 border mb-2 cursor-pointer ${
//                   data.category === c ? "bg-blue-500 text-white" : ""
//                 }`}
//               >
//                 {c}
//               </div>
//             ))}

//             <button
//               className="bg-black text-white w-full p-2 mt-3"
//               onClick={() => setStep(4)}
//             >
//               Next
//             </button>
//           </>
//         )}

//         {/* STEP 4 */}
//         {step === 4 && (
//           <>
//             <select
//               className="border p-2 w-full mb-3"
//               onChange={(e) =>
//                 setData({ ...data, difficulty: e.target.value })
//               }
//             >
//               <option>Easy</option>
//               <option>Medium</option>
//               <option>Hard</option>
//             </select>

//             <button
//               onClick={startInterview}
//               className="bg-green-600 text-white w-full p-2"
//             >
//               Start Interview
//             </button>
//           </>
//         )}

//       </div>
//     </div>
//   );
// }
