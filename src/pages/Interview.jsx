// // // // // // // // // import { useState } from "react";
// // // // // // // // // import API from "../api/axios";
// // // // // // // // // import { useNavigate } from "react-router-dom";

// // // // // // // // // export default function Interview() {
// // // // // // // // //   const data = JSON.parse(localStorage.getItem("interview"));
// // // // // // // // //   const [index, setIndex] = useState(0);
// // // // // // // // //   const [answer, setAnswer] = useState("");
// // // // // // // // //   const nav = useNavigate();

// // // // // // // // //   const q = data.questions[index];

// // // // // // // // //   const submit = async () => {
// // // // // // // // //     await API.post("/responses", {
// // // // // // // // //       questionId: q._id,
// // // // // // // // //       answer,
// // // // // // // // //       interviewId: data.interview._id
// // // // // // // // //     });

// // // // // // // // //     if (index + 1 < data.questions.length) {
// // // // // // // // //       setIndex(index + 1);
// // // // // // // // //       setAnswer("");
// // // // // // // // //     } else {
// // // // // // // // //       await API.put(`/interviews/${data.interview._id}/complete`);
// // // // // // // // //       nav("/result");
// // // // // // // // //     }
// // // // // // // // //   };

// // // // // // // // //   return (
// // // // // // // // //     <div>
// // // // // // // // //       <h3>{q.question}</h3>
// // // // // // // // //       <textarea onChange={(e)=>setAnswer(e.target.value)} />
// // // // // // // // //       <button onClick={submit}>Next</button>
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // }


// // // // // // // // import { useState } from "react";
// // // // // // // // import API from "../api/axios";
// // // // // // // // import { useNavigate } from "react-router-dom";

// // // // // // // // export default function Interview() {
// // // // // // // //   const data = JSON.parse(localStorage.getItem("interview"));
// // // // // // // //   const [index, setIndex] = useState(0);
// // // // // // // //   const [answer, setAnswer] = useState("");
// // // // // // // //   const nav = useNavigate();

// // // // // // // //   if (!data) return <div className="p-10">No Interview Found</div>;

// // // // // // // //   const q = data.questions[index];

// // // // // // // //   const submit = async () => {
// // // // // // // //     try {
// // // // // // // //       await API.post("/responses", {
// // // // // // // //         questionId: q._id,
// // // // // // // //         answer,
// // // // // // // //         interviewId: data.interview._id,
// // // // // // // //       });

