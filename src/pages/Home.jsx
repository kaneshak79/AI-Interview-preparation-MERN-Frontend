

import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// const navigate = useNavigate();
const Container = ({ children }) => (
  <div className="w-full max-w-[1400px] mx-auto px-4 md:px-10 lg:px-16">
    {children}
  </div>
);

const Home = () => {
    const navigate = useNavigate(); 
  const [openIndex, setOpenIndex] = useState(null);
    return (
    <div className="bg-white text-gray-800">

      {/* ================= NAVBAR ================= */}
      {/* <header className="w-full border-b bg-white sticky top-0 z-50">
        <Container>
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-blue-600">
              Intervexa AI
            </h1>

            <div className="hidden md:flex gap-8 text-gray-600">
              <a href="#">Home</a>
              <a href="#">Features</a>
              <a href="#">Pricing</a>
              <a href="#">Contact</a>
            </div>

           


<div className="flex gap-3">
  <button
    onClick={() => navigate("/login")}
    className="border px-4 py-2 rounded-full"
  >
    Login
  </button>

  <button
    onClick={() => navigate("/register")}
    className="bg-black text-white px-4 py-2 rounded-full"
  >
    Sign up
  </button>
</div>
          </div>
        </Container>
      </header> */}

  <header className="w-full sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-gray-200">
  <Container>
    <div className="flex items-center justify-between h-16 mt-2 mb-2">

      {/* Logo */}
      <h1 className="text-xl font-semibold tracking-tight">
        <span className="text-gray-900">Intervexa</span>
        <span className="text-blue-600">AI</span>
      </h1>

      {/* Nav Links */}
      <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
        <a href="#" className="hover:text-black transition">Home</a>
        <a href="#" className="hover:text-black transition">Features</a>
        <a href="#" className="hover:text-black transition">Pricing</a>
        <a href="#" className="hover:text-black transition">Contact</a>
      </nav>

      {/* Actions */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => navigate("/login")}
          className="text-sm font-medium px-4 py-2 rounded-full border border-gray-300 hover:bg-gray-100 transition"
        >
          Login
        </button>

        <button
          onClick={() => navigate("/register")}
          className="text-sm font-medium px-5 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition shadow-sm"
        >
          Get Started
        </button>
      </div>

    </div>
  </Container>

  {/* 🔥 Animated Gradient Line BELOW Navbar */}
  <div className="w-full h-[3px] bg-gradient-to-r from-blue-500 via-purple-500 via-pink-500 to-yellow-500 animate-gradient-flow"></div>

  {/* Animation */}
  <style>
    {`
      @keyframes gradientFlow {
        0% { background-position: 0% 50% }
        100% { background-position: 200% 50% }
      }

      .animate-gradient-flow {
        background-size: 200% 100%;
        animation: gradientFlow 3s linear infinite;
      }
    `}
  </style>
</header>

      {/* ================= HERO ================= */}
 
<section className="py-18 bg-gradient-to-b from-white via-purple-50 to-purple-100">
  <Container>
    <div className="text-center flex flex-col items-center max-w-4xl mx-auto py-12">

      {/* Badge */}
      <p className="inline-block border border-purple-200 bg-white/60 backdrop-blur px-5 py-1.5 rounded-full text-sm mb-6 shadow-sm">
        ✨ Voice-powered AI interview practice
      </p>

      {/* Heading */}
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight mb-6 text-center">
        Ace your next
        <br />
        <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
          interview!
        </span>
      </h1>

      {/* Paragraph (FIXED CENTER) */}
      {/* <p className="text-gray-600 font-semibold text-lg md:text-m max-w-2xl text-center mb-12 leading-relaxed"> */}
      <p className="text-gray-600 italic text-lg md:text-l max-w-2xl text-center mb-12 leading-relaxed">
        Practice real-time interviews with AI and get actionable feedback.
        Talk with your personalized AI-powered interview coach
      </p>

      {/* CTA Button */}
      <button
        onClick={() => navigate("/interview/setup")}
        className=" mt-3 group relative inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-medium overflow-hidden transition-all duration-300
        hover:scale-105 hover:bg-blue-700 active:scale-95 shadow-md hover:shadow-xl"
      >
        <span className="relative z-10">Start my interview →</span>

        {/* Glow animation */}
        <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 blur-lg transition duration-500 group-hover:opacity-40"></span>
      </button>

    </div>
  </Container>
</section>

      {/* ================= MOCK UI ================= */}


{/* 
<section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-10 bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200">

  
  <div className="absolute w-[500px] h-[500px] bg-purple-400/30 blur-[120px] rounded-full top-[-150px] left-[-150px]" />
  <div className="absolute w-[500px] h-[500px] bg-pink-400/30 blur-[120px] rounded-full bottom-[-150px] right-[-150px]" />

 
  <div className="relative z-10 w-full max-w-7xl bg-white/30 backdrop-blur-2xl border border-white/40 rounded-[30px] shadow-[0_25px_80px_rgba(0,0,0,0.15)] p-6 flex flex-col lg:flex-row gap-5">

  
    <div className="relative lg:w-1/2 bg-white/70 backdrop-blur-xl border border-white/50 rounded-2xl p-4 shadow-inner space-y-3">

     
      <div className="absolute -top-6 -left-6 bg-white/90 shadow-lg rounded-full px-3 py-1 text-[10px] animate-floatSlow">
        👍 Communication
      </div>

      <div className="absolute -bottom-6 -left-6 bg-white/90 shadow-lg rounded-full px-3 py-1 text-[10px] animate-floatMedium">
        📄 CV Uploaded
      </div>

      
      <h2 className="text-base font-semibold text-gray-800">
        Backend SDE-1
      </h2>

      <p className="text-[11px] text-gray-600">
        Build scalable backend systems and APIs in production environments.
      </p>

      
      <div className="grid grid-cols-2 gap-1.5">
        <div className="bg-white rounded-lg p-2 border border-gray-200 shadow-sm hover:shadow-md transition">
          <p className="text-[9px] text-gray-400">Experience</p>
          <p className="text-[11px] font-semibold">1–3 Years</p>
        </div>

        <div className="bg-white rounded-lg p-2 border border-gray-200 shadow-sm hover:shadow-md transition">
          <p className="text-[9px] text-gray-400">Stack</p>
          <p className="text-[11px] font-semibold">Node / Python</p>
        </div>
      </div>

      
      <div>
        <h3 className="text-[11px] font-semibold text-gray-700 mb-1">Responsibilities</h3>
        <ul className="text-[10px] text-gray-600 space-y-[2px] pl-4 list-disc">
          <li>Build APIs</li>
          <li>Optimize DB</li>
          <li>Debug issues</li>
          <li>Team collaboration</li>
        </ul>
      </div>

      
      <div>
        <h3 className="text-[11px] font-semibold text-gray-700 mb-1">Must Have</h3>
        <ul className="text-[10px] text-gray-600 space-y-[2px] pl-4 list-disc">
          <li>PostgreSQL</li>
          <li>REST APIs</li>
          <li>DSA basics</li>
        </ul>
      </div>

    </div>

  
    <div className="lg:w-1/2 relative flex items-center justify-center">

     
      <div className="bg-white/80 backdrop-blur-xl border border-white/40 rounded-2xl shadow-xl p-4 w-full max-w-md flex flex-col gap-3 text-xs">

        <p className="text-gray-500 text-[11px]">AI Interview</p>

        <div className="bg-purple-100 border border-purple-200 p-2 rounded-lg max-w-[75%]">
          How do you design scalable APIs?
        </div>

        <div className="bg-gray-100 p-2 rounded-lg ml-auto max-w-[70%]">
          Using caching, load balancing, microservices...
        </div>

        <div className="bg-purple-100 border border-purple-200 p-2 rounded-lg max-w-[75%]">
          Optimize SQL queries?
        </div>

        <div className="flex items-center gap-2 ml-auto">
          <div className="w-7 h-7 bg-gradient-to-r from-yellow-300 to-orange-400 rounded-full shadow" />

          <div className="bg-white border border-gray-200 shadow p-2 rounded-lg max-w-[65%]">
            Indexing & query tuning.
          </div>

          <div className="w-7 h-7 bg-gradient-to-r from-red-400 to-pink-500 text-white flex items-center justify-center rounded-full text-[10px] shadow">
            🎤
          </div>
        </div>

      </div>

      
      <div className="absolute -top-6 -right-6 bg-white/90 shadow-lg rounded-full px-3 py-1 text-[10px] animate-floatFast">
        ✔ Imported
      </div>

      <div className="absolute -bottom-6 -right-6 bg-white/90 shadow-xl rounded-xl px-3 py-2 text-[10px] w-[170px] animate-floatMedium">
        Backend mindset + problem solving 🚀
      </div>

    </div>

  </div>

  
  <style>
    {`
      @keyframes floatSlow {
        0%,100% { transform: translateY(0px); }
        50% { transform: translateY(-12px); }
      }
      @keyframes floatMedium {
        0%,100% { transform: translateY(0px); }
        50% { transform: translateY(-18px); }
      }
      @keyframes floatFast {
        0%,100% { transform: translateY(0px); }
        50% { transform: translateY(-24px); }
      }

      .animate-floatSlow { animation: floatSlow 6s ease-in-out infinite; }
      .animate-floatMedium { animation: floatMedium 5s ease-in-out infinite; }
      .animate-floatFast { animation: floatFast 4s ease-in-out infinite; }
    `}
  </style>

</section>  */}

<section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-24 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200">

  {/* BACKGROUND BLUR */}
  <div className="absolute w-[700px] h-[700px] bg-blue-300/30 blur-[160px] rounded-full top-[-200px] left-[-200px]" />
  <div className="absolute w-[700px] h-[700px] bg-pink-300/30 blur-[160px] rounded-full bottom-[-200px] right-[-200px]" />

  {/* MAIN CARD */}
  <div className="relative z-10 w-full max-w-5xl bg-white/40 backdrop-blur-2xl border border-white/50 rounded-[30px] shadow-[0_40px_120px_rgba(0,0,0,0.15)] p-6 flex">

    {/* LEFT */}
    <div className="w-1/2 bg-white/80 rounded-2xl p-5 shadow-inner text-xs space-y-3">

      <h3 className="font-semibold text-gray-700">Job details</h3>

      <div className="bg-gray-100 rounded p-2">
        <p className="text-[10px] text-gray-400">Job title</p>
        <p className="font-medium">Software Engineer</p>
      </div>

      <p className="text-gray-600 text-[11px] leading-relaxed">
        As a Software Engineer, you will design, develop, and maintain scalable
        applications, write clean code, and collaborate with cross-functional teams.
      </p>

      <div>
        <h4 className="font-semibold text-gray-700 text-[11px]">Personal details</h4>
        <p className="text-gray-500 text-[10px]">Dahlia Wolff</p>
      </div>
    </div>

    {/* RIGHT */}
    <div className="w-1/2 flex items-center justify-center">

      <div className="bg-white/90 rounded-2xl p-4 shadow-md w-full max-w-sm text-xs space-y-3">

        <p className="text-gray-400 text-[11px]">AI Interview</p>

        <div className="bg-purple-100 p-2 rounded-lg max-w-[80%]">
          Tell me about your experience as a Software Engineer?
        </div>

        <div className="bg-gray-100 p-2 rounded-lg ml-auto max-w-[75%]">
          I have experience in building scalable web applications...
        </div>

        <div className="bg-purple-100 p-2 rounded-lg max-w-[80%]">
          How do you handle system design challenges?
        </div>

      </div>
    </div>
  </div>

  {/* FLOATING CARDS (FIXED VISIBILITY) */}

  {/* LEFT TOP */}
  <div className="absolute z-20 left-[5%] top-[30%] bg-white rounded-full shadow-lg px-5 py-3 flex items-center gap-3 text-sm animate-float">
    👍 Communication skills
    <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
      <div className="w-16 h-full bg-green-500"></div>
    </div>
  </div>

  {/* LEFT BOTTOM */}
  <div className="absolute z-20 left-[8%] bottom-[15%] bg-white rounded-xl shadow-lg px-4 py-2 text-sm animate-floatSlow">
    📄 CV uploaded
  </div>

  {/* RIGHT TOP */}
  <div className="absolute z-20 right-[5%] top-[28%] bg-white rounded-full shadow-lg px-4 py-2 text-sm animate-floatFast flex items-center gap-2">
    ✔ Job details imported
  </div>

  {/* RIGHT BOTTOM */}
  <div className="absolute z-20 right-[6%] bottom-[12%] bg-white rounded-xl shadow-lg px-4 py-3 flex items-center gap-3 animate-float">

    <img
      src="https://randomuser.me/api/portraits/women/44.jpg"
      className="w-8 h-8 rounded-full"
    />

    <p className="text-sm text-gray-700">
      I recently worked on a scalable backend system...
    </p>

    <div className="w-8 h-8 bg-red-400 text-white flex items-center justify-center rounded-full">
      🎤
    </div>
  </div>

  {/* ANIMATION */}
  <style>
    {`
      @keyframes float {
        0%,100% { transform: translateY(0px); }
        50% { transform: translateY(-12px); }
      }

      @keyframes floatSlow {
        0%,100% { transform: translateY(0px); }
        50% { transform: translateY(-18px); }
      }

      @keyframes floatFast {
        0%,100% { transform: translateY(0px); }
        50% { transform: translateY(-24px); }
      }

      .animate-float { animation: float 5s ease-in-out infinite; }
      .animate-floatSlow { animation: floatSlow 6s ease-in-out infinite; }
      .animate-floatFast { animation: floatFast 4s ease-in-out infinite; }
    `}
  </style>

</section>


      {/* ================= FEATURES ================= */}
      {/* <section className="py-20 bg-gradient-to-r from-blue-100 to-pink-100">
        <Container>
          <div className="flex flex-col md:flex-row gap-10 items-center">

            <div className="w-full md:w-1/2 space-y-5">
              <div className="bg-white p-5 rounded-xl shadow">📄 CV uploaded</div>
              <div className="bg-white p-5 rounded-xl shadow">📌 Job imported</div>
              <div className="bg-white p-5 rounded-xl shadow">⚙️ Set difficulty</div>
            </div>

            <div className="w-full md:w-1/2">
              <p className="border px-4 py-1 inline-block rounded-full mb-4 text-sm">
                Personalised
              </p>

              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Instant personalised interviews
              </h2>

              <p className="text-gray-600 mb-6">
                Upload your CV and job details to get tailored questions.
              </p>

              <button className="bg-blue-600 text-white px-6 py-3 rounded-full">
                Import job listing
              </button>
            </div>

          </div>
        </Container>
      </section> */}
{/* 
<section className="py-28 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
  <div className="max-w-6xl mx-auto px-6">

    <div className="flex flex-col md:flex-row items-center gap-16">

      
      <div className="w-full md:w-1/2 space-y-6">

        
        <div className="flex items-center gap-4 bg-white/80 backdrop-blur-md border border-white/60 p-5 rounded-2xl shadow-md hover:scale-[1.02] transition">
          
         
          <div className="w-12 h-12 flex items-center justify-center bg-green-100 rounded-xl">
            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 2h6l5 5v13H7z" />
            </svg>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800">CV uploaded</h4>
            <p className="text-sm text-gray-500">
              We will ask you about your experience
            </p>
          </div>
        </div>

        
        <div className="flex items-center gap-4 bg-white/90 backdrop-blur-md border border-blue-200 p-6 rounded-2xl shadow-lg hover:scale-[1.02] transition">

          <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-xl">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 7h18M3 12h18M3 17h18" />
            </svg>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800">Job listing imported</h4>
            <p className="text-sm text-gray-500">
              Realistic technical questions
            </p>
          </div>
        </div>

        
        <div className="flex items-center gap-4 bg-white/70 backdrop-blur-md border border-white/60 p-5 rounded-2xl shadow-sm opacity-90 hover:scale-[1.02] transition">

          <div className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-xl">
            <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <div>
            <h4 className="font-semibold text-gray-700">Set your difficulty</h4>
            <p className="text-sm text-gray-400">
              Choose how hard your interview will be
            </p>
          </div>
        </div>

      </div>

      
      <div className="w-full md:w-1/2">


  <p className="inline-block bg-white/90 backdrop-blur px-4 py-1.5 rounded-full text-sm text-gray-700 shadow mb-16">
    Personalised to you and your job
  </p>


  <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 leading-[1.05] tracking-tight mb-6">
    Instant personalised interviews
  </h2>

 
  <p className="text-gray-600 text-lg md:text-l italic leading-relaxed mb-6 max-w-xl">
    Import your job from any job site like Indeed or LinkedIn.
    Upload your CV and our AI interviewer will personalise your
    questions to feel like a real interview.
  </p>

  
  <div className="flex gap-6 text-gray-600 mb-8">
    <div className="flex items-center gap-2">
      ✔ <span>Tailored to your CV</span>
    </div>
    <div className="flex items-center gap-2">
      ✔ <span>Personalised to your job</span>
    </div>
  </div>

  
  <button className="relative group bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-white px-8 py-3 rounded-full shadow-lg overflow-hidden">

    <span className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-40 blur-xl transition duration-500"></span>

    <span className="relative flex items-center gap-2 font-medium text-lg">
      Start my interview now
      <span className="group-hover:translate-x-1 transition">→</span>
    </span>

    <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition duration-700 bg-white/20 skew-x-12"></span>
  </button>

</div>
</div>
</div>
</section> */}

<section className="py-28 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
  <div className="max-w-6xl mx-auto px-6">

    <div className="flex flex-col md:flex-row items-center gap-16">

      {/* ================= LEFT SIDE ================= */}
      <div className="w-full md:w-1/2 space-y-6">

        {/* CARD 1 */}
        <div className="flex items-center gap-4 bg-white/80 backdrop-blur-md border border-white/60 p-5 rounded-2xl shadow-md hover:scale-[1.02] transition">
          <div className="w-12 h-12 flex items-center justify-center bg-green-100 rounded-xl">
            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 2h6l5 5v13H7z" />
            </svg>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800">CV uploaded</h4>
            <p className="text-sm text-gray-500">
              We will ask you about your experience
            </p>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="flex items-center gap-4 bg-white/90 backdrop-blur-md border border-blue-200 p-6 rounded-2xl shadow-lg hover:scale-[1.02] transition">
          <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-xl">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 7h18M3 12h18M3 17h18" />
            </svg>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800">Job listing imported</h4>
            <p className="text-sm text-gray-500">
              Realistic technical questions
            </p>
          </div>
        </div>

        {/* CARD 3 */}
        <div className="flex items-center gap-4 bg-white/70 backdrop-blur-md border border-white/60 p-5 rounded-2xl shadow-sm opacity-90 hover:scale-[1.02] transition">
          <div className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-xl">
            <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div>
            <h4 className="font-semibold text-gray-700">Set your difficulty</h4>
            <p className="text-sm text-gray-400">
              Choose how hard your interview will be
            </p>
          </div>
        </div>

      </div>

      {/* ================= RIGHT SIDE ================= */}
      <div className="w-full md:w-1/2">

        {/* BADGE */}
        <div className="mb-6">
        <p className="inline-block bg-white/90 backdrop-blur px-4 py-1.5 rounded-full text-sm text-gray-700 shadow mb-6 mt-30">
          Personalised to you and your job
        </p>
        </div>
        <div className="mb-6">
        {/* BIG HERO HEADING (FIXED) */}
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 leading-[1.05] tracking-tight mb-6 mt-30">
          Instant personalised 
          interviews
        </h2>
</div>
<div>
        {/* ITALIC PARAGRAPH */}
        <p className="text-gray-500 text-lg md:text-l italic leading-relaxed mb-6">
          Import your job from any job site like Indeed or LinkedIn.
          Upload your CV and our AI interviewer will personalise your
          questions to feel like a real interview.
        </p>
       </div>

        {/* FEATURES */}
        <div className="flex gap-6 text-gray-600 mb-19 mt-4">
          <div className="flex items-center gap-2">
            ✔ <span>Tailored to your CV</span>
          </div>
          <div className="flex items-center gap-2">
            ✔ <span>Personalised to your job</span>
          </div>
        </div>

        {/* CTA BUTTON */}
        {/* <button className="relative group bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-white px-8 py-3 rounded-full shadow-lg overflow-hidden">

          <span className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-40 blur-xl transition duration-500"></span>

         
          <span className="relative flex items-center gap-2 font-medium text-lg">
            Start my interview now
            <span className="group-hover:translate-x-1 transition">→</span>
          </span>

         
          <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition duration-700 bg-white/20 skew-x-12"></span>
        </button> */}

         <button
      onClick={() => navigate("/start")}
      className="relative group bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-white px-8 py-3 rounded-full shadow-lg overflow-hidden"
    >
      {/* Glow */}
      <span className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-40 blur-xl transition duration-500"></span>

      {/* Text */}
      <span className="relative flex items-center gap-2 font-medium text-lg">
        Start my interview now
        <span className="group-hover:translate-x-1 transition">→</span>
      </span>

      {/* Shimmer */}
      <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition duration-700 bg-white/20 skew-x-12"></span>
    </button>

      </div>

    </div>
  </div>
</section>

      {/* ================= FEEDBACK ================= */}
     
{/* 
<section className="py-24 bg-[#f5f5f7]">
  <div className="max-w-7xl mx-auto px-6">

    <div className="flex flex-col md:flex-row items-center justify-between gap-20">

      
      <div className="w-full md:w-1/2">

        
        <div className="inline-flex items-center gap-2 bg-white shadow-sm border border-gray-200 px-4 py-1 rounded-full text-sm mb-6">
          <span className="w-2 h-2 bg-green-400 rounded-full"></span>
          Feedback
        </div>

        
        <h2 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 mb-6">
          Get actionable,<br />
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            constructive feedback
          </span>
        </h2>

       
        <p className="text-gray-600 text-base leading-relaxed max-w-md mb-8">
          We give you actionable insights to improve your interview performance. 
          Progress from beginner to expert with structured feedback.
        </p>

       
        <div className="flex flex-wrap gap-4 mb-8">
          <div className="bg-white border border-gray-200 px-4 py-2 rounded-xl text-sm shadow-sm">
            ✔ Direct feedback
          </div>
          <div className="bg-white border border-gray-200 px-4 py-2 rounded-xl text-sm shadow-sm">
            ✔ 4 difficulty levels
          </div>
        </div>

     
        <button className="flex items-center gap-2 font-medium text-gray-900 group">
          See Pricing
          <span className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </button>

      </div>

     
      <div className="w-full md:w-1/2 space-y-6">

        {[
          { label: "Communication", width: "85%", color: "bg-green-400" },
          { label: "Cultural fit", width: "70%", color: "bg-purple-400" },
          { label: "Problem solving", width: "90%", color: "bg-red-400" },
          { label: "Technical ability", width: "75%", color: "bg-blue-400" },
        ].map((item, i) => (

          <div
            key={i}
            className="bg-white rounded-2xl shadow-sm p-5 hover:shadow-md transition"
          >
            <p className="text-sm text-gray-700 mb-3">
              {item.label}
            </p>

            <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
              <div
                className={`${item.color} h-3 rounded-full transition-all duration-700`}
                style={{ width: item.width }}
              />
            </div>
          </div>

        ))}

      </div>

    </div>
  </div>
</section> */}

{/* <section className="py-28 bg-gradient-to-br from-[#f8fafc] via-[#f1f5ff] to-[#fdf2f8] overflow-hidden">
  <div className="max-w-7xl mx-auto px-6">

    <div className="flex flex-col md:flex-row items-center justify-between gap-20">

      
      <div className="w-full md:w-1/2 animate-fadeInUp">

        
        <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur border border-gray-200 px-4 py-1 rounded-full text-sm mb-6 shadow-sm">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
          Feedback
        </div>

        
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-gray-900 mb-6">
          Get actionable,
          <br />
          <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-400 bg-clip-text text-transparent">
            constructive feedback
          </span>
        </h2>

        
        <p className="text-gray-600 text-lg italic leading-relaxed max-w-lg mb-8">
          We give you actionable insights to improve your interview performance.
          Progress from beginner to expert with structured feedback.
        </p>

       
        <div className="flex flex-wrap gap-4 mb-10">
          <div className="bg-white/80 backdrop-blur border border-gray-200 px-4 py-2 rounded-xl text-sm shadow-sm hover:scale-105 transition">
            ✔ Direct feedback
          </div>
          <div className="bg-white/80 backdrop-blur border border-gray-200 px-4 py-2 rounded-xl text-sm shadow-sm hover:scale-105 transition">
            ✔ 4 difficulty levels
          </div>
        </div>

       
        <button className="relative group bg-gradient-to-r from-purple-600 via-pink-500 to-red-400 text-white px-7 py-3 rounded-full shadow-lg overflow-hidden">

          
          <span className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-red-300 opacity-0 group-hover:opacity-40 blur-xl transition duration-500"></span>

         
          <span className="relative flex items-center gap-2 font-medium text-lg">
            See Pricing
            <span className="group-hover:translate-x-1 transition">→</span>
          </span>

          
          <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition duration-700 bg-white/20 skew-x-12"></span>
        </button>

      </div>

     
      <div className="w-full md:w-1/2 space-y-6">

        {[
          { label: "Communication", width: "85%", color: "from-green-400 to-green-500" },
          { label: "Cultural fit", width: "70%", color: "from-purple-400 to-purple-500" },
          { label: "Problem solving", width: "90%", color: "from-red-400 to-red-500" },
          { label: "Technical ability", width: "75%", color: "from-blue-400 to-blue-500" },
        ].map((item, i) => (

          <div
            key={i}
            className="bg-white/80 backdrop-blur rounded-2xl shadow-md p-6 hover:shadow-xl hover:-translate-y-1 transition duration-300 animate-fadeInUp"
            style={{ animationDelay: `${i * 0.15}s` }}
          >

            <div className="flex justify-between mb-3">
              <p className="text-sm font-medium text-gray-700">
                {item.label}
              </p>
              <span className="text-sm text-gray-500">
                {item.width}
              </span>
            </div>

           
            <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
              <div
                className={`h-3 rounded-full bg-gradient-to-r ${item.color} animate-progress`}
                style={{ width: item.width }}
              />
            </div>

          </div>

        ))}

      </div>

    </div>
  </div>

  
  <style>
    {`
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(40px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @keyframes progress {
        from {
          width: 0;
        }
      }

      .animate-fadeInUp {
        animation: fadeInUp 0.8s ease forwards;
      }

      .animate-progress {
        animation: progress 1.2s ease forwards;
      }
    `}
  </style>
</section> */}

<section className="py-28 bg-gradient-to-br from-[#f8fafc] via-[#f1f5ff] to-[#fdf2f8]">
  <div className="max-w-6xl mx-auto px-6">

    {/* FIXED SPACING (same as previous section) */}
    <div className="flex flex-col md:flex-row items-center gap-16">

      {/* ================= LEFT SIDE ================= */}
      <div className="w-full md:w-1/2">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur border border-gray-200 px-4 py-1 rounded-full text-sm mb-6 shadow-sm">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
          Feedback
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-gray-900 mb-6">
          Get actionable,
          <br />
          <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-400 bg-clip-text text-transparent">
            constructive feedback
          </span>
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-lg italic leading-relaxed max-w-lg mb-8">
          We give you actionable insights to improve your interview performance.
          Progress from beginner to expert with structured feedback.
        </p>

        {/* Features */}
        <div className="flex flex-wrap gap-4 mb-10">
          <div className="bg-white/80 backdrop-blur border border-gray-200 px-4 py-2 rounded-xl text-sm shadow-sm hover:scale-105 transition">
            ✔ Direct feedback
          </div>
          <div className="bg-white/80 backdrop-blur border border-gray-200 px-4 py-2 rounded-xl text-sm shadow-sm hover:scale-105 transition">
            ✔ 4 difficulty levels
          </div>
        </div>

        {/* CTA BUTTON */}
        {/* <button className="relative group bg-gradient-to-r from-purple-600 via-pink-500 to-red-400 text-white px-7 py-3 rounded-full shadow-lg overflow-hidden">

      
          <span className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-red-300 opacity-0 group-hover:opacity-40 blur-xl transition duration-500"></span>

         
          <span className="relative flex items-center gap-2 font-medium text-lg">
            See Pricing
            <span className="group-hover:translate-x-1 transition">→</span>
          </span>

        
          <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition duration-700 bg-white/20 skew-x-12"></span>
        </button> */}

        <button
  onClick={() => navigate("/pricing")}
  className="relative group bg-gradient-to-r from-purple-600 via-pink-500 to-red-400 text-white px-7 py-3 rounded-full shadow-lg overflow-hidden"
>
  {/* Glow */}
  <span className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-red-300 opacity-0 group-hover:opacity-40 blur-xl transition duration-500"></span>

  {/* Text */}
  <span className="relative flex items-center gap-2 font-medium text-lg">
    See Pricing
    <span className="group-hover:translate-x-1 transition">→</span>
  </span>

  {/* Shimmer */}
  <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition duration-700 bg-white/20 skew-x-12"></span>
</button>


      </div>

      {/* ================= RIGHT SIDE ================= */}
      <div className="w-full md:w-1/2 space-y-6">

        {[
          { label: "Communication", width: "85%", color: "from-green-400 to-green-500" },
          { label: "Cultural fit", width: "70%", color: "from-purple-400 to-purple-500" },
          { label: "Problem solving", width: "90%", color: "from-red-400 to-red-500" },
          { label: "Technical ability", width: "75%", color: "from-blue-400 to-blue-500" },
        ].map((item, i) => (

          <div
            key={i}
            className="bg-white/80 backdrop-blur rounded-2xl shadow-md p-6 hover:shadow-lg hover:-translate-y-1 transition duration-300"
          >

            <div className="flex justify-between mb-3">
              <p className="text-sm font-medium text-gray-700">
                {item.label}
              </p>
              <span className="text-sm text-gray-500">
                {item.width}
              </span>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
              <div
                className={`h-3 rounded-full bg-gradient-to-r ${item.color}`}
                style={{ width: item.width }}
              />
            </div>

          </div>

        ))}

      </div>

    </div>
  </div>
</section>

      {/* ================= PRACTICE ================= */}
      

      {/* <section className="py-24 bg-[#f5f5f7] text-center">
  <div className="max-w-6xl mx-auto px-6">

    
    <p className="inline-block border border-gray-300 text-gray-700 px-4 py-1 rounded-full text-sm mb-4">
      Get the job you deserve!
    </p>

    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
      Practice makes perfect
    </h2>

    <p className="text-gray-600 max-w-2xl mx-auto mb-16">
      Work your way up through the levels of our AI powered interview coach.
      Get actionable feedback on your weak areas, and perfect your strengths.
    </p>

    
    <div className="grid md:grid-cols-2 gap-10 text-left">

     
      <div className="flex gap-4">
        <div className="w-12 h-12 flex items-center justify-center bg-green-100 rounded-xl text-xl">
          📞
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-1">Voice chat</h3>
          <p className="text-gray-600 text-sm mb-2">
            Our realistic voice chat feels just like a real interview.
          </p>
          <span className="text-xs bg-green-100 text-green-600 px-3 py-1 rounded-full">
            Realistic voice chat
          </span>
        </div>
      </div>

     
      <div className="flex gap-4">
        <div className="w-12 h-12 flex items-center justify-center bg-purple-100 rounded-xl text-xl">
          🧠
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-1">Powerful interviewer</h3>
          <p className="text-gray-600 text-sm mb-2">
            Our AI interviewer will question you on everything from job-specific technicalities to items on your résumé.
          </p>
          <span className="text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
            Find holes in your CV
          </span>
        </div>
      </div>

     
      <div className="flex gap-4">
        <div className="w-12 h-12 flex items-center justify-center bg-orange-100 rounded-xl text-xl">
          👍
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-1">Constructive feedback</h3>
          <p className="text-gray-600 text-sm mb-2">
            Get honest constructive feedback from our intelligent interview model.
          </p>
          <span className="text-xs bg-orange-100 text-orange-600 px-3 py-1 rounded-full">
            Improve your technique
          </span>
        </div>
      </div>

      
      <div className="flex gap-4">
        <div className="w-12 h-12 flex items-center justify-center bg-purple-100 rounded-xl text-xl">
          📈
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-1">Get better</h3>
          <p className="text-gray-600 text-sm mb-2">
            Work your way up from easy to hard mode mastering your interview technique.
          </p>
          <span className="text-xs bg-purple-100 text-purple-600 px-3 py-1 rounded-full">
            Master each difficulty level
          </span>
        </div>
      </div>

    </div>

  </div>
</section> */}

<section className="py-28 bg-gradient-to-br from-[#f8fafc] via-[#f1f5ff] to-[#fdf2f8] text-center">
  <div className="max-w-6xl mx-auto px-6">

    {/* TOP CONTENT */}
    <div className="mb-2">
    <p className="inline-block border border-gray-300 text-gray-700 px-4 py-1 rounded-full text-sm mb-6 bg-white/70 backdrop-blur">
      Get the job you deserve!
    </p>
    </div>
    {/* <div className="mb-6">
    <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
      Practice makes perfect
    </h2>
    </div> */}
    <div className="mb-6 animate-fadeUp">
  <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
    Practice makes perfect
  </h2>
</div>
    {/* <p className="text-gray-600 italic max-w-2xl mx-auto mb-16 text-lg leading-relaxed">
      Work your way up through the levels of our AI powered interview coach.
      Get actionable feedback on your weak areas, and perfect your strengths.
    </p> */}

    {/* FEATURES */}
    <div className="grid md:grid-cols-2 gap-8 text-left">

      {[
        {
          icon: "📞",
          title: "Voice chat",
          desc: "Our realistic voice chat feels just like a real interview.",
          tag: "Realistic voice chat",
          color: "green"
        },
        {
          icon: "🧠",
          title: "Powerful interviewer",
          desc: "Our AI interviewer will question you on everything from job-specific technicalities to items on your résumé.",
          tag: "Find holes in your CV",
          color: "purple"
        },
        {
          icon: "👍",
          title: "Constructive feedback",
          desc: "Get honest constructive feedback from our intelligent interview model.",
          tag: "Improve your technique",
          color: "orange"
        },
        {
          icon: "📈",
          title: "Get better",
          desc: "Work your way up from easy to hard mode mastering your interview technique.",
          tag: "Master each difficulty level",
          color: "blue"
        }
      ].map((item, i) => (

        <div
          key={i}
          className="group bg-white/80 backdrop-blur border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300 flex gap-4"
        >

          {/* ICON */}
          <div className={`w-12 h-12 flex items-center justify-center rounded-xl text-xl
            ${item.color === "green" && "bg-green-100"}
            ${item.color === "purple" && "bg-purple-100"}
            ${item.color === "orange" && "bg-orange-100"}
            ${item.color === "blue" && "bg-blue-100"}
          `}>
            {item.icon}
          </div>

          {/* CONTENT */}
          <div>
            <h3 className="font-semibold text-lg text-gray-900 mb-1 group-hover:text-purple-600 transition">
              {item.title}
            </h3>

            <p className="text-gray-600 text-sm mb-3 leading-relaxed">
              {item.desc}
            </p>

            <span className={`text-xs px-3 py-1 rounded-full font-medium
              ${item.color === "green" && "bg-green-100 text-green-600"}
              ${item.color === "purple" && "bg-purple-100 text-purple-600"}
              ${item.color === "orange" && "bg-orange-100 text-orange-600"}
              ${item.color === "blue" && "bg-blue-100 text-blue-600"}
            `}>
              {item.tag}
            </span>
          </div>

        </div>

      ))}

    </div>

  </div>
</section>

{/*============review=========*/}


     {/* <section className="py-24 bg-gray-100">
  <Container>
   
    <div className="flex justify-center mb-6">
      <span className="px-4 py-1 text-sm border rounded-full text-gray-700">
        Testimonials
      </span>
    </div>

   
    <h2 className="text-5xl font-semibold text-center text-gray-900 max-w-3xl mx-auto leading-tight mb-16">
      Do you want to be the only candidate that didn’t prepare?
    </h2>

   
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        {
          name: "Katya Samson",
          role: "Dentist",
          img: "https://randomuser.me/api/portraits/women/44.jpg",
          text: "Bossed really put me through my paces. It helped me get a job in a practice I love!"
        },
        {
          name: "Anonymous",
          role: "Analyst",
          img: "",
          text: "I was super nervous for my interview but practicing really helped!"
        },
        {
          name: "Jim Paros",
          role: "Analyst",
          img: "https://randomuser.me/api/portraits/men/32.jpg",
          text: "Using bossed was great. It allowed me to improve my skills!"
        },
        {
          name: "Alison",
          role: "Accountant",
          img: "https://randomuser.me/api/portraits/women/68.jpg",
          text: "It was so good, the questions it asked were so clever! It really helped me."
        },
      ].map((item, i) => (
        <div
          key={i}
          className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm"
        >
         
          <div className="mb-4">
            {item.img ? (
              <img
                src={item.img}
                alt={item.name}
                className="w-12 h-12 rounded-full object-cover"
              />
            ) : (
              <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500 text-sm">👤</span>
              </div>
            )}
          </div>

         
          <h3 className="font-semibold text-gray-900">
            {item.name}
          </h3>

          
          <p className="text-sm text-gray-500 mb-4">
            {item.role}
          </p>

         
          <p className="text-gray-600 text-sm leading-relaxed">
            {item.text}
          </p>
        </div>
      ))}
    </div>
  </Container>
</section> */}

<section className="py-24 bg-gray-100">
  <Container>
    {/* Badge */}
    <div className="flex justify-center mb-6">
      <span className="px-4 py-1 text-sm border rounded-full text-gray-700">
        Testimonials
      </span>
    </div>

    {/* Heading */}
    <div className="mb-10">
    <h2 className="text-5xl font-semibold text-center text-gray-900 max-w-3xl mx-auto leading-tight mb-16">
      Do you want to be the only candidate that didn’t prepare?
    </h2>
    </div>

    {/* Cards */}
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        {
          name: "Katya Samson",
          role: "Dentist",
          img: "https://randomuser.me/api/portraits/women/44.jpg",
          text: "Bossed really put me through my paces. It helped me get a job in a practice I love!"
        },
        {
          name: "Anonymous",
          role: "Analyst",
          img: "",
          text: "I was super nervous for my interview but practicing really helped!"
        },
        {
          name: "Jim Paros",
          role: "Analyst",
          img: "https://randomuser.me/api/portraits/men/32.jpg",
          text: "Using bossed was great. It allowed me to improve my skills!"
        },
        {
          name: "Alison",
          role: "Accountant",
          img: "https://randomuser.me/api/portraits/women/68.jpg",
          text: "It was so good, the questions it asked were so clever! It really helped me."
        },
      ].map((item, i) => (
        <div
          key={i}
          className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm"
        >
          {/* Avatar */}
          <div className="mb-4">
            {item.img ? (
              <img
                src={item.img}
                alt={item.name}
                className="w-12 h-12 rounded-full object-cover"
              />
            ) : (
              <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500 text-sm">👤</span>
              </div>
            )}
          </div>

          {/* Name */}
          <h3 className="font-semibold text-gray-900">
            {item.name}
          </h3>

          {/* Role */}
          <p className="text-sm text-gray-500 mb-4">
            {item.role}
          </p>

          {/* Text */}
          <p className="text-gray-600 text-sm leading-relaxed">
            {item.text}
          </p>
        </div>
      ))}
    </div>
  </Container>
