


// // // // // // // import { useState, useEffect } from "react";

// // // // // // // export default function InterviewSetup() {
// // // // // // //   const [step, setStep] = useState(0);
// // // // // // //   const [form, setForm] = useState({});

// // // // // // //   const next = () => setStep((prev) => prev + 1);

// // // // // // //   const handle = (key, value) => {
// // // // // // //     setForm({ ...form, [key]: value });
// // // // // // //   };

// // // // // // //   // AUTO MOVE AFTER LOADING
// // // // // // //   useEffect(() => {
// // // // // // //     if (step === 11) {
// // // // // // //       const timer = setTimeout(() => {
// // // // // // //         setStep(12);
// // // // // // //       }, 3000);
// // // // // // //       return () => clearTimeout(timer);
// // // // // // //     }
// // // // // // //   }, [step]);

// // // // // // //   return (
// // // // // // //     <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">

// // // // // // //       <div className="bg-white w-full max-w-2xl rounded-2xl shadow-xl p-8">

// // // // // // //         {/* STEP 0 */}
// // // // // // //         {step === 0 && (
// // // // // // //           <>
// // // // // // //             <h2 className="text-xl font-bold mb-4">
// // // // // // //               Welcome to AI Interview 🚀
// // // // // // //             </h2>
// // // // // // //             <p className="mb-6">Let’s personalize your experience</p>
// // // // // // //             <button onClick={next} className="btn">Next</button>
// // // // // // //           </>
// // // // // // //         )}

// // // // // // //         {/* STEP 1 */}
// // // // // // //         {step === 1 && (
// // // // // // //           <>
// // // // // // //             <h2 className="font-bold mb-4">Your Role</h2>
// // // // // // //             <input className="input" placeholder="HR / Manager"
// // // // // // //               onChange={(e) => handle("role", e.target.value)} />
// // // // // // //             <button onClick={next} className="btn mt-4">Next</button>
// // // // // // //           </>
// // // // // // //         )}

// // // // // // //         {/* STEP 2 */}
// // // // // // //         {step === 2 && (
// // // // // // //           <>
// // // // // // //             <h2 className="font-bold mb-4">Last Interview?</h2>
// // // // // // //             <input className="input" placeholder="e.g 3 months ago"
// // // // // // //               onChange={(e) => handle("lastInterview", e.target.value)} />
// // // // // // //             <button onClick={next} className="btn mt-4">Next</button>
// // // // // // //           </>
// // // // // // //         )}

// // // // // // //         {/* STEP 3 */}
// // // // // // //         {step === 3 && (
// // // // // // //           <>
// // // // // // //             <h2 className="font-bold mb-4">Confidence Level</h2>
// // // // // // //             <input className="input" placeholder="0-100"
// // // // // // //               onChange={(e) => handle("confidence", e.target.value)} />
// // // // // // //             <button onClick={next} className="btn mt-4">Next</button>
// // // // // // //           </>
// // // // // // //         )}

// // // // // // //         {/* STEP 4 */}
// // // // // // //         {step === 4 && (
// // // // // // //           <>
// // // // // // //             <h2 className="font-bold mb-4">Hardest Area?</h2>
// // // // // // //             {["Cultural fit","Technical","Communication","Problem solving"].map(opt => (
// // // // // // //               <button key={opt} onClick={() => handle("weakArea", opt)} className="option">
// // // // // // //                 {opt}
// // // // // // //               </button>
// // // // // // //             ))}
// // // // // // //             <button onClick={next} className="btn mt-4">Next</button>
// // // // // // //           </>
// // // // // // //         )}

// // // // // // //         {/* STEP 5 */}
// // // // // // //         {step === 5 && (
// // // // // // //           <>
// // // // // // //             <h2 className="font-bold mb-4">Nervous Behavior</h2>
// // // // // // //             {["Strongly agree","Agree","Disagree","Strongly disagree"].map(opt => (
// // // // // // //               <button key={opt} onClick={() => handle("ramble", opt)} className="option">
// // // // // // //                 {opt}
// // // // // // //               </button>
// // // // // // //             ))}
// // // // // // //             <button onClick={next} className="btn mt-4">Next</button>
// // // // // // //           </>
// // // // // // //         )}

// // // // // // //         {/* STEP 6 */}
// // // // // // //         {step === 6 && (
// // // // // // //           <>
// // // // // // //             <h2 className="font-bold mb-4">Coaching?</h2>
// // // // // // //             {["Many times","Once","Not yet"].map(opt => (
// // // // // // //               <button key={opt} onClick={() => handle("coaching", opt)} className="option">
// // // // // // //                 {opt}
// // // // // // //               </button>
// // // // // // //             ))}
// // // // // // //             <button onClick={next} className="btn mt-4">Next</button>
// // // // // // //           </>
// // // // // // //         )}

// // // // // // //         {/* STEP 7 */}
// // // // // // //         {step === 7 && (
// // // // // // //           <>
// // // // // // //             <h2 className="font-bold mb-4">Expected Salary</h2>
// // // // // // //             <input className="input" placeholder="e.g 120000"
// // // // // // //               onChange={(e) => handle("salary", e.target.value)} />
// // // // // // //             <button onClick={next} className="btn mt-4">Next</button>
// // // // // // //           </>
// // // // // // //         )}

// // // // // // //         {/* STEP 8 */}
// // // // // // //         {step === 8 && (
// // // // // // //           <>
// // // // // // //             <h2 className="font-bold mb-4">Analysis Complete 📊</h2>
// // // // // // //             <p className="mb-4">Score: 14%</p>
// // // // // // //             <div className="w-full bg-gray-200 h-3 rounded-full">
// // // // // // //               <div className="bg-red-500 h-3 rounded-full w-[14%]"></div>
// // // // // // //             </div>
// // // // // // //             <button onClick={next} className="btn mt-6">
// // // // // // //               Start Practicing
// // // // // // //             </button>
// // // // // // //           </>
// // // // // // //         )}

// // // // // // //         {/* STEP 9 */}
// // // // // // //         {step === 9 && (
// // // // // // //           <>
// // // // // // //             <h2 className="font-bold mb-4">Add Job Details</h2>

// // // // // // //             <button onClick={() => setStep(10)} className="option">
// // // // // // //               Import from job listing
// // // // // // //             </button>

// // // // // // //             <button onClick={() => setStep(13)} className="option">
// // // // // // //               Enter manually
// // // // // // //             </button>
// // // // // // //           </>
// // // // // // //         )}

// // // // // // //         {/* STEP 10 */}
// // // // // // //         {step === 10 && (
// // // // // // //           <>
// // // // // // //             <h2 className="font-bold mb-4">Paste Job URL</h2>
// // // // // // //             <input className="input"
// // // // // // //               placeholder="https://linkedin.com/job..."
// // // // // // //               onChange={(e) => handle("jobUrl", e.target.value)} />
// // // // // // //             <button onClick={() => setStep(11)} className="btn mt-4">
// // // // // // //               Import
// // // // // // //             </button>
// // // // // // //           </>
// // // // // // //         )}