// // // // // // // //       if (index + 1 < data.questions.length) {
// // // // // // // //         setIndex(index + 1);
// // // // // // // //         setAnswer("");
// // // // // // // //       } else {
// // // // // // // //         await API.put(`/interviews/${data.interview._id}/complete`);
// // // // // // // //         nav("/result");
// // // // // // // //       }
// // // // // // // //     } catch (err) {
// // // // // // // //       console.log(err);
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   return (
// // // // // // // //     <div className="min-h-screen flex bg-gray-100">

// // // // // // // //       {/* ================= LEFT PANEL ================= */}
// // // // // // // //       <div className="w-1/3 bg-white border-r p-6 hidden md:block">
// // // // // // // //         <h2 className="text-xl font-bold mb-6 text-blue-600">
// // // // // // // //           Interview Info
// // // // // // // //         </h2>

// // // // // // // //         <div className="space-y-4 text-sm">
// // // // // // // //           <div className="p-4 bg-gray-100 rounded-xl">
// // // // // // // //             <p className="text-gray-500">Role</p>
// // // // // // // //             <p className="font-semibold">{data.interview.category}</p>
// // // // // // // //           </div>

// // // // // // // //           <div className="p-4 bg-gray-100 rounded-xl">
// // // // // // // //             <p className="text-gray-500">Difficulty</p>
// // // // // // // //             <p className="font-semibold">{data.interview.difficulty}</p>
// // // // // // // //           </div>

// // // // // // // //           <div className="p-4 bg-gray-100 rounded-xl">
// // // // // // // //             <p className="text-gray-500">Progress</p>
// // // // // // // //             <p className="font-semibold">
// // // // // // // //               {index + 1} / {data.questions.length}
// // // // // // // //             </p>
// // // // // // // //           </div>
// // // // // // // //         </div>
// // // // // // // //       </div>

// // // // // // // //       {/* ================= RIGHT PANEL ================= */}
// // // // // // // //       <div className="flex-1 flex flex-col">

// // // // // // // //         {/* TOP */}
// // // // // // // //         <div className="p-6 border-b bg-white">
// // // // // // // //           <h3 className="text-lg font-semibold">
// // // // // // // //             Question {index + 1}
// // // // // // // //           </h3>
// // // // // // // //         </div>

// // // // // // // //         {/* QUESTION */}
// // // // // // // //         <div className="flex-1 p-6 flex flex-col justify-center">
// // // // // // // //           <div className="max-w-2xl mx-auto w-full">

// // // // // // // //             <div className="bg-purple-100 p-6 rounded-2xl text-lg font-medium mb-6">
// // // // // // // //               {q.question}
// // // // // // // //             </div>

// // // // // // // //             {/* ANSWER BOX */}
// // // // // // // //             <textarea
// // // // // // // //               value={answer}
// // // // // // // //               onChange={(e) => setAnswer(e.target.value)}
// // // // // // // //               placeholder="Type your answer here..."
// // // // // // // //               className="w-full h-40 border rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
// // // // // // // //             />

// // // // // // // //           </div>
// // // // // // // //         </div>

// // // // // // // //         {/* BOTTOM BUTTON */}
// // // // // // // //         <div className="p-6 bg-white border-t flex justify-end">
// // // // // // // //           <button
// // // // // // // //             onClick={submit}
// // // // // // // //             disabled={!answer}
// // // // // // // //             className="bg-blue-600 text-white px-8 py-3 rounded-full disabled:opacity-50"
// // // // // // // //           >
// // // // // // // //             {index + 1 === data.questions.length
// // // // // // // //               ? "Finish Interview"
// // // // // // // //               : "Next →"}
// // // // // // // //           </button>
// // // // // // // //         </div>

// // // // // // // //       </div>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // }

// // // // // // // import { useEffect, useState } from "react";
// // // // // // // import API from "../api/axios";

// // // // // // // export default function Interview() {
// // // // // // //   const [questions, setQuestions] = useState([]);
// // // // // // //   const [index, setIndex] = useState(0);
// // // // // // //   const [answer, setAnswer] = useState("");
// // // // // // //   const [listening, setListening] = useState(false);
// // // // // // //   const [score, setScore] = useState(null);

// // // // // // //   // 🎯 LOAD QUESTIONS FROM LOCAL STORAGE
// // // // // // //   useEffect(() => {
// // // // // // //     const q = JSON.parse(localStorage.getItem("questions"));
// // // // // // //     if (q) {
// // // // // // //       try {
// // // // // // //         setQuestions(JSON.parse(q)); // if stringified array
// // // // // // //       } catch {
// // // // // // //         setQuestions([q]); // fallback
// // // // // // //       }
// // // // // // //     }
// // // // // // //   }, []);

// // // // // // //   const q = questions[index];

// // // // // // //   // 🎤 VOICE INPUT
// // // // // // //   const startListening = () => {
// // // // // // //     const recognition = new window.webkitSpeechRecognition();
// // // // // // //     recognition.continuous = false;
// // // // // // //     recognition.lang = "en-US";

// // // // // // //     recognition.start();
// // // // // // //     setListening(true);

// // // // // // //     recognition.onresult = (event) => {
// // // // // // //       setAnswer(event.results[0][0].transcript);
// // // // // // //       setListening(false);
// // // // // // //     };

// // // // // // //     recognition.onerror = () => setListening(false);
// // // // // // //   };

// // // // // // //   // 👉 NEXT QUESTION
// // // // // // //   const next = () => {
// // // // // // //     if (index + 1 < questions.length) {
// // // // // // //       setIndex(index + 1);
// // // // // // //       setAnswer("");
// // // // // // //     } else {
// // // // // // //       generateScore();
// // // // // // //     }
// // // // // // //   };

// // // // // // //   // 🤖 AI SCORING
// // // // // // //   const generateScore = async () => {
// // // // // // //     const res = await API.post("/ai/score", {
// // // // // // //       answers: answer
// // // // // // //     });

// // // // // // //     setScore(res.data);
// // // // // // //   };

// // // // // // //   if (!q) return <h2>Loading...</h2>;

// // // // // // //   return (
// // // // // // //     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">

// // // // // // //       <div className="bg-white w-full max-w-2xl p-6 rounded-xl shadow">

// // // // // // //         {/* QUESTION */}
// // // // // // //         <h2 className="text-xl font-bold mb-4">
// // // // // // //           {q}
// // // // // // //         </h2>

// // // // // // //         {/* ANSWER BOX */}
// // // // // // //         <textarea
// // // // // // //           value={answer}
// // // // // // //           onChange={(e) => setAnswer(e.target.value)}
// // // // // // //           className="w-full border p-3 rounded mb-4"
// // // // // // //           placeholder="Type your answer..."
// // // // // // //         />

// // // // // // //         {/* BUTTONS */}
// // // // // // //         <div className="flex gap-3">

// // // // // // //           <button
// // // // // // //             onClick={startListening}
// // // // // // //             className="bg-green-500 text-white px-4 py-2 rounded"
// // // // // // //           >
// // // // // // //             🎤 {listening ? "Listening..." : "Speak"}
// // // // // // //           </button>

// // // // // // //           <button
// // // // // // //             onClick={next}
// // // // // // //             className="bg-blue-600 text-white px-4 py-2 rounded"
// // // // // // //           >
// // // // // // //             Next →
// // // // // // //           </button>

// // // // // // //         </div>

// // // // // // //         {/* SCORE */}
// // // // // // //         {score && (
// // // // // // //           <div className="mt-6 p-4 bg-gray-100 rounded">
// // // // // // //             <h3 className="font-bold">AI Feedback</h3>
// // // // // // //             <p>{score.feedback}</p>
// // // // // // //           </div>
// // // // // // //         )}

// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // }

// // // // // // //before crt



// // // // // // import { useEffect, useState } from "react";

// // // // // // export default function Interview() {
// // // // // //   const [questions, setQuestions] = useState([]);
// // // // // //   const [index, setIndex] = useState(0);
// // // // // //   const [answer, setAnswer] = useState("");
// // // // // //   const [answers, setAnswers] = useState([]);
// // // // // //   const [finished, setFinished] = useState(false);

// // // // // //   useEffect(() => {
// // // // // //     const stored = localStorage.getItem("questions");
// // // // // //     if (stored) setQuestions(JSON.parse(stored));
// // // // // //   }, []);

// // // // // //   const currentQuestion = questions[index];

// // // // // //   const handleNext = () => {
// // // // // //     const updated = [
// // // // // //       ...answers,
// // // // // //       { question: currentQuestion, answer },
// // // // // //     ];

// // // // // //     setAnswers(updated);
// // // // // //     setAnswer("");

// // // // // //     if (index + 1 < questions.length) {
// // // // // //       setIndex(index + 1);
// // // // // //     } else {
// // // // // //       setFinished(true);
// // // // // //       console.log("FINAL:", updated);
// // // // // //     }
// // // // // //   };

// // // // // //   if (!questions.length) {
// // // // // //     return <h2 className="text-center mt-10">Loading AI Interview...</h2>;
// // // // // //   }

// // // // // //   if (finished) {
// // // // // //     return (
// // // // // //       <div className="min-h-screen flex items-center justify-center">
// // // // // //         <div className="bg-white p-6 shadow rounded w-[500px]">
// // // // // //           <h2 className="text-xl font-bold mb-4">🎉 Completed</h2>

// // // // // //           {answers.map((a, i) => (
// // // // // //             <div key={i} className="mb-4">
// // // // // //               <p><b>Q:</b> {a.question}</p>
// // // // // //               <p><b>A:</b> {a.answer}</p>
// // // // // //             </div>
// // // // // //           ))}
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     );
// // // // // //   }

