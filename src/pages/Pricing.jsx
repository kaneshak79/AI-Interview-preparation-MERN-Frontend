// import { useNavigate } from "react-router-dom";

// export default function Pricing() {
//   const navigate = useNavigate();

//   const plans = [
//     {
//       name: "Free",
//       price: "₹0",
//       features: ["3 Interviews", "Basic Feedback"],
//       path: "/start",
//     },
//     {
//       name: "Pro",
//       price: "₹199",
//       features: ["Unlimited Interviews", "AI Feedback", "Analytics"],
//       path: "/payment",
//     },
//     {
//       name: "Premium",
//       price: "₹499",
//       features: ["Everything in Pro", "Advanced AI", "Priority Support"],
//       path: "/payment",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-100 flex justify-center items-center">
//       <div className="max-w-5xl w-full grid md:grid-cols-3 gap-8 p-6">

//         {plans.map((plan, i) => (
//           <div
//             key={i}
//             className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition text-center"
//           >
//             <h2 className="text-2xl font-bold mb-4">{plan.name}</h2>
//             <p className="text-3xl font-bold mb-6">{plan.price}</p>

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


import { useNavigate } from "react-router-dom";

export default function Pricing() {
  const navigate = useNavigate();

  const plans = [
    {
      name: "Free",
      price: 0,
      features: ["3 Interviews", "Basic Feedback"],
      path: "/start",
    },
    {
      name: "Pro",
      price: 199,
      features: ["Unlimited Interviews", "AI Feedback", "Analytics"],
      path: "/payment",
    },
    {
      name: "Premium",
      price: 499,
      features: ["Everything in Pro", "Advanced AI", "Priority Support"],
      path: "/payment",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center px-4">
      <div className="max-w-6xl w-full grid md:grid-cols-3 gap-8">

        {plans.map((plan, i) => (
          <div
            key={i}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition text-center"
          >
            <h2 className="text-2xl font-bold mb-4">{plan.name}</h2>

            <p className="text-4xl font-bold mb-6">
              ₹{plan.price}
            </p>

            <ul className="mb-6 space-y-2 text-gray-600">
              {plan.features.map((f, j) => (
                <li key={j}>✔ {f}</li>
              ))}
            </ul>

            <button
              onClick={() => navigate(plan.path, { state: plan })}
              className="w-full bg-black text-white py-3 rounded-full"
            >
              Choose Plan
            </button>
          </div>
        ))}

      </div>
    </div>
  );
}