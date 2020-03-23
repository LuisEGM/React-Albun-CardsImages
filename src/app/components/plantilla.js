import React from "react";
import Formulario from "./formulario";
import TarjetaPlantilla from "./tarjetaPlantilla";

import "./styles/plantilla.css";

class Plantilla extends React.Component{

    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            form: {
                linkImg:'',
                titulo:'',
                descripcion:''
            }
        };
    }

    handleChange(e){
        //console.log(`${ e.target.name }: ${e.target.value}`);
        //let partialState = {};
        //partialState[e.target.name] = e.target.value;

        this.setState({
            //para que no se sobre escriba la info del state
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
            
        })

    }

    render(){
        
        const { onSubmit } = this.props;

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
                                onChange={this.handleChange}
                                onSubmit={onSubmit}
                                form={this.state.form}
                              />
                              <div className="col-md-1" ></div>
                              <TarjetaPlantilla
                                {...this.state.form}
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
