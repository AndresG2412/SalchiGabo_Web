import img_cartel from '../images/logoCartel.png'
import Button from './Button';
import wpp from '../images/whatsapp.png'
import gmail from '../images/gmail.png'

export default function BoxIzq() {
    return(
        <div className='w-[30%] flex flex-col items-center justify-center h-screen border-r-4 border-black ' style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)' }}>
            <img src={img_cartel} className='w-80 '/>
            <p className='w-80 mt-4 text-2xl font-bold text-center'>
                Salchipapas inspiradas en las originales, traídas directamente de la sucursal del cielo a Pitalito con todo el cariño del mundo
            </p>
            <Button color={'bg-green-500'} titulo={'Whatsapp'} img={wpp}/>
            <Button color={'bg-red-500'} titulo={'Correo'} img={gmail}/>
        </div>
    );
}