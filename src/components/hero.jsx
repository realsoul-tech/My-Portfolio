import React, { useRef, useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaDownload, FaArrowDown, FaNetworkWired, FaCode, FaUserGraduate, FaUpload, FaCamera, FaTimes } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  const projectsRef = useRef(null);
  const fileInputRef = useRef(null);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [profileImageUrl, setProfileImageUrl] = useState(
    localStorage.getItem('profileImage') || 
    `${import.meta.env.BASE_URL}images/profile/israel.jpg` // Default path
  );
  const [imageError, setImageError] = useState(false);

  // Check for saved image on component mount
  useEffect(() => {
    const savedImage = localStorage.getItem('profileImage');
    if (savedImage) {
      setProfileImageUrl(savedImage);
    }
  }, []);

  const handleDownloadCV = () => {
    const cvPath = `${import.meta.env.BASE_URL}sample-cv.pdf`;
    fetch(cvPath, { method: 'HEAD' })
      .then(res => {
        if (!res.ok) {
          alert('CV file not found. Please add it to: public/sample-cv.pdf');
          return;
        }
        const link = document.createElement('a');
        link.href = cvPath;
        link.download = 'israel_duah_cv.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
      .catch(() => alert('CV file not found. Please add it to: public/sample-cv.pdf'));
  };

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Handle image upload from laptop
  const handleImageSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) { // 5MB limit
        alert('Image size should be less than 5MB');
        return;
      }

      if (!file.type.startsWith('image/')) {
        alert('Please select an image file');
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage({
          file: file,
          preview: reader.result
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUploadImage = () => {
    if (selectedImage && selectedImage.preview) {
      // Save to localStorage (temporary solution)
      localStorage.setItem('profileImage', selectedImage.preview);
      
      // Update the displayed image
      setProfileImageUrl(selectedImage.preview);
      setImageError(false);
      
      // Close modal and reset
      setShowUploadModal(false);
      setSelectedImage(null);
      
      // Reset file input
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
      
      alert('Profile image updated successfully!');
    }
  };

  const handleImageError = () => {
    setImageError(true);
    console.log('Image failed to load, using fallback...');
  };

  const triggerFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 text-white px-4 py-16">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-indigo-600/15 to-purple-600/20"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-indigo-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Column */}
          <div className="flex-1 max-w-2xl">
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm text-cyan-200 rounded-full text-sm font-medium border border-white/30">
                <FaUserGraduate className="mr-2" />
                Welcome to my portfolio
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300">Israel Duah</span>
            </h1>

            <div className="h-16 md:h-20 mb-6 flex items-center">
              <TypeAnimation
                sequence={[
                  'Computer Networking Specialist',
                  2000,
                  'Full Stack Developer',
                  2000,
                  'Tech Enthusiast',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                deletionSpeed={40}
                repeat={Infinity}
                className="text-xl md:text-2xl lg:text-3xl font-semibold text-blue-100"
              />
            </div>

            <p className="text-blue-100/80 text-lg mb-8 leading-relaxed max-w-3xl">
              Pursuing a Bachelor of Technology in Information Technology at Takoradi Technical University, 
              specializing in Computer Networking with hands-on experience in software development, 
              network infrastructure, and system administration.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 mb-8">
              <div className="text-center min-w-[80px]">
                <div className="text-3xl font-bold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">20</div>
                <div className="text-blue-100/70 text-sm mt-1">Projects</div>
              </div>
              <div className="text-center min-w-[80px]">
                <div className="text-3xl font-bold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">10</div>
                <div className="text-blue-100/70 text-sm mt-1">Technologies</div>
              </div>
              <div className="text-center min-w-[80px]">
                <div className="text-3xl font-bold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">3.20</div>
                <div className="text-blue-100/70 text-sm mt-1">GPA</div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
             
              <button
                onClick={scrollToProjects}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white rounded-lg font-semibold border border-white/20 hover:border-white/30 transition-all duration-300 transform hover:-translate-y-1"
              >
                View Projects
                <FaArrowDown className="flex-shrink-0" />
              </button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-lg"
                aria-label="GitHub"
              >
                <FaGithub className="text-xl" />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-lg"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-xl" />
              </a>
            </div>
          </div>

          {/* Right Column - Profile Picture Section */}
          <div className="flex-1 max-w-xl mt-16 lg:mt-24">
            <div className="relative">
              {/* Profile Picture Container */}
              <div className="relative mb-12">
                <div className="relative w-72 h-72 md:w-80 md:h-80 mx-auto">
                  {/* Outer glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/30 via-blue-400/30 to-purple-400/30 rounded-2xl blur-2xl animate-pulse"></div>
                  
                  {/* Profile picture frame */}
                  <div className="relative w-full h-full rounded-2xl border-4 border-white/30 shadow-2xl overflow-hidden backdrop-blur-sm">
                    {imageError ? (
                      // Fallback if image fails to load
                      <div className="w-full h-full bg-gradient-to-br from-blue-600 to-indigo-700 flex flex-col items-center justify-center">
                        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-white/20 to-white/10 flex items-center justify-center mb-4">
                          <span className="text-5xl font-bold text-white">ID</span>
                        </div>
                        <span className="text-white/90 text-lg font-medium">Israel Duah</span>
                        <span className="text-white/70 text-sm mt-1">TTU IT Student</span>
                      </div>
                    ) : (
                      // Your profile image
                      <img 
                        src={profileImageUrl}
                        alt="Israel Duah"
                        className="w-full h-full object-cover"
                        onError={handleImageError}
                        onLoad={() => console.log('✅ Profile image loaded successfully!')}
                      />
                    )}
                    
                    {/* Upload Button Overlay */}
                    <div className="absolute inset-0 bg-black/0 hover:bg-black/30 transition-all duration-300 flex items-center justify-center opacity-0 hover:opacity-100">
                      <button
                        onClick={() => setShowUploadModal(true)}
                        className="flex items-center gap-2 px-4 py-2 bg-white/90 text-gray-800 rounded-lg font-medium hover:bg-white transition-all transform hover:scale-105"
                      >
                        <FaCamera />
                        Change Photo
                      </button>
                    </div>
                  </div>
                  
                  {/* Floating Tech Badges */}
                  <div className="absolute -top-2 -left-2 md:top-0 md:left-0 flex items-center gap-2 px-3 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 animate-bounce">
                    <FaCode className="text-cyan-300 text-sm" />
                    <span className="text-xs font-medium text-white">React</span>
                  </div>
                  <div className="absolute -top-2 -right-2 md:top-0 md:right-0 flex items-center gap-2 px-3 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 animate-bounce delay-500">
                    <FaNetworkWired className="text-blue-300 text-sm" />
                    <span className="text-xs font-medium text-white">CCNA</span>
                  </div>
                </div>
              </div>

              {/* Current Status Card */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-6 shadow-2xl">
                <h3 className="text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300">
                  Current Status
                </h3>
                <div className="space-y-3">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center pb-3 border-b border-white/10">
                    <span className="text-blue-100/70 text-sm sm:text-base">University:</span>
                    <span className="font-medium text-white text-sm sm:text-base mt-1 sm:mt-0">Takoradi Technical University</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center pb-3 border-b border-white/10">
                    <span className="text-blue-100/70 text-sm sm:text-base">Program:</span>
                    <span className="font-medium text-white text-sm sm:text-base mt-1 sm:mt-0">B.Tech Information Technology</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center pb-3 border-b border-white/10">
                    <span className="text-blue-100/70 text-sm sm:text-base">Specialization:</span>
                    <span className="font-medium text-white text-sm sm:text-base mt-1 sm:mt-0">Computer Networking</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                    <span className="text-blue-100/70 text-sm sm:text-base">Level:</span>
                    <span className="inline-flex items-center justify-center px-4 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-bold rounded-full mt-1 sm:mt-0 shadow-lg">
                      400
                    </span>
                  </div>
                </div>
                
               
              </div>
            </div>
          </div>
        </div>

      
      </div>

      {/* Upload Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="bg-gradient-to-br from-blue-900 to-indigo-900 rounded-2xl shadow-2xl max-w-md w-full p-6 border border-white/20">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-white">Upload Profile Picture</h3>
              <button
                onClick={() => {
                  setShowUploadModal(false);
                  setSelectedImage(null);
                }}
                className="w-8 h-8 rounded-full flex items-center justify-center text-gray-300 hover:bg-white/10"
              >
                <FaTimes />
              </button>
            </div>

            {/* Image Preview */}
            <div className="mb-6">
              <div className="w-48 h-48 mx-auto mb-4 rounded-2xl border-4 border-white/30 overflow-hidden">
                {selectedImage?.preview ? (
                  <img 
                    src={selectedImage.preview} 
                    alt="Preview" 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-blue-800 to-indigo-800 flex flex-col items-center justify-center">
                    <FaCamera className="text-4xl text-white/50 mb-2" />
                    <span className="text-white/70 text-sm">No image selected</span>
                  </div>
                )}
              </div>
              
              {/* Hidden file input */}
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleImageSelect}
                accept="image/*"
                className="hidden"
              />
              
              {/* Upload Button */}
              <button
                onClick={triggerFileInput}
                className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all mb-3"
              >
                <FaUpload className="inline mr-2" />
                Choose from Computer
              </button>
              
              <p className="text-center text-white/70 text-sm">
                JPG, PNG, or GIF • Max 5MB
              </p>
            </div>

            {/* Instructions */}
            <div className="mb-6 bg-white/5 rounded-lg p-4 border border-white/10">
              <h4 className="font-semibold text-cyan-300 mb-2">Tips for best results:</h4>
              <ul className="text-white/70 text-sm space-y-1">
                <li>• Use a high-quality, well-lit photo</li>
                <li>• Square photos work best (1:1 ratio)</li>
                <li>• Face should be clearly visible</li>
                <li>• Professional attire recommended</li>
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <button
                onClick={handleUploadImage}
                disabled={!selectedImage}
                className={`flex-1 py-3 rounded-lg font-semibold transition-all ${
                  selectedImage 
                    ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:from-green-600 hover:to-emerald-600'
                    : 'bg-white/10 text-white/50 cursor-not-allowed'
                }`}
              >
                Save Changes
              </button>
              <button
                onClick={() => {
                  setShowUploadModal(false);
                  setSelectedImage(null);
                }}
                className="flex-1 py-3 bg-white/10 text-white rounded-lg font-semibold hover:bg-white/20 transition-all"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;