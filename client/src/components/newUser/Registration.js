import React from 'react'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './registration.css';
const Registration = () => {
    const navigate = useNavigate()
    const [ name, setName ] = useState('');
    const [ surName, setSurName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ pass, setPass ] = useState('');
    const [ confirm, setConfirm ] = useState('');
    const createNewUser = async () =>{
        const connectionExpress = await fetch({
            method: 'POST',
            body: JSON.stringify(),
            headers: {

            }
        });
        return await connectionExpress.json();
    }
    function showPass() {
        var tipo = document.getElementById("pass1");
        var tipo2 = document.getElementById("pass2");
        if (tipo.type === "password" || tipo2.type === "password") {
            tipo.type = "text";
            tipo2.type = "text";
        } else {
            tipo.type = "password";
            tipo2.type = "password"
        }
    };
    return (
        <div className='generalContainerRegistration'>
        <div className='regContainer'>
        <h3>Bienvenido a la comunidad de <span>Plans</span></h3>

            <input type="text" name="name" placeholder='nombre' className="inputRegistration"></input>
            <input type="text" name="surName" placeholder='apellidos' className="inputRegistration"></input>
            <input type="text" name="nick" placeholder='alias' className="inputRegistration"></input>
            <input type="email" name="email" placeholder='e-mail' className="inputRegistration"></input>
            <input type="password" name="pass" placeholder='contraseña' className="inputRegistration" id="pass1"></input>
            <input type="password" name="confirmPass" placeholder='repetir contraseña' className="inputRegistration" id="pass2"></input>
            <Form.Check type="checkbox" label="Mostrar contraseña" className='checkPass ms-4 mt-2' onClick={showPass} />
            <Button className='button ms-4 mt-2' variant="success" size="sm" type="submit" style={{ width: "30%" }} onClick={ regValidation }>
                Enviar
            </Button> 
        </div>
        </div>
    )
};
export default Registration;