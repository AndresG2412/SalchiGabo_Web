import car from '../images/assets/car.png'
import menu from '../images/assets/menu.png'
import perfil from '../images/assets/perfil.png'

export default function Navbar() {
    return(
        <div className='w-1/12 flex flex-col items-center justify-center h-screen border-l-4 border-black fixed right-0' style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)' }}>
            <button><img src={car} alt="btn_navbar" className='w-14 my-8' /></button>
            <button><img src={perfil} alt="btn_navbar" className='w-14 my-8' /></button>
            <button><img src={menu} alt="btn_navbar" className='w-14 my-8' /></button>
        </div>
    )
}