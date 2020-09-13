import React, { useEffect, useState, lazy, Suspense } from 'react';
import { showAllInfo } from '../../helpers/request';
import {
  NavLink,
  Switch,
  Route,
  useHistory,
  useLocation,
} from 'react-router-dom';
import './FilmItem.css';
import arrow from './backArrow.png';

const Cast = lazy(() => import('../cast/Cast' /*webpackChunkName: "Cast" */));
const Reviews = lazy(() =>
  import('../reviews/Reviews' /*webpackChunkName: 'REviews' */),
);

const FilmItem = ({ match }) => {
  const id = match.params.movieId;
  const [film, setFilm] = useState([]);
  const [search, setSearch] = useState([]);
  const [from, setFrom] = useState('');
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    showAllInfo(id).then(({ data }) => setFilm(data));
    if (location.state) {
      setSearch(location.state.search);
      setFrom(location.state.from);
    }
  }, [id, location.state]);

  const changePage = () => {
    history.push({
      pathname: from,
      search: search && `query=${search}`,
      state: { search },
    });
  };
  return (
    <>
      <img src={arrow} alt="arrow_back" className="back" onClick={changePage} />

      <div className="full_info">
        {film.poster_path && (
          <img
            src={`https://image.tmdb.org/t/p/original${film.poster_path}`}
            alt={film.original_title}
            className="film_img"
          />
        )}
        <div className="item_info">
          <h2 className="title">{film.original_title}</h2>
          <p>{`Popularity ${film.popularity}`}</p>
          <h3>Overview</h3>
          <p className="overview">{film.overview}</p>
          <h4>Genres</h4>
          <ul>
            {film.genres &&
              film.genres.map(item => <li key={item.id}>{item.name}</li>)}
          </ul>
          <p></p>
        </div>
      </div>
      <div className="aditional_information">
        <p className="aditional_title">Aditional Information</p>
        <ul>
          <li>
            <NavLink to={`/movies/${id}/cast`}>Cast</NavLink>
          </li>
          <li>
            <NavLink to={`/movies/${id}/reviews`}>Reviews</NavLink>
          </li>
        </ul>
      </div>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          <Route
            path="/movies/:movieId/cast"
            render={props => <Cast {...props} id={id} />}
          />
          <Route
            path="/movies/:movieId/reviews"
            render={props => <Reviews {...props} id={id} />}
          />
        </Switch>
      </Suspense>
    </>
  );
};
export default FilmItem;