// // // // // // //         {/* STEP 11 */}
// // // // // // //         {step === 11 && (
// // // // // // //           <>
// // // // // // //             <h2 className="font-bold mb-4">Importing your job...</h2>
// // // // // // //             <p>This takes a few seconds</p>
// // // // // // //           </>
// // // // // // //         )}

// // // // // // //         {/* STEP 12 */}
// // // // // // //         {step === 12 && (
// // // // // // //           <>
// // // // // // //             <h2 className="font-bold mb-4">Job Imported ✅</h2>
// // // // // // //             <button onClick={() => setStep(14)} className="btn">
// // // // // // //               Continue
// // // // // // //             </button>
// // // // // // //           </>
// // // // // // //         )}

// // // // // // //         {/* STEP 13 MANUAL */}
// // // // // // //         {step === 13 && (
// // // // // // //           <>
// // // // // // //             <h2 className="font-bold mb-4">Enter Job Details</h2>

// // // // // // //             <input className="input mb-3"
// // // // // // //               placeholder="Job Title"
// // // // // // //               onChange={(e) => handle("jobTitle", e.target.value)} />

// // // // // // //             <textarea className="input mb-3"
// // // // // // //               placeholder="Responsibilities"
// // // // // // //               onChange={(e) => handle("jobDesc", e.target.value)} />

// // // // // // //             <button onClick={() => setStep(14)} className="btn">
// // // // // // //               Next
// // // // // // //             </button>
// // // // // // //           </>
// // // // // // //         )}

// // // // // // //         {/* STEP 14 USER */}
// // // // // // //         {step === 14 && (
// // // // // // //           <>
// // // // // // //             <h2 className="font-bold mb-4">Your Details</h2>

// // // // // // //             <input className="input mb-3"
// // // // // // //               placeholder="Name"
// // // // // // //               onChange={(e) => handle("name", e.target.value)} />

// // // // // // //             <input className="input mb-3"
// // // // // // //               placeholder="Experience"
// // // // // // //               onChange={(e) => handle("exp", e.target.value)} />

// // // // // // //             <button onClick={() => setStep(15)} className="btn">
// // // // // // //               Next
// // // // // // //             </button>
// // // // // // //           </>
// // // // // // //         )}

// // // // // // //         {/* STEP 15 DIFFICULTY */}
// // // // // // //         {step === 15 && (
// // // // // // //           <>
// // // // // // //             <h2 className="font-bold mb-4">Choose Difficulty</h2>

// // // // // // //             {["Easy","Medium","Hard","Extreme"].map(level => (
// // // // // // //               <button key={level}
// // // // // // //                 onClick={() => {
// // // // // // //                   handle("difficulty", level);
// // // // // // //                   setStep(16);
// // // // // // //                 }}
// // // // // // //                 className="option">
// // // // // // //                 {level}
// // // // // // //               </button>
// // // // // // //             ))}
// // // // // // //           </>
// // // // // // //         )}

// // // // // // //         {/* STEP 16 FINAL */}
// // // // // // //         {step === 16 && (
// // // // // // //           <div className="flex flex-col md:flex-row gap-6">

// // // // // // //             <div className="w-full md:w-1/2 bg-gray-100 p-4 rounded-xl">
// // // // // // //               <h3 className="font-bold mb-2">Job Info</h3>
// // // // // // //               <p><b>Role:</b> {form.jobTitle}</p>
// // // // // // //               <p><b>Description:</b> {form.jobDesc}</p>
// // // // // // //               <p><b>Difficulty:</b> {form.difficulty}</p>
// // // // // // //             </div>

// // // // // // //             <div className="w-full md:w-1/2 flex flex-col justify-between">

// // // // // // //               <div>
// // // // // // //                 <h2 className="font-bold mb-4">
// // // // // // //                   Ready to Begin 🎤
// // // // // // //                 </h2>
// // // // // // //                 <p className="text-gray-600">
// // // // // // //                   Allow microphone to start
// // // // // // //                 </p>
// // // // // // //               </div>

// // // // // // //               <button
// // // // // // //                 className="btn mt-6"
// // // // // // //                 onClick={async () => {
// // // // // // //                   try {
// // // // // // //                     await navigator.mediaDevices.getUserMedia({ audio: true });
// // // // // // //                     alert("Interview Started 🎉");
// // // // // // //                   } catch {
// // // // // // //                     alert("Mic denied ❌");
// // // // // // //                   }
// // // // // // //                 }}
// // // // // // //               >
// // // // // // //                 Begin Interview
// // // // // // //               </button>

// // // // // // //             </div>

// // // // // // //           </div>
// // // // // // //         )}

// // // // // // //       </div>

// // // // // // //       <style>{`
// // // // // // //         .btn {
// // // // // // //           width: 100%;
// // // // // // //           background: black;
// // // // // // //           color: white;
// // // // // // //           padding: 10px;
// // // // // // //           border-radius: 8px;
// // // // // // //         }
// // // // // // //         .input {
// // // // // // //           width: 100%;
// // // // // // //           border: 1px solid #ddd;
// // // // // // //           padding: 10px;
// // // // // // //           border-radius: 8px;
// // // // // // //         }
// // // // // // //         .option {
// // // // // // //           width: 100%;
// // // // // // //           border: 1px solid #ddd;
// // // // // // //           padding: 10px;
// // // // // // //           border-radius: 8px;
// // // // // // //           margin-bottom: 8px;
// // // // // // //           text-align: left;
// // // // // // //         }
// // // // // // //       `}</style>

// // // // // // //     </div>
// // // // // // //   );
// // // // // // // }


// // // // // // import { useState, useEffect } from "react";
// // // // // // import { useNavigate } from "react-router-dom";

// // // // // // export default function InterviewSetup() {
// // // // // //   const [step, setStep] = useState(0);
// // // // // //   const [form, setForm] = useState({});
// // // // // //   const navigate = useNavigate();

// // // // // //   const next = () => setStep((s) => s + 1);

// // // // // //   const handle = (key, value) => {
// // // // // //     setForm((prev) => ({ ...prev, [key]: value }));
// // // // // //   };

// // // // // //   // auto move import loading
// // // // // //   useEffect(() => {
// // // // // //     if (step === 11) {
// // // // // //       setTimeout(() => setStep(12), 2000);
// // // // // //     }
// // // // // //   }, [step]);

// // // // // //   const Option = ({ field, value }) => (
// // // // // //     <button
// // // // // //       onClick={() => handle(field, value)}
// // // // // //       className={`option ${form[field] === value ? "selected" : ""}`}
// // // // // //     >
// // // // // //       {value}
// // // // // //     </button>
// // // // // //   );

