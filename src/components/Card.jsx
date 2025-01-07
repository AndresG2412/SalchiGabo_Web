import salchipapa from '../images/assets/sal_personal.png'

export default function Card({titulo, descripcion}) {
    return(
        <div>
            <div className="mt-10 border-4 border-black rounded-xl py-6 px-6 flex w-24 md:w-[62rem] gap-8" style={{background: '#222'}}>
                <div>
                    <img src={salchipapa} alt="img_salchhipapa" className="hidden md:block rounded-xl w-36"/>
                </div>
                <div className='hidden md:flex md:flex-col md:justify-center'>
                    <p className="font-bold text-xl md:text-3xl text-white">{titulo}</p>
                    <p className="font-semibold text-base md:text-xl text-white">{descripcion}</p>
                </div>
            </div>
        </div>
    );
}