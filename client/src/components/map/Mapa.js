import React from "react";
import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import './Mapa.css'
// import  Markers  from "./Markers";

import LocationMarker from "./currentLocation";
import { IconLocation } from "./IconLocation";
import { IconLocation2 } from "./IconLocation2";


const Mapa = () => {
  const [state, setstate] = useState({
    currentLocation: { lat: '', lng: '' }
  })

  const coordenadas1 = [40.40782970990049, -3.6964112478083484]
  const coordenadas2 = [40.4274113, -3.7043471]



  return (
    <div id="contenedor-leaflet">
      <MapContainer center={state.currentLocation} zoom={13} scrollWheelZoom={true}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={coordenadas1} icon={IconLocation2}>
          <Popup><h3>Café La Libre</h3>Un café de diseño en el barrio de Lavapiés, donde ofrecen desayunos, menús, y por la noche se convierte en bar de copas. Puedes entrar con tu mascota y sentarte a disfrutar de algunos de los libros que tienen repartidos por el local </Popup>
        </Marker>
        <Marker position={coordenadas2} icon={IconLocation2}>
          <Popup><h3>Café La Libre</h3>Un café de diseño en el barrio de Lavapiés, donde ofrecen desayunos, menús, y por la noche se convierte en bar de copas. Puedes entrar con tu mascota y sentarte a disfrutar de algunos de los libros que tienen repartidos por el local </Popup>
        </Marker>
        <LocationMarker />
      </MapContainer>
    </div>

  )
}

export default Mapa;