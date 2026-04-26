// // // // // // export default function Result() {
// // // // // //   return <h2>Interview Completed</h2>;
// // // // // // }

// // // // // import { useEffect, useState } from "react";
// // // // // import API from "../api/axios";
// // // // // import { useNavigate } from "react-router-dom";

// // // // // export default function Result() {
// // // // //   const [data, setData] = useState(null);
// // // // //   const nav = useNavigate();

// // // // //   const interview = JSON.parse(localStorage.getItem("interview"));

// // // // //   useEffect(() => {
// // // // //     API.get(`/interviews/${interview.interview._id}`)
// // // // //       .then(res => setData(res.data))
// // // // //       .catch(() => console.log("error"));
// // // // //   }, []);

// // // // //   if (!data) return <p className="p-10">Loading...</p>;

// // // // //   return (
// // // // //     <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">

// // // // //       <div className="bg-white p-10 rounded-2xl shadow-lg w-full max-w-lg text-center">

// // // // //         {/* TITLE */}
// // // // //         <h1 className="text-3xl font-bold mb-4">
// // // // //           🎉 Interview Completed
// // // // //         </h1>

// // // // //         {/* SCORE */}
// // // // //         <div className="text-6xl font-bold mb-6 text-blue-600">
// // // // //           {data.score ? data.score.toFixed(0) : 0}%
// // // // //         </div>

// // // // //         {/* STATUS */}
// // // // //         <p className="mb-6 text-gray-600">
// // // // //           Status: {data.status}
// // // // //         </p>

// // // // //         {/* FEEDBACK */}
// // // // //         <div className="bg-gray-100 p-4 rounded-xl mb-6 text-left">
// // // // //           <p className="font-semibold mb-2">💡 Summary</p>
// // // // //           <p className="text-sm text-gray-600">
// // // // //             Keep practicing to improve your weak areas.
// // // // //           </p>
// // // // //         </div>

// // // // //         {/* ACTIONS */}
// // // // //         <div className="flex gap-4">

// // // // //           <button
// // // // //             onClick={() => nav("/start")}
// // // // //             className="w-full bg-blue-600 text-white py-3 rounded-xl"
// // // // //           >
// // // // //             Practice Again
// // // // //           </button>

// // // // //           <button
// // // // //             onClick={() => nav("/history")}
// // // // //             className="w-full border py-3 rounded-xl"
// // // // //           >
// // // // //             View History
// // // // //           </button>

// // // // //         </div>

// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // }


// // // // import { useEffect, useState } from "react";
// // // // import { useNavigate } from "react-router-dom";

// // // // export default function Result() {
// // // //   const nav = useNavigate();
// // // //   const [data, setData] = useState(null);

// // // //   useEffect(() => {
// // // //     const result = localStorage.getItem("result");

// // // //     if (result) {
// // // //       setData(JSON.parse(result));
// // // //     }
// // // //   }, []);

// // // //   if (!data) {
// // // //     return (
// // // //       <div className="min-h-screen flex items-center justify-center">
// // // //         <p className="text-gray-500">No result found</p>
// // // //       </div>
// // // //     );
// // // //   }

// // // //   return (
// // // //     <div className="min-h-screen bg-gradient-to-br from-[#eef2ff] via-[#fdf2f8] to-[#f0f9ff] flex items-center justify-center p-6">

// // // //       <div className="bg-white/70 backdrop-blur-xl border border-gray-200 shadow-2xl rounded-3xl p-10 text-center w-full max-w-lg animate-fadeIn">

// // // //         <h1 className="text-3xl font-bold mb-4">
// // // //           🎉 Interview Completed
// // // //         </h1>

// // // //         {/* SCORE */}
// // // //         <div className="text-6xl font-extrabold text-purple-600 mb-6">
// // // //           {data.score ? data.score.toFixed(0) : 0}%
// // // //         </div>

// // // //         {/* STATUS */}
// // // //         <p className="text-gray-600 mb-6">
// // // //           Status: Completed
// // // //         </p>

// // // //         {/* MESSAGE */}
// // // //         <div className="bg-white border rounded-xl p-4 mb-6 text-left">
// // // //           <p className="font-semibold mb-2">💡 Feedback</p>
// // // //           <p className="text-sm text-gray-600">
// // // //             Great effort! Keep practicing to improve your answers and confidence.
// // // //           </p>
// // // //         </div>

// // // //         {/* BUTTONS */}
// // // //         <div className="flex gap-3">

