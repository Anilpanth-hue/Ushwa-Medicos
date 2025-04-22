import React from "react";
import { motion } from "framer-motion";
import { Shield, Clock, Award } from "lucide-react";

export const Home = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative h-[500px] rounded-2xl overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&q=80"
          alt="Medical Supplies"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-900/70" />
        <div className="relative h-full flex items-center">
          <div className="max-w-2xl mx-auto text-center text-white">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Your Trusted Medical Supply Partner Since 1992
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg mb-8"
            >
              Providing quality healthcare products to medical professionals
              across Madhya Pradesh
            </motion.p>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white text-primary-600 px-8 py-3 rounded-full font-medium hover:bg-primary-50 transition-colors"
            >
              Explore Products
            </motion.button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            icon: Shield,
            title: "Quality Assured",
            description:
              "All products are sourced from certified manufacturers and undergo strict quality checks",
          },
          {
            icon: Clock,
            title: "Fast Delivery",
            description:
              "Same-day delivery available for orders within Garoth and next-day delivery for nearby areas",
          },
          {
            icon: Award,
            title: "30+ Years of Trust",
            description:
              "Serving the medical community with dedication and excellence since 1992",
          },
        ].map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
          >
            <feature.icon className="h-12 w-12 text-primary-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </motion.div>
        ))}
      </section>

      {/* About Section */}
      <section className="bg-white rounded-2xl p-8 md:p-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            About Ushwa Medical Agency
          </h2>
          <p className="text-gray-600 mb-8">
            Founded in 1992 by Mr. Praveen Gupta, Ushwa Medical Agency has been
            at the forefront of medical supply distribution in Madhya Pradesh.
            Our commitment to quality, reliability, and customer service has
            made us a trusted partner for healthcare professionals across the
            region.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">
                30+
              </div>
              <div className="text-gray-600">Years of Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">
                100000+
              </div>
              <div className="text-gray-600">Products</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">
                50000+
              </div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
