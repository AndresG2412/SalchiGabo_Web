//importaciones necesarias front-end
import Navbar from "../components/Navbar"
import LogoSM from "../components/LogoSM"

export default function Carrito(){
    return(
        <>
            <LogoSM />

            <p>Bienvenido a tu Carrito!</p>

            <div className="bg-red-300">
                <p>tu carrito esta vacio!</p>
                <p>Vuelve al menu y añade loq ue deseas pedir</p>
            </div>

            <Navbar />
        </>
    )
}