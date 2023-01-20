import React from 'react'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const Registration = () => {

    const navigate = useNavigate()
    const [ name, setName ] = useState('');
    const [ surName, setSurName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ pass, setPass ] = useState('');
    const [ confirm, setConfirm ] = useState('');
  

    const regValidation = event => {

        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                nameReg: name,
                surNameReg: surName,
                emailReg: email,
                passReg: pass,
                confirmPass: confirm,
            }),
        };
        
        fetch("user", requestOptions)
        .then((response) => response.json())
        .then((res) => {

            if (res.user) {
            localStorage.setItem('email', email);
                        alert('El registro se ha realizado con éxito. Bienvenid@')
                        navigate('/')

            }
            else {

                alert('Datos no válidos')

            }
            


        })
    }




    function showPass() {
        var tipo = document.getElementById("pass");
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
        <div className='regContainer' style={{ border: "1px solid black", height: 520, margin: "0 auto", width: "28%" }}>

            <FloatingLabel
                style={{ width: 300 }}
                controlId="floatingInput"
                label="Nombre"
                className="mb-3 mt-4 ms-4">
                <Form.Control
                    type="text"
                    placeholder="Nombre"
                    onChange={(e) => setName(e.target.value)}
                    required
                />
    
            </FloatingLabel>

            <FloatingLabel
                style={{ width: 300 }}
                controlId="floatingInput"
                label="Apellidos"
                className="mb-3 mt-4 ms-4">
                <Form.Control
                    type="text"
                    placeholder="Apellidos"
                    onChange={(e) => setSurName(e.target.value)}


                />
            </FloatingLabel>

            <FloatingLabel
                style={{ width: 300 }}
                controlId="floatingInput"
                label="Email"
                className="mb-3 mt-4 ms-4">
                <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    onChange={(e) => setEmail(e.target.value)}


                />
            </FloatingLabel>

            <FloatingLabel
                style={{ width: 300 }}
                controlId="floatingInput"
                label="Contraseña"
                className="mb-3 mt-4 ms-4">
                <Form.Control
                    id='pass'
                    type="password"
                    placeholder="Contraseña"
                    onChange={(e) => setPass(e.target.value)}


                />
            </FloatingLabel>

            <FloatingLabel
                style={{ width: 300 }}
                controlId="floatingPassword"
                label="Confirmar contraseña"
                className="mb-3 mt-4 ms-4">
                <Form.Control
                    id='pass2'
                    type="password"
                    placeholder="Contraseña"
                    onChange={(e) => setConfirm(e.target.value)}


                />
            </FloatingLabel>

            <Form.Check type="checkbox" label="Mostrar contraseña" className='ms-4 mt-2' onClick={showPass} />


            <Button className='ms-4 mt-2' variant="success" size="sm" type="submit" style={{ width: "30%" }} onClick={ regValidation }>
                Iniciar sesión
            </Button>

        </div>
    )
}


export default Registration;