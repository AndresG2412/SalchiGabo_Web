import Menu from  "../images/assets/menu.png"
import Carro from  "../images/assets/car.png"

export default function Navbar(){
    return(
        <div className="md:w-1/4 bg-gray-200 shadow-2xl rounded-xl flex justify-between items-center mx-auto mt-12">
            <button className="px-4 py-2 mx-10 flex items-center hover:bg-gray-400 hover:scale-125 rounded-lg"><img src={Menu} alt="icon_navbar" className="w-8 mr-3"/>Menu</button>
            <button className="px-4 py-2 mx-10 flex items-center hover:bg-gray-400 hover:scale-125 rounded-lg"><img src={Carro} alt="icon_navbar" className="w-8 mr-3"/>Carrito</button>
        </div>
    )
}