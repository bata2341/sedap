import React from 'react';

const AboutSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 bg-white">
      {/* Image Section */}
      <div className="w-full md:w-1/2 mb-10 md:mb-0">
        <img
          src="/img/makanan.jpg"
          alt="Makanan"
          className="w-full max-w-sm md:max-w-md mx-auto rounded-lg shadow"
        />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 md:pl-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
          Tentang Sedap
        </h2>
        <p className="text-gray-600 mb-4 text-lg leading-relaxed">
          Sedap adalah website yang merayakan kelezatan kuliner Nusantara.
          Dari Sabang sampai Merauke, Indonesia punya ribuan hidangan yang menggoda selera — mulai dari rendang yang mendunia, gudeg yang manis legit, hingga papeda yang unik dari timur. Melalui Sedap, kami menghadirkan kisah di balik setiap sajian: cita rasa, sejarah, hingga cara pembuatannya.
          Website ini dibuat untuk para pecinta kuliner, pelancong rasa, hingga generasi muda yang ingin lebih mengenal warisan kuliner negeri sendiri.
        </p>
        <p className="text-gray-600 text-lg leading-relaxed">
          Sedap bukan hanya tentang makanan — ini tentang rasa, budaya, dan cerita.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
