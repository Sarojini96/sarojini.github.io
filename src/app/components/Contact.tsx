export default function Contact() {
  return (
    <section id="contact" className="py-10 bg-indigo-100">
      <div className="max-w-4xl mx-auto px-4">
        {/* <h2 className="text-4xl font-bold text-center text-gray-800">Get In Touch</h2> */}
        <h2 className="text-4xl text-center font-extrabold text-indigo-600 mb-6">
       Say Hello
            </h2>
        <p className="mt-3 text-lg text-center text-gray-600">
          Feel free to reach out to me for collaborations or just a friendly hello!
        </p>
 {/* Contact Details */}
 <div className="mt-2 text-center">
          <p className="text-lg text-gray-700 mb-3">Email me directly at:</p>
          <a
            href="mailto:your-email@gmail.com"
            className="text-indigo-600 font-semibold underline hover:text-indigo-800"
          >
            sarojini.developer@gmail.com
          </a>
        </div>
        <form 
          action="https://formspree.io/f/mzzzovyg" // Replace with your Formspree endpoint
          method="POST"
          className="mt-4 space-y-6"
        >
          {/* Name Input */}
          <div>
            <label htmlFor="name" className="block text-sm font-bold text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="mt-1 block text-indigo-800 h-10 w-full rounded-md border-indigo-50 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-bold text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="mt-1 block text-indigo-800 h-10 w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          {/* Message Input */}
          <div>
            <label htmlFor="message" className="block text-sm font-bold text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4} 
              required
              className="mt-1 block w-full text-indigo-800 rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="inline-block px-6 py-3 bg-indigo-500 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-600 transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
