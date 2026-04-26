// // import { useNavigate } from "react-router-dom";

// // export default function Pricing() {
// //   const navigate = useNavigate();

// //   const plans = [
// //     {
// //       name: "Free",
// //       price: "₹0",
// //       features: ["3 Interviews", "Basic Feedback"],
// //       path: "/start",
// //     },
// //     {
// //       name: "Pro",
// //       price: "₹199",
// //       features: ["Unlimited Interviews", "AI Feedback", "Analytics"],
// //       path: "/payment",
// //     },
// //     {
// //       name: "Premium",
// //       price: "₹499",
// //       features: ["Everything in Pro", "Advanced AI", "Priority Support"],
// //       path: "/payment",
// //     },
// //   ];

// //   return (
// //     <div className="min-h-screen bg-gray-100 flex justify-center items-center">
// //       <div className="max-w-5xl w-full grid md:grid-cols-3 gap-8 p-6">

// //         {plans.map((plan, i) => (
// //           <div
// //             key={i}
// //             className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition text-center"
// //           >
// //             <h2 className="text-2xl font-bold mb-4">{plan.name}</h2>
// //             <p className="text-3xl font-bold mb-6">{plan.price}</p>

// //             <ul className="mb-6 space-y-2 text-gray-600">
// //               {plan.features.map((f, j) => (
// //                 <li key={j}>✔ {f}</li>
// //               ))}
// //             </ul>

// //             <button
// //               onClick={() => navigate(plan.path, { state: plan })}
// //               className="w-full bg-black text-white py-3 rounded-full"
// //             >
// //               Choose Plan
// //             </button>
// //           </div>
// //         ))}

// //       </div>
// //     </div>
// //   );
// // }


// import { useNavigate } from "react-router-dom";

// export default function Pricing() {
//   const navigate = useNavigate();

//   const plans = [
//     {
//       name: "Free",
//       price: 0,
//       features: ["3 Interviews", "Basic Feedback"],
//       path: "/start",
//     },
//     {
//       name: "Pro",
//       price: 199,
//       features: ["Unlimited Interviews", "AI Feedback", "Analytics"],
//       path: "/payment",
//     },
//     {
//       name: "Premium",
//       price: 499,
//       features: ["Everything in Pro", "Advanced AI", "Priority Support"],
//       path: "/payment",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-100 flex justify-center items-center px-4">
//       <div className="max-w-6xl w-full grid md:grid-cols-3 gap-8">

//         {plans.map((plan, i) => (
//           <div
//             key={i}
//             className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition text-center"
//           >
//             <h2 className="text-2xl font-bold mb-4">{plan.name}</h2>

//             <p className="text-4xl font-bold mb-6">
//               ₹{plan.price}
//             </p>

//             <ul className="mb-6 space-y-2 text-gray-600">
//               {plan.features.map((f, j) => (
//                 <li key={j}>✔ {f}</li>
//               ))}
//             </ul>

//             <button
//               onClick={() => navigate(plan.path, { state: plan })}
//               className="w-full bg-black text-white py-3 rounded-full"
//             >
//               Choose Plan
//             </button>
//           </div>
//         ))}

//       </div>
//     </div>
//   );
// }

//befor updated crt code


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