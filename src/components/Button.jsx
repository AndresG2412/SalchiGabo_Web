export default function Button({img, titulo, color}) {

    const redirectToWhatsApp = () => {
        const phoneNumber = '3157870130';
        const message = encodeURIComponent('Hola! quisiera hacer un pedido por favor');
        const url = `https://wa.me/+57${phoneNumber}?text=${message}`;
        window.location.href = url;
    };

    return(
        <>
            <button 
                className={`border-2 border-black rounded-xl px-4 py-2 ${color} flex gap-3 font-bold uppercase mt-6 text-2xl items-center`}
                onClick={redirectToWhatsApp}
                >

                <img src={img} alt="img_boton" className="w-8 h-8"/>
                {titulo}
            </button>
        </>
    );
}