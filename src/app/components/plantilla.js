import React from "react";
import Formulario from "./formulario";
import TarjetaPlantilla from "./tarjetaPlantilla";

import "./styles/plantilla.css";

class Plantilla extends React.Component{

    render(){

        const { onChange, onSubmit, form } = this.props;

        return(

          <div className="row plantilla">

              <div className="contenedor2" >

                  <div className="row">
                      <h2 className="tituloPlantilla">Agrega tu imagen favorita</h2>
                  </div>

                  <div className="row">
                      <div className="contenedor3">
                          <div className="row">
                              <Formulario
                                onChange={onChange}
                                onSubmit={onSubmit}
                                form={form}
                              />
                              <div className="col-md-1" ></div>
                              <TarjetaPlantilla
                                {...form}
                              />
                          </div>
                      </div>
                  </div>

              </div>

          </div>

        );

    }

}

export default Plantilla;
