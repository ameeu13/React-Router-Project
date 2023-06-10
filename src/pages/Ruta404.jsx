import image from "../assets/img/doguito404.svg"
import "../assets/css/404.css"

const Ruta404 = () =>{
    return(
        <main className="container flex flex--center flex--column">
            <img className="dog-image" src={image} alt="Doguito" />
            <p className="notfound-text">Esta ruta no existe, por favor vuelva a la página principal</p>
        </main>
    )
}

export default Ruta404