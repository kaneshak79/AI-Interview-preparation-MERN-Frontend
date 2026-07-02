
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
