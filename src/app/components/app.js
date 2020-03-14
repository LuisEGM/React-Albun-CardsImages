import React from "react";
import Navegacion from "./navegacion";
import MostrarTarjetas from "./mostrarTarjetas";
import Plantilla from "./plantilla";

import "./styles/app.css";

const App = () => (

    <React.Fragment>

        <Navegacion/>

        <div className="container">
            <Plantilla/>
        </div>

        <div className="tablaCards">
            <h2>Tus imagenes de colección</h2>
            <hr/>
            <MostrarTarjetas/>
        </div>
    </React.Fragment>


);

export default App;
