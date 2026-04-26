// import { useEffect, useState } from "react";
// import API from "../api/axios";

// export default function AdminQuestions() {
//   const [q,setQ]=useState([]);

//   useEffect(()=>{
//     API.get("/questions").then(res=>setQ(res.data));
//   },[]);

//   return (
//     <div>
//       {q.map(i=>(
//         <div key={i._id}>{i.question}</div>
//       ))}
//     </div>
//   );
// }


import { useEffect, useState } from "react";
import API from "../api/axios";

export default function AdminQuestions() {
  const [questions, setQuestions] = useState([]);
  const [form, setForm] = useState({
    question: "",
    category: "",
    difficulty: "",
    keywords: "",
    idealAnswer: "",
  });
  const [editingId, setEditingId] = useState(null);
  const [msg, setMsg] = useState("");

  // LOAD
  const load = () => {
    API.get("/questions")
      .then((res) => setQuestions(res.data))
      .catch(() => setMsg("Failed to load ❌"));
  };

  useEffect(() => {
    load();
  }, []);

  // CREATE / UPDATE
  const submit = async () => {
    try {
      if (editingId) {
        await API.put(`/questions/${editingId}`, {
          ...form,
          keywords: form.keywords.split(","),
        });
        setMsg("Updated ✅");
      } else {
        await API.post("/questions", {
          ...form,
          keywords: form.keywords.split(","),
        });
        setMsg("Created ✅");
      }

      setForm({
        question: "",
        category: "",
        difficulty: "",
        keywords: "",
        idealAnswer: "",
      });
      setEditingId(null);
      load();
    } catch {
      setMsg("Action failed ❌");
    }
  };

  // DELETE
  const remove = async (id) => {
    try {
      await API.delete(`/questions/${id}`);
      setMsg("Deleted ✅");
      load();
    } catch {
      setMsg("Delete failed ❌");
    }
  };

  // EDIT
  const edit = (q) => {
    setEditingId(q._id);
    setForm({
      question: q.question,
      category: q.category,
      difficulty: q.difficulty,
      keywords: q.keywords.join(","),
      idealAnswer: q.idealAnswer,
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <h1 className="text-2xl font-bold mb-6">
          Admin - Questions
        </h1>

        {msg && <p className="mb-4 text-gray-600">{msg}</p>}

        {/* FORM */}
        <div className="bg-white p-6 rounded-2xl shadow mb-8 grid gap-4">

          <input
            className="input"
            placeholder="Question"
            value={form.question}
            onChange={(e)=>setForm({...form,question:e.target.value})}
          />

          <input
            className="input"
            placeholder="Category (e.g. DSA, HR)"
            value={form.category}
            onChange={(e)=>setForm({...form,category:e.target.value})}
          />

          <input
            className="input"
            placeholder="Difficulty (Easy/Medium/Hard)"
            value={form.difficulty}
            onChange={(e)=>setForm({...form,difficulty:e.target.value})}
          />

          <input
            className="input"
            placeholder="Keywords (comma separated)"
            value={form.keywords}
            onChange={(e)=>setForm({...form,keywords:e.target.value})}
          />

          <textarea
            className="input"
            placeholder="Ideal Answer"
            value={form.idealAnswer}
            onChange={(e)=>setForm({...form,idealAnswer:e.target.value})}
          />

          <button onClick={submit} className="btn">
            {editingId ? "Update Question" : "Create Question"}
          </button>
        </div>

        {/* TABLE */}
        <div className="bg-white p-6 rounded-2xl shadow overflow-x-auto">
          <table className="w-full">

            <thead>
              <tr className="border-b">
                <th className="p-3 text-left">Question</th>
                <th className="p-3 text-left">Category</th>
                <th className="p-3 text-left">Difficulty</th>
                <th className="p-3 text-left">Actions</th>
              </tr>
            </thead>

            <tbody>
              {questions.map((q) => (
                <tr key={q._id} className="border-b">

                  <td className="p-3">{q.question}</td>
                  <td className="p-3">{q.category}</td>
                  <td className="p-3">{q.difficulty}</td>

                  <td className="p-3 space-x-2">

                    <button
                      onClick={()=>edit(q)}
                      className="bg-blue-600 text-white px-3 py-1 rounded"
                    >
                      Edit
                    </button>

                    <button
                      onClick={()=>remove(q._id)}
                      className="bg-red-600 text-white px-3 py-1 rounded"
                    >
                      Delete
                    </button>

                  </td>

                </tr>
              ))}
            </tbody>

          </table>
        </div>

      </div>

      <style>{`
        .input {
          border: 1px solid #ddd;
          padding: 10px;
          border-radius: 8px;
          width: 100%;
        }
        .btn {
          background: black;
          color: white;
          padding: 10px;
          border-radius: 8px;
        }
      `}</style>

    </div>
  );
}