// // // // // // // import { useState } from "react";
// // // // // // // import API from "../api/axios";
// // // // // // // import { useNavigate } from "react-router-dom";

// // // // // // // export default function StartInterview() {
// // // // // // //   const [category, setCategory] = useState("");
// // // // // // //   const [difficulty, setDifficulty] = useState("");
// // // // // // //   const nav = useNavigate();

// // // // // // //   const start = async () => {
// // // // // // //     const res = await API.post("/interviews/start", { category, difficulty });
// // // // // // //     localStorage.setItem("interview", JSON.stringify(res.data));
// // // // // // //     nav("/interview");
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <div>
// // // // // // //       <h2>Start Interview</h2>
// // // // // // //       <input placeholder="category" onChange={(e)=>setCategory(e.target.value)}/>
// // // // // // //       <input placeholder="difficulty" onChange={(e)=>setDifficulty(e.target.value)}/>
// // // // // // //       <button onClick={start}>Start</button>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // }


// // // // // // import { useState } from "react";
// // // // // // import API from "../api/axios";
// // // // // // import { useNavigate } from "react-router-dom";

// // // // // // export default function StartInterview() {
// // // // // //   const nav = useNavigate();

// // // // // //   const [step, setStep] = useState(1);
// // // // // //   const [data, setData] = useState({
// // // // // //     role: "",
// // // // // //     category: "",
// // // // // //     difficulty: "",
// // // // // //   });

// // // // // //   // START API
// // // // // //   const startInterview = async () => {
// // // // // //     try {
// // // // // //       const res = await API.post("/interviews/start", {
// // // // // //         category: data.category || data.role,
// // // // // //         difficulty: data.difficulty,
// // // // // //       });

// // // // // //       localStorage.setItem("interview", JSON.stringify(res.data));
// // // // // //       nav("/interview");
// // // // // //     } catch (err) {
// // // // // //       console.log(err);
// // // // // //     }
// // // // // //   };

// // // // // //   return (
// // // // // //     <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center px-4">

// // // // // //       <div className="bg-white w-full max-w-xl rounded-3xl shadow-xl p-8">

// // // // // //         {/* STEP INDICATOR */}
// // // // // //         <p className="text-sm text-gray-500 mb-4">
// // // // // //           Step {step} of 4
// // // // // //         </p>

// // // // // //         {/* ================= STEP 1 ================= */}
// // // // // //         {step === 1 && (
// // // // // //           <>
// // // // // //             <h2 className="text-2xl font-bold mb-4">
// // // // // //               What role are you preparing for?
// // // // // //             </h2>

// // // // // //             <input
// // // // // //               placeholder="e.g. Frontend Developer, HR, Manager"
// // // // // //               className="w-full border p-3 rounded-lg mb-6"
// // // // // //               onChange={(e) =>
// // // // // //                 setData({ ...data, role: e.target.value })
// // // // // //               }
// // // // // //             />

// // // // // //             <button
// // // // // //               onClick={() => setStep(2)}
// // // // // //               className="w-full bg-black text-white py-3 rounded-lg"
// // // // // //             >
// // // // // //               Next →
// // // // // //             </button>
// // // // // //           </>
// // // // // //         )}

// // // // // //         {/* ================= STEP 2 ================= */}
// // // // // //         {step === 2 && (
// // // // // //           <>
// // // // // //             <h2 className="text-2xl font-bold mb-4">
// // // // // //               Interview Category
// // // // // //             </h2>

// // // // // //             <div className="grid grid-cols-2 gap-4 mb-6">
// // // // // //               {["Technical", "HR", "Behavioral", "Managerial"].map((item) => (
// // // // // //                 <div
// // // // // //                   key={item}
// // // // // //                   onClick={() =>
// // // // // //                     setData({ ...data, category: item })
// // // // // //                   }
// // // // // //                   className={`p-4 border rounded-xl cursor-pointer ${
// // // // // //                     data.category === item
// // // // // //                       ? "bg-blue-600 text-white"
// // // // // //                       : "bg-white"
// // // // // //                   }`}
// // // // // //                 >
// // // // // //                   {item}
// // // // // //                 </div>
// // // // // //               ))}
// // // // // //             </div>

// // // // // //             <button
// // // // // //               onClick={() => setStep(3)}
// // // // // //               className="w-full bg-black text-white py-3 rounded-lg"
// // // // // //             >
// // // // // //               Next →
// // // // // //             </button>
// // // // // //           </>
// // // // // //         )}

