
import React from 'react'
import { useState } from 'react';
import Header from './Header.';
import Items from './Items';
import AddItem from './AddItem';
import './Agenda.css'


function Calendar() {

    const [items, setItems] = useState([
        {
            id: 1,
            title: "Concierto de blues y jam session",
            description: "Los Gatos Vizcos visitan nuevamente La Coquette, el mejor bar de blues de Madrid.",
            img: "img",
            day: "Sábado",
            time: "21:00",
        },
        {
            id: 2,
            title: "Recital de poesía - Laura Mederos",
            description: "La poetisa canaria presenta su nuevo poemario: Pequeñita. Recitará varios de sus mejores poemas y conversará con el público en librería La Buena Vida ",
            img: "img",
            day: "Miércoles",
            time: "17:00",
        },
        {
            id: 3,
            title: "Exposición fotográfica",
            description: "Todo el mes de noviembre habrá una exposición especial de Chema Madoz en la galería Blanca Berlín, en Malasaña.",
            img: "img",
            day: "Viernes",
            time: "11:00",
        },


    ]);

    const addItem = (item) => {
        const id = Math.floor(Math.random() * 1000) + 1;

        const newItem = { id, ...item }

        setItems([...items, newItem])
    }

    const deleteItem = (id) => {
        setItems(items.filter((item) => item.id !== id))

    }

    return (
        <div className='container'>
            <div className='row justify-content-center'>
                <Header />
                <AddItem addItem={addItem} />
                <Items items={items} deleteItem={deleteItem} />
            </div>
        </div>
    )
}

export default Calendar;