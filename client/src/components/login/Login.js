import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import './login.css';
function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password_u, setPassword] = useState('');
    function loggedIn() {
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email,
                password_u,

            }),
        };
        fetch('login', requestOptions)
            .then((response) => response.json())
            .then((res) => {


                if (res.loggedIn) {
                    localStorage.setItem('email', email)
                    navigate('/')
                }
                else {
                    alert('Usuario no registrado')
                }
            });
    }
    function showPass() {
        var tipo = document.getElementById("pass1");
        if (tipo.type === "password") {
            tipo.type = "text";
        } else {
            tipo.type = "password";
        }
    };
    return (
        <div className='generalLoginContainer'>
            <div className='loginContainer'>

                <input
                    type="email"
                    name="email"
                    placeholder='e-mail'
                    className="inputRegistration"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    name="pass"
                    placeholder='contraseña'
                    className="inputRegistration"
                    id="pass1"
                    pattern="(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6,16}"
                    title="La contraseña ha de tener al menos una mayúscula, minúculas y un número. Mínimo 6 caracteres, máximo 16."
                    value={password_u}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <label htmlFor="checkboxPass">Mostrar contraseñas</label>
                <input
                    type="checkbox"
                    name='checkboxPass'
                    className="inputRegistration"
                    onClick={showPass}
                />
                <Button className='ms-4 mt-2' variant="success" size="sm" type="submit" style={{ width: "30%" }} onClick={loggedIn}>
                    Iniciar sesión
                </Button>
                <a id="recovery" href='#'>He olvidado mi contraseña</a>

            </div>
            <a href="https://www.freepik.es/vector-gratis/equipo-negocios-armando-rompecabezas-aislado-ilustracion-vectorial-plana-socios-dibujos-animados-que-trabajan-conexion-concepto-trabajo-equipo-asociacion-cooperacion_10606197.htm#query=comunidad&position=2&from_view=search&track=sph">Imagen de pch.vector en Freepik</a> 
        </div>
    );
}

export default Login;