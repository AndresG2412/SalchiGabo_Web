// src/pages/Carrito.jsx
import React, { useContext } from "react";
import { CartContext } from "../CartContext";
import Navbar from "../components/Navbar";
import LogoSM from "../components/LogoSM";

export default function Carrito() {
  const { cart } = useContext(CartContext); // Usar el contexto

  return (
    <>
      <LogoSM />

      <div className="p-4">
        <h1 className="text-4xl font-bold text-white text-center mb-8">Carrito de Compras</h1>
        <div className="bg-white md:w-2/5 rounded-lg text-xl font-semibold font-nunito px-10 py-6">
          {cart.length === 0 ? (
            <p className="">No has añadido nada aún.</p>
          ) : (
            <div>
              <ul className="border-b-2 border-black">
                {cart.map((item, index) => (
                  <li key={index} className="py-2 border-t-2 border-black pl-3">
                    {item.titulo} - ${item.precio}
                  </li>
                ))}
              </ul>
              <p className="pt-2 pl-3">total:</p>
            </div>
          )}
        </div>
      </div>

      
      <Navbar />
    </>
  );
}