

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
