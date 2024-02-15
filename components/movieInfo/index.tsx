export const fetchMovie = async (id: string) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const response = await fetch(`https://nomad-movies.nomadcoders.workers.dev/movies/${id}`);
  const movie = await response.json();
  return movie;
};

const ErrorMovieInfo = async ({ id }: { id: string }) => {
  const movie = await fetchMovie(id);

  return (
    <div>
      <h6>{JSON.stringify(movie)}</h6>
    </div>
  );
};

export default ErrorMovieInfo;
