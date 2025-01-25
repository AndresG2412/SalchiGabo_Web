// Importaciones necesarias
import { useNavigate } from "react-router"; // Importa el hook useNavigate
import Menu from "../images/assets/menu.png"; // Importación de imágenes
import Carro from "../images/assets/car.png";

export default function Navbar() {
  const navigate = useNavigate(); // Inicializa el hook useNavigate

  return (
    <div className="md:w-1/4 bg-gray-200 shadow-2xl rounded-xl flex justify-between items-center mx-auto my-12">
      {/* Botón para ir a "/" */}
      <button
        className="px-4 py-2 mx-10 flex items-center hover:bg-gray-400 hover:scale-125 rounded-lg"
        onClick={() => navigate("/")} // Redirige a "/"
      >
        <img src={Menu} alt="icon_navbar" className="w-8 mr-3" />
        Menu
      </button>

      {/* Botón para ir a "/carrito" */}
      <button
        className="px-4 py-2 mx-10 flex items-center hover:bg-gray-400 hover:scale-125 rounded-lg"
        onClick={() => navigate("/carrito")} // Redirige a "/carrito"
      >
        <img src={Carro} alt="icon_navbar" className="w-8 mr-3" />
        Carrito
      </button>
    </div>
  );
}
