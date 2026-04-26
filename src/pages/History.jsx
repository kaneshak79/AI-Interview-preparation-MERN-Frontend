// // // // // // import { useEffect, useState } from "react";
// // // // // // import API from "../api/axios";
// // // // // // import { useNavigate } from "react-router-dom";

// // // // // // export default function History() {
// // // // // //   const [data, setData] = useState([]);
// // // // // //   const nav = useNavigate();

// // // // // //   useEffect(()=>{
// // // // // //     API.get("/interviews").then(res=>setData(res.data));
// // // // // //   },[]);

// // // // // //   return (
// // // // // //     <div>
// // // // // //       {data.map(i=>(
// // // // // //         <div key={i._id}>
// // // // // //           <p>{i.score}</p>
// // // // // //           <button onClick={()=>nav(`/detail/${i._id}`)}>View</button>
// // // // // //         </div>
// // // // // //       ))}
// // // // // //     </div>
// // // // // //   );
// // // // // // }


// // import { useEffect, useState } from "react";
// // import API from "../api/axios";
// // import { useNavigate } from "react-router-dom";

// // export default function History() {
// //   const [data, setData] = useState([]);
// //   const nav = useNavigate();

// //   useEffect(() => {
// //     API.get("/interviews")
// //       .then((res) => setData(res.data))
// //       .catch((err) => console.log(err));
// //   }, []);

// //   return (
// //     <div className="min-h-screen bg-gray-100 p-6">

// //       <div className="max-w-5xl mx-auto">

// //         {/* HEADER */}
// //         <h1 className="text-3xl font-bold mb-8">
// //           Interview History
// //         </h1>

// //         {/* EMPTY STATE */}
// //         {data.length === 0 && (
// //           <div className="text-center text-gray-500 mt-20">
// //             No interviews yet 🚀
// //           </div>
// //         )}

// //         {/* LIST */}
// //         <div className="grid md:grid-cols-2 gap-6">
// //           {data.map((i) => (
// //             <div
// //               key={i._id}
// //               className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition"
// //             >

// //               {/* TOP */}
// //               <div className="flex justify-between items-center mb-4">
// //                 <h2 className="text-lg font-semibold">
// //                   {i.category || "Interview"}
// //                 </h2>

// //                 {/* SCORE BADGE */}
// //                 <span
// //                   className={`px-3 py-1 rounded-full text-sm font-medium ${
// //                     i.score > 70
// //                       ? "bg-green-100 text-green-700"
// //                       : i.score > 40
// //                       ? "bg-yellow-100 text-yellow-700"
// //                       : "bg-red-100 text-red-700"
// //                   }`}
// //                 >
// //                   {i.score || 0}%
// //                 </span>
// //               </div>

// //               {/* DETAILS */}
// //               <div className="text-sm text-gray-500 mb-4 space-y-1">
// //                 <p>Difficulty: {i.difficulty || "N/A"}</p>
// //                 <p>
// //                   Date:{" "}
// //                   {new Date(i.createdAt).toLocaleDateString()}
// //                 </p>
// //               </div>

// //               {/* BUTTON */}
// //               <button
// //                 onClick={() => nav(`/detail/${i._id}`)}
// //                 className="w-full bg-blue-600 text-white py-2 rounded-full hover:bg-blue-700"
// //               >
// //                 View Details →
// //               </button>

// //             </div>
// //           ))}
// //         </div>

// //       </div>
// //     </div>
// //   );
// // }


// // // // //crt code before


// // // // import { useEffect, useState } from "react";
// // // // import API from "../api/axios";
// // // // import { useNavigate } from "react-router-dom";

// // // // export default function History() {
// // // //   const [data, setData] = useState([]);
// // // //   const nav = useNavigate();

// // // //   useEffect(() => {
// // // //     API.get("/interviews")
// // // //       .then((res) => setData(res.data))
// // // //       .catch((err) => console.log(err));
// // // //   }, []);

// // // //   return (
// // // //     <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-6 text-white">

// // // //       <div className="max-w-6xl mx-auto">

// // // //         {/* HEADER */}
// // // //         <div className="flex justify-between items-center mb-10">
// // // //           <h1 className="text-4xl font-bold tracking-tight">
// // // //             Interview History
// // // //           </h1>

// // // //           <button
// // // //             onClick={() => nav("/")}
// // // //             className="bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-2 rounded-full text-sm font-medium shadow-lg hover:scale-105 transition-all duration-300"
// // // //           >
// // // //             + New Interview
// // // //           </button>
// // // //         </div>

