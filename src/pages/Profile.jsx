// // // // import { useState } from "react";
// // // // import API from "../api/axios";

// // // // export default function Profile() {
// // // //   const [name,setName]=useState("");
// // // //   const [email,setEmail]=useState("");

// // // //   const update=async()=>{
// // // //     await API.put("/users/profile/update",{name,email});
// // // //   };

// // // //   return (
// // // //     <div>
// // // //       <input placeholder="name" onChange={(e)=>setName(e.target.value)}/>
// // // //       <input placeholder="email" onChange={(e)=>setEmail(e.target.value)}/>
// // // //       <button onClick={update}>Update</button>
// // // //     </div>
// // // //   );
// // // // }


// // // import { useState } from "react";
// // // import API from "../api/axios";

// // // export default function Profile() {
// // //   const [name, setName] = useState("");
// // //   const [email, setEmail] = useState("");
// // //   const [msg, setMsg] = useState("");

// // //   const update = async () => {
// // //     try {
// // //       await API.put("/users/profile/update", { name, email });
// // //       setMsg("Profile updated successfully ✅");
// // //     } catch (err) {
// // //       setMsg("Update failed ❌");
// // //     }
// // //   };

// // //   return (
// // //     <div className="min-h-screen bg-gray-100 flex items-center justify-center">

// // //       <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">

// // //         {/* HEADER */}
// // //         <h2 className="text-2xl font-bold mb-6 text-center">
// // //           Profile Settings
// // //         </h2>

// // //         {/* FORM */}
// // //         <div className="space-y-5">

// // //           {/* NAME */}
// // //           <div>
// // //             <label className="text-sm text-gray-500">Name</label>
// // //             <input
// // //               type="text"
// // //               placeholder="Enter your name"
// // //               onChange={(e) => setName(e.target.value)}
// // //               className="w-full border p-3 rounded-xl mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
// // //             />
// // //           </div>

// // //           {/* EMAIL */}
// // //           <div>
// // //             <label className="text-sm text-gray-500">Email</label>
// // //             <input
// // //               type="email"
// // //               placeholder="Enter your email"
// // //               onChange={(e) => setEmail(e.target.value)}
// // //               className="w-full border p-3 rounded-xl mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
// // //             />
// // //           </div>

// // //           {/* BUTTON */}
// // //           <button
// // //             onClick={update}
// // //             className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700"
// // //           >
// // //             Update Profile
// // //           </button>

// // //           {/* MESSAGE */}
// // //           {msg && (
// // //             <p className="text-center text-sm text-gray-600">
// // //               {msg}
// // //             </p>
// // //           )}

// // //         </div>

// // //       </div>

// // //     </div>
// // //   );
// // // }

// // import { useState } from "react";
// // import API from "../api/axios";

// // export default function Profile() {
// //   const [name, setName] = useState("");
// //   const [email, setEmail] = useState("");
// //   const [msg, setMsg] = useState("");
// //   const [loading, setLoading] = useState(false);

// //   const update = async () => {
// //     try {
// //       setLoading(true);
// //       await API.put("/users/profile/update", { name, email });
// //       setMsg("Profile updated successfully ✅");
// //     } catch (err) {
// //       setMsg("Update failed ❌");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 p-4">

// //       {/* CARD */}
// //       <div className="w-full max-w-md backdrop-blur-lg bg-white/70 border border-white/40 shadow-xl rounded-3xl p-8 transition hover:shadow-2xl">

// //         {/* HEADER */}
// //         <h2 className="text-3xl font-extrabold text-center mb-8 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
// //           Profile Settings
// //         </h2>

// //         {/* FORM */}
// //         <div className="space-y-6">

// //           {/* NAME */}
// //           <div className="relative">
// //             <input
// //               type="text"
// //               value={name}
// //               onChange={(e) => setName(e.target.value)}
// //               className="peer w-full p-3 pt-5 rounded-xl border border-gray-300 bg-transparent focus:outline-none focus:ring-2 focus:ring-indigo-400"
// //             />
// //             <label className="absolute left-3 top-2 text-gray-500 text-sm transition-all 
// //               peer-placeholder-shown:top-3.5 
// //               peer-placeholder-shown:text-base 
// //               peer-placeholder-shown:text-gray-400
// //               peer-focus:top-2 peer-focus:text-sm peer-focus:text-indigo-500">
// //               Name
// //             </label>
// //           </div>

