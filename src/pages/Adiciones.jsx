// src/pages/Adiciones.jsx
import React, { useContext, useState } from "react";
import { CartContext } from "../CartContext";
import Navbar from "../components/Navbar";
import LogoSM from "../components/LogoSM";
import { useNavigate } from "react-router";

export default function Adiciones() {
  const { cart, adiciones, addAdicion, removeAdicion } = useContext(CartContext);
  const navigate = useNavigate();

  // Estado local para manejar las adiciones seleccionadas
  const [selectedAdiciones, setSelectedAdiciones] = useState([]);

  // Precio de cada adición
  const precioAdicion = 3;

  // Calcular el total del carrito
  const totalCarrito = cart.reduce((acc, item) => acc + parseFloat(item.precio), 0);

  // Calcular el total de adiciones
  const totalAdiciones = selectedAdiciones.length * precioAdicion;

  // Calcular el total general
  const totalGeneral = totalCarrito + totalAdiciones;

  // Manejar la selección de adiciones
  const handleAdicionChange = (adicion) => {
    if (selectedAdiciones.includes(adicion)) {
      setSelectedAdiciones(selectedAdiciones.filter((item) => item !== adicion));
      removeAdicion(adicion);
    } else {
      setSelectedAdiciones([...selectedAdiciones, adicion]);
      addAdicion(adicion);
    }
  };

  // Función para enviar el pedido por WhatsApp
  const factura = () => {
    const phoneNumber = '3157870130'; // Número de teléfono de WhatsApp

    // Crear el mensaje con los productos, adiciones y el total
    const productos = cart.map((item) => `${item.titulo} - $${item.precio}`).join("\n");
    const adicionesTexto = selectedAdiciones.map((adicion) => `${adicion} - $${precioAdicion}.000`).join("\n");
    const message = encodeURIComponent(
      `Hola! Quisiera hacer un pedido, por favor:\n\n**Productos:**\n${productos}\n\n**Adiciones:**\n${adicionesTexto}\n\n**Total:** $${totalGeneral}.000\n\n¿Podrías ayudarme con esto?`
    );

    // Crear la URL de WhatsApp
    const url = `https://wa.me/+57${phoneNumber}?text=${message}`;

    // Redireccionar a WhatsApp
    window.location.href = url;
  };

  return (
    <div className="h-screen flex flex-col justify-center">
      <LogoSM />
      <div className="md:w-2/5 bg-white mx-auto rounded-lg border-2 border-b-4 border-black flex flex-col items-center text-center gap-y-4 py-8 text-xl font-semibold tracking-wide">
        <div className="text-2xl font-bold tracking-wider border-b-4 border-slate-900 pb-2">
          <p>¿Deseas alguna adición?</p>
          <p>Solo por $3.000 en tu pedido!</p>
        </div>

        {[
          "Queso Fundido",
          "Tocineta Crujiente",
          "Huevos de Codorniz (x6)",
          "Medallones de Plátano Dulce",
        ].map((adicion, index) => (
          <label key={index} className="flex items-center gap-x-2 hover:cursor-pointer hover:scale-110 hover:transition-all select-none">
            <input
              type="checkbox"
              checked={selectedAdiciones.includes(adicion)}
              onChange={() => handleAdicionChange(adicion)}
              className="hover:cursor-pointer"
            />
            {adicion}
          </label>
        ))}

        <p className="mt-4 text-lg">Total Adiciones: ${totalAdiciones}.000</p>
        <p className="text-lg font-bold">Total General: ${totalGeneral}.000</p>

        <button
          onClick={factura}
          className="mt-6 border-2 border-b-4 border-black py-2 px-4 text-xl tracking-wide font-bold rounded-lg hover:cursor-pointer hover:scale-110 hover:transition-all uppercase bg-green-200"
        >
          Hacer Pedido!
        </button>
      </div>
      <Navbar />
    </div>
  );
}