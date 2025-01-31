// src/pages/Carrito.jsx
import React, { useContext } from "react";
import { CartContext } from "../CartContext";
import Navbar from "../components/Navbar";
import LogoSM from "../components/LogoSM";

export default function Carrito() {
  const { cart } = useContext(CartContext); // Usar el contexto

  // Calcula el total usando reduce
  const total = cart.reduce((acumulador, producto) => acumulador + parseFloat(producto.precio), 0);

  const hacerPedido = () => {
    const phoneNumber = '3157870130'; // Número de teléfono de WhatsApp

    // Crear el mensaje con los productos y el total
    const productos = cart.map((item) => `${item.titulo} - $${item.precio}`).join("\n");
    const message = encodeURIComponent(
      `Hola! Quisiera hacer un pedido, por favor:\n\n${productos}\n\nTotal: $${total}.000\n\n¿Podrías ayudarme con esto?`
    );

    // Crear la URL de WhatsApp
    const url = `https://wa.me/+57${phoneNumber}?text=${message}`;

    // Redireccionar a WhatsApp
    window.location.href = url;
  };

  const hacerAdiciones = () => {
    console.log("adiciones realizadas!");
  };

  return (
    <>
      <LogoSM />

      <div className="p-4">
        <h1 className="text-4xl font-bold text-white text-center mb-8">Carrito de Compras</h1>
        <div className="bg-white md:w-2/5 rounded-lg text-xl font-semibold font-nunito px-10 py-6 mx-auto tracking-wide">
          {cart.length === 0 ? (
            <p className="">No has añadido nada aún.</p>
          ) : (
            <div className="border-b-2 border-black text-center">
              <ul className="border-b-2 border-black text-[#222]">
                {cart.map((item, index) => (
                  <li key={index} className="py-2 border-t-2 border-black pl-3">
                    {item.titulo} - ${item.precio}
                  </li>
                ))}
              </ul>
              <p className="py-2 pl-3 border-b-2 border-black">Total: ${total}.000</p>
              <div className="flex gap-x-6 items-center justify-center">
                <button
                  onClick={hacerPedido}
                  className="bg-red-100 border-2 border-black px-4 py-2 rounded-lg my-5 md:text-xl border-b-4 hover:scale-110 hover:transition-all"
                >
                  HACER PEDIDO
                </button>
                <button
                  onClick={hacerAdiciones}
                  className="bg-green-100 border-2 border-black px-4 py-2 rounded-lg my-5 md:text-xl border-b-4 hover:scale-110 hover:transition-all"
                >
                  AÑADIR ADICIONES
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <Navbar />
    </>
  );
}