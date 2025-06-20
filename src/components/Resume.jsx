import "../App.css"; // Import Tailwind CSS styles

function Resume() {
  return (
    // --- PERBAIKAN 1: Padding yang responsif ---
    <section 
      id="resume" 
      className="bg-white px-6 py-16 sm:px-12 lg:px-24 lg:py-20"
    >
      {/* Kontainer untuk membatasi lebar di layar besar */}
      <div className="container mx-auto">
        {/* --- PERBAIKAN 2: Judul yang konsisten dan responsif --- */}
        <h2 className="mb-12 text-center text-3xl font-semibold lg:text-left">
          <span className="inline-block border-b-4 border-black pb-1">
            Resume
          </span>
        </h2>

        {/* Grid sudah responsif, kita hanya perlu memastikan padding induknya benar */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-16">
          
          {/* Kolom Edukasi */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-800">Education</h3>
            <div className="relative border-l-2 border-gray-300 pl-6">
              {/* Entri 1: Universitas */}
              <div className="mb-8 flex flex-col">
                <div className="absolute -left-[7px] mt-1 h-3 w-3 rounded-full bg-gray-800"></div>
                <p className="text-sm font-semibold text-gray-700">
                  2022 - 2026 (Expected)
                </p>
                <h4 className="text-lg font-bold text-gray-900">
                  Undergraduate in Information Systems
                </h4>
                <p className="text-base text-gray-600">
                  Satya Wacana Christian University
                </p>
                <p className="text-sm text-gray-500">Current GPA: 3.87 / 4.00</p>
              </div>
              
              {/* Entri 2: SMA */}
              <div className="flex flex-col">
                <div className="absolute -left-[7px] mt-1 h-3 w-3 rounded-full bg-gray-800"></div>
                <p className="text-sm font-semibold text-gray-700">
                  2019 - 2022
                </p>
                <h4 className="text-lg font-bold text-gray-900">
                  Mathematics and Natural Sciences
                </h4>
                <p className="text-base text-gray-600">SMA Negeri 3 Salatiga</p>
              </div>
            </div>
          </div>

          {/* Kolom Pengalaman */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-800">Experience</h3>
            <div className="relative border-l-2 border-gray-300 pl-6">
              {/* Entri 1: Magang */}
              <div className="flex flex-col">
                <div className="absolute -left-[7px] mt-1 h-3 w-3 rounded-full bg-gray-800"></div>
                <p className="text-sm font-semibold text-gray-700">
                  March 2025 - July 2025
                </p>
                <h4 className="text-lg font-bold text-gray-900">
                  Web Developer Intern
                </h4>
                <p className="text-base text-gray-600">
                  Dr. Oen Solo Baru Hospital
                </p>
                <ul className="ml-5 list-disc space-y-1 pt-2 text-base text-gray-600">
                  <li>
                    Contributed to developing a web-based E-Logbook system using Laravel 11, Tailwind CSS, and PostgreSQL.
                  </li>
                  <li>
                    Implemented secure session-based authentication and structured the database using migrations.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;