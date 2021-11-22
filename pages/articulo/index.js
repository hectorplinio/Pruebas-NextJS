import Head from 'next/head'
import Image from 'next/image'
import 'tailwindcss/tailwind.css'
import Link from "next/link"
export default function hola(){
    return (
    <>
    <main className="central">
    <div className="cabecera">
        <h1 className="tituloHola">Esta es la página de articulo</h1>
    </div>
        <div className="botones">
            <button className="boton">
                <Link href="/"><a>Volver!</a></Link>
            </button>
    </div>      
    </main>
    <footer>
        <img src="https://www.autonocion.com/wp-content/uploads/2019/12/Nissan-GT-R-Liberty-Walk-4.jpeg" className="coche"></img>
    </footer>
    </>
    )
}