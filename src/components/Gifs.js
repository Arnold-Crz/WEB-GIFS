import React from 'react';
import './Gifs.css';

const Gifs = ({ id, title, url }) => {
  return (
    <div className="conteiner">
      <h4>{title}</h4>
      <img src={url} alt={title} />
      <a href={`#${id}`} alt={title}>
        Ver Detalles
      </a>
    </div>
  );
};

export default Gifs;
