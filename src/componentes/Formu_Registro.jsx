import React from "react";
import { Link } from "react-router-dom";

const Formu_Registro = () => {
    return(
        <form action="" className="contenedor_formu_inicio_sesion">

            <p>Registro</p>

            <div>
                <input type="text" placeholder="Nombre Completo" required/>
                <input type="number" placeholder="Telefono" required/>
                <input type="email" placeholder="Correo" required/>
                <select name="" id="" required>
                    <option value="" hidden>Rol</option>
                    <option value="">Cliente</option>
                    <option value="">Vendedor</option>
                </select>
                <input type="password" placeholder="Contraseña" required/>
            </div>

            <div>
                <button>Registrarse</button>
                <p>¿Ya tienes una cuenta? <Link to={'/Inicio_Sesion'}>Inicia Sesion</Link></p>
            </div>
        </form>
    )
}

export default Formu_Registro