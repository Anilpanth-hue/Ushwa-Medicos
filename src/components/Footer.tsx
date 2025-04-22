import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <a
                href="tel:+919826454554"
                className="flex items-center space-x-2 hover:text-primary-200"
              >
                <Phone className="h-5 w-5" />
                <span>+91 98264 54554</span>
              </a>
              <a
                href="mailto:v_meddical@yahoo.in"
                className="flex items-center space-x-2 hover:text-primary-200"
              >
                <Mail className="h-5 w-5" />
                <span>v_meddical@yahoo.in</span>
              </a>
              <div className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 mt-1 flex-shrink-0" />
                <p>
                  Old Bus Stand, Shahid Chowk,
                  <br />
                  Garoth, Distt-Mandsaur,
                  <br />
                  Madhya Pradesh - 458880
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="hover:text-primary-200">
                  About Us
                </a>
              </li>
              <li>
                <a href="/products" className="hover:text-primary-200">
                  Products
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-primary-200">
                  Contact
                </a>
              </li>
              <li>
                <a href="/privacy-policy" className="hover:text-primary-200">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Business Hours</h3>
            <ul className="space-y-2">
              <li>Monday - Sunday</li>
              <li>9:00 AM - 9:00 PM</li>
              <li className="text-primary-200">All day open</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary-800 text-center">
          <p>
            &copy; {new Date().getFullYear()} Ushwa MEDICAL AGENCY. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
