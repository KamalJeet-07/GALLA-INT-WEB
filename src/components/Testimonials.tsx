import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    { name: 'Sarah Johnson', text: 'Galla Interior transformed my living space into a beautiful and functional home. I couldn\'t be happier with the results!', rating: 5 },
    { name: 'Michael Chen', text: 'The team at Galla Interior has an incredible eye for design. They understood my vision and brought it to life perfectly.', rating: 5 },
    { name: 'Emily Rodriguez', text: 'Working with Galla Interior was a pleasure from start to finish. They were professional, creative, and attentive to every detail.', rating: 5 },
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
              <p className="font-semibold text-gray-800">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;