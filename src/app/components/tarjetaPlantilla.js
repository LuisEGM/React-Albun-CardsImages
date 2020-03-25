import React from "react";

const TarjetaPlantilla = ({ linkImg , titulo, descripcion }) => (

    <div className="col-md-6 cardTemplate">

        <div className="card anchoTP">
            <img className="card-img-top" src={linkImg || "https://lh3.googleusercontent.com/proxy/_O5oYzCBNhZiR6TgbvSma531a0gNnsZES2EQL2QUVPLs73mKp8LUUg3dqIALJvtyErHv4N9KEkpnoz3PPiMK4FGS8lFxAmjxK6L-U8_9M2wFDR6OyGmXo2hHX2GYMFY"} alt="Card image cap"/>
            <div className="card-body">
                <h5 className="tituloCardP">{titulo || "Por definir..."}</h5>
                <p className="textCardP">{descripcion || "Sin descripción..."}</p>
                <div className="row">
                    <a href="#" className="btn btn-primary boton col-sm-5">Editar</a>
                    <a href="#" className="btn btn-danger boton2 col-sm-5" >Eliminar</a>
                </div>
            </div>
        </div>

    </div>

);

export default TarjetaPlantilla;

// class TarjetaPlantilla extends React.Component {

//     render(){

//         const { linkImg , titulo, descripcion } = this.props;

//         return(

//             <div className="col-md-6 cardTemplate">

//                 <div className="card anchoTP">
//                     <img className="card-img-top" src={linkImg} /* || "https://lh3.googleusercontent.com/proxy/csrsqpw0zUxR2Gw-dJd-vrkWP7oTnkOxlkVDQvbOakbmJuKDsW8mbTOvCZCqn-tL1Qamg7sHPkNbRs5wb3dUbQiTDkipnSNqNZFFAgSyE8itqX6IHlZcA2eH2HDjSvN6VUs33qaA"}*/ alt="Card image cap"/>
//                     <div className="card-body">
//                         <h5 className="tituloCardP">{titulo /*|| "Por definir..."*/}</h5>
//                         <p className="textCardP">{descripcion/* || "Sin descripción..."*/}</p>
//                         <div className="row">
//                             <a href="#" className="btn btn-primary boton col-sm-5">Editar</a>
//                             <a href="#" className="btn btn-danger boton2 col-sm-5" >Eliminar</a>
//                         </div>
//                     </div>
//                 </div>

//             </div>

//         );

//     }

// }

// export default TarjetaPlantilla;
