import React from "react";
import Navegacion from "./navegacion";
import MostrarTarjetas from "./mostrarTarjetas";
import Plantilla from "./plantilla";

import "./styles/app.css";

const App = () => {

    const vecTitulos = ["Titulo_1","Titulo_2","Titulo_3","Titulo_4",
                        "Titulo_5","Titulo_6","Titulo_7","Titulo_8"]

    return(

        <React.Fragment>
            <Navegacion/>

            <div className="container">
                <Plantilla/>
            </div>

            <div className="tablaCards">
                <h2>Tus imagenes de colección</h2>
                <hr/>
                <MostrarTarjetas
                    titulosP={vecTitulos}
                />
            </div>
        </React.Fragment>        

    )
    
}

export default App;
