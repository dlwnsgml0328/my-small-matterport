import Link from 'next/link';

const URL = 'https://nomad-movies.nomadcoders.workers.dev/movies';

async function fetchMovies() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const response = await fetch(URL);
  const movies = await response.json();
  return movies;
}

export default async function Home() {
  const movies = await fetchMovies();

  return (
    <main>
      {movies.map((movie: any) => (
        <li key={movie.id}>
          <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}

      <h1>Error movie id</h1>

      {movies.map((movie: any) => (
        <li key={movie.id}>
          <Link href={`/error-movie/${movie.id}`}>error: {movie.title}</Link>
        </li>
      ))}
    </main>
  );
}
