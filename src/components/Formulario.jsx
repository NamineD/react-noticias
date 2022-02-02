import React from 'react';
import useSelect from '../hooks/useSelect';
import styles from './Formulario.module.css'

const Formulario = ({guardarCategoria}) => {

  const OPCIONES = [
    {value: 'general', label: 'General'},
    {value: 'business', label: 'Negocios'},
    {value: 'entertainment', label: 'Entretenimiento'},
    {value: 'health', label: 'Salud'},
    {value: 'science', label: 'Ciencia'},
    {value: 'sports', label: 'Deportes'},
    {value: 'technology', label: 'Tecnologia'}
  ]
  //Custom Hook
  const [categoria, SelecNoticias] = useSelect('general', OPCIONES)

  //Buscador de noticias
  const buscarNoticias = e => {
    e.preventDefault()
    guardarCategoria(categoria)
  }

  return <div className={`${styles.buscador} row`}> 
    <div className='col s12 m8 offset-m2'>
        <form onSubmit={buscarNoticias}>
            <h2 className={`${styles.heading}`}>Encuentra noticias por categoria</h2>
            
            <SelecNoticias />

            <div className='input-field col s12'>
                <input 
                    type="submit" 
                    value="Buscar"
                    className={`${styles['btn-block']} btn-large cyan darken-2`}
                    />
            </div>
        </form>
    </div>
  </div>;
};

export default Formulario;
