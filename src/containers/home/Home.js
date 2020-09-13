import React, { useEffect, useState } from 'react';
import { popularFilms } from '../../helpers/request';
import FilmList from '../../components/filmList/FilmList';

const Home = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    popularFilms()
      .then(data => {
        const arr = [...data.data.results];
        setFilms(arr);
      })
      .catch(error => console.log(error));
  }, []);
  return <FilmList films={films} />;
};
export default Home;
