import React from 'react'
import MovieCard from '../MovieCard/MovieCard'
import './App.css'

const omdb = {
  "Search": [
    {
      "Title": "Star Trek III: The Search for Spock",
      "Year": "1984",
      "imdbID": "tt0088170",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTliZGVjZmMtNzEzMy00MzVhLWFhYjYtNDhlYmViNGNiMGFlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
    },
    {
      "Title": "Star Trek: Nemesis",
      "Year": "2002",
      "imdbID": "tt0253754",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjAxNjY2NDY3NF5BMl5BanBnXkFtZTcwMjA0MTEzMw@@._V1_SX300.jpg"
    },
    {
      "Title": "Star Trek VI: The Undiscovered Country",
      "Year": "1991",
      "imdbID": "tt0102975",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BYTM1ZDc0MDEtYjhhMC00ZWFmLThlMTYtOTI2MTdkZDVhODQwXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
    },
    {
      "Title": "Star Trek: Insurrection",
      "Year": "1998",
      "imdbID": "tt0120844",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNWEzZDI0NjEtY2FkMC00ZjQwLWI2YzgtZDEyMzMwZmRlZDlhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
    },
    {
      "Title": "Star Trek V: The Final Frontier",
      "Year": "1989",
      "imdbID": "tt0098382",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BZTE2NTE0YmYtNTE3YS00NzFmLWJmMDMtZWQ5Njg5NDBmNTFiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
    },
    {
      "Title": "Star Wars: The Clone Wars",
      "Year": "2008",
      "imdbID": "tt1185834",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTI1MDIwMTczOV5BMl5BanBnXkFtZTcwNTI4MDE3MQ@@._V1_SX300.jpg"
    },
    {
      "Title": "Rock Star",
      "Year": "2001",
      "imdbID": "tt0202470",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMzAxNzNmMzMtYTU4Ni00Y2IxLTk4MGEtZGExNmFiMzBjN2MyL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
    },
    {
      "Title": "Lone Star",
      "Year": "1996",
      "imdbID": "tt0116905",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BN2ViYzQ3YTAtZmQ5OS00ZWNkLWFkZWQtYTJiNTI1OWVlMzc0XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
    },
    {
      "Title": "Bright Star",
      "Year": "2009",
      "imdbID": "tt0810784",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTg0NjEwNDgxNF5BMl5BanBnXkFtZTcwMjkyOTM3Mg@@._V1_SX300.jpg"
    },
    {
      "Title": "Dark Star",
      "Year": "1974",
      "imdbID": "tt0069945",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BZDYwN2NjYzQtODk3Ni00ZTA1LWExZmUtZjhjOGQ2YjgwMjIwXkEyXkFqcGdeQXVyMjI4MjA5MzA@._V1_SX300.jpg"
    }
  ],
  "totalResults": "2225",
  "Response": "True"
}

export default () =>
	<div>
	{
		omdb.Search.map(movie =>
			<MovieCard
        movie={movie}
			/>
		)
	}
	</div>