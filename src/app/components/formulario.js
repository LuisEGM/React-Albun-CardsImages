import React from "react";

class Forumario extends React.Component{

    render(){

        const { onChange, onSubmit, form } = this.props;

        return(

            <div className="col-md-5 form">

                <form onSubmit={onSubmit} >

                    <div className="form-group">
                        <label>Link de la imagen</label>
                        <input type="link" className="form-control" name="linkImg" placeholder="https://..."
                            onChange={onChange}
                            value={form.linkImg}
                        />
                    </div>

                    <div className="form-group">
                        <label>Título</label>
                        <input type="text" className="form-control" name="titulo" placeholder="Mi título..."
                            onChange={onChange}
                            value={form.titulo}
                        />
                    </div>

                    <div className="form-group">
                        <label>Descripción</label>
                        <textarea className="form-control" name="descripcion" rows="2" placeholder="Describe tu imagen" 
                            onChange={onChange}
                            value={form.descripcion}
                        ></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary" style={{width: "100%"}}>
                        Agregar
                    </button>

                </form>

            </div>

        );

    }

}

export default Forumario;
