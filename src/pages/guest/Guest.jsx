import React from "react";
import Footer from "./Footer";
import Testimonial from "./Testimonial";
import TopProducts from "./ProdukUnggulan";
import AboutSection from "./AboutSection";
import CekMember from "./cekMember";

const Guest = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#fff8f0] to-[#ffe8e8] font-sans">
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-4 shadow-sm bg-white">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10">
            <img src="/img/logo.png" alt="Logo Sedap" className="w-full h-full object-contain" />
          </div>
          <h1 className="text-xl font-bold text-black">SEDAP</h1>
        </div>

        {/* Menu Navigasi */}
        <nav className="flex space-x-6 text-gray-700 font-medium">
          <a href="#" className="hover:text-orange-500">Home</a>
          <a href="/about" className="hover:text-orange-500">About Us</a>
          <a href="#" className="hover:text-orange-500">Restaurants</a>
          <a href="#" className="hover:text-orange-500">Pages</a>
          <a href="#" className="hover:text-orange-500">Contacts</a>
        </nav>

        {/* Login/Register */}
        <div className="flex space-x-4">
          <a
            href="/login"
            className="bg-white border border-orange-500 text-orange-500 px-5 py-2 rounded-lg hover:bg-orange-50 transition"
          >
            Login
          </a>
          <a
            href="/register"
            className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-lg shadow transition"
          >
            Register
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex flex-col-reverse md:flex-row items-center justify-between px-8 py-20">
        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          <h2 className="text-5xl font-extrabold leading-tight text-gray-900">
            Nikmati Makanan Terbaik <br /> Tanpa Antri, Tanpa Repot
          </h2>
          <p className="text-gray-600 text-lg">
            Pesan makanan favorit Anda dari restoran terbaik dengan cepat dan mudah langsung dari genggaman Anda.
          </p>
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4">
            <select className="px-4 py-3 rounded-lg border text-gray-600 shadow-sm w-full md:w-auto">
              <option>Pilih Makanan Khas</option>
              <option>Padang</option>
              <option>Aceh</option>
              <option>Medan</option>
            </select>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg shadow-md w-full md:w-auto">
              PESAN SEKARANG
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 relative mt-12 md:mt-0 flex justify-center">
          <div className="relative z-10">
            <img
              src="/img/rendang.jpg"
              alt="Food Delivery"
              className="w-full max-w-md mx-auto rounded-xl shadow-lg"
            />
          </div>

          <div className="absolute top-4 right-4 bg-white px-4 py-3 rounded-xl shadow-lg flex items-center space-x-3 z-20">
            <div className="bg-orange-500 w-4 h-4 rounded-full"></div>
            <div>
              <p className="text-sm font-bold text-gray-800">12 Restoran</p>
              <p className="text-xs text-gray-500">Tersedia di Kotamu</p>
            </div>
          </div>

          <div className="absolute bottom-4 left-4 bg-white rounded-xl shadow-lg p-3 z-20 flex items-center space-x-3">
            <img
              src="/img/gadogado.jpg"
              alt="Restaurant"
              className="w-16 h-16 rounded-lg object-cover"
            />
            <div>
              <p className="text-xs text-gray-500">Menu Favorit Minggu ini</p>
              <p className="font-bold text-gray-800">Gado Gado</p>
            </div>
          </div>
        </div>
      </main>
      
      {/* Sections */}
      <AboutSection />
      <TopProducts />
      <Testimonial />
      <br />
      <br />
      <CekMember/>
      <br />
      <br />
      <br />
      <br />

      
    </div>
  );
};

export default Guest;
