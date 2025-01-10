import React from "react";
import car from '../images/assets/car.png'
import menu from '../images/assets/menu.png'
import perfil from '../images/assets/perfil.png'

export default function NavbarSM() {
    return(
        <div className="fixed md:hidden w-screen bg-white flex gap-4 justify-between bottom-0 py-4 border-t-4 border-black shadow-2xl">
            <img src={car} alt="car_img" className="w-12 mx-auto my-2"/>
            <img src={menu} alt="car_img" className="w-12 mx-auto my-2"/>
            <img src={perfil} alt="car_img" className="w-12 mx-auto my-2"/>
        </div>
    );
}