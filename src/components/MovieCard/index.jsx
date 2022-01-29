import React, { useEffect, useState } from 'react';

import MovieModal from '../MovieModal';

import './styles.scss';

const Movie = (movie) => {
  const { info } = movie;
  const { title, poster_path } = info;
  const baseUrl = 'https://image.tmdb.org/t/p/w500';

  return (
    <div className="movie">
      <img src={baseUrl + poster_path} alt="poster" />
      <div className="title-overview">
        <h4>{title}</h4>
      </div>
    </div>
  );
};

export default Movie;
