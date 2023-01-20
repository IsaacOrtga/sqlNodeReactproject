import React from 'react'
import Img from '../../assets/img/agenda.jpg';
import './Agenda.css'

import { FaTrash } from 'react-icons/fa';

const Item = ({item, deleteItem}) => {
    return (
        <div className='col-sm-10 mt-5 p-3' key={item.id}>
            
            <h6>{item.day}</h6>
            <div className='row item'>
                <div className='col-sm-3'>
                    <img className='img-fluid p-0 pray' src={ Img } alt='Categoría'></img>
                </div>
                <div className='col-sm-8'>
                    <h5>{item.title}</h5> 
                    <p>{item.description}</p></div>
                <div className='col-sm-1 align-self-center p-2 text-center'>
                    <FaTrash 
                    style={ {color: '#efeff1', cursor: 'pointer'} }
                    onClick={() => deleteItem(item.id)}
                    />
                    
                </div>
            </div>
        </div>
    )
}

export default Item;