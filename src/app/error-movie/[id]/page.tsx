import React, { Suspense } from 'react';
import ErrorMovieInfo from '../../../../components/ErrormovieInfo';
import MovieVideos from '../../../../components/movieVideos';

const Movie = async ({ params: { id } }: { params: { id: string } }) => {
  return (
    <div>
      <h1>Hello movie id {id}</h1>

      <Suspense fallback={<h1>Loading movie info</h1>}>
        <ErrorMovieInfo id={id} />
      </Suspense>

      <Suspense fallback={<h1>Loading movie videos</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
};

export default Movie;
