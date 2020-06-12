import React from 'react'
import Card from '../Shared/Card/Card'
import LazyImage from '../Shared/LazyImage/LazyImage'
import './MovieCard.css'

interface Props {
  poster: string,
  title: string,
}

export default function MovieCard (props: Props) {
  const Poster =
    <LazyImage
      alt={props.title}
      src={props.poster}
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
              <h2>{props.title}</h2>
            </header>
            <p>{props.poster}</p>
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