// // // // // //         {/* ================= STEP 3 ================= */}
// // // // // //         {step === 3 && (
// // // // // //           <>
// // // // // //             <h2 className="text-2xl font-bold mb-4">
// // // // // //               Choose Difficulty
// // // // // //             </h2>

// // // // // //             <div className="space-y-4 mb-6">
// // // // // //               {[
// // // // // //                 { name: "Easy", desc: "Basic questions" },
// // // // // //                 { name: "Medium", desc: "Balanced level" },
// // // // // //                 { name: "Hard", desc: "Advanced questions" },
// // // // // //                 { name: "Extreme", desc: "Very tough" },
// // // // // //               ].map((d) => (
// // // // // //                 <div
// // // // // //                   key={d.name}
// // // // // //                   onClick={() =>
// // // // // //                     setData({ ...data, difficulty: d.name })
// // // // // //                   }
// // // // // //                   className={`p-4 border rounded-xl cursor-pointer ${
// // // // // //                     data.difficulty === d.name
// // // // // //                       ? "bg-purple-600 text-white"
// // // // // //                       : ""
// // // // // //                   }`}
// // // // // //                 >
// // // // // //                   <h3 className="font-semibold">{d.name}</h3>
// // // // // //                   <p className="text-sm">{d.desc}</p>
// // // // // //                 </div>
// // // // // //               ))}
// // // // // //             </div>

// // // // // //             <button
// // // // // //               onClick={() => setStep(4)}
// // // // // //               className="w-full bg-black text-white py-3 rounded-lg"
// // // // // //             >
// // // // // //               Next →
// // // // // //             </button>
// // // // // //           </>
// // // // // //         )}

// // // // // //         {/* ================= STEP 4 ================= */}
// // // // // //         {step === 4 && (
// // // // // //           <>
// // // // // //             <h2 className="text-2xl font-bold mb-4">
// // // // // //               Ready to start 🚀
// // // // // //             </h2>

// // // // // //             <div className="bg-gray-100 p-4 rounded-xl mb-6">
// // // // // //               <p><b>Role:</b> {data.role}</p>
// // // // // //               <p><b>Category:</b> {data.category}</p>
// // // // // //               <p><b>Difficulty:</b> {data.difficulty}</p>
// // // // // //             </div>

// // // // // //             <button
// // // // // //               onClick={startInterview}
// // // // // //               className="w-full bg-blue-600 text-white py-3 rounded-lg"
// // // // // //             >
// // // // // //               Start Interview →
// // // // // //             </button>
// // // // // //           </>
// // // // // //         )}

// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // }

// // // // // //before crt



// // // // // import { useState } from "react";
// // // // // import API from "../api/axios";
// // // // // import { useNavigate } from "react-router-dom";

// // // // // export default function StartInterview() {
// // // // //   const nav = useNavigate();

// // // // //   const [step, setStep] = useState(1);
// // // // //   const [data, setData] = useState({
// // // // //     role: "",
// // // // //     category: "",
// // // // //     difficulty: "",
// // // // //     jobDesc: "Software Developer",
// // // // //   });

// // // // //   const startInterview = async () => {
// // // // //     try {
// // // // //       console.log("START DATA:", data);

// // // // //       const token = localStorage.getItem("token");

// // // // //       if (!token) {
// // // // //         alert("Login required");
// // // // //         return;
// // // // //       }

// // // // //       const res = await API.post(
// // // // //         "/interviews/start",
// // // // //         {
// // // // //           role: data.role,
// // // // //           difficulty: data.difficulty,
// // // // //           jobDesc: data.jobDesc,
// // // // //           category: data.category,
// // // // //         },
// // // // //         {
// // // // //           headers: {
// // // // //             Authorization: `Bearer ${token}`,
// // // // //           },
// // // // //         }
// // // // //       );

// // // // //       console.log("START RESPONSE:", res.data);

// // // // //       if (!Array.isArray(res.data.questions)) {
// // // // //         alert("Invalid AI response");
// // // // //         return;
// // // // //       }

// // // // //       localStorage.setItem("questions", JSON.stringify(res.data.questions));
// // // // //       localStorage.setItem("interview", JSON.stringify(res.data.interview));