</section>


<section className="py-28 bg-gray-50">
  <Container>
    {/* Heading */}
    <div className="text-center max-w-3xl mx-auto mb-16">
      <h2 className="text-6xl font-semibold text-gray-900 leading-tight">
        How much is your <br /> dream job worth?
      </h2>
      <p className="text-gray-500 mt-6 text-lg">
        Try it free, then upgrade for unlimited interviews.
      </p>
    </div>

    {/* Pricing Cards */}
    <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
      
      {/* FREE PLAN */}
      <div className="bg-white border border-gray-200 rounded-3xl p-10 shadow-sm">
        <h3 className="text-gray-700 font-medium mb-4">
          Start for free
        </h3>

        <p className="text-4xl font-semibold text-gray-900 mb-6">
          $0
        </p>

        <ul className="space-y-4 text-gray-600 mb-10">
          <li className="flex items-center gap-3">
            ✓ Personalised to your CV
          </li>
          <li className="flex items-center gap-3">
            ✓ Auto import job listing
          </li>
          <li className="flex items-center gap-3">
            ✓ Personalised interview questions
          </li>
          <li className="flex items-center gap-3">
            ✓ Limited interview time
          </li>
        </ul>

        {/* <button className="w-full border border-gray-300 py-3 rounded-full font-medium hover:bg-gray-100 transition">
          Start free trial
        </button> */}
         <button
      onClick={() => navigate("/start")} // 👈 your StartInterview route
      className="w-full border border-gray-300 py-3 rounded-full font-medium hover:bg-gray-100 transition"
    >
      Start free trial
    </button>

      </div>

      {/* PAID PLAN */}
      <div className="bg-gradient-to-b from-blue-600 to-blue-500 text-white rounded-3xl p-10 shadow-lg">
        <h3 className="font-medium mb-4 opacity-90">
          Unlimited
        </h3>

        <p className="text-4xl font-semibold mb-6">
          $19.99 <span className="text-lg font-normal">/week</span>
        </p>

        <ul className="space-y-4 mb-10">
          <li className="flex items-center gap-3">
            ✓ Unlimited interviews
          </li>
          <li className="flex items-center gap-3">
            ✓ Unlimited feedback
          </li>
          <li className="flex items-center gap-3">
            ✓ Progress through all the levels
          </li>
          <li className="flex items-center gap-3">
            ✓ Easily cancel anytime
          </li>
          <li className="flex items-center gap-3">
            ✓ Payment secured via Stripe
          </li>
        </ul>

        {/* <button className="w-full bg-white text-gray-900 py-3 rounded-full font-medium hover:bg-gray-100 transition">
        
          Get unlimited interviews
        </button> */}
        <button
  onClick={() => navigate("/payment")}
  className="w-full bg-white text-gray-900 py-3 rounded-full font-medium hover:bg-gray-100 transition"
