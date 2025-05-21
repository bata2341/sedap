import { useNavigate } from "react-router-dom";

export default function BadRequest() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center px-4">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        400 – Bad Request
      </h1>
      <p className="text-base text-gray-600 mb-8">
        The request was invalid. Please check your input or try again.
      </p>
      <button
        onClick={() => navigate("/")}
        className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-full transition duration-300"
      >
        Back to Home
      </button>
    </div>
  );
}
