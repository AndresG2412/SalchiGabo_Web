import car from '../images/assets/car.png'
import menu from '../images/assets/menu.png'
import perfil from '../images/assets/perfil.png'

export default function NavbarMD() {
    return(
        <div className='hidden md:min-w-[8%] lg:min-w-[6%] md:flex flex-col items-center justify-center md:h-screen border-l-4 border-black right-0' style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)' }}>
            <button><img src={car} alt="btn_navbar" className='lg:w-14 md:w-10 lg:my-8 md:my-5'/></button>
            <button><img src={perfil} alt="btn_navbar" className='lg:w-14 md:w-10 lg:my-8 md:my-5'/></button>
            <button><img src={menu} alt="btn_navbar" className='lg:w-14 md:w-10 lg:my-8 md:my-5'/></button>
        </div>
    )
}