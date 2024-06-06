import React from 'react'
const Register = () => {
    return(
        <div className='r-container'>
            <span>Plus chat</span>
            <span>Registro</span>
            <form action="">
                <input type="text" placeholder='Nombre'/>
                <input type="email" placeholder='Mail'/>
                <input type="pasword" placeholder='Contraseña'/>
                <button>Registrarse</button>
            </form>
            <p>Ya tienes una cuenta? Login</p>
        </div>
    )
}
export default Register