// // // //           <button
// // // //             onClick={() => nav("/start")}
// // // //             className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white py-3 rounded-xl hover:scale-[1.02] transition"
// // // //           >
// // // //             Practice Again
// // // //           </button>

// // // //           <button
// // // //             onClick={() => nav("/history")}
// // // //             className="w-full border border-gray-300 py-3 rounded-xl"
// // // //           >
// // // //             View History
// // // //           </button>

// // // //         </div>

// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }


// // // import { useEffect, useState } from "react";
// // // import { useNavigate } from "react-router-dom";

// // // export default function Result() {
// // //   const nav = useNavigate();
// // //   const [data, setData] = useState(null);

// // //   useEffect(() => {
// // //     const result = localStorage.getItem("result");

// // //     if (result) {
// // //       setData(JSON.parse(result));
// // //     }
// // //   }, []);

// // //   if (!data) {
// // //     return (
// // //       <div className="min-h-screen flex items-center justify-center">
// // //         <p>No result found</p>

// // //         <button
// // //           onClick={() => nav("/start")}
// // //           className="ml-4 bg-blue-600 text-white px-4 py-2 rounded"
// // //         >
// // //           Start Again
// // //         </button>
// // //       </div>
// // //     );
// // //   }

// // //   return (
// // //     <div className="min-h-screen flex items-center justify-center bg-gray-100">
// // //       <div className="bg-white p-10 rounded-xl shadow text-center">

// // //         <h1 className="text-3xl font-bold mb-4">
// // //           Interview Completed 🎉
// // //         </h1>

// // //         <div className="text-5xl font-bold text-purple-600 mb-6">
// // //           {data.score ? data.score.toFixed(0) : 0}%
// // //         </div>

// // //         <p className="mb-6 text-gray-600">
// // //           {data.msg}
// // //         </p>

// // //         <button
// // //           onClick={() => nav("/start")}
// // //           className="bg-purple-600 text-white px-6 py-3 rounded-xl"
// // //         >
// // //           Practice Again
// // //         </button>

// // //       </div>
// // //     </div>
// // //   );
// // // }


// // import { useEffect, useState } from "react";
// // import { useNavigate } from "react-router-dom";

// // export default function Result() {
// //   const nav = useNavigate();
// //   const [data, setData] = useState(null);

// //   useEffect(() => {
// //     const result = localStorage.getItem("result");
// //     if (result) setData(JSON.parse(result));
// //   }, []);

// //   if (!data) {
// //     return (
// //       <div className="min-h-screen flex items-center justify-center">
// //         <p>No result found</p>

// //         <button
// //           onClick={() => nav("/start")}
// //           className="ml-4 bg-blue-600 text-white px-4 py-2 rounded"
// //         >
// //           Start Again
// //         </button>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">

// //       <div className="bg-white p-8 rounded-xl shadow w-full max-w-xl">

// //         <h1 className="text-3xl font-bold mb-4 text-center">
// //           Interview Completed 🎉
// //         </h1>

// //         {/* SCORE */}
// //         <div className="text-5xl font-bold text-purple-600 text-center mb-6">
// //           {data.score ? data.score.toFixed(0) : 0}%
// //         </div>

// //         <p className="text-center text-gray-600 mb-6">
// //           {data.msg}
// //         </p>

// //         {/* 🔥 IF YOU HAVE FULL RESPONSE LIST */}
// //         {data.responses?.length > 0 && (
// //           <div className="space-y-4 text-left">

// //             {data.responses.map((r, i) => (
// //               <div key={i} className="border p-3 rounded">

// //                 <p className="font-bold">Q: {r.question}</p>

// //                 <p className="text-red-600">
// //                   Your Answer: {r.answer}
// //                 </p>

// //                 <p className="text-green-600">
// //                   Ideal: {r.idealAnswer}
// //                 </p>

// //                 <p className="text-blue-600">
// //                   Feedback: {r.feedback}
// //                 </p>

// //               </div>
// //             ))}

// //           </div>
// //         )}

// //         <button
// //           onClick={() => nav("/start")}
// //           className="w-full mt-6 bg-purple-600 text-white py-3 rounded-xl"
// //         >
// //           Practice Again
// //         </button>

// //       </div>
// //     </div>
// //   );
// // }


// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function Result() {
//   const nav = useNavigate();
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     const result = localStorage.getItem("result");

//     if (result) {
//       setData(JSON.parse(result));
//     }
//   }, []);

