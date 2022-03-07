import { useState, useEffect } from 'react';
import Gifs from './Gifs';
import getGifs from './../services/getGifs';
import './ListGifs.css';

const ListGifs = ({ params }) => {
  const { keyword } = params;
  const [gifs, setGifs] = useState([]);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    setloading(true);
    getGifs({ keyword }).then((gifs) => setGifs(gifs));
    setloading(false);
  }, [keyword]);

  if (loading) return <h2>Cargando</h2>;
  return (
    <div className="cards">
      {gifs.map(({ id, title, url }) => (
        <Gifs key={id} id={id} title={title} url={url} />
      ))}
    </div>
  );
};

export default ListGifs;