// // // // //       nav("/interview");
// // // // //     } catch (err) {
// // // // //       console.log("START ERROR:", err.response?.data || err.message);
// // // // //       alert(err.response?.data?.msg || "Failed to start interview");
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <div className="min-h-screen flex items-center justify-center bg-gray-100">
// // // // //       <div className="bg-white p-8 rounded-xl shadow w-[500px]">

// // // // //         <h2 className="text-xl font-bold mb-4">Step {step} of 4</h2>

// // // // //         {/* STEP 1 */}
// // // // //         {step === 1 && (
// // // // //           <>
// // // // //             <input
// // // // //               className="border p-2 w-full"
// // // // //               placeholder="Role"
// // // // //               onChange={(e) =>
// // // // //                 setData({ ...data, role: e.target.value })
// // // // //               }
// // // // //             />
// // // // //             <button onClick={() => setStep(2)} className="mt-4 bg-black text-white p-2 w-full">
// // // // //               Next
// // // // //             </button>
// // // // //           </>
// // // // //         )}

// // // // //         {/* STEP 2 */}
// // // // //         {step === 2 && (
// // // // //           <>
// // // // //             {["Technical", "HR", "Behavioral", "Managerial"].map((c) => (
// // // // //               <div
// // // // //                 key={c}
// // // // //                 onClick={() => setData({ ...data, category: c })}
// // // // //                 className={`p-2 border mb-2 cursor-pointer ${
// // // // //                   data.category === c ? "bg-blue-500 text-white" : ""
// // // // //                 }`}
// // // // //               >
// // // // //                 {c}
// // // // //               </div>
// // // // //             ))}
// // // // //             <button onClick={() => setStep(3)} className="bg-black text-white p-2 w-full">
// // // // //               Next
// // // // //             </button>
// // // // //           </>
// // // // //         )}

// // // // //         {/* STEP 3 */}
// // // // //         {step === 3 && (
// // // // //           <>
// // // // //             {["Easy", "Medium", "Hard"].map((d) => (
// // // // //               <div
// // // // //                 key={d}
// // // // //                 onClick={() =>
// // // // //                   setData({ ...data, difficulty: d })
// // // // //                 }
// // // // //                 className={`p-2 border mb-2 cursor-pointer ${
// // // // //                   data.difficulty === d ? "bg-green-500 text-white" : ""
// // // // //                 }`}
// // // // //               >
// // // // //                 {d}
// // // // //               </div>
// // // // //             ))}
// // // // //             <button onClick={() => setStep(4)} className="bg-black text-white p-2 w-full">
// // // // //               Next
// // // // //             </button>
// // // // //           </>
// // // // //         )}

// // // // //         {/* STEP 4 */}
// // // // //         {step === 4 && (
// // // // //           <>
// // // // //             <p><b>Role:</b> {data.role}</p>
// // // // //             <p><b>Category:</b> {data.category}</p>
// // // // //             <p><b>Difficulty:</b> {data.difficulty}</p>

// // // // //             <button onClick={startInterview} className="bg-blue-600 text-white p-2 w-full mt-4">
// // // // //               Start Interview
// // // // //             </button>
// // // // //           </>
// // // // //         )}

// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // }


// // // // import { useState } from "react";
// // // // import API from "../api/axios";
// // // // import { useNavigate } from "react-router-dom";

// // // // export default function StartInterview() {
// // // //   const nav = useNavigate();

// // // //   const [step, setStep] = useState(1);
// // // //   const [data, setData] = useState({
// // // //     role: "",
// // // //     category: "",
// // // //     difficulty: "",
// // // //     jobDesc: "Software Developer",
// // // //   });

// // // //   const startInterview = async () => {
// // // //     try {
// // // //       const token = localStorage.getItem("token");

// // // //       if (!token) {
// // // //         alert("Login required");
// // // //         return;
// // // //       }

// // // //       const res = await API.post(
// // // //         "/interviews/start",
// // // //         {
// // // //           role: data.role,
// // // //           difficulty: data.difficulty,
// // // //           jobDesc: data.jobDesc,
// // // //           category: data.category,
// // // //         },
// // // //         {
// // // //           headers: {
// // // //             Authorization: `Bearer ${token}`,
// // // //           },
// // // //         }
// // // //       );

// // // //       console.log("START RESPONSE:", res.data);

// // // //       const interview = res.data?.interview;
// // // //       const questions = res.data?.questions;

// // // //       // ✅ FIX: ensure array even if backend sends bad format
// // // //       const safeQuestions = Array.isArray(questions)
// // // //         ? questions
// // // //         : [];