>
  Get unlimited interviews
</button>
      </div>

    </div>
  </Container>
</section>

      {/* ================= FAQ ================= */}
      

      {/*====feedback====*/}
{/*       
<section className="py-28 bg-gray-50">
  <div className="max-w-5xl mx-auto px-6">
    
   
    <h2 className="text-4xl font-semibold text-gray-900 mb-14">
      Frequently asked
    </h2>

    
    <div className="max-w-3xl">
      {[
        {
          q: "What is IntervexaAI?",
          a: "IntervexaAI is an AI-powered platform that helps you practice and improve your interview skills."
        },
        {
          q: "How do I personalise interviews to my job?",
          a: "You can paste a job description and the AI will tailor questions to that role."
        },
        {
          q: "How do I personalise interviews to my CV?",
          a: "Upload your CV and Bossed generates relevant interview questions based on your experience."
        },
        {
          q: "What is the unlimited plan?",
          a: "The unlimited plan gives access to unlimited interviews, feedback, and full features."
        },
        {
          q: "How can I pay?",
          a: "Payments are securely processed via Stripe."
        },
        {
          q: "Get support",
          a: "You can contact support anytime through the platform."
        },
        {
          q: "How can I cancel?",
          a: "You can cancel anytime from your dashboard settings."
        }
      ].map((item, i) => (
        <div
          key={i}
          className="border-b border-gray-200 py-6 cursor-pointer"
          onClick={() =>
            setOpenIndex(openIndex === i ? null : i)
          }
        >
         
          <div className="flex items-center justify-between">
            <h3 className="text-lg text-gray-900 font-medium">
              {item.q}
            </h3>

            <span className="text-2xl text-gray-500">
              {openIndex === i ? "−" : "+"}
            </span>
          </div>

          
          {openIndex === i && (
            <p className="text-gray-600 mt-4 pr-10 leading-relaxed">
              {item.a}
            </p>
          )}
        </div>
      ))}
    </div>

  </div>
</section> */}