// // // // // //   return (
// // // // // //     <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
// // // // // //       <div className="bg-white w-full max-w-2xl p-6 rounded-xl shadow">

// // // // // //         <p className="text-gray-500 text-sm">AI Interviewer</p>

// // // // // //         <h2 className="text-xl font-bold mt-2">{currentQuestion}</h2>

// // // // // //         <textarea
// // // // // //           value={answer}
// // // // // //           onChange={(e) => setAnswer(e.target.value)}
// // // // // //           className="w-full border p-3 rounded mt-4"
// // // // // //           placeholder="Type your answer..."
// // // // // //         />

// // // // // //         <button
// // // // // //           onClick={handleNext}
// // // // // //           className="bg-blue-600 text-white px-4 py-2 rounded w-full mt-4"
// // // // // //         >
// // // // // //           {index + 1 === questions.length ? "Finish" : "Next"}
// // // // // //         </button>

// // // // // //         <p className="text-sm text-gray-500 mt-3">
// // // // // //           {index + 1} / {questions.length}
// // // // // //         </p>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // }



// // // // // import { useEffect, useState } from "react";
// // // // // import API from "../api/axios";
// // // // // import { useNavigate } from "react-router-dom";

// // // // // export default function Interview() {
// // // // //   const nav = useNavigate();

// // // // //   const [questions, setQuestions] = useState([]);
// // // // //   const [index, setIndex] = useState(0);
// // // // //   const [answer, setAnswer] = useState("");
// // // // //   const [answers, setAnswers] = useState([]);
// // // // //   const [loading, setLoading] = useState(false);

// // // // //   useEffect(() => {
// // // // //     const stored = localStorage.getItem("questions");
// // // // //     if (stored) setQuestions(JSON.parse(stored));
// // // // //   }, []);

// // // // //   const interviewId = localStorage.getItem("interviewId");

// // // // //   const currentQuestion = questions[index];

// // // // //   const handleNext = async () => {
// // // // //     const updatedAnswers = [
// // // // //       ...answers,
// // // // //       {
// // // // //         question: currentQuestion,
// // // // //         answer: answer,
// // // // //       },
// // // // //     ];

// // // // //     setAnswers(updatedAnswers);
// // // // //     setAnswer("");

// // // // //     if (index + 1 < questions.length) {
// // // // //       setIndex(index + 1);
// // // // //     } else {
// // // // //       await submitInterview(updatedAnswers);
// // // // //     }
// // // // //   };

// // // // //   // ✅ FINAL SUBMIT TO BACKEND
// // // // //   // const submitInterview = async (finalAnswers) => {
// // // // //   //   try {
// // // // //   //     setLoading(true);

// // // // //   //     const token = localStorage.getItem("token");

// // // // //   //     const res = await API.post(
// // // // //   //       "/responses",
// // // // //   //       {
// // // // //   //         interviewId,
// // // // //   //         answers: finalAnswers,
// // // // //   //       },
// // // // //   //       {
// // // // //   //         headers: {
// // // // //   //           Authorization: `Bearer ${token}`,
// // // // //   //         },
// // // // //   //       }
// // // // //   //     );

// // // // //   //     console.log("RESULT:", res.data);

// // // // //   //     localStorage.removeItem("questions");

// // // // //   //     nav("/result"); // or show result page

// // // // //   //   } catch (err) {
// // // // //   //     console.log("SUBMIT ERROR:", err.response?.data || err.message);
// // // // //   //     alert("Failed to submit interview");
// // // // //   //   } finally {
// // // // //   //     setLoading(false);
// // // // //   //   }
// // // // //   // };


// // // // //   const submitInterview = async (finalAnswers) => {
// // // // //   try {
// // // // //     setLoading(true);

// // // // //     const token = localStorage.getItem("token");

// // // // //     const res = await API.post(
// // // // //       "/responses",
// // // // //       {
// // // // //         interviewId,
// // // // //         answers: finalAnswers,
// // // // //       },
// // // // //       {
// // // // //         headers: {
// // // // //           Authorization: `Bearer ${token}`,
// // // // //         },
// // // // //       }
// // // // //     );

