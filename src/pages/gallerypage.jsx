import React from 'react';

const GalleryPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-20">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Project Gallery
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A visual showcase of my academic projects, networking setups, and software development work
          </p>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🎨</div>
            <h2 className="text-2xl font-bold text-gray-700 mb-4">Gallery Page</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-6">
              This page will feature images and screenshots of my projects, network setups, 
              and academic work at Takoradi Technical University.
            </p>
            <div className="inline-block px-6 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg font-medium">
              Coming Soon
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;