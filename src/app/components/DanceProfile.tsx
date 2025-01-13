export default function DanceProfile() {
    return (
      <section id="dance-profile" className="py-20 bg-gradient-to-b from-indigo-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 text-center">
          <h2 className="text-4xl font-extrabold text-indigo-600 mb-6">
            My Dance Journey
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Bharatanatyam has been a vital part of my life, shaping my discipline, artistry, and expression. With over 7 years of experience in performing and choreographing, I aim to tell stories through the language of dance and rhythm, blending tradition with modern influences.
          </p>
  
          {/* Dance Training */}
          <div className="bg-white shadow-lg rounded-lg p-8 mb-12">
            <h3 className="text-3xl font-semibold text-indigo-600 mb-4">Training and Expertise</h3>
            <p className="text-lg text-gray-600 mb-6">
              My journey in Bharatanatyam started at a young age, under the guidance of renowned gurus. Through years of training, I have honed my skills in footwork, hand gestures, and expressive dance (abhinaya). I specialize in solo recitals, group performances, and collaborative projects.
            </p>
            <div className="flex justify-center gap-12 mb-8">
              <div className="text-center">
                <img
                  src="/images/training1.jpg"
                  alt="Training with Guru"
                  className="w-72 h-72 object-cover rounded-full shadow-lg mb-4"
                />
                <p className="text-gray-500">Training under Guru</p>
              </div>
              <div className="text-center">
                <img
                  src="/images/training2.jpg"
                  alt="Footwork Practice"
                  className="w-72 h-72 object-cover rounded-full shadow-lg mb-4"
                />
                <p className="text-gray-500">Mastering Footwork</p>
              </div>
            </div>
          </div>
  
          {/* Dance Performances */}
          <div className="text-left mb-12">
            <h3 className="text-3xl font-semibold text-indigo-600 mb-6">Notable Performances</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                <img
                  src="/images/dance1.jpg"
                  alt="Performance at ABC Event"
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <h4 className="text-2xl font-semibold text-indigo-600 mb-2">Performance at ABC Event</h4>
                <p className="text-gray-500">
                  A fusion of traditional and modern Bharatanatyam, performed at the prestigious ABC Event in 2022. The performance explored themes of cultural identity and artistic expression.
                </p>
              </div>
  
              <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                <img
                  src="/images/dance2.jpg"
                  alt="Collaborative Performance"
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <h4 className="text-2xl font-semibold text-indigo-600 mb-2">Collaborative Performance with XYZ</h4>
                <p className="text-gray-500">
                  A collaborative Bharatanatyam performance with renowned dancers at the XYZ Festival, blending traditional storytelling with modern interpretations of classical art.
                </p>
              </div>
  
              <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                <img
                  src="/images/dance3.jpg"
                  alt="Solo Recital at DEF Festival"
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <h4 className="text-2xl font-semibold text-indigo-600 mb-2">Solo Recital at DEF Festival</h4>
                <p className="text-gray-500">
                  A captivating solo recital performed at the DEF Cultural Fest, featuring intricate footwork, expressive abhinaya, and a blend of ancient and contemporary Bharatanatyam styles.
                </p>
              </div>
            </div>
          </div>
  
          {/* Upcoming Performances */}
          <div className="bg-indigo-100 shadow-lg rounded-lg p-8 text-center">
            <h3 className="text-3xl font-semibold text-indigo-600 mb-6">Upcoming Performances</h3>
            <p className="text-lg text-gray-700 mb-4">
              Stay tuned for my upcoming performances! I'll be showcasing my latest choreography and exploring new dimensions of Bharatanatyam. I’m excited to share these moments with you.
            </p>
            <a
              href="#contact"
              className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition ease-in-out duration-300"
            >
              Contact Me for Performances
            </a>
          </div>
        </div>
      </section>
    );
  }
  