// //           {/* EMAIL */}
// //           <div className="relative">
// //             <input
// //               type="email"
// //               value={email}
// //               onChange={(e) => setEmail(e.target.value)}
// //               className="peer w-full p-3 pt-5 rounded-xl border border-gray-300 bg-transparent focus:outline-none focus:ring-2 focus:ring-purple-400"
// //             />
// //             <label className="absolute left-3 top-2 text-gray-500 text-sm transition-all 
// //               peer-placeholder-shown:top-3.5 
// //               peer-placeholder-shown:text-base 
// //               peer-placeholder-shown:text-gray-400
// //               peer-focus:top-2 peer-focus:text-sm peer-focus:text-purple-500">
// //               Email
// //             </label>
// //           </div>

// //           {/* BUTTON */}
// //           <button
// //             onClick={update}
// //             disabled={loading}
// //             className="w-full py-3 rounded-xl text-white font-semibold 
// //               bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
// //               hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-md"
// //           >
// //             {loading ? "Updating..." : "Update Profile"}
// //           </button>

// //           {/* MESSAGE */}
// //           {msg && (
// //             <div
// //               className={`text-center text-sm font-medium px-4 py-2 rounded-lg ${
// //                 msg.includes("success")
// //                   ? "bg-green-100 text-green-600"
// //                   : "bg-red-100 text-red-600"
// //               }`}
// //             >
// //               {msg}
// //             </div>
// //           )}
// //         </div>

// //       </div>
// //     </div>
// //   );
// // }

import { useEffect, useState } from "react";
import API from "../api/axios";

export default function Profile() {
  const [user, setUser] = useState({});
  const [edit, setEdit] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  // ✅ Load logged-in user
  useEffect(() => {
    API.get("/users/profile")
      .then(res => {
        setUser(res.data);
        setName(res.data.name);
        setEmail(res.data.email);
      })
      .catch(() => setMsg("Failed to load profile"));
  }, []);

  // ✅ Update profile
  const update = async () => {
    try {
      setLoading(true);
      const res = await API.put("/users/profile/update", { name, email });

      setUser(res.data.user);
      setMsg("Profile updated successfully ✅");
      setEdit(false);
    } catch {
      setMsg("Update failed ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 p-4">

      <div className="w-full max-w-md bg-white/70 backdrop-blur-lg border border-white/40 shadow-xl rounded-3xl p-8">

        {/* HEADER */}
        <h2 className="text-3xl font-extrabold text-center mb-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
          My Profile
        </h2>

        {/* PROFILE VIEW */}
        {!edit ? (
          <div className="space-y-5 text-center">

            <div>
              <p className="text-gray-500 text-sm">Name</p>
              <h3 className="text-lg font-semibold text-gray-800">
                {user.name}
              </h3>
            </div>

            <div>
              <p className="text-gray-500 text-sm">Email</p>
              <h3 className="text-lg font-semibold text-gray-800">
                {user.email}
              </h3>
            </div>

            <button
              onClick={() => setEdit(true)}
              className="w-full mt-4 py-3 rounded-xl text-white font-semibold 
              bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
              hover:scale-[1.03] active:scale-[0.97] transition"
            >
              Edit Profile
            </button>
          </div>
        ) : (
          /* EDIT MODE */
          <div className="space-y-5">

            {/* NAME */}
            <div>
              <label className="text-sm text-gray-500">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 mt-1 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className="text-sm text-gray-500">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 mt-1 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>

            {/* BUTTONS */}
            <div className="flex gap-3">

              <button
                onClick={update}
                disabled={loading}
                className="flex-1 py-3 rounded-xl text-white font-semibold 
                bg-gradient-to-r from-green-500 to-emerald-500 
                hover:scale-[1.03] active:scale-[0.97] transition"
              >
                {loading ? "Saving..." : "Save"}
              </button>

              <button
                onClick={() => {
                  setEdit(false);
                  setName(user.name);
                  setEmail(user.email);
                }}
                className="flex-1 py-3 rounded-xl text-gray-700 font-semibold 
                bg-gray-200 hover:bg-gray-300 transition"
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {/* MESSAGE */}
        {msg && (
          <p className="text-center text-sm mt-4 text-gray-600">
            {msg}
          </p>
        )}

      </div>
    </div>
  );
}

