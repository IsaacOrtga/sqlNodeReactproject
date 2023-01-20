import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function Login() {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    function sendLogin() {

        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                emailLog: email,
                passLog: pass

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
        var tipo = document.getElementById("pass");
        if (tipo.type === "password") {
            tipo.type = "text";
        } else {
            tipo.type = "password";
        }
    };


    return (
        <div className='loginContainer' style={{ border: "1px solid black", height: 270, margin: "0 auto", width: "28%" }}>

            <FloatingLabel
                style={{ width: 300 }}
                controlId="floatingInput"
                label="Dirección de e-mail"
                className="mb-3 mt-4 ms-4">
                <Form.Control
                    type="email"
                    placeholder="name@example.com"
                onChange={(e) => setEmail(e.target.value)}
                />
            </FloatingLabel>

            <FloatingLabel
                style={{ width: 300 }}
                controlId="floatingPassword"
                label="Contraseña"
                className="mb-3 mt-4 ms-4">
                <Form.Control
                    id="pass"
                    type="password"
                    placeholder="Password"
                onChange={(e) => setPass(e.target.value)}
                />
            </FloatingLabel>

            <Form.Check type="checkbox" label="Mostrar contraseña" className='ms-4 mt-2' onClick={showPass} />


            <Button className='ms-4 mt-2' variant="success" size="sm" type="submit" style={{ width: "30%" }} onClick={ sendLogin }>
                Iniciar sesión
            </Button>

            <a id="recovery" className='ms-3' href='#'>He olvidado mi contraseña</a>

        </div>
    );
}

export default Login;