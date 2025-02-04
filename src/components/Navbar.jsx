// Importaciones necesarias
import { useNavigate } from "react-router"; // Importa el hook useNavigate
import Menu from "../images/assets/menu.png"; // Importación de imágenes
import Carro from "../images/assets/car.png";

export default function Navbar() {
  const navigate = useNavigate(); // Inicializa el hook useNavigate

  return (
    <div className="w-screen flex pt-6">
      {/* Botón para ir a "/" */}
      <div className="mx-auto flex">
        <button
          className="bg-slate-200 text-xl tracking-wider font-semibold uppercase md:w-44 px-4 py-2 mx-4 my-2 flex items-center justify-center hover:bg-gray-400 hover:scale-125 rounded-lg hover:transition-all"
          onClick={() => navigate("/")} // Redirige a "/"
        >
          <img src={Menu} alt="icon_navbar" className="w-8 mr-3" />
          Menu
        </button>

        {/* Botón para ir a "/carrito" */}
        <button
          className="bg-slate-200 text-xl tracking-wider font-semibold uppercase md:w-44 px-4 py-2 mx-4 my-2 flex items-center justify-center hover:bg-gray-400 hover:scale-125 rounded-lg hover:transition-all"
          onClick={() => navigate("/carrito")} // Redirige a "/carrito"
        >
          <img src={Carro} alt="icon_navbar" className="w-8 mr-3" />
          Carrito
        </button>
      </div>
    </div>
  );
}