// // // //         {/* EMPTY STATE */}
// // // //         {data.length === 0 && (
// // // //           <div className="flex flex-col items-center justify-center mt-32 opacity-70">
// // // //             <p className="text-2xl">No interviews yet 🚀</p>
// // // //             <p className="text-sm mt-2">
// // // //               Start practicing to see your history here
// // // //             </p>
// // // //           </div>
// // // //         )}

// // // //         {/* GRID */}
// // // //         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

// // // //           {data.map((i) => (
// // // //             <div
// // // //               key={i._id}
// // // //               className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
// // // //             >

// // // //               {/* TOP */}
// // // //               <div className="flex justify-between items-center mb-4">
// // // //                 <h2 className="text-lg font-semibold">
// // // //                   {i.category || "Interview"}
// // // //                 </h2>

// // // //                 <span
// // // //                   className={`px-3 py-1 rounded-full text-xs font-semibold ${
// // // //                     i.score >= 70
// // // //                       ? "bg-green-500/20 text-green-400"
// // // //                       : i.score >= 40
// // // //                       ? "bg-yellow-500/20 text-yellow-400"
// // // //                       : "bg-red-500/20 text-red-400"
// // // //                   }`}
// // // //                 >
// // // //                   {i.score || 0}%
// // // //                 </span>
// // // //               </div>

// // // //               {/* DETAILS */}
// // // //               <div className="text-sm text-gray-300 mb-5 space-y-2">

// // // //                 {/* Difficulty (clean handling) */}
// // // //                 {i.difficulty ? (
// // // //                   <p>⚡ Difficulty: {i.difficulty}</p>
// // // //                 ) : null}

// // // //                 <p>
// // // //                   📅 {new Date(i.createdAt).toLocaleDateString()}
// // // //                 </p>

// // // //                 <p className="text-xs opacity-60">
// // // //                   Status: {i.status || "Completed"}
// // // //                 </p>
// // // //               </div>

// // // //               {/* BUTTON */}
// // // //               <button
// // // //                 onClick={() => nav(`/detail/${i._id}`)}
// // // //                 className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 py-2 rounded-full text-sm font-medium hover:scale-105 transition-all duration-300"
// // // //               >
// // // //                 View Details →
// // // //               </button>

// // // //             </div>
// // // //           ))}

// // // //         </div>

// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }


// // // import { useEffect, useState } from "react";
// // // import API from "../api/axios";
// // // import { useNavigate } from "react-router-dom";

// // // export default function History() {
// // //   const [data, setData] = useState([]);
// // //   const nav = useNavigate();

// // //   useEffect(() => {
// // //     API.get("/interviews")
// // //       .then((res) => setData(res.data))
// // //       .catch((err) => console.log(err));
// // //   }, []);

// // //   return (
// // //     <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#020617] text-white px-6 py-10">

// // //       <div className="max-w-7xl mx-auto">

// // //         {/* HEADER */}
// // //         <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 mb-12">

// // //           <div>
// // //             <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
// // //               Interview History
// // //             </h1>
// // //             <p className="text-gray-400 mt-2 text-sm">
// // //               Track your progress and performance over time
// // //             </p>
// // //           </div>

// // //           <button
// // //             onClick={() => nav("/")}
// // //             className="relative overflow-hidden group px-6 py-3 rounded-full font-medium bg-gradient-to-r from-blue-600 to-indigo-600 shadow-xl transition-all duration-300 hover:scale-105"
// // //           >
// // //             <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition"></span>
// // //             + New Interview
// // //           </button>
// // //         </div>

// // //         {/* EMPTY STATE */}
// // //         {data.length === 0 && (
// // //           <div className="flex flex-col items-center justify-center mt-40 text-center animate-fadeIn">
// // //             <div className="text-6xl mb-4">🚀</div>
// // //             <p className="text-2xl font-semibold">No interviews yet</p>
// // //             <p className="text-gray-400 mt-2 text-sm">
// // //               Start practicing and your history will appear here
// // //             </p>
// // //           </div>
// // //         )}

// // //         {/* GRID */}
// // //         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">

// // //           {data.map((i) => (
// // //             <div
// // //               key={i._id}
// // //               className="relative group rounded-3xl p-[1px] bg-gradient-to-br from-blue-600/40 via-indigo-600/30 to-purple-600/40 hover:scale-[1.03] transition-all duration-500"
// // //             >
// // //               {/* Card Inner */}
// // //               <div className="h-full bg-[#0b1220]/90 backdrop-blur-xl rounded-3xl p-6 border border-white/10 shadow-xl group-hover:shadow-2xl transition">

