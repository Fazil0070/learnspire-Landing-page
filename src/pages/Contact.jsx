import React, { useState } from "react";
import { MapPin, Phone, Mail, Send, AlertCircle, CheckCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  // Form data state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Submission status state
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null,
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Form submission handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({
      submitting: true,
      submitted: false,
      error: null,
    });

    try {
      // Validate form data
      if (!formData.name || !formData.email || !formData.subject || !formData.message) {
        throw new Error("Please fill out all fields.");
      }

      // Email validation regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        throw new Error("Please enter a valid email address.");
      }

      // Send email using EmailJS
      console.log("Sending Email with data:", formData);
      const result = await emailjs.send(
        'service_ov160cp', // Replace with your EmailJS Service ID
        'template_8ezwgfi', // Replace with your EmailJS Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "WyrQhjTTMk91pcs0x" // Replace with your EmailJS Public Key
      );

      console.log("Email sent successfully:", result);

      // Reset form and show success message
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setStatus({
        submitting: false,
        submitted: true,
        error: null,
      });
    } catch (error) {
      console.error("Error while sending email:", error);
      setStatus({
        submitting: false,
        submitted: false,
        error: error.text || error.message || "An unexpected error occurred.",
      });
    }
  };

  return (
    <div className="font-Kanit min-h-screen bg-black text-white pt-20">
      <div className="max-w-6xl mx-auto p-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Get in Touch
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as
            soon as possible.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Contact Information Section */}
          <div className="space-y-8 md:col-span-1">
            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-purple-500 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-white mb-1">Visit Us</h3>
                <p className="text-gray-400">
                  22/62, WUTHUCATTAN STREET, Periamet,
                  Poongavanapuram, Chennai, Tamil Nadu 600003, India
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Phone className="w-6 h-6 text-purple-500 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-white mb-1">Call Us</h3>
                <p className="text-gray-400">+91 94885 68717</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Mail className="w-6 h-6 text-purple-500 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-white mb-1">Email Us</h3>
                <p className="text-gray-400">support@learnspire.ai</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="md:col-span-2 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-purple-500 outline-none transition"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-purple-500 outline-none transition"
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-200 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-purple-500 outline-none transition"
                placeholder="What is your message about?"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="6"
                className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-purple-500 outline-none transition resize-none"
                placeholder="Type your message here..."
                required
              ></textarea>
            </div>

            {status.error && (
              <div className="flex items-center space-x-2 bg-red-500/20 text-red-400 p-3 rounded-lg">
                <AlertCircle className="w-5 h-5" />
                <span>{status.error}</span>
              </div>
            )}

            {status.submitted && (
              <div className="flex items-center space-x-2 bg-green-500/20 text-green-400 p-3 rounded-lg">
                <CheckCircle className="w-5 h-5" />
                <span>Message sent successfully! We'll get back to you soon.</span>
              </div>
            )}

            <button
              type="submit"
              disabled={status.submitting}
              className="w-full md:w-auto px-8 py-3 bg-purple-500 text-white rounded-lg font-medium hover:bg-purple-600 transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {status.submitting ? "Sending..." : "Send Message"}
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