<section className="py-28 bg-gradient-to-br from-[#f8fafc] via-[#f1f5ff] to-[#fdf2f8]">
  <div className="max-w-6xl mx-auto px-6">

   
    <h2 className="text-center text-4xl md:text-6xl font-bold text-gray-900 mb-16">
      Frequently asked
    </h2>

    
    {/* <div className="max-w-3xl"> */}
<div className="max-w-3xl mx-auto">
      {[
        {
          q: "What is IntervexaAI?",
          a: "IntervexaAI is an AI-powered platform that helps you practice and improve your interview skills."
        },
        {
          q: "How do I personalise interviews to my job?",
          a: "You can paste a job description and the AI will tailor questions to that role."
        },
        {
          q: "How do I personalise interviews to my CV?",
          a: "Upload your CV and IntervexaAI generates relevant interview questions based on your experience."
        },
        {
          q: "What is the unlimited plan?",
          a: "The unlimited plan gives access to unlimited interviews, feedback, and full features."
        },
        {
          q: "How can I pay?",
          a: "Payments are securely processed via Stripe."
        },
        {
          q: "Get support",
          a: "You can contact support anytime through the platform."
        },
        {
          q: "How can I cancel?",
          a: "You can cancel anytime from your dashboard settings."
        }
      ].map((item, i) => (

        <div
          key={i}
          onClick={() => setOpenIndex(openIndex === i ? null : i)}
          className="group mb-4 bg-white/80 backdrop-blur border border-gray-200 rounded-xl p-5 cursor-pointer hover:shadow-md transition"
        >

          {/* Row */}
          <div className="flex items-center justify-between">

            <h3 className="text-lg font-medium text-gray-900 group-hover:text-purple-600 transition">
              {item.q}
            </h3>

            <span className="text-2xl text-gray-400 group-hover:text-purple-500 transition">
              {openIndex === i ? "−" : "+"}
            </span>

          </div>

          {/* Answer */}
          <div
            className={`overflow-hidden transition-all duration-500 ${
              openIndex === i ? "max-h-40 mt-4" : "max-h-0"
            }`}
          >
            <p className="text-gray-600 italic leading-relaxed pr-6">
              {item.a}
            </p>
          </div>

        </div>

      ))}

    </div>

  </div>