// // // // //     localStorage.setItem("result", JSON.stringify(res.data));

// // // // //     localStorage.removeItem("questions");

// // // // //     setTimeout(() => {
// // // // //       nav("/result");
// // // // //     }, 200);

// // // // //   } catch (err) {
// // // // //     console.log(err.response?.data || err.message);
// // // // //     alert("Failed to submit interview");
// // // // //   } finally {
// // // // //     setLoading(false);
// // // // //   }
// // // // // };


// // // // //   if (!questions.length) {
// // // // //     return (
// // // // //       <h2 className="text-center mt-10">
// // // // //         Loading AI Interview...
// // // // //       </h2>
// // // // //     );
// // // // //   }

// // // // // //   return (
// // // // // //     <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
// // // // // //       <div className="bg-white w-full max-w-2xl p-6 rounded-xl shadow">

// // // // // //         <p className="text-gray-500 text-sm">AI Interviewer</p>

// // // // // //         <h2 className="text-xl font-bold mt-2">
// // // // // //           {currentQuestion}
// // // // // //         </h2>

// // // // // //         <textarea
// // // // // //           value={answer}
// // // // // //           onChange={(e) => setAnswer(e.target.value)}
// // // // // //           className="w-full border p-3 rounded mt-4"
// // // // // //           placeholder="Type your answer..."
// // // // // //         />

// // // // // //         <button
// // // // // //           onClick={handleNext}
// // // // // //           disabled={loading}
// // // // // //           className="bg-blue-600 text-white px-4 py-2 rounded w-full mt-4"
// // // // // //         >
// // // // // //           {loading
// // // // // //             ? "Submitting..."
// // // // // //             : index + 1 === questions.length
// // // // // //             ? "Finish"
// // // // // //             : "Next"}
// // // // // //         </button>

// // // // // //         <p className="text-sm text-gray-500 mt-3">
// // // // // //           {index + 1} / {questions.length}
// // // // // //         </p>

// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // }

// // // // // return (
// // // // //   <div className="min-h-screen w-full bg-gradient-to-br from-[#eef2ff] via-[#fdf2f8] to-[#f0f9ff] flex items-center justify-center p-6">

// // // // //     <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-5 gap-6 animate-fadeIn">

// // // // //       {/* LEFT PANEL */}
// // // // //       <div className="md:col-span-2 bg-white/70 backdrop-blur-xl border border-gray-200 rounded-3xl shadow-xl p-6">

// // // // //         <h2 className="text-xl font-bold text-gray-900">
// // // // //           Interview Details
// // // // //         </h2>

// // // // //         <div className="mt-6 space-y-4 text-gray-700">

// // // // //           <div className="p-4 rounded-xl bg-white border">
// // // // //             <p className="text-sm text-gray-500">Job Role</p>
// // // // //             <p className="font-semibold">{questions.length ? "AI Interview Role" : "Loading..."}</p>
// // // // //           </div>

// // // // //           <div className="p-4 rounded-xl bg-white border">
// // // // //             <p className="text-sm text-gray-500">Progress</p>
// // // // //             <p className="font-semibold">
// // // // //               {index + 1} / {questions.length}
// // // // //             </p>

// // // // //             <div className="mt-2 h-2 bg-gray-200 rounded-full overflow-hidden">
// // // // //               <div
// // // // //                 className="h-full bg-gradient-to-r from-purple-600 to-pink-500 transition-all duration-300"
// // // // //                 style={{ width: `${((index + 1) / questions.length) * 100}%` }}
// // // // //               />
// // // // //             </div>
// // // // //           </div>

// // // // //           <div className="p-4 rounded-xl bg-white border">
// // // // //             <p className="text-sm text-gray-500">Instructions</p>
// // // // //             <p className="text-sm mt-1">
// // // // //               Answer clearly and structure your response like a real interview.
// // // // //             </p>
// // // // //           </div>

// // // // //         </div>
// // // // //       </div>

// // // // //       {/* RIGHT PANEL */}
// // // // //       <div className="md:col-span-3 bg-white/70 backdrop-blur-xl border border-gray-200 rounded-3xl shadow-2xl p-8 flex flex-col justify-between min-h-[500px]">

// // // // //         {/* TOP */}
// // // // //         <div>

// // // // //           {!currentQuestion ? (
// // // // //             <>
// // // // //               <h2 className="text-2xl font-bold text-gray-900">
// // // // //                 Welcome 👋
// // // // //               </h2>

// // // // //               <p className="text-gray-500 mt-2">
// // // // //                 Get ready for your AI-powered interview experience.
// // // // //               </p>

// // // // //               <p className="text-sm text-gray-500 mt-4">
// // // // //                 Click below to begin your interview for this role.
// // // // //               </p>
// // // // //             </>
// // // // //           ) : (
// // // // //             <>
// // // // //               <p className="text-sm text-gray-500">AI Interviewer</p>

// // // // //               <h2 className="text-xl font-semibold text-gray-900 mt-2 animate-fadeIn">
// // // // //                 {currentQuestion}
// // // // //               </h2>
// // // // //             </>
// // // // //           )}

// // // // //         </div>

