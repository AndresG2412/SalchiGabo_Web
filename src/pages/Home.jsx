// Home.jsx
import React, { useEffect, useContext } from "react";
import Swal from "sweetalert2";
import { CartContext } from "../CartContext.jsx";
import LogoSM from "../components/LogoSM";
import Wpp from "../components/New/Wpp.jsx";
import CardV2 from "../components/New/CardV2.jsx";
import Navbar from "../components/Navbar.jsx";
import datos from "../../datos.json";

export default function Home() {
  const { addToCart } = useContext(CartContext); // Usar el contexto

  return (
    <div>
      <div className="">
        <LogoSM />

        <div className="md:flex md:justify-center">
          {datos.map((item) => (
            <CardV2
              key={item.id}
              titulo={item.titulo}
              descripcion={item.descripcion}
              ruta={item.image}
              precio={item.precio}
              onAddToCart={() => addToCart(item)} // Pasar la función al componente CardV2
            />
          ))}
        </div>

        <Navbar />
      </div>
    </div>
  );
}