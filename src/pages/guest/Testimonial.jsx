import React, { useState } from 'react';
import testimonials from '../../data/testimonials.json';

export default function Testimonial() {
  const [current, setCurrent] = useState(0);

  // Handle if data belum tersedia
  if (!testimonials.length) return <p className="p-10 text-center">No testimonials available.</p>;

  const { avatar, name, text } = testimonials[current];

  const next = () => {
    setCurrent((current + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 px-6 bg-white flex flex-col md:flex-row items-center justify-center gap-16">
      <div className="max-w-xl">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          Apa Yang Mereka Rasakan<br />Dengan Masakan Kami
        </h2>
        <p className="text-gray-500 text-lg mb-6">"{text}"</p>
        <div className="flex items-center gap-4">
          <img src={avatar} alt={name} className="w-12 h-12 rounded-full" />
          <p className="text-gray-800 font-semibold">{name}</p>
        </div>
        <div className="flex gap-4 mt-6">
          <button
            onClick={prev}
            className="w-10 h-10 border border-gray-400 rounded-full hover:bg-gray-100 flex items-center justify-center"
          >
            ‹
          </button>
          <button
            onClick={next}
            className="w-10 h-10 border border-gray-400 rounded-full hover:bg-gray-100 flex items-center justify-center"
          >
            ›
          </button>
        </div>
      </div>
      <div className="relative">
        <div className="rounded-[3rem] border-4 border-yellow-400 p-6 rotate-3">
          <img
            src="https://img.freepik.com/premium-photo/indonesian-man-eats-rendang-hungrily-using-bare-hands-without-spoon-fork_665594-116.jpg"
            alt="Customer"
            className="w-96 h-96 object-cover rounded-[3rem] -rotate-3"
          />
        </div>
      </div>
    </section>
  );
}
