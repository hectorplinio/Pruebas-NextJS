
import 'tailwindcss/tailwind.css'
import Link from "next/link"
export default function hola({ userName }){
    return (
    <>
    <main className="central">
    <div className="cabecera">
        <h1 className="tituloHola">Esta es la página de hola de {userName}</h1>
    </div>
        <div className="botones">
            <button className="boton"><Link href="/"><a>Volver!</a></Link>
            </button>
        </div>
    </main>
    <footer>
        <img src="https://cdn.motor1.com/images/mgl/0lKr3/s3/liberty-walk-wants-to-sell-you-a-73-570-nissan-gt-r-body-kit.jpg" className="coche"></img>
    </footer>
    </>
    )
}
//Este metodo carga esta funcion en el servidor antes de carga la pagina
//Se puede poner async antes de los parentesis para cargar mas datos
//Tambien se puede poner Promise.resolve({userName: "hector"})
hola.getInitialProps = () => {
    //Esto es para pasarle el valor estatico
    //return { userName: "hector"}
    //Usamos esto para pasarle los valores por una api en un documento
    return fetch('http://localhost:3000/api/hello')
        .then(res => res.json())
        .then(response => {
            const {userName} = response
            return {userName}
        })
}