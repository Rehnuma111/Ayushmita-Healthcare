import React from "react";

// FindBySpecialisation.jsx
// Tailwind CSS required in your project

const SPECIALISATIONS = [
  { id: 1, name: "Dentistry", icon: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 2v4m0 12v4m8-8h-4M4 12H0m16.24-6.24L18.36 4.36M5.64 19.64l1.12-1.12M18.36 19.64l-1.12-1.12M6.76 5.64L5.64 4.52" />
    </svg>
  )},
  { id: 2, name: "Primary Care", icon: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v8m4-4H8" />
    </svg>
  )},
  { id: 3, name: "Cardiology", icon: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 10h3l2 6 3-12 2 6h3" />
    </svg>
  )},
  { id: 4, name: "MRI Resonance", icon: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <rect x="3" y="4" width="18" height="16" rx="2" strokeWidth="1.5" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 8h10M7 12h6M7 16h10" />
    </svg>
  )},
  { id: 5, name: "Blood Test", icon: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7v6a4 4 0 108 0V7m-4 0V3" />
    </svg>
  )},
  { id: 6, name: "Psychologist", icon: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 2a7 7 0 00-7 7v1a4 4 0 004 4h6a4 4 0 004-4V9a7 7 0 00-7-7z" />
    </svg>
  )},
  { id: 7, name: "Laboratory", icon: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 2v6m0 8v6M6 12h12" />
    </svg>
  )},
  { id: 8, name: "X-Ray", icon: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <rect x="3" y="4" width="18" height="16" rx="2" strokeWidth="1.5" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 8v8M16 8v8" />
    </svg>
  )},
];

export default function FindBySpecialisation() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">Find By Specialisation</h2>
          <p className="mt-3 text-gray-500 max-w-2xl mx-auto">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {SPECIALISATIONS.map((s) => (
            <button
              key={s.id}
              type="button"
              className="group bg-white rounded-xl p-8 flex flex-col items-center gap-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center focus:outline-none focus:ring-4 focus:ring-amber-200"
              aria-label={`Open ${s.name}`}>

              <div className="text-amber-400 group-hover:translate-y-0.5 transition-transform duration-200">
                {s.icon}
              </div>

              <span className="text-gray-700 font-medium text-lg">{s.name}</span>
            </button>
          ))}
        </div>

        {/* View All button */}
        <div className="mt-10 flex justify-center">
          <button className="bg-amber-400 hover:bg-amber-500 text-black font-semibold py-3 px-8 rounded-lg shadow-md transition">
            View All
          </button>
        </div>
      </div>
    </section>
  );
}
