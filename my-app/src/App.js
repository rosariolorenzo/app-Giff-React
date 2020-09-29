import React, {Component} from 'react';
import Buscador from './components/Buscador';
import Resultado  from './components/Resultado';

class App extends Component  {
 
  //cambiar state de acuerdo a los datos de la busqueda

  state = {
    termino: ' ' ,
    imagenes : [],
    pagina : ' '
  }

  scroll = ()=>{
    const elemento = document.querySelector('.jumbotron');
    elemento.scrollIntoView('smooth', 'start');
  }

  paginaAnterior = () =>{
    //leer state de pagina actual
    let pagina = this.state.pagina
    
    // si la pagina es 1 no ir para atras

    if (pagina === 1)return null
    //restamos 1
      pagina--;
  
    //agregar cambio al state
    this.setState({
      pagina
    }, 
    () =>{
      this.consultarApi();
      this.scroll();
    });
  }
  paginaSiguiente = () =>{

    //leer state de pagina actual
    let pagina = this.state.pagina
    
    //sumar 1
    pagina++;

    //agregar cambio al state
    this.setState({
      pagina
    },
    ()=> {
      this.consultarApi()
      this.scroll()
    });
  }

  consultarApi=() =>{
    const pagina = this.state.pagina
    const url = `https://pixabay.com/api/?key=18511773-26b1e5ee664d1f1abdadf32e6&q=${this.state.termino}&per_page=30&page=${pagina}`;
    
    //console.log(url)

    fetch(url)
    .then(respuesta => respuesta.json() )
    .then (resultado => this.setState({imagenes : resultado.hits}) )
  }
  
  datosBusqueda = (termino) =>{
    this.setState({
      termino : termino,
      pagina : 1//reescribir el state
    },
    //una vez que se agrege al state ejecuta la funcion:
    () => {
      this.consultarApi();
    })
    
  }
  render() {
    return (

      <div className="container">
        <div className="jumbotron">
          <h4 className="text-center">
            Buscador de imagenes
          </h4>
          <Buscador
           datosBusqueda={this.datosBusqueda} //pasar funcion desde el componente principal al hijo
          />
        </div>
        <div className="row justify-content-center">
          <Resultado 
            imagenes={this.state.imagenes}
            paginaAnterior={this.paginaAnterior}
            paginaSiguiente={this.paginaSiguiente}
          />
          </div>
      </div>
    );
  }
}

export default App;