// // // // // //   return (
// // // // // //     <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
// // // // // //       <div className="bg-white w-full max-w-2xl rounded-2xl shadow-xl p-8">

// // // // // //         {/* STEP 0 */}
// // // // // //         {step === 0 && (
// // // // // //           <>
// // // // // //             <h2 className="title">Welcome to AI Interview 🚀</h2>
// // // // // //             <p className="mb-6">Let’s personalize your experience</p>
// // // // // //             <button className="btn" onClick={next}>Next</button>
// // // // // //           </>
// // // // // //         )}

// // // // // //         {/* STEP 1 */}
// // // // // //         {step === 1 && (
// // // // // //           <>
// // // // // //             <h2 className="title">Your Role</h2>
// // // // // //             <input className="input"
// // // // // //               placeholder="HR / Developer"
// // // // // //               onChange={(e) => handle("role", e.target.value)}
// // // // // //             />
// // // // // //             <button className="btn mt-4" onClick={next}>Next</button>
// // // // // //           </>
// // // // // //         )}

// // // // // //         {/* STEP 2 */}
// // // // // //         {step === 2 && (
// // // // // //           <>
// // // // // //             <h2 className="title">When was your last interview?</h2>
// // // // // //             <input className="input"
// // // // // //               placeholder="e.g 3 months ago"
// // // // // //               onChange={(e) => handle("lastInterview", e.target.value)}
// // // // // //             />
// // // // // //             <button className="btn mt-4" onClick={next}>Next</button>
// // // // // //           </>
// // // // // //         )}

// // // // // //         {/* STEP 3 */}
// // // // // //         {step === 3 && (
// // // // // //           <>
// // // // // //             <h2 className="title">Confidence level (0-100)</h2>
// // // // // //             <input className="input"
// // // // // //               type="number"
// // // // // //               onChange={(e) => handle("confidence", e.target.value)}
// // // // // //             />
// // // // // //             <button className="btn mt-4" onClick={next}>Next</button>
// // // // // //           </>
// // // // // //         )}

// // // // // //         {/* STEP 4 */}
// // // // // //         {step === 4 && (
// // // // // //           <>
// // // // // //             <h2 className="title">Hardest area?</h2>
// // // // // //             {["Cultural fit","Technical","Communication","Problem solving"].map(v => (
// // // // // //               <Option key={v} field="weakArea" value={v} />
// // // // // //             ))}
// // // // // //             <button disabled={!form.weakArea} onClick={next} className="btn mt-4">Next</button>
// // // // // //           </>
// // // // // //         )}

// // // // // //         {/* STEP 5 */}
// // // // // //         {step === 5 && (
// // // // // //           <>
// // // // // //             <h2 className="title">Do you ramble when nervous?</h2>
// // // // // //             {["Strongly agree","Agree","Disagree","Strongly disagree"].map(v => (
// // // // // //               <Option key={v} field="ramble" value={v} />
// // // // // //             ))}
// // // // // //             <button disabled={!form.ramble} onClick={next} className="btn mt-4">Next</button>
// // // // // //           </>
// // // // // //         )}

// // // // // //         {/* STEP 6 */}
// // // // // //         {step === 6 && (
// // // // // //           <>
// // // // // //             <h2 className="title">Coaching experience?</h2>
// // // // // //             {["Many times","Once","Not yet"].map(v => (
// // // // // //               <Option key={v} field="coaching" value={v} />
// // // // // //             ))}
// // // // // //             <button disabled={!form.coaching} onClick={next} className="btn mt-4">Next</button>
// // // // // //           </>
// // // // // //         )}

// // // // // //         {/* STEP 7 */}
// // // // // //         {step === 7 && (
// // // // // //           <>
// // // // // //             <h2 className="title">Expected salary</h2>
// // // // // //             <input className="input"
// // // // // //               placeholder="e.g 120000"
// // // // // //               onChange={(e) => handle("salary", e.target.value)}
// // // // // //             />
// // // // // //             <button className="btn mt-4" onClick={next}>Next</button>
// // // // // //           </>
// // // // // //         )}

// // // // // //         {/* STEP 8 */}
// // // // // //         {step === 8 && (
// // // // // //           <>
// // // // // //             <h2 className="title">Analysis Complete 📊</h2>
// // // // // //             <p className="mb-4">Score: 14%</p>

// // // // // //             <div className="progress">
// // // // // //               <div className="bar" style={{ width: "14%" }}></div>
// // // // // //             </div>

// // // // // //             <button className="btn mt-6" onClick={next}>
// // // // // //               Start Practicing
// // // // // //             </button>
// // // // // //           </>
// // // // // //         )}

// // // // // //         {/* STEP 9 */}
// // // // // //         {step === 9 && (
// // // // // //           <>
// // // // // //             <h2 className="title">Add Job Details</h2>
// // // // // //             <button onClick={() => setStep(10)} className="option">
// // // // // //               Import from job listing
// // // // // //             </button>
// // // // // //             <button onClick={() => setStep(13)} className="option">
// // // // // //               Enter manually
// // // // // //             </button>
// // // // // //           </>
// // // // // //         )}

// // // // // //         {/* STEP 10 */}
// // // // // //         {step === 10 && (
// // // // // //           <>
// // // // // //             <h2 className="title">Paste Job URL</h2>
// // // // // //             <input className="input"
// // // // // //               placeholder="https://linkedin.com/job..."
// // // // // //               onChange={(e) => handle("jobUrl", e.target.value)}
// // // // // //             />
// // // // // //             <button onClick={() => setStep(11)} className="btn mt-4">
// // // // // //               Import
// // // // // //             </button>
// // // // // //           </>
// // // // // //         )}

// // // // // //         {/* STEP 11 */}
// // // // // //         {step === 11 && (
// // // // // //           <>
// // // // // //             <h2 className="title">Importing your job...</h2>
// // // // // //             <p>This takes few seconds</p>
// // // // // //           </>
// // // // // //         )}

// // // // // //         {/* STEP 12 */}
// // // // // //         {step === 12 && (
// // // // // //           <>
// // // // // //             <h2 className="title">Job Imported ✅</h2>
// // // // // //             <button onClick={() => setStep(14)} className="btn">
// // // // // //               Continue
// // // // // //             </button>
// // // // // //           </>
// // // // // //         )}

// // // // // //         {/* STEP 13 */}
// // // // // //         {step === 13 && (
// // // // // //           <>
// // // // // //             <h2 className="title">Enter Job Details</h2>

// // // // // //             <input className="input mb-3"
// // // // // //               placeholder="Job Title"
// // // // // //               onChange={(e) => handle("jobTitle", e.target.value)}
// // // // // //             />

// // // // // //             <textarea className="input mb-3"
// // // // // //               placeholder="Responsibilities"
// // // // // //               onChange={(e) => handle("jobDesc", e.target.value)}
// // // // // //             />

// // // // // //             <button onClick={() => setStep(14)} className="btn">
// // // // // //               Next
// // // // // //             </button>
// // // // // //           </>
// // // // // //         )}

