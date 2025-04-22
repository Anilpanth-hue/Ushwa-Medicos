import React from "react";
import { motion } from "framer-motion";
import { Shield, Clock, Award, Users } from "lucide-react";

export const About = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative h-[400px] rounded-2xl overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&q=80"
          alt="Medical Store"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-900/70" />
        <div className="relative h-full flex items-center">
          <div className="max-w-3xl mx-auto text-center text-white px-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Our Story
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg"
            >
              Serving the healthcare community since 1992
            </motion.p>
          </div>
        </div>
      </section>

      {/* Company History */}
      <section className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-3xl font-bold mb-6">Our Journey</h2>
          <p className="text-gray-600 mb-6">
            Founded in 1992 by Mr. Praveen Gupta, Ushwa Medical Agency began
            with a vision to provide quality medical supplies to healthcare
            professionals in Garoth and surrounding areas. What started as a
            small medical store has now grown into one of the most trusted
            medical supply agencies in Madhya Pradesh.
          </p>
          <p className="text-gray-600">
            Over the past three decades, we have built strong relationships with
            leading pharmaceutical companies and healthcare providers, ensuring
            a steady supply of high-quality medical products to our customers.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
        {[
          { icon: Users, value: "10000+", label: "Happy Customers" },
          { icon: Shield, value: "100+", label: "Partner Brands" },
          { icon: Clock, value: "32", label: "Years of Service" },
          { icon: Award, value: "50+", label: "Awards" },
        ].map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-6 rounded-lg shadow-sm text-center"
          >
            <stat.icon className="h-8 w-8 text-primary-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-gray-900 mb-2">
              {stat.value}
            </div>
            <div className="text-gray-600">{stat.label}</div>
          </motion.div>
        ))}
      </section>

      {/* Mission & Vision */}
      <section className="max-w-4xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-600">
              To provide healthcare professionals with reliable access to
              high-quality medical supplies, enabling them to deliver the best
              possible care to their patients.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-gray-600">
              To be the most trusted and preferred medical supply partner for
              healthcare providers across Madhya Pradesh, known for our quality,
              reliability, and customer service.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
