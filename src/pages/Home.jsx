// Home.jsx
import React, { useContext } from "react";
import { CartContext } from "../CartContext.jsx";
import LogoSM from "../components/LogoSM";
import CardV2 from "../components/New/CardV2.jsx";
import Navbar from "../components/Navbar.jsx";
import datos from "../../datos.json";

import Btn from "../components/Btn.jsx";

export default function Home() {
  const { addToCart } = useContext(CartContext); // Usar el contexto

  return (
    <div>
      <div className="md:h-screen md:flex md:flex-col justify-center">
        <div className="flex-shrink-0">
          <LogoSM />
        </div>

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
        <Btn />
      </div>
    </div>
  );
}