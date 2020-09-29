
import React, {Component} from 'react';
//class component metodo de ciclo de vida, almacena state y se puede utilizar this.
//functional component no se puede usar

class Buscador extends Component{
    busquedaRef= React.createRef(); // leer el input
   
    obtenerDatos= (e) => {
        e.preventDefault();

        this.props.datosBusqueda(this.busquedaRef.current.value); //pasar datos al componente principal
        //SE ENVIA POR PROPS DEL PADRE AL HIJO PERO RETORNA EL VALOR POR MEDIO DEL PROPS

    }

    render(){
        return(
            <form onSubmit={this.obtenerDatos}>
                <div className="row">
                    <div className="form-group col-md-8">
                        <input ref ={this.busquedaRef} type="text" 
                        className="form-control form-control-lg" 
                        placeholder="Busca tu Imagen, Ejemplo: perro"/>
                    </div>
                    <div className="form-group col-md-4">
                        <input type ="submit" className="btn btn-warning btn-lg  btn-block" value="Buscar..."/>
                    </div>
                </div>
            </form>


        )
    }


}
export default Buscador;