// // // //       if (!interview?.id || safeQuestions.length === 0) {
// // // //         alert("Invalid AI response from server");
// // // //         return;
// // // //       }

// // // //       // ✅ store clean data
// // // //       localStorage.setItem("interviewId", interview.id);
// // // //       localStorage.setItem("questions", JSON.stringify(safeQuestions));

// // // //       nav("/interview");

// // // //     } catch (err) {
// // // //       console.log("START ERROR:", err.response?.data || err.message);
// // // //       alert(err.response?.data?.msg || "Failed to start interview");
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="min-h-screen flex items-center justify-center bg-gray-100">
// // // //       <div className="bg-white p-8 rounded-xl shadow w-[500px]">

// // // //         <h2 className="text-xl font-bold mb-4">Step {step} of 4</h2>

// // // //         {/* STEP 1 */}
// // // //         {step === 1 && (
// // // //           <>
// // // //             <input
// // // //               className="border p-2 w-full"
// // // //               placeholder="Role"
// // // //               onChange={(e) =>
// // // //                 setData({ ...data, role: e.target.value })
// // // //               }
// // // //             />
// // // //             <button
// // // //               onClick={() => setStep(2)}
// // // //               className="mt-4 bg-black text-white p-2 w-full"
// // // //             >
// // // //               Next
// // // //             </button>
// // // //           </>
// // // //         )}

// // // //         {/* STEP 2 */}
// // // //         {step === 2 && (
// // // //           <>
// // // //             {["Technical", "HR", "Behavioral", "Managerial"].map((c) => (
// // // //               <div
// // // //                 key={c}
// // // //                 onClick={() => setData({ ...data, category: c })}
// // // //                 className={`p-2 border mb-2 cursor-pointer ${
// // // //                   data.category === c ? "bg-blue-500 text-white" : ""
// // // //                 }`}
// // // //               >
// // // //                 {c}
// // // //               </div>
// // // //             ))}
// // // //             <button
// // // //               onClick={() => setStep(3)}
// // // //               className="bg-black text-white p-2 w-full"
// // // //             >
// // // //               Next
// // // //             </button>
// // // //           </>
// // // //         )}

// // // //         {/* STEP 3 */}
// // // //         {step === 3 && (
// // // //           <>
// // // //             {["Easy", "Medium", "Hard"].map((d) => (
// // // //               <div
// // // //                 key={d}
// // // //                 onClick={() =>
// // // //                   setData({ ...data, difficulty: d })
// // // //                 }
// // // //                 className={`p-2 border mb-2 cursor-pointer ${
// // // //                   data.difficulty === d ? "bg-green-500 text-white" : ""
// // // //                 }`}
// // // //               >
// // // //                 {d}
// // // //               </div>
// // // //             ))}
// // // //             <button
// // // //               onClick={() => setStep(4)}
// // // //               className="bg-black text-white p-2 w-full"
// // // //             >
// // // //               Next
// // // //             </button>
// // // //           </>
// // // //         )}

// // // //         {/* STEP 4 */}
// // // //         {step === 4 && (
// // // //           <>
// // // //             <p><b>Role:</b> {data.role}</p>
// // // //             <p><b>Category:</b> {data.category}</p>
// // // //             <p><b>Difficulty:</b> {data.difficulty}</p>

// // // //             <button
// // // //               onClick={startInterview}
// // // //               className="bg-blue-600 text-white p-2 w-full mt-4"
// // // //             >
// // // //               Start Interview
// // // //             </button>
// // // //           </>
// // // //         )}

// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }

// // // //before UI updtaed code

// // // import { useState } from "react";
// // // import API from "../api/axios";
// // // import { useNavigate } from "react-router-dom";

// // // export default function StartInterview() {
// // //   const nav = useNavigate();

// // //   const [step, setStep] = useState(1);
// // //   const [data, setData] = useState({
// // //     role: "",
// // //     category: "",
// // //     difficulty: "",
// // //     jobDesc: "Software Developer",
// // //   });

// // //   const startInterview = async () => {
// // //     try {
// // //       const token = localStorage.getItem("token");

// // //       if (!token) {
// // //         alert("Login required");
// // //         return;
// // //       }

