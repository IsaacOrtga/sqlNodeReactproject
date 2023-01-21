import React from 'react'
import { useState } from 'react';
// import { useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './registration.css';
const Registration = () => {
    // const navigate = useNavigate()
    const [name, setName] = useState('');
    const [surName, setSurName] = useState('');
    const [alias, setAlias] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const onSubmit = (e) => {
        e.preventDefault();
        console.log([name, surName, alias, email, pass, confirmPass])
        validateReg(name, surName, alias, email, pass, confirmPass)
    }
    function validateReg(name, surName, alias, email, pass, confirmPass) {
        const nameExpression = new RegExp(/[a-zA-Z\u00C0-\u017F]/);
        const surExpression = new RegExp(/[a-zA-Z\u00C0-\u017F]/);
        const aliasExpression = new RegExp(/[a-zA-Z\u00C0-\u017F]/);
        const emailExpression = new RegExp(/[^@]+@[^@]+\.[a-zA-Z]{2,}/);
        const passExpression = new RegExp(/(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6,16}/); 
        if(!nameExpression.test(name) ||
        !surExpression.test(surName) ||
        !aliasExpression.test(alias) ||
        !emailExpression.test(email) ||
        !passExpression.test(pass) ||
        pass !== confirmPass) 
        {
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
        <div className='generalContainerRegistration'>
            <div className='regContainer'>
                <h3>Bienvenido a la comunidad de <span>Plans</span></h3>
                <form onSubmit={onSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder='nombre'
                        className="inputRegistration"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <input
                        type="text"
                        name="surName"
                        placeholder='apellidos'
                        className="inputRegistration"
                        value={surName}
                        onChange={e => setSurName(e.target.value)}
                    />
                    <input
                        type="text"
                        name="alias"
                        placeholder='alias'
                        className="inputRegistration"
                        onChange={e => setAlias(e.target.value)}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder='e-mail'
                        className="inputRegistration"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        name="pass"
                        placeholder='contraseña'
                        className="inputRegistration"
                        id="pass1"
                        value={pass}
                        onChange={e => setPass(e.target.value)}
                    />
                    <input
                        type="password"
                        name="confirmPass"
                        placeholder='repetir contraseña'
                        className="inputRegistration"
                        id="pass2"
                        value={confirmPass}
                        onChange={e => setConfirmPass(e.target.value)}
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
                        style={{ width: "30%" }}>
                        Enviar
                    </Button>
                </form>
            </div>
        </div>
    )
};
export default Registration;