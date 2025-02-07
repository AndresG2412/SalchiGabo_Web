import Navbar from "../components/Navbar"

export default function NotFound(){
    return(
        <div className="w-screen h-screen flex flex-col justify-center items-center gap-y-6 ">
            <p className="border-b-2 text-2xl border-white pb-1 text-white tracking-wider font-bold">Esta pagina no existe!</p>
            <p className="border-b-2 text-2xl border-white pb-1 text-white tracking-wider font-bold">Vuelve por donde llegaste</p>
            <Navbar />
        </div>

    )
}