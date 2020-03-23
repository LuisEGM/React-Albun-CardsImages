import React from "react";
import "./styles/cardPrincipal.css";

const CardPrincipal = ({ linkImage , title, descripcion }) => (

    //defecto1 = https://www.pronorte.es/_files/product/4989/image/imagen-no-disponible.jpg
    //defector2 = https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500

    <div className="card ancho">
        <img className="card-img-top" src={linkImage || "https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500" }  alt="Card image cap" alt="Card image cap"/>
        <div className="card-body">
            <h5 className="tituloCard">{title || "Sin título"}</h5>
            <p className="textCard">
                {descripcion || "Sin descripción"}
            </p>
            <div className="row">
                <a href="#" className="btn btn-primary boton col-sm-5">Editar</a>
                <a href="#" className="btn btn-danger boton2 col-sm-5" >Eliminar</a>
            </div>
        </div>
    </div>

);

export default CardPrincipal;
