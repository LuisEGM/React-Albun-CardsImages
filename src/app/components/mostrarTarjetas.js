import React, { Fragment } from "react";
import CardPrincipal from "./cardPrincipal";

class MostrarTarjetas extends React.Component{

    render(){

        const { tarjetas } = this.props;

        return(

            <Fragment>
                {
                    tarjetas.map( (elem,i) => (
                        <CardPrincipal
                            key={i}
                            title={elem.titulo}
                            descripcion={elem.descripcion}
                            linkImg={elem.linkImg}
                        />
                    ))
                }
            </Fragment>
        );

    }

}

export default MostrarTarjetas;