// // // // //         {/* MIDDLE (ANSWER BOX) */}
// // // // //         {currentQuestion && (
// // // // //           <textarea
// // // // //             value={answer}
// // // // //             onChange={(e) => setAnswer(e.target.value)}
// // // // //             className="w-full mt-6 p-4 border rounded-xl focus:ring-2 focus:ring-purple-400 outline-none transition h-40 resize-none"
// // // // //             placeholder="Type your answer like a real interview..."
// // // // //           />
// // // // //         )}

// // // // //         {/* BOTTOM ACTIONS */}
// // // // //         <div className="mt-6">

// // // // //           {!currentQuestion ? (
// // // // //             <button
// // // // //               onClick={() => setIndex(0)}
// // // // //               className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white p-3 rounded-xl shadow-lg hover:scale-[1.02] transition"
// // // // //             >
// // // // //               Begin Interview 🚀
// // // // //             </button>
// // // // //           ) : (
// // // // //             <button
// // // // //               onClick={handleNext}
// // // // //               disabled={loading}
// // // // //               className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-xl shadow-lg hover:scale-[1.02] transition"
// // // // //             >
// // // // //               {loading
// // // // //                 ? "Submitting..."
// // // // //                 : index + 1 === questions.length
// // // // //                 ? "Finish Interview"
// // // // //                 : "Next Question →"}
// // // // //             </button>
// // // // //           )}

// // // // //           {currentQuestion && (
// // // // //             <p className="text-sm text-gray-500 mt-3 text-center">
// // // // //               Question {index + 1} of {questions.length}
// // // // //             </p>
// // // // //           )}

// // // // //         </div>

// // // // //       </div>
// // // // //     </div>

// // // // //     {/* ANIMATION */}
// // // // //     <style>
// // // // //       {`
// // // // //         @keyframes fadeIn {
// // // // //           from { opacity: 0; transform: translateY(10px); }
// // // // //           to { opacity: 1; transform: translateY(0); }
// // // // //         }

// // // // //         .animate-fadeIn {
// // // // //           animation: fadeIn 0.4s ease-out;
// // // // //         }
// // // // //       `}
// // // // //     </style>
// // // // //   </div>
// // // // // );
// // // // // }

// // // // import { useEffect, useState } from "react";
// // // // import API from "../api/axios";
// // // // import { useNavigate } from "react-router-dom";

// // // // export default function Interview() {
// // // //   const nav = useNavigate();

// // // //   const [questions, setQuestions] = useState([]);
// // // //   const [index, setIndex] = useState(0);
// // // //   const [answer, setAnswer] = useState("");
// // // //   const [answers, setAnswers] = useState([]);
// // // //   const [loading, setLoading] = useState(false);

// // // //   const interviewData =
// // // //     JSON.parse(localStorage.getItem("interviewData")) || {};

// // // //   useEffect(() => {
// // // //     const stored = localStorage.getItem("questions");
// // // //     if (stored) setQuestions(JSON.parse(stored));
// // // //   }, []);

// // // //   const interviewId = localStorage.getItem("interviewId");
// // // //   const currentQuestion = questions[index];

// // // //   const handleNext = async () => {
// // // //     const updated = [
// // // //       ...answers,
// // // //       { question: currentQuestion, answer },
// // // //     ];

// // // //     setAnswers(updated);
// // // //     setAnswer("");

// // // //     if (index + 1 < questions.length) {
// // // //       setIndex(index + 1);
// // // //     } else {
// // // //       await submit(updated);
// // // //     }
// // // //   };

// // // //   const submit = async (finalAnswers) => {
// // // //     try {
// // // //       setLoading(true);

// // // //       const token = localStorage.getItem("token");

// // // //       const res = await API.post(
// // // //         "/responses",
// // // //         { interviewId, answers: finalAnswers },
// // // //         { headers: { Authorization: `Bearer ${token}` } }
// // // //       );

// // // //       localStorage.setItem("result", JSON.stringify(res.data));
// // // //       nav("/result");
// // // //     } catch (err) {
// // // //       alert("Submit failed");
// // // //       console.log(err.response?.data || err.message);
// // // //     } finally {
// // // //       setLoading(false);
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="min-h-screen flex bg-gray-100 p-6 gap-6">

// // // //       {/* LEFT PANEL */}
// // // //       <div className="w-1/3 bg-white p-5 rounded-xl shadow">

// // // //         <h2 className="font-bold text-lg mb-3">Interview Info</h2>

// // // //         <p><b>Role:</b> {interviewData.role}</p>
// // // //         <p><b>Category:</b> {interviewData.category}</p>
// // // //         <p><b>Responsibilities:</b> {interviewData.responsibilities}</p>
// // // //         <p><b>Job:</b> {interviewData.jobDesc}</p>
// // // //         <p><b>Link:</b> {interviewData.jobLink}</p>

// // // //         <p className="mt-4">
// // // //           Progress: {index + 1} / {questions.length}
// // // //         </p>

// // // //       </div>

// // // //       {/* RIGHT PANEL */}
// // // //       <div className="flex-1 bg-white p-6 rounded-xl shadow">

// // // //         {!currentQuestion ? (
// // // //           <button
// // // //             onClick={() => setIndex(0)}
// // // //             className="bg-black text-white p-3 w-full"
// // // //           >
// // // //             Start
// // // //           </button>
// // // //         ) : (
// // // //           <>
// // // //             <h2 className="text-xl font-bold">{currentQuestion}</h2>

// // // //             <textarea
// // // //               className="border w-full mt-4 p-3"
// // // //               value={answer}
// // // //               onChange={(e) => setAnswer(e.target.value)}
// // // //             />