// // //       const res = await API.post(
// // //         "/interviews/start",
// // //         {
// // //           role: data.role,
// // //           difficulty: data.difficulty,
// // //           jobDesc: data.jobDesc,
// // //           category: data.category,
// // //         },
// // //         {
// // //           headers: { Authorization: `Bearer ${token}` },
// // //         }
// // //       );

// // //       const interview = res.data?.interview;
// // //       const questions = Array.isArray(res.data?.questions)
// // //         ? res.data.questions
// // //         : [];

// // //       if (!interview?.id || questions.length === 0) {
// // //         alert("Invalid AI response from server");
// // //         return;
// // //       }

// // //       localStorage.setItem("interviewId", interview.id);
// // //       localStorage.setItem("questions", JSON.stringify(questions));

// // //       nav("/interview");
// // //     } catch (err) {
// // //       alert(err.response?.data?.msg || "Failed to start interview");
// // //     }
// // //   };

// // //   return (
// // //     <div className="min-h-screen bg-gradient-to-br from-[#eef2ff] via-[#fdf2f8] to-[#f0f9ff] flex items-center justify-center px-4">

// // //       {/* CARD */}
// // //       <div className="w-full max-w-2xl bg-white/70 backdrop-blur-xl border border-gray-200 rounded-3xl shadow-2xl p-8 animate-fadeUp">

// // //         {/* HEADER */}
// // //         <div className="mb-6">
// // //           <h2 className="text-2xl font-bold text-gray-900">
// // //             Start AI Interview 🚀
// // //           </h2>
// // //           <p className="text-gray-500 text-sm mt-1">
// // //             Step {step} of 4 — Configure your interview setup
// // //           </p>

// // //           <div className="mt-4 h-2 bg-gray-200 rounded-full overflow-hidden">
// // //             <div
// // //               className="h-full bg-gradient-to-r from-purple-600 to-pink-500 transition-all"
// // //               style={{ width: `${step * 25}%` }}
// // //             />
// // //           </div>
// // //         </div>

// // //         {/* STEP 1 */}
// // //         {step === 1 && (
// // //           <div className="animate-fadeUp">
// // //             <label className="text-sm text-gray-600">Role</label>
// // //             <input
// // //               className="w-full mt-2 p-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-400"
// // //               placeholder="e.g. Frontend Developer"
// // //               onChange={(e) =>
// // //                 setData({ ...data, role: e.target.value })
// // //               }
// // //             />

// // //             <button
// // //               onClick={() => setStep(2)}
// // //               className="mt-6 w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white p-3 rounded-xl shadow hover:scale-[1.02] transition"
// // //             >
// // //               Next
// // //             </button>
// // //           </div>
// // //         )}

// // //         {/* STEP 2 */}
// // //         {step === 2 && (
// // //           <div className="animate-fadeUp">
// // //             <p className="text-sm text-gray-600 mb-3">
// // //               Choose Category
// // //             </p>

// // //             <div className="grid grid-cols-2 gap-3">
// // //               {["Technical", "HR", "Behavioral", "Managerial"].map((c) => (
// // //                 <div
// // //                   key={c}
// // //                   onClick={() => setData({ ...data, category: c })}
// // //                   className={`p-3 rounded-xl border cursor-pointer transition text-center ${
// // //                     data.category === c
// // //                       ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow"
// // //                       : "bg-white hover:shadow-md"
// // //                   }`}
// // //                 >
// // //                   {c}
// // //                 </div>
// // //               ))}
// // //             </div>

// // //             <button
// // //               onClick={() => setStep(3)}
// // //               className="mt-6 w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white p-3 rounded-xl shadow hover:scale-[1.02] transition"
// // //             >
// // //               Next
// // //             </button>
// // //           </div>
// // //         )}

// // //         {/* STEP 3 */}
// // //         {step === 3 && (
// // //           <div className="animate-fadeUp">
// // //             <p className="text-sm text-gray-600 mb-3">
// // //               Select Difficulty
// // //             </p>

// // //             <div className="space-y-3">
// // //               {["Easy", "Medium", "Hard"].map((d) => (
// // //                 <div
// // //                   key={d}
// // //                   onClick={() =>
// // //                     setData({ ...data, difficulty: d })
// // //                   }
// // //                   className={`p-3 rounded-xl border cursor-pointer transition ${
// // //                     data.difficulty === d
// // //                       ? "bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow"
// // //                       : "bg-white hover:shadow-md"
// // //                   }`}
// // //                 >
// // //                   {d}
// // //                 </div>
// // //               ))}
// // //             </div>

