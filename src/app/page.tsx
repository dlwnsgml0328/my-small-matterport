'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    try {
      const response = await fetch('https://nomad-movies.nomadcoders.workers.dev/movies');

      if (!response.ok) throw new Error('Failed to fetch movies');

      const data = await response.json();

      setMovies(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return <main>{isLoading ? <p>Loading...</p> : <>{JSON.stringify(movies)}</>}</main>;
}