// // // //             <button
// // // //               onClick={handleNext}
// // // //               className="bg-blue-600 text-white p-3 w-full mt-4"
// // // //               disabled={loading}
// // // //             >
// // // //               {loading ? "Submitting..." : "Next"}
// // // //             </button>
// // // //           </>
// // // //         )}

// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }


// // // import { useEffect, useState } from "react";
// // // import API from "../api/axios";
// // // import { useNavigate } from "react-router-dom";

// // // export default function Interview() {
// // //   const nav = useNavigate();

// // //   const [questions, setQuestions] = useState([]);
// // //   const [index, setIndex] = useState(0);
// // //   const [answer, setAnswer] = useState("");
// // //   const [answers, setAnswers] = useState([]);
// // //   const [loading, setLoading] = useState(false);

// // //   // ✅ interview data (SAFE PARSE)
// // //   const interviewData = JSON.parse(
// // //     localStorage.getItem("interviewData") || "{}"
// // //   );

// // //   const interviewId = localStorage.getItem("interviewId");

// // //   // load questions
// // //   useEffect(() => {
// // //     const stored = localStorage.getItem("questions");
// // //     if (stored) setQuestions(JSON.parse(stored));
// // //   }, []);

// // //   const currentQuestion = questions[index];

// // //   // NEXT QUESTION



// // // const handleNext = async () => {
// // //   if (!answer.trim()) {
// // //     return alert("Please write an answer");
// // //   }

// // //   const updated = [
// // //     ...answers,
// // //     {
// // //       question: currentQuestion,
// // //       answer: answer,
// // //     },
// // //   ];

// // //   setAnswers(updated);
// // //   setAnswer("");

// // //   if (index + 1 < questions.length) {
// // //     setIndex(index + 1);
// // //   } else {
// // //     // ✅ IMPORTANT FIX (DO NOT USE STATE DIRECTLY)
// // //     await submit(updated);
// // //   }
// // // };

// // // // ✅ FINAL SUBMIT (FIXED)
// // // const submit = async (finalAnswers) => {
// // //   try {
// // //     setLoading(true);

// // //     const token = localStorage.getItem("token");

// // //     const res = await API.post(
// // //       "/responses",
// // //       {
// // //         interviewId,
// // //         answers: finalAnswers,
// // //       },
// // //       {
// // //         headers: {
// // //           Authorization: `Bearer ${token}`,
// // //         },
// // //       }
// // //     );

// // //     console.log("SUBMIT SUCCESS:", res.data);

// // //     // ✅ IMPORTANT FIX HERE
// // //     const safeResult = {
// // //       msg: res.data.msg,
// // //       score: res.data.score,
// // //       responses: res.data.responses || []
// // //     };

// // //     localStorage.setItem("result", JSON.stringify(safeResult));

// // //     nav("/result");
// // //   } catch (err) {
// // //     console.log("SUBMIT ERROR:", err.response?.data || err.message);
// // //     alert(err.response?.data?.msg || "Submit failed");
// // //   } finally {
// // //     setLoading(false);
// // //   }
// // // };



// // //   return (
// // //     <div className="min-h-screen flex bg-gray-100 p-6 gap-6">

// // //       {/* LEFT PANEL */}
// // //       <div className="w-1/3 bg-white p-5 rounded-xl shadow">

// // //         <h2 className="font-bold text-lg mb-4">Interview Info</h2>

// // //         <div className="space-y-2 text-sm">

// // //           <p><b>Role:</b> {interviewData.role || "N/A"}</p>

// // //           <p><b>Category:</b> {interviewData.category || "N/A"}</p>

// // //           <p>
// // //             <b>Responsibilities:</b>{" "}
// // //             {interviewData.responsibilities || "N/A"}
// // //           </p>

// // //           <p><b>Job Description:</b> {interviewData.jobDesc || "N/A"}</p>

// // //           <p><b>Job Link:</b> {interviewData.jobLink || "N/A"}</p>

// // //         </div>

// // //         <div className="mt-6">
// // //           <p className="font-semibold">Progress</p>
// // //           <p>
// // //             {index + 1} / {questions.length}
// // //           </p>

// // //           <div className="w-full bg-gray-200 h-2 rounded mt-2">
// // //             <div
// // //               className="h-2 bg-blue-500"
// // //               style={{
// // //                 width: `${((index + 1) / questions.length) * 100}%`,
// // //               }}
// // //             />
// // //           </div>
// // //         </div>

// // //       </div>

// // //       {/* RIGHT PANEL */}
// // //       <div className="flex-1 bg-white p-6 rounded-xl shadow flex flex-col">

// // //         {!currentQuestion ? (
// // //           <div className="flex flex-col items-center justify-center h-full">
// // //             <h2 className="text-xl font-bold mb-4">
// // //               Ready to Start Interview
// // //             </h2>

// // //             <button
// // //               onClick={() => setIndex(0)}
// // //               className="bg-black text-white px-6 py-3 rounded"
// // //             >
// // //               Start Interview
// // //             </button>
// // //           </div>
// // //         ) : (
// // //           <>
// // //             <h2 className="text-xl font-bold mb-4">
// // //               {currentQuestion}
// // //             </h2>

// // //             <textarea
// // //               className="border w-full p-3 h-40 rounded"
// // //               placeholder="Type your answer..."
// // //               value={answer}
// // //               onChange={(e) => setAnswer(e.target.value)}
// // //             />

