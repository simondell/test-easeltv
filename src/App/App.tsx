import React from 'react'
import MovieCard, { Movie } from '../MovieCard/MovieCard'
import './App.css'

interface OMDB {
  Search: Movie[],
  totalResults?: "string";
  Response?: string;
}

export default () => {
  const [omdb, setOMDB] = React.useState({ Search: [] })

  async function onTermClicked (term: string) {
    const key = 'c624fbd1'
    const path = `http://www.omdbapi.com/?apikey=${key}&s=${term}&page=1&type=movie`
    try {
      const response = await fetch(path)
      if(!response.ok) throw "Whoops"
      const body = await response.json()
      setOMDB(body)
    }
    catch (err) {
      console.error(err)
    }

  }

  return (
    <div>
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
    </div>
  )
}