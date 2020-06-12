import React from 'react'
import Card from '../Shared/Card/Card'
import LazyImage from '../Shared/LazyImage/LazyImage'
import './MovieCard.css'

interface Movie {
  "Title": string,
  "Year": string,
  "imdbID": string,
  "Type": string,
  "Poster": string;
}

interface Props {
  movie: Movie
}

export default function MovieCard (props: Props) {
  const { movie } = props
  const Poster =
    <LazyImage
      alt={movie.Title}
      src={movie.Poster}
    />

  return (
    <Card
      back={Poster}
      front={
        <>{/* root elements, ugh! */}
          <div
            className="foreground"
          >
            <header>
              <h2>{movie.Title}</h2>
            </header>
            <dl>
              <dt>Released</dt>
              <dd>{movie.Year}</dd>
              <dt>Synopsis</dt>
              <dd>{movie.Poster}</dd>
            </dl>
          </div>
          <div
            className="background"
          >
            {Poster}
          </div>
        </>
      }
    />
  )
}