// // // // // //         {/* STEP 14 */}
// // // // // //         {step === 14 && (
// // // // // //           <>
// // // // // //             <h2 className="title">Your Details</h2>

// // // // // //             <input className="input mb-3"
// // // // // //               placeholder="Name"
// // // // // //               onChange={(e) => handle("name", e.target.value)}
// // // // // //             />

// // // // // //             <input className="input mb-3"
// // // // // //               placeholder="Experience"
// // // // // //               onChange={(e) => handle("experience", e.target.value)}
// // // // // //             />

// // // // // //             <button onClick={() => setStep(15)} className="btn">
// // // // // //               Next
// // // // // //             </button>
// // // // // //           </>
// // // // // //         )}

// // // // // //         {/* STEP 15 */}
// // // // // //         {step === 15 && (
// // // // // //           <>
// // // // // //             <h2 className="title">Choose Difficulty</h2>
// // // // // //             {["Easy","Medium","Hard","Extreme"].map(v => (
// // // // // //               <Option key={v} field="difficulty" value={v} />
// // // // // //             ))}
// // // // // //             <button
// // // // // //               disabled={!form.difficulty}
// // // // // //               onClick={() => setStep(16)}
// // // // // //               className="btn mt-4"
// // // // // //             >
// // // // // //               Next
// // // // // //             </button>
// // // // // //           </>
// // // // // //         )}

// // // // // //         {/* STEP 16 FINAL */}
// // // // // //         {step === 16 && (
// // // // // //           <div className="flex flex-col md:flex-row gap-6">

// // // // // //             <div className="panel">
// // // // // //               <h3 className="font-bold mb-2">Summary</h3>
// // // // // //               <p><b>Role:</b> {form.jobTitle}</p>
// // // // // //               <p><b>Description:</b> {form.jobDesc}</p>
// // // // // //               <p><b>Difficulty:</b> {form.difficulty}</p>
// // // // // //             </div>

// // // // // //             <div className="flex flex-col justify-between w-full">
// // // // // //               <div>
// // // // // //                 <h2 className="title">Ready to Begin 🎤</h2>
// // // // // //                 <p className="text-gray-600">
// // // // // //                   Allow microphone access
// // // // // //                 </p>
// // // // // //               </div>

// // // // // //               <button
// // // // // //                 className="btn mt-6"
// // // // // //                 onClick={async () => {
// // // // // //                   try {
// // // // // //                     await navigator.mediaDevices.getUserMedia({ audio: true });

// // // // // //                     localStorage.setItem("setup", JSON.stringify(form));

// // // // // //                     navigate("/interview");
// // // // // //                   } catch {
// // // // // //                     alert("Mic permission denied ❌");
// // // // // //                   }
// // // // // //                 }}
// // // // // //               >
// // // // // //                 Begin Interview
// // // // // //               </button>
// // // // // //             </div>

// // // // // //           </div>
// // // // // //         )}

// // // // // //       </div>

// // // // // //       {/* STYLES */}
// // // // // //       <style>{`
// // // // // //         .title { font-size: 20px; font-weight: bold; margin-bottom: 16px; }
// // // // // //         .btn { width: 100%; background: black; color: white; padding: 12px; border-radius: 8px; }
// // // // // //         .btn:disabled { opacity: 0.5; }
// // // // // //         .input { width: 100%; border: 1px solid #ddd; padding: 10px; border-radius: 8px; }
// // // // // //         .option { width: 100%; border: 1px solid #ddd; padding: 10px; border-radius: 8px; margin-bottom: 8px; }
// // // // // //         .selected { border: 2px solid black; background: #f9fafb; }
// // // // // //         .panel { background: #f3f4f6; padding: 16px; border-radius: 12px; width: 100%; }
// // // // // //         .progress { width: 100%; height: 10px; background: #eee; border-radius: 10px; }
// // // // // //         .bar { height: 100%; background: red; border-radius: 10px; }
// // // // // //       `}</style>
// // // // // //     </div>
// // // // // //   );
// // // // // // }

// // // // // // // final crt code above

// // // // // import { useState, useEffect } from "react";
// // // // // import { useNavigate } from "react-router-dom";

// // // // // export default function InterviewSetup() {
// // // // //   const [step, setStep] = useState(0);
// // // // //   const [form, setForm] = useState({});
// // // // //   const navigate = useNavigate();

// // // // //   const next = () => setStep((s) => s + 1);

// // // // //   const handle = (key, value) => {
// // // // //     setForm((prev) => ({ ...prev, [key]: value }));
// // // // //   };

// // // // //   useEffect(() => {
// // // // //     if (step === 11) {
// // // // //       setTimeout(() => setStep(12), 2000);
// // // // //     }
// // // // //   }, [step]);

// // // // //   const Option = ({ field, value }) => (
// // // // //     <button
// // // // //       onClick={() => handle(field, value)}
// // // // //       className={`w-full p-3 rounded-xl border transition text-left
// // // // //         ${
// // // // //           form[field] === value
// // // // //             ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md"
// // // // //             : "bg-white/70 hover:bg-white border-gray-200 text-gray-700"
// // // // //         }`}
// // // // //     >
// // // // //       {value}
// // // // //     </button>
// // // // //   );

// // // // //   return (
// // // // //     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#eef2ff] via-[#fdf2f8] to-[#f0f9ff] p-4">

// // // // //       <div className="w-full max-w-3xl rounded-2xl bg-white/70 backdrop-blur-xl border border-gray-200 shadow-xl p-8">

// // // // //         {/* STEP 0 */}
// // // // //         {step === 0 && (
// // // // //           <>
// // // // //             <h2 className="text-2xl font-semibold text-gray-900 mb-3">
// // // // //               Welcome to IntervexaAI Interview
// // // // //             </h2>
// // // // //             <div className="mb-2">
// // // // //             <p className="text-gray-600 mb-6">
// // // // //               Let’s personalize your experience
// // // // //             </p>
// // // // //             </div>
// // // // //             <button className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow hover:scale-[1.02] transition" onClick={next}>
// // // // //               Next
// // // // //             </button>
// // // // //           </>
// // // // //         )}

// // // // //         {/* STEP 1 */}
// // // // //         {step === 1 && (
// // // // //           <>
// // // // //             <h2 className="text-xl font-semibold mb-4">Your Role</h2>
// // // // //             <input
// // // // //               className="w-full p-3 rounded-xl border border-gray-200 bg-white focus:ring-2 focus:ring-purple-400 outline-none"
// // // // //               placeholder="HR / Developer"
// // // // //               onChange={(e) => handle("role", e.target.value)}
// // // // //             />
// // // // //             <button className="w-full mt-4 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white" onClick={next}>
// // // // //               Next
// // // // //             </button>
// // // // //           </>
// // // // //         )}

