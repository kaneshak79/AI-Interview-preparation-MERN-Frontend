// // // // // // import { useNavigate } from "react-router-dom";

// // // // // // export default function Payment() {
// // // // // //   const navigate = useNavigate();

// // // // // //   return (
// // // // // //     <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">

// // // // // //       <div className="bg-white p-10 rounded-2xl shadow-lg w-full max-w-md text-center">

// // // // // //         <h1 className="text-2xl font-bold mb-4">
// // // // // //           Upgrade to Pro 🚀
// // // // // //         </h1>

// // // // // //         <p className="text-gray-600 mb-6">
// // // // // //           Unlock unlimited AI interviews and advanced analytics.
// // // // // //         </p>

// // // // // //         {/* PLAN */}
// // // // // //         <div className="bg-gray-100 p-6 rounded-xl mb-6">
// // // // // //           <h2 className="text-xl font-semibold mb-2">
// // // // // //             Pro Plan
// // // // // //           </h2>
// // // // // //           <p className="text-3xl font-bold mb-2">
// // // // // //             ₹199 / month
// // // // // //           </p>
// // // // // //           <p className="text-sm text-gray-500">
// // // // // //             Unlimited interviews + full analytics
// // // // // //           </p>
// // // // // //         </div>

// // // // // //         {/* BUTTON */}
// // // // // //         <button
// // // // // //           onClick={() => alert("Payment integration coming soon")}
// // // // // //           className="w-full bg-blue-600 text-white py-3 rounded-xl mb-3"
// // // // // //         >
// // // // // //           Pay Now
// // // // // //         </button>

// // // // // //         <button
// // // // // //           onClick={() => navigate("/dashboard")}
// // // // // //           className="w-full border py-3 rounded-xl"
// // // // // //         >
// // // // // //           Back
// // // // // //         </button>

// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // }

// // // // // import { useEffect } from "react";
// // // // // import API from "../api/axios";

// // // // // export default function Payment() {

// // // // //   const loadRazorpay = () => {
// // // // //     return new Promise((resolve) => {
// // // // //       const script = document.createElement("script");
// // // // //       script.src = "https://checkout.razorpay.com/v1/checkout.js";
// // // // //       script.onload = () => resolve(true);
// // // // //       script.onerror = () => resolve(false);
// // // // //       document.body.appendChild(script);
// // // // //     });
// // // // //   };

// // // // //   const payNow = async () => {
// // // // //     const res = await loadRazorpay();

// // // // //     if (!res) {
// // // // //       alert("Razorpay failed to load");
// // // // //       return;
// // // // //     }

// // // // //     // 1. Create order
// // // // //     const order = await API.post("/payment/create-order");

// // // // //     const options = {
// // // // //       key: "YOUR_KEY_ID", // 🔥 same as .env
// // // // //       amount: order.data.amount,
// // // // //       currency: order.data.currency,
// // // // //       name: "Intervexa AI",
// // // // //       description: "Unlimited Interviews",
// // // // //       order_id: order.data.id,

// // // // //       handler: async function (response) {
// // // // //         // 2. Verify payment
// // // // //         await API.post("/payment/verify", response);

// // // // //         alert("Payment Successful 🎉");
// // // // //         window.location.href = "/dashboard";
// // // // //       },

// // // // //       theme: {
// // // // //         color: "#2563eb",
// // // // //       },
// // // // //     };

// // // // //     const paymentObject = new window.Razorpay(options);
// // // // //     paymentObject.open();
// // // // //   };

// // // // //   return (
// // // // //     <div className="min-h-screen flex justify-center items-center bg-gray-100">

// // // // //       <div className="bg-white p-10 rounded-xl shadow text-center w-[400px]">

// // // // //         <h1 className="text-2xl font-bold mb-4">
// // // // //           Upgrade Plan 🚀
// // // // //         </h1>

// // // // //         <p className="mb-6 text-gray-600">
// // // // //           Get unlimited AI interviews
// // // // //         </p>

// // // // //         <button
// // // // //           onClick={payNow}
// // // // //           className="w-full bg-blue-600 text-white py-3 rounded-lg"
// // // // //         >
// // // // //           Pay ₹199
// // // // //         </button>

// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // }


