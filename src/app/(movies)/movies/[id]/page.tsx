import React from 'react';

const fetchMovie = async (id: string) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  console.log(`Fetching movies: ${Date.now()}`);
  const response = await fetch(`https://nomad-movies.nomadcoders.workers.dev/movies/${id}`);
  const movie = await response.json();
  return movie;
};

const getVidoes = async (id: string) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  console.log(`Fetching videos: ${Date.now()}`);
  const response = await fetch(`https://nomad-movies.nomadcoders.workers.dev/movies/${id}/videos`);
  const videos = await response.json();
  return videos;
};

const Movie = async ({ params: { id } }: { params: { id: string } }) => {
  console.log('start fetching');

  const [movie, videos] = await Promise.all([fetchMovie(id), getVidoes(id)]);

  console.log('end fetching');

  return (
    <div>
      <h1>{movie.title}</h1>
    </div>
  );
};

export default Movie;
