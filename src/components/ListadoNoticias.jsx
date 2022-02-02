import React from 'react';
import Noticia from './Noticia';

const ListadoNoticias = ({noticias}) => {
  return <div className='row row-cols-3'>
      {noticias.map( noticia => (
          <Noticia 
            key={noticias.url}
            noticia={noticia} 
          />
      ))}
  </div>
};

export default ListadoNoticias;