// // //             <button
// // //               onClick={handleNext}
// // //               disabled={loading}
// // //               className="bg-blue-600 text-white p-3 w-full mt-4 rounded"
// // //             >
// // //               {loading
// // //                 ? "Submitting..."
// // //                 : index + 1 === questions.length
// // //                 ? "Finish Interview"
// // //                 : "Next Question"}
// // //             </button>
// // //           </>
// // //         )}

// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // // all crt code above choose this



// // import { useEffect, useState } from "react";
// // import API from "../api/axios";
// // import { useNavigate } from "react-router-dom";

// // export default function Interview() {
// //   const nav = useNavigate();

// //   const [questions, setQuestions] = useState([]);
// //   const [index, setIndex] = useState(0);
// //   const [answer, setAnswer] = useState("");
// //   const [answers, setAnswers] = useState([]);
// //   const [loading, setLoading] = useState(false);

// //   const interviewData = JSON.parse(
// //     localStorage.getItem("interviewData") || "{}"
// //   );

// //   const interviewId = localStorage.getItem("interviewId");

// //   useEffect(() => {
// //     const stored = localStorage.getItem("questions");
// //     if (stored) setQuestions(JSON.parse(stored));
// //   }, []);

// //   const currentQuestion = questions[index];

// //   const handleNext = async () => {
// //     if (!answer.trim()) return alert("Please write an answer");

// //     const updated = [...answers, { question: currentQuestion, answer }];

// //     setAnswers(updated);
// //     setAnswer("");

// //     if (index + 1 < questions.length) {
// //       setIndex(index + 1);
// //     } else {
// //       await submit(updated);
// //     }
// //   };

// //   const submit = async (finalAnswers) => {
// //     try {
// //       setLoading(true);

// //       const token = localStorage.getItem("token");

// //       const res = await API.post(
// //         "/responses",
// //         {
// //           interviewId,
// //           answers: finalAnswers,
// //         },
// //         {
// //           headers: { Authorization: `Bearer ${token}` },
// //         }
// //       );

// //       const safeResult = {
// //         msg: res.data.msg,
// //         score: res.data.score,
// //         responses: res.data.responses || [],
// //       };

// //       localStorage.setItem("result", JSON.stringify(safeResult));
// //       nav("/result");
// //     } catch (err) {
// //       alert(err.response?.data?.msg || "Submit failed");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-[#eef2ff] via-[#fdf2f8] to-[#f0f9ff] flex">

// //       {/* LEFT PANEL */}
// //       <div className="w-1/3 m-4 rounded-2xl bg-white/70 backdrop-blur-xl border border-gray-200 p-6 flex flex-col shadow-md">

// //         <h2 className="text-lg font-semibold text-gray-900 mb-6">
// //           Interview Info
// //         </h2>

// //         <div className="space-y-3 text-sm text-gray-600">
// //           <p><b>Role:</b> {interviewData.role || "N/A"}</p>
// //           <p><b>Category:</b> {interviewData.category || "N/A"}</p>
// //           <p><b>Responsibilities:</b> {interviewData.responsibilities || "N/A"}</p>
// //           <p><b>Job Description:</b> {interviewData.jobDesc || "N/A"}</p>
// //           <p><b>Job Link:</b> {interviewData.jobLink || "N/A"}</p>
// //         </div>

      

// //         {/* PROGRESS */}
// //         <div className="mt-auto">
// //           <p className="text-sm font-semibold text-gray-700 mb-2">
// //             Progress
// //           </p>

// //           <p className="text-xs text-gray-500 mb-2">
// //             {questions.length ? `${index + 1} / ${questions.length}` : "0 / 0"}
// //           </p>

// //           <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
// //             <div
// //               className="h-2 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-500"
// //               style={{
// //                 width: questions.length
// //                   ? `${((index + 1) / questions.length) * 100}%`
// //                   : "0%",
// //               }}
// //             />
// //           </div>
// //         </div>
// //       </div>

// //       {/* RIGHT PANEL */}
// //       <div className="flex-1 m-4 rounded-2xl bg-white/70 backdrop-blur-xl border border-gray-200 p-6 shadow-md flex flex-col">

// //         {!currentQuestion ? (
// //           <div className="flex flex-col items-center justify-center h-full">
// //             <h2 className="text-2xl font-semibold text-gray-900 mb-4">
// //               Ready to Start Interview 🚀
// //             </h2>

// //             <button
// //               onClick={() => setIndex(0)}
// //               className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-3 rounded-xl shadow hover:scale-105 transition"
// //             >
// //               Start Interview
// //             </button>
// //           </div>
// //         ) : (
// //           <>
// //             <h2 className="text-xl font-semibold text-gray-900 mb-4">
// //               {currentQuestion}
// //             </h2>

// //             <textarea
// //               className="flex-1 w-full p-4 rounded-xl border border-gray-200 bg-white
// //               focus:outline-none focus:ring-2 focus:ring-purple-400 resize-none"
// //               placeholder="Type your answer here..."
// //               value={answer}
// //               onChange={(e) => setAnswer(e.target.value)}
// //             />

// //             <button
// //               onClick={handleNext}
// //               disabled={loading}
// //               className="mt-4 w-full py-3 rounded-xl font-semibold text-white 
// //               bg-gradient-to-r from-purple-600 to-pink-500 hover:scale-[1.01] transition disabled:opacity-50"
// //             >
// //               {loading
// //                 ? "Submitting..."
// //                 : index + 1 === questions.length
// //                 ? "Finish Interview 🎯"
// //                 : "Next Question →"}
// //             </button>
// //           </>
// //         )}

