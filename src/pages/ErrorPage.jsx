import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f5f0e6] px-4 text-center relative overflow-hidden">
      {/* Ornamental X and Circles (optional using divs or CSS if needed) */}
      <div className="absolute top-10 left-10 text-black text-3xl">x</div>
      <div className="absolute bottom-16 right-10 text-black text-3xl">x</div>
      <div className="absolute top-24 right-24 w-6 h-6 border-2 border-black rounded-full"></div>
      <div className="absolute bottom-24 left-24 w-6 h-6 border-2 border-black rounded-full"></div>

      {/* Content */}
      <h1 className="text-6xl font-extrabold text-black mb-2">404</h1>
      <h2 className="text-2xl font-semibold text-black mb-4">Page Not Found</h2>
      <p className="text-sm text-gray-800 mb-6">
        we're sorry. the page you requested could not be found <br />
        Please go back to the home page
      </p>
      <button
        onClick={() => navigate("/")}
        className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
      >
        GO HOME
      </button>
    </div>
  );
}
