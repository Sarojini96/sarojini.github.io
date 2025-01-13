export default function Hero() {
    return (
      <section
        id="hero"
        className="relative h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/images/background.jpg')" }} // Replace with your image path
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-70"></div>
  
        {/* Content */}
        <div className="relative text-center text-white">
          <h1 className="text-5xl font-extrabold">
            I'm <span className="text-indigo-400">[Sarojini]</span>
          </h1>
          <p className="mt-4 text-lg">
            <span className="text-indigo-400">Website</span>,{" "}
            <span className="text-indigo-400">Mobile App</span>, and{" "}
            <span className="text-indigo-400">Poster Design</span>.
          </p>
          <div className="mt-6">
            <a
              href="#portfolio"
              className="px-6 py-3 bg-indigo-400 text-white font-semibold rounded-lg shadow-lg hover:bg-indigo-500 transition duration-300"
            >
              View My Work
            </a>
          </div>
        </div>
      </section>
    );
  }
  