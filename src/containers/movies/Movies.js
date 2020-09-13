import React, { useState, useEffect } from 'react';
import { searchFilm } from '../../helpers/request';
import FilmList from '../../components/filmList/FilmList';
import { useHistory, useLocation } from 'react-router-dom';
import './Movies.css';

const Movies = () => {
  const [search, setSearch] = useState('');
  const [result, setResult] = useState([]);
  const history = useHistory();
  const location = useLocation();
  const searchValue = ({ target }) => {
    setSearch(target.value);
  };
  useEffect(() => {
    if (location.state) {
      setSearch(location.state.search);
      if (search) {
        searchFilm(search).then(({ data }) => {
          const arr = data.results;
          setResult(arr);
        });
      }
    }
  }, [location.state, search]);

  const subForm = e => {
    e.preventDefault();
    searchFilm(search).then(({ data }) => {
      const arr = data.results;
      setResult(arr);
    });
    history.push({
      pathname: `/movies`,
      search: search && `query=${search}`,
    });
  };

  return (
    <>
      <div className="Searchbar">
        <form className="SearchForm" onSubmit={subForm}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>
          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search films"
            value={search}
            onChange={searchValue}
          />
        </form>
      </div>
      <FilmList films={result} query={search} />
    </>
  );
};
export default Movies;