// // // // import { useEffect } from "react";
// // // // import API from "../api/axios";

// // // // export default function Payment() {

// // // //   // ✅ Load Razorpay script
// // // //   const loadRazorpay = () => {
// // // //     return new Promise((resolve) => {
// // // //       const script = document.createElement("script");
// // // //       script.src = "https://checkout.razorpay.com/v1/checkout.js";

// // // //       script.onload = () => resolve(true);
// // // //       script.onerror = () => resolve(false);

// // // //       document.body.appendChild(script);
// // // //     });
// // // //   };

// // // //   const payNow = async () => {
// // // //     try {
// // // //       const loaded = await loadRazorpay();

// // // //       if (!loaded) {
// // // //         alert("Razorpay failed to load");
// // // //         return;
// // // //       }

// // // //       // ✅ Create order
// // // //       const { data: order } = await API.post("/payment/create-order");

// // // //       const options = {
// // // //         key: "rzp_test_xxxxxxxx", // 🔥 PUT YOUR REAL KEY
// // // //         amount: order.amount,
// // // //         currency: order.currency,
// // // //         name: "Intervexa AI",
// // // //         description: "Unlimited Interviews",
// // // //         order_id: order.id,

// // // //         // ✅ SUCCESS HANDLER
// // // //         handler: async function (response) {
// // // //           try {
// // // //             console.log("Payment Success:", response);

// // // //             await API.post("/payment/verify", response);

// // // //             alert("Payment Successful 🎉");

// // // //             window.location.href = "/dashboard";

// // // //           } catch (err) {
// // // //             console.log("VERIFY ERROR:", err);
// // // //             alert("Payment verification failed");
// // // //           }
// // // //         },

// // // //         theme: {
// // // //           color: "#2563eb",
// // // //         },
// // // //       };

// // // //       const paymentObject = new window.Razorpay(options);
// // // //       paymentObject.open();

// // // //     } catch (err) {
// // // //       console.log("PAY ERROR:", err);
// // // //       alert("Payment failed");
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="min-h-screen flex justify-center items-center bg-gray-100">

// // // //       <div className="bg-white p-10 rounded-xl shadow text-center w-[400px]">

// // // //         <h1 className="text-2xl font-bold mb-4">
// // // //           Upgrade Plan 🚀
// // // //         </h1>

// // // //         <p className="mb-6 text-gray-600">
// // // //           Get unlimited AI interviews
// // // //         </p>

// // // //         <button
// // // //           onClick={payNow}
// // // //           className="w-full bg-blue-600 text-white py-3 rounded-lg"
// // // //         >
// // // //           Pay ₹199
// // // //         </button>

// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }


// // // import { useEffect } from "react";
// // // import API from "../api/axios";

// // // export default function Payment() {

// // //   const loadRazorpay = () => {
// // //     return new Promise((resolve) => {
// // //       const script = document.createElement("script");
// // //       script.src = "https://checkout.razorpay.com/v1/checkout.js";
// // //       script.onload = () => resolve(true);
// // //       script.onerror = () => resolve(false);
// // //       document.body.appendChild(script);
// // //     });
// // //   };

// // //   const payNow = async () => {
// // //     try {
// // //       // ✅ Load Razorpay
// // //       const loaded = await loadRazorpay();

// // //       if (!loaded) {
// // //         alert("Razorpay SDK failed to load");
// // //         return;
// // //       }

// // //       // ✅ Create Order
// // //       const { data: order } = await API.post("/payment/create-order");

// // //       console.log("ORDER:", order);

// // //       const options = {
// // //         key: "rzp_test_SRSsFRoRS13yKv", // 🔥 replace
// // //         amount: order.amount,
// // //         currency: order.currency,
// // //         name: "Intervexa AI",
// // //         description: "Unlimited Interviews",
// // //         order_id: order.id,

// // //         // ✅ SUCCESS
// // //         handler: async function (response) {
// // //           console.log("PAYMENT SUCCESS:", response);

// // //           try {
// // //             const verifyRes = await API.post("/payment/verify", {
// // //               razorpay_order_id: response.razorpay_order_id,
// // //               razorpay_payment_id: response.razorpay_payment_id,
// // //               razorpay_signature: response.razorpay_signature,
// // //             });

