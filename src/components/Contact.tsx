import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Get in Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                <input type="text" id="name" name="name" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" required />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Your Email</label>
                <input type="email" id="email" name="email" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" required />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                <textarea id="message" name="message" rows={4} className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" required></textarea>
              </div>
              <button type="submit" className="w-full bg-indigo-600 text-white py-3 px-6 rounded-md hover:bg-indigo-700 transition duration-300">Send Message</button>
            </form>
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Contact Information</h3>
            <div className="flex items-start space-x-4">
              <Mail className="w-6 h-6 text-indigo-600 mt-1" />
              <div>
                <p className="font-medium">Email</p>
                <a href="mailto:info@gallainterior.com" className="text-gray-600 hover:text-indigo-600">info@gallainterior.com</a>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Phone className="w-6 h-6 text-indigo-600 mt-1" />
              <div>
                <p className="font-medium">Phone</p>
                <a href="tel:+15551234567" className="text-gray-600 hover:text-indigo-600">+1 (555) 123-4567</a>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-indigo-600 mt-1" />
              <div>
                <p className="font-medium">Address</p>
                <p className="text-gray-600">123 Design Street, Creativity City, 12345</p>
              </div>
            </div>
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Business Hours</h4>
              <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
              <p className="text-gray-600">Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;