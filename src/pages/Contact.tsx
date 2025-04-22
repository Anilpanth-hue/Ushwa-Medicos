import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import toast from "react-hot-toast";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send the data to an API
    toast.success("Message sent successfully!");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div>
          <h1 className="text-3xl font-bold mb-8">Get in Touch</h1>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-primary-100 rounded-lg">
                <Phone className="h-6 w-6 text-primary-600" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Phone</h3>
                <p className="text-gray-600">+91 98264 54554</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3 bg-primary-100 rounded-lg">
                <Mail className="h-6 w-6 text-primary-600" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Email</h3>
                <p className="text-gray-600">v_meddical@yahoo.in</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3 bg-primary-100 rounded-lg">
                <MapPin className="h-6 w-6 text-primary-600" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Address</h3>
                <p className="text-gray-600">
                  Old Bus Stand, Shahid Chowk,
                  <br />
                  Garoth, Distt-Mandsaur,
                  <br />
                  Madhya Pradesh - 458880
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="font-semibold mb-2">Business Hours</h3>
            <div className="space-y-2 text-gray-600">
              <p>Monday - Sunday</p>
              <p>9:00 AM - 9:00 PM</p>
              <p className="text-primary-600">Open all days</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full flex items-center justify-center space-x-2 bg-primary-600 text-white py-2 px-4 rounded-md hover:bg-primary-700 transition-colors"
            >
              <Send className="h-5 w-5" />
              <span>Send Message</span>
            </motion.button>
          </form>
        </div>
      </div>

      {/* Map */}
      <div className="mt-12">
        <div className="bg-white rounded-lg shadow-sm p-4">
          <iframe
            title="Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3635.5980745331885!2d75.64939807596654!3d24.325650878282275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3965a96ee39dca51%3A0xa5ac592a63f55163!2sUshwa%20Medical%20Agency!5e0!3m2!1sen!2sin!4v1730274582337!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
};