// // //             console.log("VERIFY:", verifyRes.data);

// // //             if (verifyRes.data.success) {
// // //               alert("Payment Successful 🎉");
// // //               window.location.href = "/dashboard";
// // //             } else {
// // //               alert("Payment verification failed");
// // //             }

// // //           } catch (err) {
// // //             console.log("VERIFY ERROR:", err);
// // //             alert("Server verification error");
// // //           }
// // //         },

// // //         theme: {
// // //           color: "#2563eb",
// // //         },
// // //       };

// // //       const rzp = new window.Razorpay(options);

// // //       // ❌ PAYMENT FAILED HANDLER
// // //       rzp.on("payment.failed", function (response) {
// // //         console.log("FAILED:", response.error);

// // //         alert(
// // //           "Payment Failed: " +
// // //           response.error.description
// // //         );
// // //       });

// // //       rzp.open();

// // //     } catch (err) {
// // //       console.log("PAY ERROR:", err);
// // //       alert("Something went wrong");
// // //     }
// // //   };

// // //   return (
// // //     <div className="min-h-screen flex justify-center items-center bg-gray-100">
// // //       <div className="bg-white p-10 rounded-xl shadow text-center w-[400px]">

// // //         <h1 className="text-2xl font-bold mb-4">
// // //           Upgrade Plan 🚀
// // //         </h1>

// // //         <p className="mb-6 text-gray-600">
// // //           Get unlimited AI interviews
// // //         </p>

// // //         <button
// // //           onClick={payNow}
// // //           className="w-full bg-blue-600 text-white py-3 rounded-lg"
// // //         >
// // //           Pay ₹199
// // //         </button>

// // //       </div>
// // //     </div>
// // //   );
// // // }



// // import { useEffect } from "react";
// // import API from "../api/axios";

// // export default function Payment() {

// //   const loadRazorpay = () => {
// //     return new Promise((resolve) => {
// //       const script = document.createElement("script");
// //       script.src = "https://checkout.razorpay.com/v1/checkout.js";
// //       script.onload = () => resolve(true);
// //       script.onerror = () => resolve(false);
// //       document.body.appendChild(script);
// //     });
// //   };

// //   const payNow = async () => {
// //     try {
// //       const loaded = await loadRazorpay();

// //       if (!loaded) {
// //         alert("Razorpay SDK failed to load");
// //         return;
// //       }

// //       const { data: order } = await API.post("/payment/create-order");

// //       const options = {
// //         key: "rzp_test_SRSsFRoRS13yKv",
// //         amount: order.amount,
// //         currency: order.currency,
// //         name: "Intervexa AI",
// //         description: "Unlimited Interviews",
// //         order_id: order.id,

// //         handler: async function (response) {
// //           const verifyRes = await API.post("/payment/verify", {
// //             razorpay_order_id: response.razorpay_order_id,
// //             razorpay_payment_id: response.razorpay_payment_id,
// //             razorpay_signature: response.razorpay_signature,
// //           });

// //           if (verifyRes.data.success) {
// //             alert("Payment Successful 🎉");
// //             window.location.href = "/dashboard";
// //           } else {
// //             alert("Payment verification failed");
// //           }
// //         },

// //         theme: { color: "#4f46e5" },
// //       };

// //       const rzp = new window.Razorpay(options);

// //       rzp.on("payment.failed", function (response) {
// //         alert("Payment Failed: " + response.error.description);
// //       });

// //       rzp.open();

// //     } catch (err) {
// //       alert("Something went wrong");
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-white to-purple-100 px-4">

// //       <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl p-8 text-center">

// //         {/* LOGO / TITLE */}
// //         <h1 className="text-3xl font-bold text-gray-900 mb-2">
// //           Intervexa AI 🚀
// //         </h1>

// //         <p className="text-gray-500 mb-6">
// //           Upgrade to unlock full interview power
// //         </p>

// //         {/* PRICE CARD */}
// //         <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-2xl p-6 mb-6 shadow-lg">

// //           <h2 className="text-xl font-semibold mb-2">
// //             Pro Plan
// //           </h2>

// //           <p className="text-4xl font-bold mb-2">
// //             ₹199
// //           </p>

// //           <p className="text-sm opacity-90">
// //             One-time payment • Lifetime access
// //           </p>
// //         </div>

