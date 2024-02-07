import React from 'react';

const Movies = ({ params: { id } }: { params: { id: string } }) => {
  return (
    <div>
      <h1>Movie ({id})</h1>
    </div>
  );
};

export default Movies;