// // // // //         {/* STEP 2 */}
// // // // //         {step === 2 && (
// // // // //           <>
// // // // //             <h2 className="text-xl font-semibold mb-4">Last Interview</h2>
// // // // //             <input
// // // // //               className="w-full p-3 rounded-xl border border-gray-200"
// // // // //               placeholder="e.g 3 months ago"
// // // // //               onChange={(e) => handle("lastInterview", e.target.value)}
// // // // //             />
// // // // //             <button className="w-full mt-4 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white" onClick={next}>
// // // // //               Next
// // // // //             </button>
// // // // //           </>
// // // // //         )}

// // // // //         {/* STEP 3 */}
// // // // //         {step === 3 && (
// // // // //           <>
// // // // //             <h2 className="text-xl font-semibold mb-4">Confidence Level</h2>
// // // // //             <input
// // // // //               type="number"
// // // // //               className="w-full p-3 rounded-xl border border-gray-200"
// // // // //               onChange={(e) => handle("confidence", e.target.value)}
// // // // //             />
// // // // //             <button className="w-full mt-4 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white" onClick={next}>
// // // // //               Next
// // // // //             </button>
// // // // //           </>
// // // // //         )}

// // // // //         {/* STEP 4 */}
// // // // //         {step === 4 && (
// // // // //           <>
// // // // //             <h2 className="text-xl font-semibold mb-4">Hardest Area?</h2>
// // // // //             <div className="space-y-3">
// // // // //               {["Cultural fit", "Technical", "Communication", "Problem solving"].map(v => (
// // // // //                 <Option key={v} field="weakArea" value={v} />
// // // // //               ))}
// // // // //             </div>
// // // // //             <button disabled={!form.weakArea} className="w-full mt-4 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white disabled:opacity-50" onClick={next}>
// // // // //               Next
// // // // //             </button>
// // // // //           </>
// // // // //         )}

// // // // //         {/* STEP 5 */}
// // // // //         {step === 5 && (
// // // // //           <>
// // // // //             <h2 className="text-xl font-semibold mb-4">Do you ramble?</h2>
// // // // //             <div className="space-y-3">
// // // // //               {["Strongly agree", "Agree", "Disagree", "Strongly disagree"].map(v => (
// // // // //                 <Option key={v} field="ramble" value={v} />
// // // // //               ))}
// // // // //             </div>
// // // // //             <button disabled={!form.ramble} className="w-full mt-4 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white" onClick={next}>
// // // // //               Next
// // // // //             </button>
// // // // //           </>
// // // // //         )}

// // // // //         {/* STEP 6 */}
// // // // //         {step === 6 && (
// // // // //           <>
// // // // //             <h2 className="text-xl font-semibold mb-4">Coaching Experience</h2>
// // // // //             <div className="space-y-3">
// // // // //               {["Many times", "Once", "Not yet"].map(v => (
// // // // //                 <Option key={v} field="coaching" value={v} />
// // // // //               ))}
// // // // //             </div>
// // // // //             <button disabled={!form.coaching} className="w-full mt-4 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white" onClick={next}>
// // // // //               Next
// // // // //             </button>
// // // // //           </>
// // // // //         )}

// // // // //         {/* STEP 7 */}
// // // // //         {step === 7 && (
// // // // //           <>
// // // // //             <h2 className="text-xl font-semibold mb-4">Expected Salary</h2>
// // // // //             <input
// // // // //               className="w-full p-3 rounded-xl border border-gray-200"
// // // // //               onChange={(e) => handle("salary", e.target.value)}
// // // // //             />
// // // // //             <button className="w-full mt-4 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white" onClick={next}>
// // // // //               Next
// // // // //             </button>
// // // // //           </>
// // // // //         )}

// // // // //         {/* STEP 8 */}
// // // // //         {step === 8 && (
// // // // //           <>
// // // // //             <h2 className="text-xl font-semibold mb-4">Analysis Complete 📊</h2>

// // // // //             <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden mb-4">
// // // // //               <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500" style={{ width: "14%" }} />
// // // // //             </div>

// // // // //             <button className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white" onClick={next}>
// // // // //               Start Practicing
// // // // //             </button>
// // // // //           </>
// // // // //         )}

// // // // //         {/* STEP 9 - 16 (UI upgraded similarly, unchanged logic kept) */}
// // // // //         {/* {step >= 9 && (
// // // // //           <div className="text-center text-gray-700">
// // // // //             <h2 className="text-xl font-semibold mb-4">Continue Setup Flow 🚀</h2>
// // // // //             <button className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white" onClick={next}>
// // // // //               Continue
// // // // //             </button>
// // // // //           </div>
// // // // //         )} */}
// // // // //         {step >= 9 && (
// // // // //   <div className="text-center text-gray-700">
// // // // //     <h2 className="text-xl font-semibold mb-4">
// // // // //       Continue Setup Flow 🚀
// // // // //     </h2>

// // // // //     <button
// // // // //       className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white"
// // // // //       onClick={() => navigate("/interview")}
// // // // //     >
// // // // //       Continue
// // // // //     </button>
// // // // //   </div>
// // // // // )}

// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // }


// // // // import { useState, useEffect } from "react";
// // // // import { useNavigate } from "react-router-dom";
// // // // import API from "../api/axios";

// // // // export default function InterviewSetup() {
// // // //   const [step, setStep] = useState(0);
// // // //   const [form, setForm] = useState({});
// // // //   const [loading, setLoading] = useState(false);
// // // //   const navigate = useNavigate();

// // // //   const next = () => setStep((s) => s + 1);

// // // //   const handle = (key, value) => {
// // // //     setForm((prev) => ({ ...prev, [key]: value }));
// // // //   };

// // // //   useEffect(() => {
// // // //     if (step === 11) {
// // // //       setTimeout(() => setStep(12), 2000);
// // // //     }
// // // //   }, [step]);

// // // //   const Option = ({ field, value }) => (
// // // //     <button
// // // //       onClick={() => handle(field, value)}
// // // //       className={`w-full p-3 rounded-xl border transition text-left
// // // //         ${
// // // //           form[field] === value
// // // //             ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md"
// // // //             : "bg-white/70 hover:bg-white border-gray-200 text-gray-700"
// // // //         }`}
// // // //     >
// // // //       {value}
// // // //     </button>
// // // //   );

// // // //   // 🔥 FINAL FIX: AI INTERVIEW START
// // // //   const startInterview = async () => {
// // // //     try {
// // // //       setLoading(true);

// // // //       const token = localStorage.getItem("token");

// // // //       const res = await API.post(
// // // //         "/interviews/start",
// // // //         {
// // // //           ...form, // 👈 send all setup data to AI backend
// // // //         },
// // // //         {
// // // //           headers: {
// // // //             Authorization: `Bearer ${token}`,
// // // //           },
// // // //         }
// // // //       );