// //         {/* FEATURES */}
// //         <div className="text-left space-y-3 mb-6 text-gray-600 text-sm">
// //           <p>✅ Unlimited AI interviews</p>
// //           <p>✅ Real-time voice interaction</p>
// //           <p>✅ Advanced feedback & analytics</p>
// //           <p>✅ Personalized questions</p>
// //         </div>

// //         {/* PAY BUTTON */}
// //         <button
// //           onClick={payNow}
// //           className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-semibold text-lg transition shadow-md"
// //         >
// //           Pay ₹199
// //         </button>

// //         {/* TRUST */}
// //         <p className="text-xs text-gray-400 mt-4">
// //           🔒 Secure payment powered by Razorpay
// //         </p>

// //       </div>
// //     </div>
// //   );
// // }


// // import { useLocation } from "react-router-dom";
// // import API from "../api/axios";

// // export default function Payment() {
// //   const location = useLocation();
// //   const plan = location.state;

// //   const loadRazorpay = () => {
// //     return new Promise((resolve) => {
// //       const script = document.createElement("script");
// //       script.src = "https://checkout.razorpay.com/v1/checkout.js";
// //       script.onload = () => resolve(true);
// //       script.onerror = () => resolve(false);
// //       document.body.appendChild(script);
// //     });
// //   };

// //   const payNow = async () => {
// //     try {
// //       const loaded = await loadRazorpay();
// //       if (!loaded) return alert("Razorpay failed");

// //       // ✅ Send dynamic price
// //       const { data: order } = await API.post("/payment/create-order", {
// //         amount: plan?.price || 199,
// //       });

// //       const options = {
// //         key: "rzp_test_SRSsFRoRS13yKv",
// //         amount: order.amount,
// //         currency: order.currency,
// //         name: "Intervexa AI",
// //         description: `${plan?.name} Plan`,
// //         order_id: order.id,

// //         handler: async function (response) {
// //           const verifyRes = await API.post("/payment/verify", {
// //             razorpay_order_id: response.razorpay_order_id,
// //             razorpay_payment_id: response.razorpay_payment_id,
// //             razorpay_signature: response.razorpay_signature,
// //           });

// //           if (verifyRes.data.success) {
// //             alert("Payment Successful 🎉");
// //             window.location.href = "/dashboard";
// //           } else {
// //             alert("Payment verification failed");
// //           }
// //         },

// //         theme: { color: "#4f46e5" },
// //       };

// //       const rzp = new window.Razorpay(options);

// //       rzp.on("payment.failed", function (response) {
// //         alert("Payment Failed: " + response.error.description);
// //       });

// //       rzp.open();

// //     } catch (err) {
// //       alert("Something went wrong");
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-white to-purple-100 px-4">

// //       <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl p-8 text-center">

// //         <h1 className="text-3xl font-bold text-gray-900 mb-2">
// //           Intervexa AI 🚀
// //         </h1>

// //         <p className="text-gray-500 mb-6">
// //           Upgrade to unlock full interview power
// //         </p>

// //         {/* ✅ Dynamic Plan */}
// //         <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-2xl p-6 mb-6 shadow-lg">

// //           <h2 className="text-xl font-semibold mb-2">
// //             {plan?.name || "Pro"} Plan
// //           </h2>

// //           <p className="text-4xl font-bold mb-2">
// //             ₹{plan?.price || 199}
// //           </p>

// //           <p className="text-sm opacity-90">
// //             One-time payment • Lifetime access
// //           </p>
// //         </div>

// //         <div className="text-left space-y-3 mb-6 text-gray-600 text-sm">
// //           <p>✅ Unlimited AI interviews</p>
// //           <p>✅ Real-time voice interaction</p>
// //           <p>✅ Advanced feedback & analytics</p>
// //           <p>✅ Personalized questions</p>
// //         </div>

// //         <button
// //           onClick={payNow}
// //           className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-semibold text-lg transition shadow-md"
// //         >
// //           Pay ₹{plan?.price || 199}
// //         </button>

// //         <p className="text-xs text-gray-400 mt-4">
// //           🔒 Secure payment powered by Razorpay
// //         </p>

// //       </div>
// //     </div>
// //   );
// // }

