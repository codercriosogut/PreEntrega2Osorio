import React from 'react';
import { Link } from 'react-router-dom';

function Personaje(props) {
    return (
        <div className="text-center">
            <h2>Detalle del personaje {props.character.name}</h2>
            <img src={props.character.image} alt={props.character.name} className="mx-auto" />
            <p>{props.character.species}</p>
            <p>vive en : {props.character.origin ? props.character.origin.name : "Desconocido"}</p>
            <Link to="/characters" className="btn btn-primary">Volver</Link>
        </div>
    );
}

export default Personaje;
