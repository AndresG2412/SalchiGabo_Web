export default function Button({img, titulo, color}) {
    return(
        <>
            <button className={`border-2 border-black rounded-xl px-4 py-2 ${color} flex gap-3 font-bold uppercase mt-6 text-2xl items-center`}>
                <img src={img} alt="img_boton" className="w-8 h-8"/>
                {titulo}
            </button>
        </>
    );
}