</section>

{/*======img=======*/}
{/* 
<section class="w-full">
   
  <div class="bg-blue-600 text-white text-center py-24 px-4">
    <h1 class="text-3xl text-white md:text-5xl lg:text-6xl font-semibold mb-6 leading-tight">
      Get the job of your dreams
    </h1>
<div className="mb-4">
    <p class="text-base md:text-lg opacity-90 mb-8">
      Start practising for your interview now! It's free to get started.
    </p>
</div>
    <button class="bg-white text-gray-800 px-6 py-3 rounded-full flex items-center gap-2 mx-auto hover:bg-gray-100 transition">
      Start for free
      <span class="text-lg">→</span>
    </button>
  </div>
</section> */}

<section className="w-full">
  
  <div className="relative bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white text-center py-28 px-6 overflow-hidden">

    {/* Glow background effect */}
    <div className="absolute inset-0 opacity-30 blur-3xl bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400"></div>

    {/* Content */}
    <div className="relative z-10 max-w-3xl mx-auto">

      {/* Heading */}
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
        Get the job of your dreams
      </h1>

      {/* Paragraph */}
      <p className="text-lg md:text-xl opacity-90 mb-10 italic">
        Start practising for your interview now! It's free to get started.
      </p>

      {/* BUTTON */}
      {/* <button className="relative group bg-white text-gray-900 px-8 py-4 mt-3 rounded-full font-semibold text-lg shadow-xl overflow-hidden">

       
        <span className="absolute inset-0 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 opacity-0 group-hover:opacity-40 blur-xl transition duration-500"></span>

        
        <span className="relative flex items-center gap-2 justify-center">
          Start for free
          <span className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </span>

       
        <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition duration-700 bg-white/30 skew-x-12"></span>

      </button> */}

       <button
      onClick={() => navigate("/start")}
      className="relative group bg-white text-gray-900 px-8 py-4 mt-3 rounded-full font-semibold text-lg shadow-xl overflow-hidden"
    >
      {/* Hover glow */}
      <span className="absolute inset-0 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 opacity-0 group-hover:opacity-40 blur-xl transition duration-500"></span>

      {/* Text */}
      <span className="relative flex items-center gap-2 justify-center">
        Start for free
        <span className="transition-transform group-hover:translate-x-1">
          →
        </span>
      </span>

      {/* Shine animation */}
      <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition duration-700 bg-white/30 skew-x-12"></span>
    </button>

    </div>
  </div>

