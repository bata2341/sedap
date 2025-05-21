// Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#2d2d2d] text-white px-10 py-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
        {/* Kiri: Logo dan Deskripsi */}
        <div>
          <div className="flex items-center mb-6">
            <img src="/img/logo.png" alt="Sedap Logo" className="w-10 h-10 mr-2" />
            <span className="text-2xl font-bold text-orange-500">SEDAP</span>
          </div>
          <h2 className="text-3xl font-bold leading-tight mb-4">
            Jelajahi <br /> Rasa-Rasa <br /> Nusantara
          </h2>
          <p className="text-gray-300">
            Dari Sabang sampai Merauke, Sedap hadir untuk bantu kamu temukan makanan terenak khas Indonesia.
          </p>
        </div>

        {/* Tengah: Menu */}
        <div>
          <h3 className="text-xl font-semibold mb-4">MENU</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#">Beranda</a></li>
            <li><a href="#">Tentang Kami</a></li>
            <li><a href="#">Kuliner Nusantara</a></li>
            <li><a href="#">Kontak</a></li>
          </ul>
        </div>

        {/* Kanan: Kontak & Sosial Media */}
        <div>
          <h3 className="text-xl font-semibold mb-4">KONTAK</h3>
          <p className="text-gray-300 mb-2">Jl. Kenikmatan No.88, Jakarta, Indonesia</p>
          <p className="text-gray-300 mb-2">halo@sedap.co.id</p>
          <p className="text-gray-300 mb-4">+62 812 3456 7890</p>

          {/* Sosial Media */}
          <div className="flex space-x-4 mb-4">
            <a href="#" className="w-10 h-10 rounded-full border border-white flex items-center justify-center">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white flex items-center justify-center">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white flex items-center justify-center">
              <i className="fab fa-instagram"></i>
            </a>
          </div>

          {/* Gambar Partner */}
          <div className="flex space-x-4">
            <img src="/img/a.jpg" alt="Partner 1" className="h-10" />
            <img src="/img/b.jpg" alt="Partner 2" className="h-10" />
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 border-t border-gray-600 pt-4 flex justify-between text-sm text-gray-400">
        <p>© 2025 Sedap. Makan Enak, Hidup Sedap.</p>
        <div className="space-x-4">
          <a href="#">Kebijakan Privasi</a>
          <a href="#">Syarat & Ketentuan</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
