import React from "react"
import menu from "../images/assets/menu.png"; // Importación de imágenes
import car from "../images/assets/car.png";
import { useNavigate } from "react-router"; // Importa el hook useNavigate

export default function Navbar() {
    
    const navigate = useNavigate(); // Inicializa el hook useNavigate
    
    return(
        <div className="font-semibold flex gap-x-4 w-screen fixed bottom-8 justify-center items-center"> 
        {/* cambiar esto*/}
            <button
                onClick={() => navigate("/")} // Redirige a "/" 
                className="bg-white uppercase border-2 border-black rounded-lg px-4 py-2 flex justify-center items-center gap-x-3 hover:scale-105 hover:ease-out duration-300"><img src={menu} alt="img_navbar" className="w-8"/>Menu</button>
            <button 
                onClick={() => navigate("/carrito")} // Redirige a "/carrito"
                className="bg-white uppercase border-2 border-black rounded-lg px-4 py-2 flex justify-center items-center gap-x-3 hover:scale-105 hover:ease-out duration-300"><img src={car} alt="img_navbar" className="w-8"/>Carrito</button>
        </div>
    )
}