// // // //       // ✅ SAVE NEW AI QUESTIONS
// // // //       localStorage.setItem("questions", JSON.stringify(res.data.questions));
// // // //       localStorage.setItem("interviewId", res.data.interviewId);
// // // //       localStorage.setItem("interviewData", JSON.stringify(form));

// // // //       // 👉 go to interview page
// // // //       navigate("/interview");

// // // //     } catch (err) {
// // // //       alert(err.response?.data?.msg || "Failed to start interview");
// // // //     } finally {
// // // //       setLoading(false);
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#eef2ff] via-[#fdf2f8] to-[#f0f9ff] p-4">

// // // //       <div className="w-full max-w-3xl rounded-2xl bg-white/70 backdrop-blur-xl border border-gray-200 shadow-xl p-8">

// // // //         {/* STEP 0 */}
// // // //         {step === 0 && (
// // // //           <>
// // // //             <h2 className="text-2xl font-semibold text-gray-900 mb-3">
// // // //               Welcome to IntervexaAI Interview
// // // //             </h2>
// // // //             <p className="text-gray-600 mb-6">
// // // //               Let’s personalize your experience
// // // //             </p>

// // // //             <button
// // // //               className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow hover:scale-[1.02] transition"
// // // //               onClick={next}
// // // //             >
// // // //               Next
// // // //             </button>
// // // //           </>
// // // //         )}

// // // //         {/* STEP 1 */}
// // // //         {step === 1 && (
// // // //           <>
// // // //             <h2 className="text-xl font-semibold mb-4">Your Role</h2>
// // // //             <input
// // // //               className="w-full p-3 rounded-xl border border-gray-200 bg-white"
// // // //               placeholder="HR / Developer"
// // // //               onChange={(e) => handle("role", e.target.value)}
// // // //             />
// // // //             <button className="w-full mt-4 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white" onClick={next}>
// // // //               Next
// // // //             </button>
// // // //           </>
// // // //         )}

// // // //         {/* STEP 2 */}
// // // //         {step === 2 && (
// // // //           <>
// // // //             <h2 className="text-xl font-semibold mb-4">Last Interview</h2>
// // // //             <input
// // // //               className="w-full p-3 rounded-xl border border-gray-200"
// // // //               onChange={(e) => handle("lastInterview", e.target.value)}
// // // //             />
// // // //             <button className="w-full mt-4 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white" onClick={next}>
// // // //               Next
// // // //             </button>
// // // //           </>
// // // //         )}

// // // //         {/* STEP 3 */}
// // // //         {step === 3 && (
// // // //           <>
// // // //             <h2 className="text-xl font-semibold mb-4">Confidence Level</h2>
// // // //             <input
// // // //               type="number"
// // // //               className="w-full p-3 rounded-xl border border-gray-200"
// // // //               onChange={(e) => handle("confidence", e.target.value)}
// // // //             />
// // // //             <button className="w-full mt-4 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white" onClick={next}>
// // // //               Next
// // // //             </button>
// // // //           </>
// // // //         )}

// // // //         {/* STEP 4 */}
// // // //         {step === 4 && (
// // // //           <>
// // // //             <h2 className="text-xl font-semibold mb-4">Hardest Area?</h2>
// // // //             <div className="space-y-3">
// // // //               {["Cultural fit", "Technical", "Communication", "Problem solving"].map(v => (
// // // //                 <Option key={v} field="weakArea" value={v} />
// // // //               ))}
// // // //             </div>
// // // //             <button disabled={!form.weakArea} className="w-full mt-4 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white" onClick={next}>
// // // //               Next
// // // //             </button>
// // // //           </>
// // // //         )}

// // // //         {/* STEP 5 */}
// // // //         {step === 5 && (
// // // //           <>
// // // //             <h2 className="text-xl font-semibold mb-4">Do you ramble?</h2>
// // // //             <div className="space-y-3">
// // // //               {["Strongly agree", "Agree", "Disagree", "Strongly disagree"].map(v => (
// // // //                 <Option key={v} field="ramble" value={v} />
// // // //               ))}
// // // //             </div>
// // // //             <button disabled={!form.ramble} className="w-full mt-4 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white" onClick={next}>
// // // //               Next
// // // //             </button>
// // // //           </>
// // // //         )}

// // // //         {/* STEP 6 */}
// // // //         {step === 6 && (
// // // //           <>
// // // //             <h2 className="text-xl font-semibold mb-4">Coaching Experience</h2>
// // // //             <div className="space-y-3">
// // // //               {["Many times", "Once", "Not yet"].map(v => (
// // // //                 <Option key={v} field="coaching" value={v} />
// // // //               ))}
// // // //             </div>
// // // //             <button disabled={!form.coaching} className="w-full mt-4 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white" onClick={next}>
// // // //               Next
// // // //             </button>
// // // //           </>
// // // //         )}

// // // //         {/* STEP 7 */}
// // // //         {step === 7 && (
// // // //           <>
// // // //             <h2 className="text-xl font-semibold mb-4">Expected Salary</h2>
// // // //             <input
// // // //               className="w-full p-3 rounded-xl border border-gray-200"
// // // //               onChange={(e) => handle("salary", e.target.value)}
// // // //             />
// // // //             <button className="w-full mt-4 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white" onClick={next}>
// // // //               Next
// // // //             </button>
// // // //           </>
// // // //         )}

// // // //         {/* STEP 8 */}
// // // //         {step === 8 && (
// // // //           <>
// // // //             <h2 className="text-xl font-semibold mb-4">Analysis Complete 📊</h2>

// // // //             <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden mb-4">
// // // //               <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500" style={{ width: "14%" }} />
// // // //             </div>

// // // //             <button className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white" onClick={next}>
// // // //               Start Practicing
// // // //             </button>
// // // //           </>
// // // //         )}

// // // //         {/* STEP 9 → FINAL START */}
// // // //         {step >= 9 && (
// // // //           <div className="text-center text-gray-700">
// // // //             <h2 className="text-xl font-semibold mb-4">
// // // //               Ready to Start AI Interview 🚀
// // // //             </h2>

// // // //             <button
// // // //               disabled={loading}
// // // //               className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white disabled:opacity-50"
// // // //               onClick={startInterview}
// // // //             >
// // // //               {loading ? "Generating AI Interview..." : "Start Interview"}
// // // //             </button>
// // // //           </div>
// // // //         )}

// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }


// // import { useState, useEffect } from "react";
// // import { useNavigate } from "react-router-dom";
// // import API from "../api/axios";

// // export default function InterviewSetup() {
// //   const [step, setStep] = useState(0);
// //   const [form, setForm] = useState({});
// //   const [loading, setLoading] = useState(false);
// //   const navigate = useNavigate();

// //   const next = () => setStep((s) => s + 1);

// //   const handle = (key, value) => {
// //     setForm((prev) => ({ ...prev, [key]: value }));
// //   };

// //   useEffect(() => {
// //     if (step === 11) {
// //       setTimeout(() => setStep(12), 2000);
// //     }
// //   }, [step]);