//   if (!data) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <p>No result found</p>

//         <button
//           onClick={() => nav("/start")}
//           className="ml-4 bg-blue-600 text-white px-4 py-2 rounded"
//         >
//           Start Again
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">

//       {/* SCORE CARD */}
//       <div className="bg-white p-8 rounded-xl shadow w-full max-w-3xl text-center">

//         <h1 className="text-3xl font-bold mb-4">
//           Interview Completed 🎉
//         </h1>

//         <div className="text-5xl font-bold text-purple-600 mb-2">
//           {data.score ? data.score.toFixed(0) : 0}%
//         </div>

//         <p className="text-gray-600 mb-6">
//           {data.msg}
//         </p>

//         <button
//           onClick={() => nav("/start")}
//           className="bg-purple-600 text-white px-6 py-3 rounded-xl"
//         >
//           Practice Again
//         </button>
//       </div>

//       {/* QUESTIONS BREAKDOWN */}
//       <div className="mt-8 w-full max-w-3xl space-y-4">

//          {data.responses?.map((r, i) => (
//           <div key={i} className="bg-white p-4 rounded-xl shadow">

//             <p className="font-bold text-gray-800">
//               Q: {r.question}
//             </p>

            
//             <p className="text-red-600 mt-2">
//               <b>Your Answer:</b> {r.answer}
//             </p>

           
//             <p className="text-green-600 mt-2">
//               <b>Ideal Answer:</b> {r.idealAnswer || "Not available"}
//             </p>

//             <div className="text-blue-600 mt-2">
//               <p><b>Strengths:</b> {r.feedback?.strengths}</p>
              
//               <p><b>Weaknesses:</b> {r.feedback?.weaknesses}</p>
//             </div>

          
//             <p className="text-purple-600 mt-2">
//               <b>Score:</b> {r.score}/10
//             </p>

//           </div> 
//            ))}
 
       

//       </div>
//     </div>
//   );
// }


import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Result() {
  const nav = useNavigate();
  const [data, setData] = useState(null);

  useEffect(() => {
    const result = localStorage.getItem("result");

    if (result) {
      const parsed = JSON.parse(result);
      console.log("RESULT DATA:", parsed); // DEBUG
      setData(parsed);
    }
  }, []);

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>No result found</p>

        <button
          onClick={() => nav("/start")}
          className="ml-4 bg-blue-600 text-white px-4 py-2 rounded"
        >
          Start Again
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">

      {/* SCORE */}
      <div className="bg-white p-8 rounded-xl shadow w-full max-w-3xl text-center">
        <h1 className="text-3xl font-bold mb-4">
          Interview Completed 🎉
        </h1>

        <div className="text-5xl font-bold text-purple-600 mb-2">
          {data.score}/10
        </div>

        <p className="text-gray-600 mb-6">
          {data.msg}
        </p>

        <button
          onClick={() => nav("/start")}
          className="bg-purple-600 text-white px-6 py-3 rounded-xl"
        >
          Practice Again
        </button>
      </div>

      {/* BREAKDOWN */}
      <div className="mt-8 w-full max-w-3xl space-y-4">

        {data.responses?.map((r, i) => (
          <div key={i} className="bg-white p-4 rounded-xl shadow">

            <p className="font-bold text-gray-800">
              Q: {r.question}
            </p>

            <p className="text-blue-700 mt-2">
              <b>Your Answer:</b> {r.answer}
            </p>

            <p className="text-green-700 mt-2">
              <b>Ideal Answer:</b> {r.idealAnswer || "Not available"}
            </p>

            {/* FIXED SAFE ACCESS */}
            {/* <div className="mt-2 text-sm">
              <p className="text-green-600">
                <b>Strengths:</b>{" "}
                {r.feedback?.strengths || "Not available"}
              </p>

              <p className="text-red-600">
                <b>Weaknesses:</b>{" "}
                {r.feedback?.weaknesses || "Not available"}
              </p>
            </div> */}

            <p>
  <b>Strengths:</b>{" "}
  {typeof r.feedback === "object"
    ? r.feedback?.strengths
    : "Not available"}
</p>

<p>
  <b>Weaknesses:</b>{" "}
  {typeof r.feedback === "object"
    ? r.feedback?.weaknesses
    : "Not available"}
</p>

            <p className="text-purple-600 mt-2">
              <b>Score:</b> {r.score}/10
            </p>

          </div>
        ))}
      </div>
    </div>
  );
}