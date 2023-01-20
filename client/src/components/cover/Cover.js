import React from 'react'
import Login from '../login/Login';
import './cover.css';


const Cover = () => {
    return (
        <div>
            <div className='divisor'>
            <h2 className='title'>Busca tus propias experiencias</h2>
                <div className='login'>
                    

                    <Login />

                </div>

            </div>



        </div>
    )
}

export default Cover;