// //   const Option = ({ field, value }) => (
// //     <button
// //       onClick={() => handle(field, value)}
// //       className={`w-full p-3 rounded-xl border transition text-left
// //         ${
// //           form[field] === value
// //             ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md"
// //             : "bg-white/70 hover:bg-white border-gray-200 text-gray-700"
// //         }`}
// //     >
// //       {value}
// //     </button>
// //   );

// //   // 🔥 FINAL AI START FUNCTION
// //   const startInterview = async () => {
// //     try {
// //       setLoading(true);

// //       const token = localStorage.getItem("token");

// //       const res = await API.post(
// //         "/interviews/start",
// //         {
// //           ...form,
// //         },
// //         {
// //           headers: {
// //             Authorization: `Bearer ${token}`,
// //           },
// //         }
// //       );

// //       // ✅ Save AI questions
// //       localStorage.setItem("questions", JSON.stringify(res.data.questions));
// //       localStorage.setItem("interviewId", res.data.interviewId);

// //       // ✅ Save FULL setup for Interview LEFT PANEL
// //       localStorage.setItem(
// //         "interviewData",
// //         JSON.stringify({
// //           role: form.role,
// //           category: form.category,
// //           jobDesc: form.jobDesc,
// //           jobLink: form.jobLink,
// //           responsibilities: form.responsibilities,
// //           lastInterview: form.lastInterview,
// //           confidence: form.confidence,
// //           weakArea: form.weakArea,
// //           ramble: form.ramble,
// //           coaching: form.coaching,
// //           salary: form.salary,
// //           difficulty: form.difficulty,
// //         })
// //       );

// //       navigate("/interview");
// //     } catch (err) {
// //       alert(err.response?.data?.msg || "Failed to start interview");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#eef2ff] via-[#fdf2f8] to-[#f0f9ff] p-4">

// //       <div className="w-full max-w-3xl rounded-2xl bg-white/70 backdrop-blur-xl border border-gray-200 shadow-xl p-8">

// //         {/* STEP 0 */}
// //         {step === 0 && (
// //           <>
// //             <h2 className="text-2xl font-semibold text-gray-900 mb-3">
// //               Welcome to IntervexaAI Interview
// //             </h2>
// //             <p className="text-gray-600 mb-6">
// //               Let’s personalize your experience
// //             </p>

// //             <button
// //               className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white"
// //               onClick={next}
// //             >
// //               Next
// //             </button>
// //           </>
// //         )}

// //         {/* STEP 1 - ROLE */}
// //         {step === 1 && (
// //           <>
// //             <h2 className="text-xl font-semibold mb-4">Your Role</h2>
// //             <input
// //               className="w-full p-3 rounded-xl border border-gray-200"
// //               onChange={(e) => handle("role", e.target.value)}
// //               placeholder="HR / Developer"
// //             />
// //             <button className="w-full mt-4 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white" onClick={next}>
// //               Next
// //             </button>
// //           </>
// //         )}

// //         {/* STEP 2 - CATEGORY */}
// //         {step === 2 && (
// //           <>
// //             <h2 className="text-xl font-semibold mb-4">Category</h2>
// //             <input
// //               className="w-full p-3 rounded-xl border border-gray-200"
// //               onChange={(e) => handle("category", e.target.value)}
// //               placeholder="Easy| medium |hard"
// //             />
// //             <button className="w-full mt-4 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white" onClick={next}>
// //               Next
// //             </button>
// //           </>
// //         )}

// //         {/* STEP 3 - JOB DESCRIPTION */}
// //         {step === 3 && (
// //           <>
// //             <h2 className="text-xl font-semibold mb-4">Job Description</h2>
// //             <textarea
// //               className="w-full p-3 rounded-xl border border-gray-200"
// //               onChange={(e) => handle("jobDesc", e.target.value)}
// //               placeholder="Describe job..."
// //             />
// //             <button className="w-full mt-4 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white" onClick={next}>
// //               Next
// //             </button>
// //           </>
// //         )}

// //         {/* STEP 4 - JOB LINK */}
// //         {step === 4 && (
// //           <>
// //             <h2 className="text-xl font-semibold mb-4">Job Link</h2>
// //             <input
// //               className="w-full p-3 rounded-xl border border-gray-200"
// //               onChange={(e) => handle("jobLink", e.target.value)}
// //               placeholder="https://company.com/job"
// //             />
// //             <button className="w-full mt-4 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white" onClick={next}>
// //               Next
// //             </button>
// //           </>
// //         )}

// //         {/* STEP 5 - RESPONSIBILITIES */}
// //         {step === 5 && (
// //           <>
// //             <h2 className="text-xl font-semibold mb-4">Responsibilities</h2>
// //             <textarea
// //               className="w-full p-3 rounded-xl border border-gray-200"
// //               onChange={(e) => handle("responsibilities", e.target.value)}
// //               placeholder="Job responsibilities..."
// //             />
// //             <button className="w-full mt-4 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white" onClick={next}>
// //               Next
// //             </button>
// //           </>
// //         )}

// //         {/* STEP 6 - LAST INTERVIEW */}
// //         {step === 6 && (
// //           <>
// //             <h2 className="text-xl font-semibold mb-4">Last Interview</h2>
// //             <input
// //               className="w-full p-3 rounded-xl border border-gray-200"
// //               onChange={(e) => handle("lastInterview", e.target.value)}
// //             />
// //             <button className="w-full mt-4 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white" onClick={next}>
// //               Next
// //             </button>
// //           </>
// //         )}

// //         {/* STEP 7 - CONFIDENCE */}
// //         {step === 7 && (
// //           <>
// //             <h2 className="text-xl font-semibold mb-4">Confidence</h2>
// //             <input
// //               type="number"
// //               className="w-full p-3 rounded-xl border border-gray-200"
// //               onChange={(e) => handle("confidence", e.target.value)}
// //             />
// //             <button className="w-full mt-4 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white" onClick={next}>
// //               Next
// //             </button>
// //           </>
// //         )}

// //         {/* STEP 8 */}
// //         {step === 8 && (
// //           <>
// //             <h2 className="text-xl font-semibold mb-4">Analysis 📊</h2>

// //             <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden mb-4">
// //               <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500" style={{ width: "20%" }} />
// //             </div>

// //             <button className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white" onClick={next}>
// //               Continue
// //             </button>
// //           </>
// //         )}

// //         {/* STEP 9 - START INTERVIEW */}
// //         {step >= 9 && (
// //           <div className="text-center">
// //             <h2 className="text-xl font-semibold mb-4">
// //               Ready for AI Interview 🚀
// //             </h2>

// //             <button
// //               disabled={loading}
// //               onClick={start}
// //               className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white"
// //             >
// //               {loading ? "Generating AI Interview..." : "Start Interview"}
// //             </button>
// //           </div>
// //         )}

