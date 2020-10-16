import React from 'react'
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

const GET_MOVIES = gql`
  {
    movies {
      id
      title
      medium_cover_image
    }
  }
`

export default () => {
  const { loading, error, data } = useQuery(GET_MOVIES);
  console.log(loading, error, data);

  if (loading) {
    return 'loading...';
  }
  if (data && data.movies) {
    console.log(data)
    return data.movies.map((movie) => {
      return <h1>{movie.title}</h1>
    });
  }

};
