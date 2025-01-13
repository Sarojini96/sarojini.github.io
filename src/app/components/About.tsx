export default function About() {
    return (
      <section id="about" className="py-20 bg-gradient-to-b from-indigo-100 to-indigo-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 flex flex-col lg:flex-row items-center">
          {/* Left: Image Section */}
          <div className="lg:w-1/2 mb-10 lg:mb-0 relative flex justify-center">
            <div className="relative rounded-full bg-indigo-200 p-2 w-72 h-72 flex items-center justify-center">
              <img
                src="/images/profile.jpeg"
                alt="Sarojini"
                className="rounded-full object-cover w-full h-full shadow-lg"
              />
            </div>
            <div className="absolute top-4 left-4 hidden lg:block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-12 h-12 text-indigo-300 opacity-70"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 20.25c4.97 0 9-4.03 9-9s-4.03-9-9-9-9 4.03-9 9 4.03 9 9 9z"
                />
              </svg>
            </div>
          </div>
  
          {/* Right: Content Section */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-4xl font-extrabold text-indigo-600 mb-6">
              About Me
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Hi, I’m Sarojini, a creative professional with a passion for
              blending technology and artistry. Whether it’s crafting beautiful
              websites, designing posters, or performing Bharatanatyam, I bring
              dedication and creativity to everything I do.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-indigo-600">6+</h3>
                <p className="text-gray-500">Years as a developer</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-indigo-600">10+</h3>
                <p className="text-gray-500">Freelance Projects</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-indigo-600">10+</h3>
                <p className="text-gray-500">Poster Designs</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-indigo-600">7+</h3>
                <p className="text-gray-500">Years in Bharatanatyam</p>
              </div>
            </div>
            <div className="mb-6">
              <a
                href="#contact"
                className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition ease-in-out duration-300"
              >
                Let’s Connect
              </a>
            </div>
            {/* New Button for Dance Profile */}
            {/* <div>
              <a
                href="dance-profile"
                className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition ease-in-out duration-300"
              >
                My Dance Profile
              </a>
            </div> */}
          </div>
        </div>
      </section>
    );
  }
  