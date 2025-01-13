export default function Skills() {
    return (
      <section id="skills" className="py-20 bg-gradient-to-b from-indigo-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 text-center">
          <h2 className="text-4xl font-extrabold text-indigo-600 mb-8">Web Development Skills</h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10">
            {/* Skill 1 */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-indigo-600 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-12 h-12 mx-auto"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 20.25c4.97 0 9-4.03 9-9s-4.03-9-9-9-9 4.03-9 9 4.03 9 9 9z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-indigo-600 mb-4">HTML</h3>
              <p className="text-gray-500">Expert in structuring and creating semantic HTML code for web pages.</p>
            </div>
  
            {/* Skill 2 */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-indigo-600 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-12 h-12 mx-auto"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 20.25c4.97 0 9-4.03 9-9s-4.03-9-9-9-9 4.03-9 9 4.03 9 9 9z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-indigo-600 mb-4">CSS</h3>
              <p className="text-gray-500">Skilled in designing modern, responsive layouts with CSS and Flexbox/Grid.</p>
            </div>
  
            {/* Skill 3 */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-indigo-600 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-12 h-12 mx-auto"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 20.25c4.97 0 9-4.03 9-9s-4.03-9-9-9-9 4.03-9 9 4.03 9 9 9z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-indigo-600 mb-4">JavaScript</h3>
              <p className="text-gray-500">Proficient in JavaScript for dynamic interactions, DOM manipulation, and client-side logic.</p>
            </div>
  
            {/* Skill 4 */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-indigo-600 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-12 h-12 mx-auto"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 20.25c4.97 0 9-4.03 9-9s-4.03-9-9-9-9 4.03-9 9 4.03 9 9 9z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-indigo-600 mb-4">React</h3>
              <p className="text-gray-500">Experienced in building interactive user interfaces with React.js and state management.</p>
            </div>
  
            {/* Skill 5 */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-indigo-600 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-12 h-12 mx-auto"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 20.25c4.97 0 9-4.03 9-9s-4.03-9-9-9-9 4.03-9 9 4.03 9 9 9z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-indigo-600 mb-4">Node.js</h3>
              <p className="text-gray-500">Knowledgeable in backend development with Node.js for creating server-side applications.</p>
            </div>
  
            {/* Skill 6 */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-indigo-600 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-12 h-12 mx-auto"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 20.25c4.97 0 9-4.03 9-9s-4.03-9-9-9-9 4.03-9 9 4.03 9 9 9z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-indigo-600 mb-4">MongoDB</h3>
              <p className="text-gray-500">Experience with NoSQL databases like MongoDB for scalable, document-based storage.</p>
            </div>
          </div>
  
          <div className="mt-10">
            <a
              href="#contact"
              className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition ease-in-out duration-300"
            >
              Let’s Connect
            </a>
          </div>
        </div>
      </section>
    );
  }
  