// // // crt code above

// import API from "../api/axios";
// import { useNavigate } from "react-router-dom";

// export default function Payment() {
//   const navigate = useNavigate();

//   const loadRazorpay = () => {
//     return new Promise((resolve) => {
//       const script = document.createElement("script");
//       script.src = "https://checkout.razorpay.com/v1/checkout.js";
//       script.onload = () => resolve(true);
//       script.onerror = () => resolve(false);
//       document.body.appendChild(script);
//     });
//   };

//   // 🆓 FREE PLAN → Direct Interview
//   const startFree = () => {
//     navigate("/start");
//   };

//   // 💳 PAID PLANS → Razorpay
//   const payNow = async (plan) => {
//     try {
//       const loaded = await loadRazorpay();
//       if (!loaded) return alert("Razorpay failed");

//       const { data: order } = await API.post("/payment/create-order", {
//         amount: plan.price,
//       });

//       const options = {
//         key: "rzp_test_SRSsFRoRS13yKv",
//         amount: order.amount,
//         currency: order.currency,
//         name: "Intervexa AI",
//         description: `${plan.name} Plan`,
//         order_id: order.id,

//         handler: async function (response) {
//           const verifyRes = await API.post("/payment/verify", {
//             razorpay_order_id: response.razorpay_order_id,
//             razorpay_payment_id: response.razorpay_payment_id,
//             razorpay_signature: response.razorpay_signature,
//           });

//           if (verifyRes.data.success) {
//             alert("Payment Successful 🎉");
//             navigate("/dashboard");
//           } else {
//             alert("Payment verification failed");
//           }
//         },

//         theme: { color: "#4f46e5" },
//       };

//       const rzp = new window.Razorpay(options);

//       rzp.on("payment.failed", function (response) {
//         alert("Payment Failed: " + response.error.description);
//       });

//       rzp.open();

//     } catch {
//       alert("Something went wrong");
//     }
//   };

//   // 🎯 PLANS DATA
//   const plans = [
//     {
//       name: "Free",
//       price: 0,
//       features: ["1 Interview", "Basic Questions"],
//       action: startFree,
//       highlight: false,
//     },
//     {
//       name: "Pro",
//       price: 199,
//       features: ["Unlimited Interviews", "AI Feedback", "Analytics"],
//       action: () => payNow({ name: "Pro", price: 199 }),
//       highlight: true,
//     },
//     {
//       name: "Premium",
//       price: 399,
//       features: ["Everything in Pro", "Voice AI", "Advanced Insights"],
//       action: () => payNow({ name: "Premium", price: 399 }),
//       highlight: false,
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100 flex items-center justify-center p-6">

//       <div className="max-w-5xl w-full">

//         {/* HEADER */}
//         <h1 className="text-4xl font-bold text-center text-gray-900 mb-2">
//           Intervexa AI 🚀
//         </h1>
//         <p className="text-center text-gray-500 mb-10">
//           Choose your plan and start your AI interview journey
//         </p>

//         {/* PLANS */}
//         <div className="grid md:grid-cols-3 gap-6">

//           {plans.map((plan, i) => (
//             <div
//               key={i}
//               className={`rounded-3xl p-6 text-center shadow-lg transition-all duration-300 hover:scale-[1.05]
//               ${plan.highlight
//                   ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white scale-105"
//                   : "bg-white"
//               }`}
//             >
//               <h2 className="text-xl font-semibold mb-2">
//                 {plan.name}
//               </h2>

//               <p className="text-4xl font-bold mb-4">
//                 ₹{plan.price}
//               </p>

//               <div className="space-y-2 mb-6 text-sm">
//                 {plan.features.map((f, idx) => (
//                   <p key={idx}>✅ {f}</p>
//                 ))}
//               </div>

//               <button
//                 onClick={plan.action}
//                 className={`w-full py-3 rounded-xl font-semibold transition
//                 ${plan.highlight
//                     ? "bg-white text-indigo-600 hover:bg-gray-100"
//                     : "bg-indigo-600 text-white hover:bg-indigo-700"
//                 }`}
//               >
//                 {plan.price === 0
//                   ? "Start Free"
//                   : `Pay ₹${plan.price}`}
//               </button>
//             </div>
//           ))}