// // //                 {/* TOP */}
// // //                 <div className="flex justify-between items-center mb-5">
// // //                   <h2 className="text-lg font-semibold tracking-wide">
// // //                     {i.category || "Interview"}
// // //                   </h2>

// // //                   <span
// // //                     className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md ${
// // //                       i.score >= 70
// // //                         ? "bg-green-500/20 text-green-400 border border-green-400/20"
// // //                         : i.score >= 40
// // //                         ? "bg-yellow-500/20 text-yellow-400 border border-yellow-400/20"
// // //                         : "bg-red-500/20 text-red-400 border border-red-400/20"
// // //                     }`}
// // //                   >
// // //                     {i.score || 0}%
// // //                   </span>
// // //                 </div>

// // //                 {/* DETAILS */}
// // //                 <div className="text-sm text-gray-300 mb-6 space-y-3">

// // //                   {i.difficulty && (
// // //                     <p className="flex items-center gap-2">
// // //                       ⚡ <span className="text-gray-400">Difficulty:</span> {i.difficulty}
// // //                     </p>
// // //                   )}

// // //                   <p className="flex items-center gap-2">
// // //                     📅{" "}
// // //                     <span className="text-gray-400">
// // //                       {new Date(i.createdAt).toLocaleDateString()}
// // //                     </span>
// // //                   </p>

// // //                   <p className="text-xs opacity-60">
// // //                     Status: {i.status || "Completed"}
// // //                   </p>
// // //                 </div>

// // //                 {/* BUTTON */}
// // //                 <button
// // //                   onClick={() => nav(`/detail/${i._id}`)}
// // //                   className="w-full relative overflow-hidden group/button py-2.5 rounded-full font-medium bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-300 hover:scale-105"
// // //                 >
// // //                   <span className="absolute inset-0 bg-white/10 opacity-0 group-hover/button:opacity-100 transition"></span>
// // //                   View Details →
// // //                 </button>

// // //               </div>
// // //             </div>
// // //           ))}

// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // import { useEffect, useState } from "react";
// // import API from "../api/axios";
// // import { useNavigate } from "react-router-dom";

// // export default function History() {
// //   const [data, setData] = useState([]);
// //   const nav = useNavigate();

// //   useEffect(() => {
// //     API.get("/interviews")
// //       .then((res) => setData(res.data))
// //       .catch((err) => console.log(err));
// //   }, []);

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 text-gray-800 px-6 py-10">

// //       <div className="max-w-7xl mx-auto">

// //         {/* HEADER */}
// //         <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 mb-12">

// //           <div>
// //             <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
// //               Interview History
// //             </h1>
// //             <p className="text-gray-500 mt-2 text-sm">
// //               Track your progress and performance
// //             </p>
// //           </div>

// //           <button
// //             onClick={() => nav("/")}
// //             className="px-6 py-3 rounded-full font-medium bg-blue-600 text-white shadow-md hover:bg-blue-700 hover:scale-105 transition-all duration-300"
// //           >
// //             + New Interview
// //           </button>
// //         </div>

// //         {/* EMPTY STATE */}
// //         {data.length === 0 && (
// //           <div className="flex flex-col items-center justify-center mt-40 text-center">
// //             <div className="text-5xl mb-4">📊</div>
// //             <p className="text-xl font-semibold text-gray-700">
// //               No interviews yet
// //             </p>
// //             <p className="text-gray-500 mt-2 text-sm">
// //               Start practicing to see your history here
// //             </p>
// //           </div>
// //         )}

// //         {/* GRID */}
// //         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

// //           {data.map((i) => (
// //             <div
// //               key={i._id}
// //               className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
// //             >
// //               {/* TOP */}
// //               <div className="flex justify-between items-center mb-4">
// //                 <h2 className="text-lg font-semibold text-gray-800">
// //                   {i.category || "Interview"}
// //                 </h2>

// //                 <span
// //                   className={`px-3 py-1 rounded-full text-xs font-semibold ${
// //                     i.score >= 70
// //                       ? "bg-green-100 text-green-600"
// //                       : i.score >= 40
// //                       ? "bg-yellow-100 text-yellow-600"
// //                       : "bg-red-100 text-red-600"
// //                   }`}
// //                 >
// //                   {i.score || 0}%
// //                 </span>
// //               </div>

// //               {/* DETAILS */}
// //               <div className="text-sm text-gray-600 mb-5 space-y-2">

// //                 {i.difficulty && (
// //                   <p>
// //                     ⚡ Difficulty:{" "}
// //                     <span className="text-gray-800 font-medium">
// //                       {i.difficulty}
// //                     </span>
// //                   </p>
// //                 )}

