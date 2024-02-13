import React from 'react';

const getVidoes = async (id: string) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const response = await fetch(`https://nomad-movies.nomadcoders.workers.dev/movies/${id}/videos`);
  const videos = await response.json();
  return videos;
};

const MovieVideos = async ({ id }: { id: string }) => {
  const videos = await getVidoes(id);

  return <h6>{JSON.stringify(videos)}</h6>;
};

export default MovieVideos;
