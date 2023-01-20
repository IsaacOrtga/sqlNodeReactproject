// import { React, useState } from "react";
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from "react-bootstrap/Form";


const Search = () => {
  const [places, setPlaces] = useState("");
  const [activity, setActivity] = useState('');
  const [caracteristic, setCaracteristic] = useState('');
  const [name, setName] = useState('');

  const search = (req, res, next) => {
    console.log('funciona')
    const requestSearch = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        activity: activity,
        caracteristic: caracteristic,

      }),
    };

    fetch("findplaces", requestSearch)
      .then((response) => response.json())
      .then(response => {
        setPlaces(response)
        console.log(response)
      })
  }
  return (
    <div style={{ width: "30%", paddingLeft: "5%" }}>
      <Form className='form'>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" placeholder="Ejemplo: La Libre" onChange={(e) => setName(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formActivity">
          <Form.Label>Actividad</Form.Label>
          <Form.Control type="text" placeholder="Ejemplo: Restaurante" onChange={(e) => setActivity(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formCaracteristic">
          <Form.Label>Característica</Form.Label>
          <Form.Control type="text" placeholder="Ejemplo: Pet friendly" onChange={(e) => setCaracteristic(e.target.value)} />
        </Form.Group>

        <Button variant="success" size="sm" type="submit" style={{ width: "30%" }} onClick={search}>
          Buscar
        </Button>
      </Form>
      {places ? places.map((todo, i) =>
        <div id="resultadosB"> <p>Nombre: {todo.name}</p>
          ,<p>Actividad: {todo.activities}</p> <p>Características: {todo.caracteristics}</p>
          <p>Dirección:  {todo.adress}</p> <p>Horario: {todo.schedule}</p> <p>Contacto: {todo.contact}</p></div>) : " "}
    </div>
  );
};

export default Search;
