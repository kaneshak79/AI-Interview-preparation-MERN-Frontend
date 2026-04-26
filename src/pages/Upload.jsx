// // // // import { useState } from "react";
// // // // import API from "../api/axios";

// // // // export default function Upload() {
// // // //   const [file,setFile]=useState(null);

// // // //   const upload=async()=>{
// // // //     const form=new FormData();
// // // //     form.append("file",file);

// // // //     const res=await API.post("/media/upload",form);
// // // //     alert(res.data.url);
// // // //   };

// // // //   return (
// // // //     <div>
// // // //       <input type="file" onChange={(e)=>setFile(e.target.files[0])}/>
// // // //       <button onClick={upload}>Upload</button>
// // // //     </div>
// // // //   );
// // // // }


// // // import { useState } from "react";
// // // import API from "../api/axios";

// // // export default function Upload() {
// // //   const [file, setFile] = useState(null);
// // //   const [url, setUrl] = useState("");
// // //   const [loading, setLoading] = useState(false);
// // //   const [msg, setMsg] = useState("");

// // //   const upload = async () => {
// // //     if (!file) {
// // //       setMsg("Please select a file ❌");
// // //       return;
// // //     }

// // //     try {
// // //       setLoading(true);
// // //       setMsg("");

// // //       const form = new FormData();
// // //       form.append("file", file);

// // //       const res = await API.post("/media/upload", form, {
// // //         headers: {
// // //           "Content-Type": "multipart/form-data",
// // //         },
// // //       });

