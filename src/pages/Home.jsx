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

  useEffect(() => {
    Swal.fire({
      icon: "warning",
      title: "Solo por tiempo limitado",
      text: "¡Tenemos nuevas adiciones! Pregunta por ellas a nuestro número personal.",
      confirmButtonText: "Entendido!",
    });
  }, []);

  useEffect(() => {
    const hasSeenAlert = localStorage.getItem("hasSeenAlert");

    if (!hasSeenAlert) {
      Swal.fire({
        title: "Solo por tiempo limitado",
        text: "¡Tenemos nuevas adiciones! Pregunta por ellas a nuestro número personal.",
        icon: "warning",
        confirmButtonText: "Entendido!",
      }).then(() => {
        localStorage.setItem("hasSeenAlert", "true");
      });
    }
  }, []);

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