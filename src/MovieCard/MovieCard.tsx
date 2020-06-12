import React from 'react'
import Card from '../Shared/Card/Card'
import LazyImage from '../Shared/LazyImage/LazyImage'
import Loading from '../Shared/Loading/Loading'
import './MovieCard.css'

export interface Movie {
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
  const [metaData, setMetadata] = React.useState()
  const [loading, setLoading] = React.useState(false)

  const Poster =
    <LazyImage
      alt={movie.Title}
      src={movie.Poster}
    />

  React.useEffect(() => {
    (async function readMovieMetaData () {
      const key = 'c624fbd1';
      const path = `http://www.omdbapi.com/?apikey=${key}&i=${movie.imdbID}`;
      try {
        setLoading(true);
        const response = await fetch(path);
        if(!response.ok) throw new Error("Whoops");
        const body = await response.json();
    console.log(body)
        setMetadata(body);
        setLoading(false);
      }
      catch (err) {
        console.error(err);
      }
    })()
  }, [])

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

            {loading && <Loading />}

            <dl>
              {metaData &&
                <>
                <dt>Released</dt>
                <dd>{movie.Year}</dd>
                <dt>Synopsis</dt>
                <dd>{metaData.Plot}</dd>
                <dt>Director(s)</dt>
                <dd>{metaData.Director}</dd>
                <dt>Writers(s)</dt>
                <dd>{metaData.Writer}</dd>
                <dt>Actors</dt>
                <dd>{metaData.Actors}</dd>
                <dt>Metascore</dt>
                <dd>{metaData.Metascore}</dd>
                <dt>IMDB Rating</dt>
                <dd>{metaData.imdbRating}</dd>
                </>
              }
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
