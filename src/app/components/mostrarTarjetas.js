import React, { Fragment } from "react";
import CardPrincipal from "./cardPrincipal";

class MostrarTarjetas extends React.Component{

    render(){

        return(

            <Fragment>
                <CardPrincipal/>
                <CardPrincipal/>
                <CardPrincipal/>
                <CardPrincipal/>
                <CardPrincipal/>
                <CardPrincipal/>
                <CardPrincipal/>
                <CardPrincipal/>
            </Fragment>
        );

    }

}

export default MostrarTarjetas;
