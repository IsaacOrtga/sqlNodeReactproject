import React, { useEffect } from 'react'
import { useState } from 'react';


const AddItem = ({addItem}) => {

    const[title, setTitle] = useState('');
    const[description, setDescription] = useState('');
    const[day, setDay] = useState('');
    const[time, setTime] = useState('');

    useEffect(() => {

        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "aplication/json" },
            body: JSON.stringify({
                title: title,
                description: description,
                day: day,
                time: time
            }),
        };
        
        fetch("/getagenda", requestOptions)
        .then((res) => res.json()
        .then((res) => {
            setTitle(res)
            setDescription(res)
            setDay(res)
            setTime(res)
        }))

    })

   const onSubmitItem = (e) => {
       //Cancelar envío:
       e.preventDefault()
       //Validar datos:
       if(!title){
           alert('Por favor, añada un título');
           return
       }
       if(!description){
           alert('Por favor, añada una descripción')
           return
       }
       //Ejecutar función prop: addItem
    //    addItem({title, description, day, time})
       //Limpiar formulario
       setTitle('')
       setDescription('')
       setDay('')
       setTime('')
   }

  return (
    <div className="col-sm-10">
    <div className="card bg-form-dark">
        <div className="card-header">
            <h2 className="text-muted">Creador de eventos</h2>
        </div>
        <div className="card-body">
            <form onSubmit={ onSubmitItem }>
                <div className='form-group'>
                    <label>Título</label>
                    <input
                        type='text'
                        placeholder='Título del evento'
                        className="form-control"
                        value={title}
                        onChange={ (e) => setTitle(e.target.value) }
                    />
                </div>
                <div className='form-group'>
                    <label>Descripción</label>
                    <input
                        type='text'
                        placeholder='Descripción del evento'
                        className="form-control"
                        value={description}
                        onChange={ (e) => setDescription(e.target.value)}
                    />
                </div>
                
                <div className="form-group mt-4">
                    <select
                        name="day"
                        className="form-control"
                        value={day}
                        onChange={ (e) => setDay(e.target.value)}
                    >
                        <option value="">-- Elegir Día --</option>
                        <option value="Lunes">Lunes</option>
                        <option value="Martes">Martes</option>
                        <option value="Miércoles">Miércoles</option>
                        <option value="Jueves">Jueves</option>
                        <option value="Viernes">Viernes</option>
                        <option value="Sábado">Sábado</option>
                        <option value="Domingo">Domingo</option>
                    </select>
                </div>
                <div className='form-group'>
                    <label>Hora</label>
                    <input
                        type='time'
                        className="form-control"
                        value={time}
                        onChange={ (e) => setTime(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="submit"
                        className="btn btn-primary btn-add-item"
                        value="Añadir evento"
                    />
                </div>
            </form>
        </div>
    </div>
</div>
  )
}

export default AddItem;
