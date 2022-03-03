import { useState, useEffect } from 'react';
import Gifs from './Gifs';
import getGifs from './../services/getGifs';

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
    <>
      {gifs.map(({ id, title, url }) => (
        <Gifs key={id} id={id} title={title} url={url} />
      ))}
    </>
  );
};

export default ListGifs;
