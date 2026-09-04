import React, { useState } from 'react';
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaPaperPlane, 
  FaUser, 
  FaUniversity,
  FaLinkedin,
  FaGithub,
  FaCheckCircle,
  FaExclamationCircle,
  FaWhatsapp
} from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    error: false
  });

  // Your real contact information
  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      value: 'realsoulisrael20@gmail.com',
      subtitle: 'Primary Contact - Form Submissions',
      link: 'mailto:realsoulisrael20@gmail.com'
    },
    {
      icon: <FaWhatsapp />,
      title: 'WhatsApp',
      value: '+233 55 718 3153',
      subtitle: 'Direct messaging (No form submissions)',
      link: 'https://wa.me/233557183153'
    },
    {
      icon: <FaPhone />,
      title: 'Phone',
      value: '+233 55 718 3153',
      subtitle: 'Call for urgent matters',
      link: 'tel:+233557183153'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      value: 'Takoradi Technical University',
      subtitle: 'Takoradi, Ghana',
      link: 'https://maps.google.com/?q=Takoradi+Technical+University'
    }
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin />,
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/yourusername',
      color: '#0077B5'
    },
    {
      icon: <FaGithub />,
      name: 'GitHub',
      url: 'https://github.com/yourusername',
      color: '#333'
    },
    {
      icon: <FaEnvelope />,
      name: 'Email',
      url: 'mailto:realsoulisrael20@gmail.com',
      color: '#EA4335'
    }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Function to send message only to email
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitted: false, submitting: true, error: false });

    try {
      // Using Formspree (Free service) - Only sends to email
      const response = await fetch('https://formspree.io/f/mnqewpgv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          _replyto: formData.email,
          _subject: `Portfolio Contact: ${formData.subject}`,
          _cc: formData.email, // Sends copy to sender
        })
      });

      if (response.ok) {
        setStatus({
          submitted: true,
          submitting: false,
          error: false
        });

        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });

        // Reset success message after 5 seconds
        setTimeout(() => {
          setStatus(prev => ({ ...prev, submitted: false }));
        }, 5000);

      } else {
        throw new Error('Form submission failed');
      }

    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus({
        submitted: false,
        submitting: false,
        error: true
      });
    }
  };

  return (
    <section id="contact" className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <FaEnvelope className="text-3xl text-blue-600" />
            <h2 className="text-4xl font-bold text-gray-800">Get In Touch</h2>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Form submissions go to email only. Use WhatsApp for direct messaging.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Contact Info */}
          <div className="space-y-6">
            {/* Contact Information Card */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Contact Methods</h3>
                <p className="text-gray-600">Choose how you'd like to reach me</p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center ${
                      info.title === 'Email' ? 'bg-blue-100' : 
                      info.title === 'WhatsApp' ? 'bg-green-100' : 
                      info.title === 'Phone' ? 'bg-green-100' : 'bg-blue-100'
                    }`}>
                      <div className={`text-xl ${
                        info.title === 'Email' ? 'text-blue-600' : 
                        info.title === 'WhatsApp' ? 'text-green-600' : 
                        info.title === 'Phone' ? 'text-green-600' : 'text-blue-600'
                      }`}>
                        {info.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800">{info.title}</h4>
                      {info.link ? (
                        <a 
                          href={info.link} 
                          target={info.link.includes('http') ? '_blank' : '_self'}
                          rel={info.link.includes('http') ? 'noopener noreferrer' : ''}
                          className={`hover:underline transition-colors block mt-1 ${
                            info.title === 'Email' ? 'text-blue-600 hover:text-blue-800' : 
                            info.title === 'WhatsApp' ? 'text-green-600 hover:text-green-800' : 
                            info.title === 'Phone' ? 'text-green-600 hover:text-green-800' : 'text-blue-600 hover:text-blue-800'
                          }`}
                        >
                          {info.value}
                        </a>
                      ) : (
                        <span className="text-gray-700 block mt-1">{info.value}</span>
                      )}
                      <p className="text-gray-500 text-sm mt-1">{info.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Action Buttons */}
              <div className="mt-8 grid grid-cols-2 gap-3">
                <a
                  href="https://wa.me/233557183153"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-green-500 to-green-600 text-white py-3 px-4 rounded-lg font-medium hover:from-green-600 hover:to-green-700 transition-all flex items-center justify-center gap-2"
                >
                  <FaWhatsapp className="text-lg" />
                  WhatsApp
                </a>
                <a
                  href="mailto:realsoulisrael20@gmail.com"
                  className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:from-blue-600 hover:to-blue-700 transition-all flex items-center justify-center gap-2"
                >
                  <FaEnvelope className="text-lg" />
                  Direct Email
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Connect with Me</h3>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-3 rounded-lg text-white transition-transform hover:scale-105"
                    style={{ backgroundColor: social.color }}
                    aria-label={social.name}
                  >
                    <span className="text-lg">{social.icon}</span>
                    <span className="font-medium">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Method Comparison */}
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
              <h4 className="text-lg font-bold text-blue-800 mb-4">📞 When to Use Each Method:</h4>
              <div className="space-y-4">
                <div className="p-3 bg-white rounded-lg border border-blue-100">
                  <div className="flex items-center gap-3">
                    <FaEnvelope className="text-blue-600" />
                    <div>
                      <h5 className="font-semibold text-gray-800">Contact Form</h5>
                      <p className="text-gray-600 text-sm">For formal inquiries, project details, and detailed messages</p>
                    </div>
                  </div>
                </div>
                <div className="p-3 bg-white rounded-lg border border-green-100">
                  <div className="flex items-center gap-3">
                    <FaWhatsapp className="text-green-600" />
                    <div>
                      <h5 className="font-semibold text-gray-800">WhatsApp</h5>
                      <p className="text-gray-600 text-sm">For quick questions, instant replies, and casual chat</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Send Email Message</h3>
               
              </div>

              {status.submitted ? (
                <div className="bg-green-50 rounded-lg p-6 text-center">
                  <FaCheckCircle className="text-green-500 text-4xl mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-green-800 mb-2">Email Sent Successfully!</h4>
                  <p className="text-green-600">✅ Sent to realsoulisrael20@gmail.com</p>
                  <p className="text-green-600">✅ Copy sent to your email: {formData.email}</p>
                  <p className="text-green-600 mt-3">I'll respond to your email as soon as possible!</p>
                </div>
              ) : status.error ? (
                <div className="bg-red-50 rounded-lg p-6 text-center">
                  <FaExclamationCircle className="text-red-500 text-4xl mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-red-800 mb-2">Email Failed to Send</h4>
                  <p className="text-red-600">Please try using direct email or WhatsApp.</p>
                  <div className="mt-4 flex gap-3">
                    <a
                      href="https://wa.me/233557183153"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-green-500 text-white py-2 px-4 rounded-lg font-medium hover:bg-green-600 transition"
                    >
                      Use WhatsApp
                    </a>
                    <a
                      href="mailto:realsoulisrael20@gmail.com"
                      className="flex-1 bg-blue-500 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-600 transition"
                    >
                      Direct Email
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="flex items-center gap-2 font-medium text-gray-700 mb-2">
                      <FaUser className="text-blue-600" />
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      required
                      disabled={status.submitting}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition disabled:bg-gray-100"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="flex items-center gap-2 font-medium text-gray-700 mb-2">
                      <FaEnvelope className="text-blue-600" />
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                      disabled={status.submitting}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition disabled:bg-gray-100"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="flex items-center gap-2 font-medium text-gray-700 mb-2">
                      <FaPaperPlane className="text-blue-600" />
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What is this regarding?"
                      required
                      disabled={status.submitting}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition disabled:bg-gray-100"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="flex items-center gap-2 font-medium text-gray-700 mb-2">
                      <FaPaperPlane className="text-blue-600" />
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project, opportunity, or question..."
                      rows="6"
                      required
                      disabled={status.submitting}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition resize-none disabled:bg-gray-100"
                    ></textarea>
                  </div>

                
                  <button
                    type="submit"
                    disabled={status.submitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {status.submitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending Email...
                      </>
                    ) : (
                      <>
                        <FaEnvelope />
                        Send to Email Only
                      </>
                    )}
                  </button>
                </form>
              )}

              {/* Form Footer */}
              <div className="mt-8 pt-6 border-t border-gray-200">
               
                <p className="flex items-start gap-2 text-blue-700 text-sm">
                  <FaWhatsapp className="mt-1 flex-shrink-0" />
                  <span>
                    <strong>Need instant response?</strong> Use 
                    <a href="https://wa.me/233557183153" className="font-bold ml-1">WhatsApp</a> for quicker replies.
                  </span>
                </p>
              </div>
            </div>

            {/* Alternative Contact Methods */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 border border-green-100">
              <h4 className="text-lg font-bold text-gray-800 mb-4">⚡ Alternative Contact Methods:</h4>
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="https://wa.me/233557183153"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-lg text-center transition flex flex-col items-center justify-center"
                >
                  <FaWhatsapp className="text-2xl mb-2" />
                  <div className="font-semibold">WhatsApp</div>
                  <div className="text-xs opacity-90 mt-1">Instant Chat</div>
                  <div className="text-xs opacity-75 mt-1">+233 55 718 3153</div>
                </a>
                <a
                  href="mailto:realsoulisrael20@gmail.com"
                  className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-lg text-center transition flex flex-col items-center justify-center"
                >
                  <FaEnvelope className="text-2xl mb-2" />
                  <div className="font-semibold">Direct Email</div>
                  <div className="text-xs opacity-90 mt-1">Formal Contact</div>
                  <div className="text-xs opacity-75 mt-1">realsoulisrael20@gmail.com</div>
                </a>
              </div>
            </div>
          </div>
        </div>

       
      </div>
    </section>
  );
};

export default Contact;