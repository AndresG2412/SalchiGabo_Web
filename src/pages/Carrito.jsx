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
      <Navbar />

      <div className="p-4">
        <h1 className="text-2xl font-bold">Carrito de Compras</h1>
        {cart.length === 0 ? (
          <p>No has añadido nada aún.</p>
        ) : (
          <ul>
            {cart.map((item, index) => (
              <li key={index} className="border-b py-2">
                {item.titulo} - ${item.precio}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}