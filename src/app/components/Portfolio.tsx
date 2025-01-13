"use client";

import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const portfolioItems = [
  { id: 1, category: "Web Development", title: "Director's Portfolio", image: "/images/website1.png", link: "https://vinothrajendran.com/" },
  { id: 3, category: "Poster Design", title: "Poster Design 1", image: "/images/poster1.jpg", link: "#" },
  { id: 4, category: "Poster Design", title: "Poster Design 2", image: "/images/poster2.jpg", link: "#" },
  { id: 7, category: "Internet of Things", title: "SUTURE PRACTICING GUI", image: "/images/IoT1.jpg", link: "https://github.com/Sarojini96/Python-SUTURE-PRACTICING-GUI" },
  { id: 5, category: "Poster Design", title: "Poster Design 2", image: "/images/poster3.jpg", link: "#" },
  { id: 6, category: "Poster Design", title: "Poster Design 2", image: "/images/poster4.jpg", link: "#" },
  { id: 2, category: "Web Development", title: "Arabi Productions", image: "/images/website2.png", link: "https://arabiproductions.com/" },
  // Add more projects as needed
];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;

  const filteredItems = selectedCategory === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  const paginatedItems = filteredItems.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages - 1) setCurrentPage(currentPage + 1);
  };

  const handlePrevious = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };

  return (
    <section id="portfolio" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-indigo-600 mb-10">My Portfolio</h2>
        <div className="mb-6">
          <button 
            className={`px-6 py-2 rounded-lg mx-2 ${selectedCategory === "All" ? "bg-indigo-600 text-white" : "bg-indigo-400 text-white"}`}
            onClick={() => setSelectedCategory("All")}
          >
            All
          </button>
          <button 
            className={`px-6 py-2 rounded-lg mx-2 ${selectedCategory === "Web Development" ? "bg-indigo-600 text-white" : "bg-indigo-400 text-white"}`}
            onClick={() => setSelectedCategory("Web Development")}
          >
            Web Development
          </button>
          <button 
            className={`px-6 py-2 rounded-lg mx-2 ${selectedCategory === "Poster Design" ? "bg-indigo-600 text-white" : "bg-indigo-400 text-white"}`}
            onClick={() => setSelectedCategory("Poster Design")}
          >
            Poster Design
          </button>
          <button 
            className={`px-6 py-2 rounded-lg mx-2 ${selectedCategory === "Internet of Things" ? "bg-indigo-600 text-white" : "bg-indigo-400 text-white"}`}
            onClick={() => setSelectedCategory("Internet of Things")}
          >
            Internet of Things
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {paginatedItems.map(item => (
            <div key={item.id} className="relative group">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full bg-opacity-60 h-72 object-cover rounded-lg shadow-md transition-transform transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white text-xl font-bold mb-4">{item.title}</p>
                <a 
                  href={item.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition"
                >
                  Preview
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center mt-10">
          <button
            onClick={handlePrevious}
            className={`px-4 py-2 text-indigo-600 hover:bg-indigo-100 rounded-lg flex items-center ${currentPage === 0 && "opacity-50 cursor-not-allowed"}`}
            disabled={currentPage === 0}
          >
            <FaArrowLeft className="mr-2" /> 
          </button>
          <span className="mx-4 text-gray-600">
            Page {currentPage + 1} of {totalPages}
          </span>
          <button
            onClick={handleNext}
            className={`px-4 py-2 text-indigo-600 hover:bg-indigo-100 rounded-lg flex items-center ${currentPage === totalPages - 1 && "opacity-50 cursor-not-allowed"}`}
            disabled={currentPage === totalPages - 1}
          >
             <FaArrowRight className="ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
}
