import React from 'react'

const ItemListContainer = (saludo) => {

    console.log(saludo.prueba);
  return (
    <div>
        <h2>Bienvenidos/as a MAYO ETERNO, emprendimiento de {saludo.rubro}</h2>
        <p>Mayo Eterno fue creado por {saludo.datos.nombre}, en {saludo.pais}, inspirada por las poesías que su madre le recitaba. Luego de trabajar muchos años como {saludo.datos.ocupacion}, a modo de entretenimiento, decidió empezar a hacer jabones con sus nietas y su hija menor. </p>
    </div>
  )
}

export default ItemListContainer;

