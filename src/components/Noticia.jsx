import React from 'react';
import styles from './Noticia.module.css'

const Noticia = ({noticia}) => {

    const {title, description, url, urlToImage} = noticia;

    return <div className="col s12 m6 l4">
        <div className="card">
            <div className='card-image'>
                <img src={urlToImage} alt="error..." />
            </div>
            <div className="card-content">
                <h5>{title}</h5>
                <p>{description}</p>
            </div>
            <div className="card-accion">
                <a href={url} className={`${styles.btnWidth} btn cyan lighten-1`}>Ver noticia completa</a>
            </div>
        </div>
    </div>;
};

export default Noticia;
