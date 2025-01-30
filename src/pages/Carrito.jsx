// src/pages/Carrito.jsx
import React, { useContext } from "react";
import { CartContext } from "../CartContext";
import Navbar from "../components/Navbar";
import LogoSM from "../components/LogoSM";

export default function Carrito() {
  const { cart } = useContext(CartContext); // Usar el contexto

  // Calcula el total usando reduce
  const total = cart.reduce((acumulador, producto) => acumulador + parseFloat(producto.precio), 0);
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
              <p className="py-2 pl-3">Total: ${total}.000</p> {/* Interpolación para mostrar el símbolo $ */}
            </div>
          )}
        </div>
      </div>

      <Navbar />
    </>
  );
}