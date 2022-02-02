import { Fragment, useState, useEffect } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoNoticias from "./components/ListadoNoticias";


function App() {

  const API_KEY = '2b3e00913a624cd4921980d136bf4704'

  const [noticias, guardarNoticias] = useState([]);
  const [categoria, guardarCategoria] = useState('');


  useEffect(() => {
    const consultarAPI = async() => {
      const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=${API_KEY}`

      const respuesta = await fetch(url)
      const noticias = await respuesta.json()
      // console.log(noticias.articles)

      guardarNoticias(noticias.articles)
    }
    consultarAPI()
  }, [categoria])

  return (
    <Fragment>
      <Header titulo="Buscador de Noticias" />
      <div className="container white">
        <Formulario guardarCategoria={guardarCategoria}/>
        <ListadoNoticias noticias={noticias}/>
      </div>

    </Fragment>
  );
}

export default App;
