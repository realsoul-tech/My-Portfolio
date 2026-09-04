import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle, Loader2, Clock } from "lucide-react";
import SectionHeader from "../../components/SectionHeader";  // Fixed path

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    // Simulate API call
    setTimeout(() => {
      setStatus({ 
        type: 'success', 
        message: 'Message sent successfully! I\'ll get back to you within 24 hours.' 
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      info: "your.email@ttu.edu.gh",
      link: "mailto:your.email@ttu.edu.gh",
      description: "For project inquiries and collaborations"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      info: "+233 XX XXX XXXX",
      link: "tel:+233XXXXXXXXX",
      description: "Available Mon-Fri, 9AM-5PM"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      info: "Takoradi, Ghana",
      link: "https://maps.google.com/?q=Takoradi+Technical+University",
      description: "Based at Takoradi Technical University"
    }
  ];

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <SectionHeader 
          title="Get In Touch"
          subtitle="Have a project in mind or want to discuss opportunities? Feel free to reach out!"
          icon={<Mail className="w-8 h-8 text-primary-600" />}
        />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-xl p-8 shadow-lg h-full">
              <h3 className="text-2xl font-bold mb-8 text-gray-800">Contact Information</h3>
              
              <div className="space-y-8 mb-8">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start group p-4 rounded-lg hover:bg-gray-50 transition duration-300"
                  >
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mr-4 group-hover:bg-primary-600 group-hover:text-white transition duration-300 flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">{item.title}</h4>
                      <p className="text-gray-600 group-hover:text-primary-600 transition duration-300 font-medium">
                        {item.info}
                      </p>
                      <p className="text-gray-500 text-sm mt-1">{item.description}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Availability Status */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></div>
                  <span className="font-medium text-green-800">Currently available for:</span>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center text-green-700">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Internship opportunities
                  </li>
                  <li className="flex items-center text-green-700">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Freelance projects
                  </li>
                  <li className="flex items-center text-green-700">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Research collaborations
                  </li>
                </ul>
              </div>

              {/* Response Time */}
              <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-blue-600 mr-3" />
                  <div>
                    <p className="text-blue-800 font-medium">Quick Response</p>
                    <p className="text-blue-700 text-sm">
                      I typically respond within 24 hours
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Send a Message</h3>
              
              {status.message && (
                <div className={`p-4 rounded-lg mb-6 ${
                  status.type === 'success' 
                    ? 'bg-green-50 text-green-800 border border-green-200' 
                    : 'bg-red-50 text-red-800 border border-red-200'
                }`}>
                  {status.message}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition duration-300"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition duration-300"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition duration-300"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                    <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition duration-300 resize-none"
                    placeholder="Tell me about your project or inquiry..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>

              {/* Privacy Note */}
              <div className="mt-6 text-center">
                <p className="text-gray-500 text-sm">
                  Your information is secure and will only be used to respond to your inquiry.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Map Location */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">Location</h3>
            <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                <p className="text-gray-700 font-medium">Takoradi Technical University</p>
                <p className="text-gray-600">Takoradi, Western Region, Ghana</p>
                <p className="text-gray-500 text-sm mt-2">P.O. Box 256, Takoradi</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;