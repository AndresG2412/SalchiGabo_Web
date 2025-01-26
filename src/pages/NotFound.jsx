export default function NotFound(){
    return(
        <div className="w-screen h-screen flex flex-col justify-center items-center text-2xl gap-y-6 text-white tracking-wider font-bold">
            <p className="border-b-2 border-white pb-1">Esta pagina no existe!</p>
            <p className="border-b-2 border-white pb-1">Vuelve por donde llegaste</p>
        </div>
    )
}