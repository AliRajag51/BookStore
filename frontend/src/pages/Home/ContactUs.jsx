import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, Clock, MessageSquare, User } from "lucide-react";
import SectionHeader from "../../components/ContactUs/SectionHeader.jsx";
import ContactInfoItem from "../../components/ContactUs/ContactInfoItem.jsx";
import SuccessMessage from "../../components/ContactUs/SuccessMessage.jsx";
import NextStepItem from "../../components/ContactUs/NextStepItem.jsx";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 text-pink-600" />,
      title: "Phone",
      details: "+1 (555) 123-4567",
      subtitle: "Mon-Fri 9am-6pm"
    },
    {
      icon: <Mail className="w-6 h-6 text-purple-600" />,
      title: "Email",
      details: "support@bookstore.com",
      subtitle: "We reply within 24 hours"
    },
    {
      icon: <MapPin className="w-6 h-6 text-pink-500" />,
      title: "Office",
      details: "123 Book Street, Reading City",
      subtitle: "Visit our headquarters"
    },
    {
      icon: <Clock className="w-6 h-6 text-purple-500" />,
      title: "Hours",
      details: "9:00 AM - 8:00 PM",
      subtitle: "Monday to Saturday"
    }
  ];

  return (
    <section className="font-poppins bg-gradient-to-b from-white to-gray-50 py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <SectionHeader
          badge="Get In Touch"
          title="Contact Us"
          description="Have questions? We're here to help. Reach out to us anytime."
        />

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Information */}
          <div>
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <ContactInfoItem
                    key={index}
                    icon={info.icon}
                    title={info.title}
                    details={info.details}
                    subtitle={info.subtitle}
                  />
                ))}
              </div>

              {/* Map Placeholder */}
              <div className="mt-8">
                <h3 className="font-semibold text-gray-900 mb-4">Our Location</h3>
                <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl h-48 md:h-64 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-pink-400 mx-auto mb-3" />
                    <p className="text-gray-500">Interactive map would appear here</p>
                  </div>
                </div>
              </div>

              {/* FAQ Preview */}
              <div className="mt-8">
                <h3 className="font-semibold text-gray-900 mb-4">Quick Questions?</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <MessageSquare className="w-5 h-5 text-pink-400" />
                    <span className="text-gray-700">Check our FAQ section</span>
                  </div>
                  <a href="#" className="inline-block text-pink-600 hover:text-pink-700 font-medium">
                    View FAQ →
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-100 to-purple-100 rounded-xl flex items-center justify-center">
                  <Send className="w-6 h-6 text-pink-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Send us a Message</h2>
                  <p className="text-gray-600">We'll get back to you soon</p>
                </div>
              </div>

              {isSubmitted ? (
                <SuccessMessage
                  title="Message Sent Successfully!"
                  description="Thank you for contacting us. We'll get back to you within 24 hours."
                />
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <User className="w-4 h-4 inline mr-2 text-pink-500" />
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none transition"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Mail className="w-4 h-4 inline mr-2 text-pink-500" />
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="you@example.com"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="How can we help?"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      placeholder="Tell us more about your inquiry..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none transition resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 rounded-xl font-semibold text-white transition-all duration-200 transform hover:-translate-y-0.5 ${
                      isSubmitting
                        ? 'bg-pink-400 cursor-not-allowed'
                        : 'bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 hover:shadow-lg'
                    }`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <>
                        <Send className="w-5 h-5 inline mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}

              {/* Additional Info */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-3">What happens next?</h4>
                <div className="space-y-3">
                  <NextStepItem index={1} text="We'll review your message" />
                  <NextStepItem index={2} text="Assign to the right team member" />
                  <NextStepItem index={3} text="Get back to you within 24 hours" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