// // //       setUrl(res.data.url);
// // //       setMsg("Upload successful ✅");
// // //     } catch (err) {
// // //       setMsg("Upload failed ❌");
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   return (
// // //     <div className="min-h-screen bg-gray-100 flex items-center justify-center">

// // //       <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">

// // //         {/* HEADER */}
// // //         <h2 className="text-2xl font-bold mb-6 text-center">
// // //           Upload File
// // //         </h2>

// // //         {/* FILE INPUT */}
// // //         <div className="mb-4">
// // //           <input
// // //             type="file"
// // //             onChange={(e) => setFile(e.target.files[0])}
// // //             className="w-full border p-3 rounded-xl"
// // //           />
// // //         </div>

// // //         {/* FILE PREVIEW */}
// // //         {file && (
// // //           <div className="mb-4 text-sm text-gray-600">
// // //             Selected: <b>{file.name}</b>
// // //           </div>
// // //         )}

// // //         {/* BUTTON */}
// // //         <button
// // //           onClick={upload}
// // //           disabled={loading}
// // //           className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 disabled:opacity-50"
// // //         >
// // //           {loading ? "Uploading..." : "Upload"}
// // //         </button>

// // //         {/* MESSAGE */}
// // //         {msg && (
// // //           <p className="text-center text-sm mt-4 text-gray-600">
// // //             {msg}
// // //           </p>
// // //         )}

// // //         {/* FILE URL */}
// // //         {url && (
// // //           <div className="mt-6 text-center">
// // //             <p className="text-sm text-gray-500 mb-2">
// // //               Uploaded File URL:
// // //             </p>
// // //             <a
// // //               href={url}
// // //               target="_blank"
// // //               rel="noreferrer"
// // //               className="text-blue-600 break-all"
// // //             >
// // //               {url}
// // //             </a>
// // //           </div>
// // //         )}

// // //       </div>

// // //     </div>
// // //   );
// // // }

// // //before code crt

// // import { useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import API from "../api/axios";

// // export default function Upload() {
// //   const [file, setFile] = useState(null);
// //   const [url, setUrl] = useState("");
// //   const [loading, setLoading] = useState(false);
// //   const [msg, setMsg] = useState("");

// //   const navigate = useNavigate();

// //   const upload = async () => {
// //     if (!file) {
// //       setMsg("Please select a resume ❌");
// //       return;
// //     }

// //     try {
// //       setLoading(true);
// //       setMsg("");

// //       const form = new FormData();
// //       form.append("file", file);

// //       // ✅ Upload resume
// //       const res = await API.post("/media/upload", form, {
// //         headers: { "Content-Type": "multipart/form-data" }
// //       });

// //       const fileUrl = res.data.url;
// //       setUrl(fileUrl);
// //       setMsg("Resume uploaded ✅ Generating interview...");

// //       // 🚀 STEP 2: Start interview using resume
// //       const interviewRes = await API.post("/interviews/start", {
// //         type: "resume",
// //         resumeUrl: fileUrl
// //       });

// //       // ✅ Save interview data (optional)
// //       localStorage.setItem(
// //         "questions",
// //         JSON.stringify(interviewRes.data.questions)
// //       );

// //       // 🎯 Navigate to interview page
// //       navigate("/interview");

// //     } catch (err) {
// //       console.log(err);
// //       setMsg("Upload or interview failed ❌");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen flex items-center justify-center 
// //       bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#312e81] p-6">

// //       {/* GLASS CARD */}
// //       <div className="w-full max-w-md p-8 rounded-3xl 
// //         bg-white/10 backdrop-blur-2xl border border-white/20 
// //         shadow-2xl text-white">

// //         {/* HEADER */}
// //         <h2 className="text-3xl font-extrabold text-center mb-6 
// //           bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 
// //           bg-clip-text text-transparent animate-gradient">
// //           Upload Resume
// //         </h2>

// //         {/* FILE INPUT */}
// //         <label className="block mb-4">
// //           <span className="text-sm text-gray-300">Choose Resume</span>

// //           <input
// //             type="file"
// //             accept=".pdf,.doc,.docx"
// //             onChange={(e) => setFile(e.target.files[0])}
// //             className="mt-2 w-full p-3 rounded-xl 
// //             bg-white/20 border border-white/20 
// //             text-white file:mr-3 file:py-2 file:px-4 
// //             file:rounded-lg file:border-0 
// //             file:bg-gradient-to-r file:from-cyan-400 file:to-purple-500 
// //             file:text-white hover:file:opacity-90"
// //           />
// //         </label>

// //         {/* FILE PREVIEW */}
// //         {file && (
// //           <div className="mb-4 text-sm text-gray-300">
// //             📄 Selected: <b>{file.name}</b>
// //           </div>
// //         )}

// //         {/* BUTTON */}
// //         <button
// //           onClick={upload}
// //           disabled={loading}
// //           className="w-full py-3 rounded-xl font-semibold
// //           bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500
// //           hover:scale-[1.03] active:scale-[0.97]
// //           transition-all duration-300 shadow-lg disabled:opacity-50"
// //         >
// //           {loading ? "Processing..." : "Upload & Start Interview"}
// //         </button>

// //         {/* MESSAGE */}
// //         {msg && (
// //           <p className="text-center text-sm mt-4 text-gray-300">
// //             {msg}
// //           </p>
// //         )}

// //         {/* FILE URL */}
// //         {url && (
// //           <div className="mt-6 text-center">
// //             <p className="text-sm text-gray-400 mb-2">
// //               Uploaded Resume:
// //             </p>
// //             <a
// //               href={url}
// //               target="_blank"
// //               rel="noreferrer"
// //               className="text-cyan-400 break-all underline"
// //             >
// //               View File
// //             </a>
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }

// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import API from "../api/axios";

// export default function Upload() {
//   const [file, setFile] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [msg, setMsg] = useState("");

//   const navigate = useNavigate();

//   const upload = async () => {
//     if (!file) {
//       setMsg("Please select a resume ❌");
//       return;
//     }

//     try {
//       setLoading(true);
//       setMsg("");

//       const form = new FormData();
//       form.append("file", file);

//       // ✅ Upload file
//       const res = await API.post("/media/upload", form, {
//         headers: { "Content-Type": "multipart/form-data" }
//       });

//       const fileUrl = res.data.url;

//       setMsg("Resume uploaded ✅");

//       // 🚀 Navigate to Start Interview page with resume data
//       navigate("/start", {
//         state: {
//           type: "resume",
//           resumeUrl: fileUrl
//         }
//       });

//     } catch (err) {
//       console.log(err);
//       setMsg("Upload failed ❌");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">

//       <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md transition hover:shadow-xl">

//         {/* HEADER */}
//         <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
//           Upload Resume
//         </h2>

