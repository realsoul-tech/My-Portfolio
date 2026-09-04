import React, { useState, useEffect } from 'react';
import { FaImage, FaCamera, FaTimes, FaDownload } from 'react-icons/fa';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // ⭐⭐⭐ YOUR IMAGES - UPDATE THESE WITH YOUR ACTUAL FILES ⭐⭐⭐
  // Make sure these files exist in: public/images/profile/
  const baseUrl = import.meta.env.BASE_URL;
  const uploadedImages = [
    {
      id: 1,
      url: `${baseUrl}images/profile/israel.jpg`,
      title: "My Profile Photo",
      category: "Portrait",
      description: "This is my personal profile photo, used across my portfolio and professional profiles.",
      date: "2024-01-15"
    },
    {
      id: 2,
      url: `${baseUrl}images/profile/work.JPG`,
      title: "Web Development Project",
      category: "Work",
      description: "A screenshot of my full-stack web application, covering both frontend and backend work.",
      date: "2024-02-10"
    },
    {
      id: 3,
      url: `${baseUrl}images/profile/school.jpeg`,
      title: "University Life",
      category: "Academic",
      description: "A moment from my studies at Takoradi Technical University, pursuing my degree in IT.",
      date: "2024-03-05"
    },
    {
      id: 4,
      url: `${baseUrl}images/profile/coding.JPG`,
      title: "Coding Session",
      category: "Development",
      description: "Me working on software applications, writing code and debugging projects.",
      date: "2024-01-20"
    },
    {
      id: 5,
      url: `${baseUrl}images/profile/tool.JPG`,
      title: "Networking Setup",
      category: "Networking",
      description: "My networking equipment setup, configuring routers, switches and network infrastructure.",
      date: "2024-02-25"
    },
    {
      id: 6,
      url: `${baseUrl}images/profile/project.jpeg`,
      title: "Team Collaboration",
      category: "Collaboration",
      description: "Collaborating with my team members on a shared project, combining our skills and ideas.",
      date: "2024-03-15"
    },
    {
      id: 7,
      url: `${baseUrl}images/profile/web.jpeg`,
      title: "Web Development",
      category: "Development",
      description: "Building and designing modern, responsive web interfaces for client projects.",
      date: "2024-02-18"
    }
  ];

  const categories = ['All', 'Work', 'Academic', 'Development', 'Networking', 'Collaboration', 'Portrait'];
  const [activeCategory, setActiveCategory] = useState('All');

  // Log image paths for debugging
  useEffect(() => {
    console.log("📸 Gallery loaded with images:");
    uploadedImages.forEach(img => {
      console.log(`  - ${img.title}: ${img.url}`);
    });
  }, []);

  const filteredImages = activeCategory === 'All' 
    ? uploadedImages 
    : uploadedImages.filter(img => img.category === activeCategory);

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-indigo-50 min-h-screen">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <FaCamera className="text-3xl text-blue-600" />
            <h1 className="text-4xl font-bold text-gray-800">My Gallery</h1>
          </div>
          <p className="text-lg text-gray-600">
            Total {uploadedImages.length} images | {categories.length - 1} categories
          </p>
        </div>

        {/* Category Filters */}
        <div className="mb-10">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-5 py-2 rounded-full font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg'
                    : 'bg-white/80 text-gray-700 hover:bg-white shadow-md border border-blue-100'
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category} ({category === 'All' ? uploadedImages.length : uploadedImages.filter(img => img.category === category).length})
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {filteredImages.map((image) => (
            <div 
              key={image.id} 
              className="group relative bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image */}
              <div 
                className="aspect-square overflow-hidden cursor-pointer bg-gray-100" 
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://placehold.co/400x400/3B82F6/FFFFFF?text=Image+Not+Found';
                    console.error(`❌ Failed to load: ${image.url}`);
                  }}
                />
              </div>

              {/* Image Info */}
              <div className="p-4">
                <h3 className="font-bold text-gray-800 mb-1 truncate">{image.title}</h3>
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                    {image.category}
                  </span>
                  <button
                    onClick={() => setSelectedImage(image)}
                    className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredImages.length === 0 && (
          <div className="text-center py-16 bg-white/80 rounded-2xl border border-gray-200">
            <FaImage className="text-6xl text-gray-300 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-500 mb-2">No images in this category</h3>
          </div>
        )}

        {/* Selected Image Preview */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
            <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-800">{selectedImage.title}</h3>
                  <button
                    onClick={() => setSelectedImage(null)}
                    className="w-10 h-10 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-100"
                  >
                    <FaTimes className="text-lg" />
                  </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <img
                      src={selectedImage.url}
                      alt={selectedImage.title}
                      className="w-full rounded-lg shadow-lg"
                      onError={(e) => {
                        e.target.src = 'https://placehold.co/600x400/FF6B6B/FFFFFF?text=Image+Not+Found';
                      }}
                    />
                  </div>

                  <div>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-700 mb-2">Category</h4>
                        <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-800 rounded-full">
                          <FaImage />
                          {selectedImage.category}
                        </span>
                      </div>

                      {selectedImage.description && (
                        <div>
                          <h4 className="font-semibold text-gray-700 mb-2">Description</h4>
                          <p className="text-gray-600">{selectedImage.description}</p>
                        </div>
                      )}

                      <div>
                        <h4 className="font-semibold text-gray-700 mb-2">Image Path</h4>
                        <div className="bg-gray-100 p-3 rounded-lg">
                          <code className="text-sm text-gray-800 break-all">{selectedImage.url}</code>
                        </div>
                      </div>

                      <div className="flex gap-4 pt-6">
                        <button
                          onClick={() => {
                            const link = document.createElement('a');
                            link.href = selectedImage.url;
                            link.download = selectedImage.title.toLowerCase().replace(/\s+/g, '-') + '.jpg';
                            document.body.appendChild(link);
                            link.click();
                            document.body.removeChild(link);
                          }}
                          className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700"
                        >
                          <FaDownload />
                          Download
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;