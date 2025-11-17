import React from "react";
import '../componentes/css/Formu_Inicio_Sesion.css'
import { Link } from "react-router-dom";

const Formu_Inicio_Sesion = () => {
    return(
        <form action="" className="contenedor_formu_inicio_sesion">

            <p>Inicio de Sesión</p>

            <div>
                <input type="email" placeholder="Correo" required/>
                <input type="password" placeholder="Contraseña" required/>
            </div>

            <div>
                <button>Entrar</button>
                <p>¿No tienes una cuenta? <Link to={'/Registrarse'}>Registrate</Link></p>
            </div>
        </form>
    )
}

export default Formu_Inicio_Sesion