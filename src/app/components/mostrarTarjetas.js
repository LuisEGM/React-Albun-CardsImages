import React, { Fragment } from "react";
import CardPrincipal from "./cardPrincipal";

class MostrarTarjetas extends React.Component{

    render(){

        const { titulosP } = this.props;

        return(

            <Fragment>
                {
                    titulosP.map( (elem,i) => (
                        <CardPrincipal
                            key={i}
                            title={elem}
                        />
                    ))
                }
            </Fragment>
        );

    }

}

export default MostrarTarjetas;