//         {/* FILE INPUT */}
//         <div className="mb-5">
//           <label className="text-sm text-gray-500">Select Resume</label>

//           <input
//             type="file"
//             accept=".pdf,.doc,.docx"
//             onChange={(e) => setFile(e.target.files[0])}
//             className="w-full mt-2 border p-3 rounded-xl 
//             focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         {/* FILE PREVIEW */}
//         {file && (
//           <div className="mb-4 text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">
//             📄 <b>{file.name}</b>
//           </div>
//         )}

//         {/* BUTTON */}
//         <button
//           onClick={upload}
//           disabled={loading}
//           className="w-full bg-blue-600 text-white py-3 rounded-xl 
//           hover:bg-blue-700 transition 
//           hover:scale-[1.02] active:scale-[0.97] 
//           disabled:opacity-50"
//         >
//           {loading ? "Uploading..." : "Upload & Continue"}
//         </button>

//         {/* MESSAGE */}
//         {msg && (
//           <p className="text-center text-sm mt-4 text-gray-600">
//             {msg}
//           </p>
//         )}

//       </div>
//     </div>
//   );
// }


import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/axios";

export default function Upload() {
  const [file, setFile] = useState(null);
  const [drag, setDrag] = useState(false);
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const navigate = useNavigate();

  const upload = async () => {
    if (!file) {
      setMsg("Please select a resume ❌");
      return;
    }

    try {
      setLoading(true);
      setMsg("");

      const form = new FormData();
      form.append("file", file);

      const res = await API.post("/media/upload", form, {
        headers: { "Content-Type": "multipart/form-data" }
      });

      const fileUrl = res.data.url;

      setMsg("Resume uploaded ✅");

      navigate("/start", {
        state: { type: "resume", resumeUrl: fileUrl }
      });

    } catch (err) {
      setMsg("Upload failed ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100 flex items-center justify-center p-6">

      {/* CARD */}
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8 transition-all duration-500 hover:shadow-2xl">

        {/* HEADER */}
        <h2 className="text-3xl font-extrabold text-center mb-2 text-gray-800">
          Upload Resume
        </h2>
        <p className="text-center text-gray-500 mb-6 text-sm">
          Upload your resume to start AI-powered interview
        </p>

        {/* DRAG & DROP AREA */}
        <div
          onDragOver={(e) => {
            e.preventDefault();
            setDrag(true);
          }}
          onDragLeave={() => setDrag(false)}
          onDrop={(e) => {
            e.preventDefault();
            setDrag(false);
            setFile(e.dataTransfer.files[0]);
          }}
          className={`border-2 border-dashed rounded-2xl p-6 text-center cursor-pointer transition-all duration-300
          ${drag ? "border-blue-500 bg-blue-50 scale-[1.02]" : "border-gray-300 hover:border-blue-400 hover:bg-gray-50"}`}
        >
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={(e) => setFile(e.target.files[0])}
            className="hidden"
            id="fileUpload"
          />

          <label htmlFor="fileUpload" className="cursor-pointer">
            <div className="text-4xl mb-2 animate-bounce">📄</div>
            <p className="text-gray-600 text-sm">
              Drag & drop your resume here or <span className="text-blue-600 font-medium">browse</span>
            </p>
          </label>
        </div>

        {/* FILE PREVIEW */}
        {file && (
          <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-xl text-sm text-gray-700 animate-fadeIn">
            ✅ Selected: <b>{file.name}</b>
          </div>
        )}

        {/* BUTTON */}
        <button
          onClick={upload}
          disabled={loading}
          className="w-full mt-6 py-3 rounded-xl font-semibold text-white
          bg-gradient-to-r from-blue-600 to-indigo-600
          hover:from-blue-700 hover:to-indigo-700
          transition-all duration-300
          hover:scale-[1.03] active:scale-[0.97]
          shadow-md disabled:opacity-50"
        >
          {loading ? "Processing..." : "🚀 Upload & Start Interview"}
        </button>

        {/* MESSAGE */}
        {msg && (
          <p className="text-center text-sm mt-4 text-gray-600 animate-fadeIn">
            {msg}
          </p>
        )}
      </div>
    </div>
  );
}