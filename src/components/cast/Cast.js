import React, { useEffect, useState } from 'react';
import { viewCredits } from '../../helpers/request';
import './Cast.css';

const Cast = ({ id }) => {
  const [credits, setCredits] = useState([]);

  useEffect(() => {
    viewCredits(id)
      .then(({ data }) => {
        const info = data.cast;
        setCredits(info);
      })
      .catch(error => console.log(error));
  }, [id]);

  return credits.length > 0 ? (
    <ul className="cast_list">
      {credits.map(item => (
        <li className="cast_item" key={item.cast_id}>
          {item.profile_path && (
            <>
              <img
                src={`https://image.tndb.org/t/p/original${item.profile_path}`}
                alt={item.name}
                className="cast_img"
              />
              <p className="name">{item.name}</p>
            </>
          )}
        </li>
      ))}
    </ul>
  ) : (
    <p>Sorry, we don't have any Casts</p>
  );
};
export default Cast;
