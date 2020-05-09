import React from "react";
import Navegacion from "./navegacion";
import MostrarTarjetas from "./mostrarTarjetas";
import Plantilla from "./plantilla";

import "./styles/app.css";

let cardsPartials = [];

class App extends React.Component {

    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            form: {
                linkImg:'',
                titulo:'',
                descripcion:''
            },
            cards: []
        };
    }

    handleSubmit(e){
        e.preventDefault();
        
        cardsPartials.push(this.state.form);
        console.log(cardsPartials);
        //console.log(this.state.form);
        this.setState({
            cards: cardsPartials,
            form: {
                linkImg:'',
                titulo:'',
                descripcion:''
            }
        })
        
        
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

        return(

            <React.Fragment>
                
                <Navegacion/>
    
                <div className="container">
                    <Plantilla
                        onChange={this.handleChange}
                        onSubmit={this.handleSubmit}
                        form={this.state.form}
                    />
                </div>
    
                <div className="tablaCards">
                    <h2>Tus imagenes de colección</h2>
                    <hr/>
                    <MostrarTarjetas
                        tarjetas={this.state.cards}
                    />
                </div>
            </React.Fragment>        
    
        )

    }

}

export default App;