// //       </div>
// //     </div>
// //   );
// // }


// // // import { useState } from "react";
// // // import { useNavigate } from "react-router-dom";
// // // import API from "../api/axios";

// // // export default function InterviewSetup() {
// // //   const [step, setStep] = useState(0);
// // //   const [form, setForm] = useState({});
// // //   const [loading, setLoading] = useState(false);

// // //   const navigate = useNavigate();

// // //   const next = () => setStep((s) => s + 1);

// // //   const handle = (key, value) => {
// // //     setForm((prev) => ({ ...prev, [key]: value }));
// // //   };

// // //   const Option = ({ field, value }) => (
// // //     <button
// // //       onClick={() => handle(field, value)}
// // //       className={`w-full p-3 rounded-xl border text-left transition
// // //       ${
// // //         form[field] === value
// // //           ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
// // //           : "bg-white/70 border-gray-200 text-gray-700 hover:bg-white"
// // //       }`}
// // //     >
// // //       {value}
// // //     </button>
// // //   );

// // //   // 🚀 SAFE AI START (NO BREAKING)
// // //   const startInterview = async () => {
// // //     try {
// // //       setLoading(true);

// // //       const token = localStorage.getItem("token");

// // //       const res = await API.post(
// // //         "/interviews/start",
// // //         { ...form },
// // //         {
// // //           headers: {
// // //             Authorization: `Bearer ${token}`,
// // //           },
// // //         }
// // //       );

// // //       console.log("RAW AI RESPONSE:", res.data);

// // //       // ✅ FLEXIBLE EXTRACTION (FIXES ALL BACKEND TYPES)
// // //       const questions =
// // //         res.data?.questions ||
// // //         res.data?.data?.questions ||
// // //         res.data?.result?.questions ||
// // //         [];

// // //       const interviewId =
// // //         res.data?.interviewId ||
// // //         res.data?.data?.interviewId ||
// // //         res.data?._id ||
// // //         res.data?.id;

// // //       // ❗ SAFETY CHECKS (NO CRASH)
// // //       if (!questions || questions.length === 0) {
// // //         alert("No questions received from AI backend");
// // //         return;
// // //       }

// // //       if (!interviewId) {
// // //         alert("Interview ID missing from backend response");
// // //         return;
// // //       }

// // //       // ✅ STORE DATA (USED IN INTERVIEW PAGE)
// // //       localStorage.setItem("questions", JSON.stringify(questions));
// // //       localStorage.setItem("interviewId", interviewId);
// // //       localStorage.setItem("interviewData", JSON.stringify(form));

// // //       // 🚀 GO TO INTERVIEW PAGE
// // //       navigate("/interview");

// // //     } catch (err) {
// // //       console.error(err);
// // //       alert(err.response?.data?.msg || "Failed to start interview");
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   return (
// // //     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#eef2ff] via-[#fdf2f8] to-[#f0f9ff] p-4">

// // //       <div className="w-full max-w-3xl bg-white/70 backdrop-blur-xl border border-gray-200 rounded-2xl shadow-xl p-8">

// // //         {/* STEP 0 */}
// // //         {step === 0 && (
// // //           <>
// // //             <h2 className="text-2xl font-semibold mb-3">
// // //               Welcome to AI Interview 🚀
// // //             </h2>
// // //             <p className="text-gray-600 mb-6">
// // //               Let’s personalize your interview experience
// // //             </p>

// // //             <button
// // //               onClick={next}
// // //               className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white"
// // //             >
// // //               Start
// // //             </button>
// // //           </>
// // //         )}

// // //         {/* STEP 1 */}
// // //         {step === 1 && (
// // //           <>
// // //             <h2 className="text-xl font-semibold mb-4">Role</h2>
// // //             <input
// // //               className="w-full p-3 border rounded-xl"
// // //               onChange={(e) => handle("role", e.target.value)}
// // //               placeholder="Developer / HR"
// // //             />
// // //             <button onClick={next} className="btn mt-4 w-full py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-xl">
// // //               Next
// // //             </button>
// // //           </>
// // //         )}

// // //         {/* STEP 2 */}
// // //         {step === 2 && (
// // //           <>
// // //             <h2 className="text-xl font-semibold mb-4">Category</h2>
// // //             <input
// // //               className="w-full p-3 border rounded-xl"
// // //               onChange={(e) => handle("category", e.target.value)}
// // //               placeholder="Frontend / Backend"
// // //             />
// // //             <button onClick={next} className="w-full mt-4 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-xl">
// // //               Next
// // //             </button>
// // //           </>
// // //         )}

// // //         {/* STEP 3 */}
// // //         {step === 3 && (
// // //           <>
// // //             <h2 className="text-xl font-semibold mb-4">Job Description</h2>
// // //             <textarea
// // //               className="w-full p-3 border rounded-xl"
// // //               onChange={(e) => handle("jobDesc", e.target.value)}
// // //             />
// // //             <button onClick={next} className="w-full mt-4 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-xl">
// // //               Next
// // //             </button>
// // //           </>
// // //         )}

// // //         {/* STEP 4 */}
// // //         {step === 4 && (
// // //           <>
// // //             <h2 className="text-xl font-semibold mb-4">Job Link</h2>
// // //             <input
// // //               className="w-full p-3 border rounded-xl"
// // //               onChange={(e) => handle("jobLink", e.target.value)}
// // //             />
// // //             <button onClick={next} className="w-full mt-4 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-xl">
// // //               Next
// // //             </button>
// // //           </>
// // //         )}

// // //         {/* STEP 5 */}
// // //         {step === 5 && (
// // //           <>
// // //             <h2 className="text-xl font-semibold mb-4">Responsibilities</h2>
// // //             <textarea
// // //               className="w-full p-3 border rounded-xl"
// // //               onChange={(e) => handle("responsibilities", e.target.value)}
// // //             />
// // //             <button onClick={next} className="w-full mt-4 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-xl">
// // //               Next
// // //             </button>
// // //           </>
// // //         )}

// // //         {/* STEP 6+ */}
// // //         {step >= 6 && step < 9 && (
// // //           <div className="text-center">
// // //             <h2 className="text-xl font-semibold mb-4">
// // //               Continue Setup 🚀
// // //             </h2>

// // //             <button
// // //               onClick={next}
// // //               className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-xl"
// // //             >
// // //               Next
// // //             </button>
// // //           </div>
// // //         )}

// // //         {/* FINAL STEP */}
// // //         {step >= 9 && (
// // //           <div className="text-center">
// // //             <h2 className="text-xl font-semibold mb-4">
// // //               Ready for AI Interview 🚀
// // //             </h2>

// // //             <button
// // //               onClick={startInterview}
// // //               disabled={loading}
// // //               className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-xl"
// // //             >
// // //               {loading ? "Generating AI Interview..." : "Start Interview"}
// // //             </button>
// // //           </div>
// // //         )}

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



