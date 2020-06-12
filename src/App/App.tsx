import React from 'react'
import MovieCard, { Movie } from '../MovieCard/MovieCard'
import Loading from '../Shared/Loading/Loading'
import './App.css'

interface OMDB {
  Search?: Movie[],
  totalResults?: "string";
  Response?: string;
}

export default () => {
  const [term, setTerm] = React.useState('')
  const [omdb, setOMDB] = React.useState({} as OMDB)
  const [loading, setLoading] = React.useState(false)



  function onTermClicked (term: string) {
    return async function (event: React.SyntheticEvent) {
      event.preventDefault();
      setTerm(term);

      try {
        const key = 'c624fbd1';
        const path = `https://www.omdbapi.com/?apikey=${key}&s=${term}&page=1&type=movie`;
        setLoading(true);
        setOMDB({});
        const response = await fetch(path);
        if(!response.ok) throw new Error("Whoops");
        const body = await response.json();
        setOMDB(body);
        setLoading(false);
      }
      catch (err) {
        console.error(err);
      }
    }
  }

  return (
    <main>
      <nav>
        <ol>
          {
            ['star', 'road', 'pie'].map(searchTerm =>
              <li
                key={`search-${searchTerm}`}
              >
                <a
                  className={term === searchTerm ? 'selected' : undefined}
                  href={`?s=${searchTerm}`}
                  onClick={onTermClicked(searchTerm)}
                >{searchTerm}</a>
              </li>
            )
          }
        </ol>
      </nav>

      {loading &&
        <Loading />
      }

    	{omdb.Search &&
        <div
          className="poster-wall"
        >
        {
          omdb.Search.map((movie: Movie) =>
            <MovieCard
              key={`movie-${movie.imdbID}`}
              movie={movie}
            />
          )
        }
      	</div>
      }
    </main>
  )
}