// // //             <button
// // //               onClick={() => setStep(4)}
// // //               className="mt-6 w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white p-3 rounded-xl shadow hover:scale-[1.02] transition"
// // //             >
// // //               Next
// // //             </button>
// // //           </div>
// // //         )}

// // //         {/* STEP 4 */}
// // //         {step === 4 && (
// // //           <div className="animate-fadeUp space-y-4">
// // //             <div className="bg-white p-4 rounded-xl border">
// // //               <p><b>Role:</b> {data.role}</p>
// // //               <p><b>Category:</b> {data.category}</p>
// // //               <p><b>Difficulty:</b> {data.difficulty}</p>
// // //             </div>

// // //             <button
// // //               onClick={startInterview}
// // //               className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-xl shadow-lg hover:scale-[1.02] transition"
// // //             >
// // //               Start Interview 🚀
// // //             </button>
// // //           </div>
// // //         )}

// // //       </div>
// // //     </div>
// // //   );
// // // }



// // import { useState } from "react";
// // import API from "../api/axios";
// // import { useNavigate } from "react-router-dom";

// // export default function StartInterview() {
// //   const nav = useNavigate();

// //   const [step, setStep] = useState(1);
// //   const [data, setData] = useState({
// //     role: "",
// //     category: "",
// //     difficulty: "",
// //     jobDesc: "Software Developer",
// //   });

// //   // const startInterview = async () => {
// //   //   try {
// //   //     const token = localStorage.getItem("token");
// //   //     if (!token) return alert("Login required");

// //   //     const res = await API.post(
// //   //       "/interviews/start",
// //   //       data,
// //   //       { headers: { Authorization: `Bearer ${token}` } }
// //   //     );

// //   //     const interview = res.data?.interview;
// //   //     const questions = Array.isArray(res.data?.questions)
// //   //       ? res.data.questions
// //   //       : [];

// //   //     if (!interview?.id || !questions.length) {
// //   //       alert("Invalid AI response");
// //   //       return;
// //   //     }

// //   //     localStorage.setItem("interviewId", interview.id);
// //   //     localStorage.setItem("questions", JSON.stringify(questions));

// //   //     nav("/interview");
// //   //   } catch (err) {
// //   //     alert("Failed to start interview");
// //   //   }
// //   // };

// //   const startInterview = async () => {
// //   try {
// //     const token = localStorage.getItem("token");
// //     if (!token) return alert("Login required");

// //     const res = await API.post(
// //       "/interviews/start",
// //       data,
// //       { headers: { Authorization: `Bearer ${token}` } }
// //     );

// //     const interview = res.data?.interview;

// //     const questions = Array.isArray(res.data?.questions)
// //       ? res.data.questions
// //       : [];

// //     if (!interview?.id || !questions.length) {
// //       alert("Invalid AI response");
// //       return;
// //     }

// //     // 🔥 SAVE BASIC IDS
// //     localStorage.setItem("interviewId", interview.id);
// //     localStorage.setItem("questions", JSON.stringify(questions));

// //     // 🔥 IMPORTANT: SAVE FULL CONTEXT (THIS FIXES YOUR LEFT PANEL)
// //     localStorage.setItem(
// //       "interviewData",
// //       JSON.stringify({
// //         role: data.role,
// //         category: data.category,
// //         difficulty: data.difficulty,
// //         jobDesc: data.jobDesc,
// //         // add extra fields if backend sends them later
// //         responsibilities: res.data?.responsibilities || "",
// //         jobLink: res.data?.jobLink || "",
// //         resumeSummary: res.data?.resumeSummary || "",
// //       })
// //     );

// //     nav("/interview");

// //   } catch (err) {
// //     console.log(err);
// //     alert("Failed to start interview");
// //   }
// // };

// //   return (
// //     <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-[#eef2ff] via-[#fdf2f8] to-[#f0f9ff] px-4">

// //       {/* FLOATING CARD */}
// //       <div className="w-full max-w-2xl animate-popIn">

// //         <div className="bg-white/70 backdrop-blur-xl border border-gray-200 rounded-3xl shadow-2xl p-8 transition-all">

// //           {/* HEADER */}
// //           <div className="mb-6">
// //             <h2 className="text-2xl font-bold text-gray-900">
// //               Start Interview 🚀
// //             </h2>

// //             <p className="text-sm text-gray-500 mt-1">
// //               Step {step} of 4 — AI setup flow
// //             </p>

