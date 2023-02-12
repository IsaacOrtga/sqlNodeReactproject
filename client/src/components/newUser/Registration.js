import React from 'react'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Hobbies from '../../assets/img/hobbies.png';

import './registration.css';
const Registration = () => {
    const navigate = useNavigate();
    const [name_u, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [alias, setAlias] = useState('');
    const [email, setEmail] = useState('');
    const [password_u, setPassword] = useState('');
    const [confirm_password, setConfirmPassword] = useState('');
    const [user, setUser] = useState('');



    const onSubmit = async (e) => {
        e.preventDefault();
        validateReg(name_u, surname, alias, email, password_u, confirm_password)
        const requestInfo = await {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name_u,
                surname,
                alias,
                email,
                password_u,
                confirm_password
            }),
        };
        await fetch("newUser", requestInfo)
            .then((response) => response.json())
            .then((res) => {
                if (res.status === true) {       
                    navigate('/dashboard');
                } else {
                    navigate('');
                }

            })
    }
    function validateReg(name_u, surname, alias, email, password_u, confirm_password) {
        const nameExpression = new RegExp(/[a-zA-Z\u00C0-\u017F]/);
        const surExpression = new RegExp(/[a-zA-Z\u00C0-\u017F]/);
        const aliasExpression = new RegExp(/[a-zA-Z\u00C0-\u017F]/);
        const emailExpression = new RegExp(/[^@]+@[^@]+\.[a-zA-Z]{2,}/);
        const passExpression = new RegExp(/(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6,10}/);
        if (!nameExpression.test(name_u) ||
            !surExpression.test(surname) ||
            !aliasExpression.test(alias) ||
            !emailExpression.test(email) ||
            !passExpression.test(password_u) ||
            password_u !== confirm_password) {
            alert('Datos no válidos')
        }
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
        <>
            
            <div className='generalContainerRegistration'>
                <div className='regContainer'>
                    <h3>Bienvenido a la comunidad de <span>Plans</span></h3>
                    <input
                        type="text"
                        name="name"
                        placeholder='nombre'
                        className="inputRegistration"
                        value={name_u}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="text"
                        name="surName"
                        placeholder='apellidos'
                        className="inputRegistration"
                        value={surname}
                        onChange={(e) => setSurname(e.target.value)}
                    />
                    <input
                        type="text"
                        name="alias"
                        placeholder='alias'
                        className="inputRegistration"
                        value={alias}
                        onChange={(e) => setAlias(e.target.value)}
                    />
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
                    <input
                        type="password"
                        name="confirmPass"
                        placeholder='repetir contraseña'
                        className="inputRegistration"
                        id="pass2"
                        title="Repita la contraseña"
                        value={confirm_password}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <label htmlFor="checkboxPass">Mostrar contraseñas</label>
                    <input
                        type="checkbox"
                        name='checkboxPass'
                        className="inputRegistration"
                        onClick={showPass}>
                    </input>
                    <Button
                        className='button ms-4 mt-2'
                        variant="success"
                        size="sm"
                        type="submit"
                        style={{ width: "30%" }}
                        onClick={onSubmit}>
                        Registrarse
                    </Button>

                </div>
                <div className='hobbieImageContainer'>
                    <img src={Hobbies} alt='hobbies' />
                    <a href="https://www.freepik.es/vector-gratis/persona-joven-aficiones-e-intereses-ilustrados_12979459.htm#query=hobbies&position=2&from_view=search&track=sph">Imagen de Freepik</a>
                </div>

            </div>
        </>
    )
};
export default Registration;