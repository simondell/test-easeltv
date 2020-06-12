import React from 'react'
import MovieCard, { Movie } from '../MovieCard/MovieCard'
import Bar from '../Shared/LazyImage/bars-1s-200px.gif'
import './App.css'

interface OMDB {
  Search?: Movie[],
  totalResults?: "string";
  Response?: string;
}

export default () => {
  const [omdb, setOMDB] = React.useState({} as OMDB)
  const [loading, setLoading] = React.useState(false)

  async function onTermClicked (term: string) {
    const key = 'c624fbd1';
    const path = `http://www.omdbapi.com/?apikey=${key}&s=${term}&page=1&type=movie`;
    try {
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

  return (
    <main>
      <nav>
        <ol>
          {
            ['star', 'road', 'pie'].map(term =>
              <li
                key={`search-${term}`}
              >
                <a
                  id={`${term}`}
                  href={`#${term}`}
                  onClick={() => onTermClicked(term)}
                >{term}</a>
              </li>
            )
          }
        </ol>
      </nav>

      {loading &&
        <img
          alt="loading..."
          src={Bar}
        />
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