// //                 <p>
// //                   📅{" "}
// //                   <span className="text-gray-800">
// //                     {new Date(i.createdAt).toLocaleDateString()}
// //                   </span>
// //                 </p>

// //                 <p className="text-xs text-gray-400">
// //                   Status: {i.status || "Completed"}
// //                 </p>
// //               </div>

// //               {/* BUTTON */}
// //               <button
// //                 onClick={() => nav(`/detail/${i._id}`)}
// //                 className="w-full py-2.5 rounded-full font-medium bg-blue-600 text-white hover:bg-blue-700 hover:scale-105 transition-all duration-300"
// //               >
// //                 View Details →
// //               </button>

// //             </div>
// //           ))}

// //         </div>

// //       </div>
// //     </div>
// //   );
// // }


// import { useEffect, useState } from "react";
// import API from "../api/axios";
// import { useNavigate } from "react-router-dom";

// export default function History() {
//   const [data, setData] = useState([]);
//   const nav = useNavigate();

//   useEffect(() => {
//     API.get("/interviews")
//       .then((res) => setData(res.data))
//       .catch((err) => console.log(err));
//   }, []);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#eef2ff] via-[#fdf2f8] to-[#f0f9ff]">

//       {/* 🔥 NAVBAR (same as dashboard) */}
//       <div className="sticky top-0 z-50 backdrop-blur-md bg-white/60 border-b border-gray-200">
//         <div className="max-w-6xl mx-auto px-6 py-1 flex justify-between items-center">

//           <h1 className="text-lg md:text-xl font-semibold text-gray-900 tracking-tight">
//             Intervexa<span className="text-purple-600">AI</span>
//           </h1>

//           <button
//             onClick={() => nav("/")}
//             className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-4 py-1.5 rounded-md text-sm shadow hover:scale-105 transition"
//           >
//             + New Interview
//           </button>
//         </div>
//       </div>

     

//       {/* 🔥 MAIN */}
//       <div className="max-w-6xl mx-auto px-6 py-10">

//         {/* HEADER */}
//         <div className="mb-10">
//           <h2 className="text-3xl font-bold text-gray-900">
//             Interview History
//           </h2>
//           <p className="text-gray-500 mt-2">
//             Review your past interviews and performance
//           </p>
//         </div>

//         {/* EMPTY STATE */}
//         {data.length === 0 && (
//           <div className="flex flex-col items-center justify-center mt-32 text-center">
//             <div className="text-5xl mb-4">📊</div>
//             <p className="text-xl font-semibold text-gray-700">
//               No interviews yet
//             </p>
//             <p className="text-gray-500 mt-2 text-sm">
//               Start practicing to see your history here
//             </p>
//           </div>
//         )}

//         {/* GRID */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

//           {data.map((i) => (
//             <div
//               key={i._id}
//               className="group relative bg-white/70 backdrop-blur-xl border border-gray-200 p-6 rounded-2xl shadow-md cursor-pointer transition hover:shadow-xl hover:-translate-y-1"
//             >
//               {/* Glow effect */}
//               <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-10 transition"></div>

//               {/* TOP */}
//               <div className="flex justify-between items-center mb-4">
//                 <h3 className="text-lg font-semibold text-gray-800">
//                   {i.category || "Interview"}
//                 </h3>

//                 <span
//                   className={`px-3 py-1 rounded-full text-xs font-semibold ${
//                     i.score >= 70
//                       ? "bg-green-100 text-green-600"
//                       : i.score >= 40
//                       ? "bg-yellow-100 text-yellow-600"
//                       : "bg-red-100 text-red-600"
//                   }`}
//                 >
//                   {i.score || 0}%
//                 </span>
//               </div>

//               {/* DETAILS */}
//               <div className="text-sm text-gray-600 mb-5 space-y-2">

//                 {i.difficulty && (
//                   <p>
//                     ⚡ Difficulty:{" "}
//                     <span className="text-gray-800 font-medium">
//                       {i.difficulty}
//                     </span>
//                   </p>
//                 )}

//                 <p>
//                   📅{" "}
//                   <span className="text-gray-800">
//                     {new Date(i.createdAt).toLocaleDateString()}
//                   </span>
//                 </p>

//                 <p className="text-xs text-gray-400">
//                   Status: {i.status || "Completed"}
//                 </p>
//               </div>

//               {/* BUTTON */}
//               <button
//                 onClick={() => nav(`/detail/${i._id}`)}
//                 className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white py-2 rounded-lg text-sm font-medium hover:scale-105 transition"
//               >
//                 View Details →
//               </button>

//             </div>
//           ))}

//         </div>
//       </div>
//     </div>
//   );
// }


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