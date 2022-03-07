import React from 'react';
import './Gifs.css';
import { Route, Link } from 'wouter';
import Details from './Details';

const Gifs = ({ id, title, url }) => {
  return (
    <div className="card--conten">
      <h4 className="card--title">{title}</h4>
      <img className="card--img" src={url} alt={title} />
      <Link className="card--btn" href={`/details/${id}`} alt={title}>
        Ver Detalles
      </Link>

      <Route path="/details/:id" component={Details}></Route>
    </div>
  );
};

export default Gifs;
