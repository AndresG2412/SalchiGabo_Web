import img_cartel from '../images/logoCartel.png';
import Button from './Button';
import wpp from '../images/whatsapp.png';
import gmail from '../images/gmail.png';

export default function Panel() {
    return (
        <div
            className="hidden md:px-8 md:flex flex-col items-center justify-center h-screen border-r-4 border-black"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)' }}
        >
            {/* Imagen escalable */}
            <img
                src={img_cartel}
                className="w-[150px] sm:w-[200px] md:w-[250px] lg:w-[320px] transition-all duration-300 mx-12"
                alt="Logo Cartel"
            />
            {/* Texto responsivo */}
            <p className="w-64 sm:w-72 md:w-80 mt-4 text-lg sm:text-xl md:text-2xl font-bold text-center">
                Salchipapas inspiradas en las originales, traídas directamente de
                la sucursal del cielo a Pitalito con todo el cariño del mundo
            </p>
            {/* Botones */}
            <Button color={'bg-green-500'} titulo={'Whatsapp'} img={wpp} />
            {/* <Button color={'bg-red-500'} titulo={'Correo'} img={gmail} /> */}
            <p className='mt-6 font-semibold tracking-wide text-xl pb-2 border-b-2 border-black text-center'>Envio $1000 mil pesos!</p>
        </div>
    );
}
