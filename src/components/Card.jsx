import pequeña from '../images/assets/sal_personal.png'
import mediana from '../images/assets/sp_g.png'
import grande from '../images/assets/sp_g1.png' 

export default function Card({titulo, descripcion, ruta}) {
    return(
        <div>
            <div className="mx-12 md:mx-0 mt-10 border-4 border-black rounded-xl py-6 px-6 md:flex md:w-[62rem] gap-8" style={{background: '#222'}}>
                <div className='flex justify-center'>
                    <img src={ruta} alt="img_salchipapa" className="rounded-xl w-36"/>
                </div>
                <div className='md:flex md:flex-col md:justify-center text-center md:text-left'>
                    <p className="font-bold text-xl md:text-3xl text-white md:mt-0 mt-6">{titulo}</p>
                    <p className="font-semibold text-base md:text-xl text-white mt-4">{descripcion}</p>
                </div>
            </div>
        </div>
    );
}