// //       </div>
// //     </div>
// //   );
// // }


// import { useEffect, useState } from "react";
// import API from "../api/axios";
// import { useNavigate } from "react-router-dom";

// export default function Interview() {
//   const nav = useNavigate();

//   const [questions, setQuestions] = useState([]);
//   const [index, setIndex] = useState(0);
//   const [answer, setAnswer] = useState("");
//   const [answers, setAnswers] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const interviewData = JSON.parse(
//     localStorage.getItem("interviewData") || "{}"
//   );

//   const interviewId = localStorage.getItem("interviewId");

//   useEffect(() => {
//     const stored = localStorage.getItem("questions");
//     if (stored) setQuestions(JSON.parse(stored));
//   }, []);

//   const currentQuestion = questions[index];

//   const handleNext = async () => {
//     if (!answer.trim()) return alert("Please write an answer");

//     const updated = [...answers, { question: currentQuestion, answer }];

//     setAnswers(updated);
//     setAnswer("");

//     if (index + 1 < questions.length) {
//       setIndex(index + 1);
//     } else {
//       await submit(updated);
//     }
//   };

//   const submit = async (finalAnswers) => {
//     try {
//       setLoading(true);

//       const token = localStorage.getItem("token");

//       const res = await API.post(
//         "/responses",
//         {
//           interviewId,
//           answers: finalAnswers,
//         },
//         {
//           headers: { Authorization: `Bearer ${token}` },
//         }
//       );

//       const safeResult = {
//         msg: res.data.msg,
//         score: res.data.score,
//         responses: res.data.responses || [],
//       };

//       localStorage.setItem("result", JSON.stringify(safeResult));
//       nav("/result");
//     } catch (err) {
//       alert(err.response?.data?.msg || "Submit failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#eef2ff] via-[#fdf2f8] to-[#f0f9ff] flex">

//       {/* LEFT PANEL (Dashboard Style) */}
//       <div className="w-1/3 m-4 rounded-2xl backdrop-blur-xl border border-gray-200 p-6 flex flex-col shadow-md relative overflow-hidden bg-white/60">

//         {/* soft pastel background */}
//         <div className="absolute inset-0 bg-gradient-to-br from-[#eef2ff] via-[#fdf2f8] to-[#f0f9ff] opacity-80"></div>

//         <div className="relative z-10 flex flex-col h-full">

//           <h2 className="text-lg font-semibold text-gray-900 mb-6">
//             Interview Info
//           </h2>

//           <div className="space-y-3 text-sm text-gray-700">
//             <p><b>Role:</b> {interviewData.role || "N/A"}</p>
//             <p><b>Category:</b> {interviewData.category || "N/A"}</p>
//             <p><b>Responsibilities:</b> {interviewData.responsibilities || "N/A"}</p>
//             <p><b>Job Description:</b> {interviewData.jobDesc || "N/A"}</p>
//             <p><b>Job Link:</b> {interviewData.jobLink || "N/A"}</p>
//           </div>

//           {/* PROGRESS */}
//           <div className="mt-auto">
//             <p className="text-sm font-semibold text-gray-700 mb-2">
//               Progress
//             </p>

//             <p className="text-xs text-gray-500 mb-2">
//               {questions.length ? `${index + 1} / ${questions.length}` : "0 / 0"}
//             </p>

//             <div className="w-full bg-white/60 h-2 rounded-full overflow-hidden">
//               <div
//                 className="h-2 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-500"
//                 style={{
//                   width: questions.length
//                     ? `${((index + 1) / questions.length) * 100}%`
//                     : "0%",
//                 }}
//               />
//             </div>
//           </div>

//         </div>
//       </div>

//       {/* RIGHT PANEL */}
//       <div className="flex-1 m-4 rounded-2xl bg-white/70 backdrop-blur-xl border border-gray-200 p-6 shadow-md flex flex-col">

//         {!currentQuestion ? (
//           <div className="flex flex-col items-center justify-center h-full">
//             <h2 className="text-2xl font-semibold text-gray-900 mb-4">
//               Ready to Start Interview 🚀
//             </h2>

//             <button
//               onClick={() => setIndex(0)}
//               className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-3 rounded-xl shadow hover:scale-105 transition"
//             >
//               Start Interview
//             </button>
//           </div>
//         ) : (
//           <>
//             <h2 className="text-xl font-semibold text-gray-900 mb-4">
//               {currentQuestion}
//             </h2>

//             <textarea
//               className="flex-1 w-full p-4 rounded-xl border border-gray-200 bg-white
//               focus:outline-none focus:ring-2 focus:ring-purple-400 resize-none"
//               placeholder="Type your answer here..."
//               value={answer}
//               onChange={(e) => setAnswer(e.target.value)}
//             />

//             <button
//               onClick={handleNext}
//               disabled={loading}
//               className="mt-4 w-full py-3 rounded-xl font-semibold text-white 
//               bg-gradient-to-r from-purple-600 to-pink-500 hover:scale-[1.01] transition disabled:opacity-50"
//             >
//               {loading
//                 ? "Submitting..."
//                 : index + 1 === questions.length
//                 ? "Finish Interview 🎯"
//                 : "Next Question →"}
//             </button>
//           </>
//         )}

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