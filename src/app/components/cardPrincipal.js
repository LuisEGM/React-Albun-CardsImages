import React from "react";
import "./styles/cardPrincipal.css";

const CardPrincipal = ({ title }) => (

    <div className="card ancho">
        <img className="card-img-top" src="https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"  alt="Card image cap" alt="Card image cap"/>
        <div className="card-body">
            <h5 className="tituloCard">{title}</h5>
            <p className="textCard">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <div className="row">
                <a href="#" className="btn btn-primary boton col-sm-5">Editar</a>
                <a href="#" className="btn btn-danger boton2 col-sm-5" >Eliminar</a>
            </div>
        </div>
    </div>

);

export default CardPrincipal;