//         </div>
//       </div>
//     </div>
//   );
// }

import API from "../api/axios";
import { useNavigate } from "react-router-dom";

export default function Payment() {
  const navigate = useNavigate();

  const loadRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const startFree = () => {
    navigate("/start");
  };

  const payNow = async (plan) => {
    try {
      const loaded = await loadRazorpay();
      if (!loaded) return alert("Razorpay failed");

      const { data: order } = await API.post("/payment/create-order", {
        amount: plan.price,
      });

      const options = {
        key: "rzp_test_SRSsFRoRS13yKv",
        amount: order.amount,
        currency: order.currency,
        name: "Intervexa AI",
        description: `${plan.name} Plan`,
        order_id: order.id,

        handler: async function (response) {
          const verifyRes = await API.post("/payment/verify", {
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
          });

          if (verifyRes.data.success) {
            alert("Payment Successful 🎉");
            navigate("/dashboard");
          } else {
            alert("Payment verification failed");
          }
        },

        theme: { color: "#6366f1" },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch {
      alert("Something went wrong");
    }
  };

  const plans = [
    {
      name: "Free",
      price: 0,
      features: ["1 Interview", "Basic Questions"],
      action: startFree,
      highlight: false,
    },
    {
      name: "Pro",
      price: 199,
      features: ["Unlimited Interviews", "AI Feedback", "Analytics"],
      action: () => payNow({ name: "Pro", price: 199 }),
      highlight: true,
    },
    {
      name: "Premium",
      price: 399,
      features: ["Everything in Pro", "Voice AI", "Advanced Insights"],
      action: () => payNow({ name: "Premium", price: 399 }),
      highlight: false,
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden
      bg-gradient-to-br from-indigo-200 via-purple-100 to-pink-100">

      {/* 🔥 Animated Background Blobs */}
      <div className="absolute w-72 h-72 bg-purple-400 rounded-full blur-3xl opacity-30 animate-pulse top-10 left-10"></div>
      <div className="absolute w-72 h-72 bg-indigo-400 rounded-full blur-3xl opacity-30 animate-ping bottom-10 right-10"></div>

      {/* <div className="max-w-6xl w-full z-10">

       
        <h1 className="text-5xl font-extrabold text-center mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent animate-pulse">
          Intervexa AI 🚀
        </h1>

        <p className="text-center text-gray-600 mb-12 text-lg">
          Choose your plan & level up your interview preparation
        </p> */}

        <div className="max-w-6xl w-full z-10 mt-6">

  {/* HEADER */}
  <h1 className="text-5xl font-extrabold text-center mb-1 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent animate-pulse">
    Intervexa AI 🚀</h1>
     <span className="test-sm">Choose your plan & level up your interview preparation</span>
  {/* </h1> */}

  {/* <p className="text-center text-gray-600 mb-6 mt-2 text-sm">
    Choose your plan & level up your interview preparation
  </p> */}


        {/* PLANS */}
        <div className="grid md:grid-cols-3 gap-8">

          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative rounded-3xl p-8 backdrop-blur-lg border transition-all duration-500
              hover:scale-105 hover:shadow-2xl
              ${plan.highlight
                  ? "bg-white/40 border-indigo-400 shadow-xl"
                  : "bg-white/60 border-gray-200"
              }`}
            >
              {/* 🏆 Badge */}
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-xs px-4 py-1 rounded-full shadow">
                  Most Popular
                </div>
              )}

              <h2 className="text-2xl font-bold text-center mb-2">
                {plan.name}
              </h2>

              <p className="text-5xl font-extrabold text-center mb-6 text-indigo-600">
                ₹{plan.price}
              </p>

              <div className="space-y-3 mb-8 text-gray-700 text-sm text-center">
                {plan.features.map((f, idx) => (
                  <p key={idx}>✅ {f}</p>
                ))}
              </div>

              <button
                onClick={plan.action}
                className={`w-full py-3 rounded-xl font-semibold text-lg transition-all duration-300
                ${plan.highlight
                    ? "bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg hover:shadow-indigo-400/50"
                    : "bg-gray-900 text-white hover:bg-black"
                }`}
              >
                {plan.price === 0 ? "Start Free" : `Get ${plan.name}`}
              </button>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}