</section>

      {/* ================= FOOTER ================= */}
{/*       
<footer className="bg-gray-100 py-16">
  <div className="max-w-6xl mx-auto px-6">
    
    
    <div className="flex flex-col md:flex-row justify-between items-start gap-10">
      
      
      <div className="text-blue-600 text-2xl">
        📤
      </div>

    
      <div>
        <h2 className="font-semibold text-gray-800 mb-4">Pages</h2>
        <ul className="space-y-2 text-gray-600">
          <li className="hover:text-gray-900 cursor-pointer">Homepage</li>
          <li className="hover:text-gray-900 cursor-pointer">Signup</li>
          <li className="hover:text-gray-900 cursor-pointer">Log in</li>
        </ul>
      </div>

    </div>

   
    <div className="text-center mt-16 text-gray-500 text-sm space-y-2">
      <p>Intervexa AI 2026</p>
      <p>All rights reserved</p>
    </div>

  </div>
</footer> */}

<footer className="bg-gradient-to-br from-[#f8fafc] via-[#f1f5ff] to-[#fdf2f8] pt-20 pb-10 border-t border-gray-200">
  <div className="max-w-6xl mx-auto px-6">

    {/* TOP GRID */}
    <div className="grid md:grid-cols-3 gap-12 mb-16">

      {/* LOGO + DESC */}
      <div>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          Intervexa<span className="text-purple-600">AI</span>
        </h2>
        <p className="text-gray-600 text-sm leading-relaxed">
          AI-powered interview practice platform to help you land your dream job faster.
        </p>
      </div>

      {/* PAGES */}
      <div>
        <h3 className="font-semibold text-gray-800 mb-4">Pages</h3>
        <ul className="space-y-2 text-gray-600 text-sm">
          <li className="hover:text-purple-600 cursor-pointer transition">Homepage</li>
          <li className="hover:text-purple-600 cursor-pointer transition">Signup</li>
          <li className="hover:text-purple-600 cursor-pointer transition">Log in</li>
        </ul>
      </div>

      {/* LEGAL / SUPPORT */}
      <div>
        <h3 className="font-semibold text-gray-800 mb-4">Support</h3>
        <ul className="space-y-2 text-gray-600 text-sm">
          <li className="hover:text-purple-600 cursor-pointer transition">Help Center</li>
          <li className="hover:text-purple-600 cursor-pointer transition">Privacy Policy</li>
          <li className="hover:text-purple-600 cursor-pointer transition">Terms & Conditions</li>
        </ul>
      </div>

    </div>

    {/* DIVIDER */}
    <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">

      <p>© 2026 Intervexa AI. All rights reserved.</p>

    

    </div>

  </div>
</footer>

    </div>
  );
};

export default Home;