// //             {/* PROGRESS BAR */}
// //             <div className="mt-4 h-2 bg-gray-200 rounded-full overflow-hidden">
// //               <div
// //                 className="h-full bg-gradient-to-r from-purple-600 to-pink-500 transition-all duration-500"
// //                 style={{ width: `${step * 25}%` }}
// //               />
// //             </div>
// //           </div>

// //           {/* STEP 1 */}
// //           {step === 1 && (
// //             <div className="space-y-4 animate-fadeIn">
// //               <input
// //                 className="w-full p-3 rounded-xl border focus:ring-2 focus:ring-purple-400 outline-none transition"
// //                 placeholder="Enter Role (e.g. Frontend Developer)"
// //                 onChange={(e) =>
// //                   setData({ ...data, role: e.target.value })
// //                 }
// //               />

// //               <button
// //                 onClick={() => setStep(2)}
// //                 className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white p-3 rounded-xl shadow hover:scale-[1.02] transition"
// //               >
// //                 Next
// //               </button>
// //             </div>
// //           )}

// //           {/* STEP 2 */}
// //           {step === 2 && (
// //             <div className="animate-fadeIn">
// //               <p className="text-sm text-gray-500 mb-3">Choose Category</p>

// //               <div className="grid grid-cols-2 gap-3">
// //                 {["Technical", "HR", "Behavioral", "Managerial"].map((c) => (
// //                   <div
// //                     key={c}
// //                     onClick={() => setData({ ...data, category: c })}
// //                     className={`p-3 rounded-xl border cursor-pointer text-center transition-all hover:scale-[1.02] ${
// //                       data.category === c
// //                         ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-lg"
// //                         : "bg-white"
// //                     }`}
// //                   >
// //                     {c}
// //                   </div>
// //                 ))}
// //               </div>

// //               <button
// //                 onClick={() => setStep(3)}
// //                 className="mt-6 w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white p-3 rounded-xl shadow hover:scale-[1.02] transition"
// //               >
// //                 Next
// //               </button>
// //             </div>
// //           )}

// //           {/* STEP 3 */}
// //           {step === 3 && (
// //             <div className="animate-fadeIn">
// //               <p className="text-sm text-gray-500 mb-3">Select Difficulty</p>

// //               <div className="space-y-3">
// //                 {["Easy", "Medium", "Hard"].map((d) => (
// //                   <div
// //                     key={d}
// //                     onClick={() =>
// //                       setData({ ...data, difficulty: d })
// //                     }
// //                     className={`p-3 rounded-xl border cursor-pointer transition hover:scale-[1.02] ${
// //                       data.difficulty === d
// //                         ? "bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg"
// //                         : "bg-white"
// //                     }`}
// //                   >
// //                     {d}
// //                   </div>
// //                 ))}
// //               </div>

// //               <button
// //                 onClick={() => setStep(4)}
// //                 className="mt-6 w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white p-3 rounded-xl shadow hover:scale-[1.02] transition"
// //               >
// //                 Next
// //               </button>
// //             </div>
// //           )}

// //           {/* STEP 4 */}
// //           {step === 4 && (
// //             <div className="space-y-4 animate-fadeIn">

// //               <div className="bg-white border rounded-xl p-4 space-y-1">
// //                 <p><b>Role:</b> {data.role}</p>
// //                 <p><b>Category:</b> {data.category}</p>
// //                 <p><b>Difficulty:</b> {data.difficulty}</p>
// //               </div>

// //               <button
// //                 onClick={startInterview}
// //                 className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-xl shadow-lg hover:scale-[1.02] transition"
// //               >
// //                 Start Interview 🚀
// //               </button>
// //             </div>
// //           )}

// //         </div>
// //       </div>

// //       {/* ANIMATIONS */}
// //       <style>
// //         {`
// //           @keyframes fadeIn {
// //             from { opacity: 0; transform: translateY(10px); }
// //             to { opacity: 1; transform: translateY(0); }
// //           }

// //           .animate-fadeIn {
// //             animation: fadeIn 0.4s ease-out;
// //           }

// //           @keyframes popIn {
// //             from { opacity: 0; transform: scale(0.95); }
// //             to { opacity: 1; transform: scale(1); }
// //           }

// //           .animate-popIn {
// //             animation: popIn 0.5s ease-out;
// //           }
// //         `}
// //       </style>
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