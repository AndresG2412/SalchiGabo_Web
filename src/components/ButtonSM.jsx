import wpp from '../images/whatsapp.png';

export default function ButtonSM() {

    const redirectToWhatsApp = () => {
        const phoneNumber = '3157870130';
        const message = encodeURIComponent('Hola! quisiera hacer un pedido por favor');
        const url = `https://wa.me/+57${phoneNumber}?text=${message}`;
        window.location.href = url;
    };

    return(
        <div className='flex flex-col items-center'>
            <div className='my-8 flex flex-col items-center'>
                <video className="w-2/3 md:hidden rounded-2xl shadow-xl border-2 border-white" src="/video/video.mp4" controls/>
                <p className='mt-2 text-white font-semiboldtext-xl border-b-2 border-white py-1'>Adicion de queso por solo $2000 pesos!</p>
            </div>

            <div className='block'>
                <button 
                    className={`md:hidden border-2 border-black rounded-xl px-4 py-2 bg-green-500 flex gap-3 font-bold uppercase mt-6 text-2xl items-center`}
                    onClick={redirectToWhatsApp}
                    >
                    <img src={wpp} alt="img_boton" className="w-8 h-8"/>
                    HACER PEDIDO
                </button>
            </div>

            <p className='mt-6 font-semibold tracking-wide text-xl pb-2 border-b-2 border-white text-white text-center'>Envio $2000 pesos!</p>
        </div>
    );
}