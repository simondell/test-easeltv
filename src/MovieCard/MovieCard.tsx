import React from 'react'
import Card from '../Shared/Card/Card'
import LazyImage from '../Shared/LazyImage/LazyImage'
import './MovieCard.css'

interface Props {
  poster: string,
  title: string,
}

export default function MovieCard (props: Props) {
  return (
    <Card
      back={
        <LazyImage
          alt={props.title}
          src={props.poster}
        />
      }
      front={
        <>{/* root elements, ugh! */}
          <header>
            <h2>{props.title}</h2>
          </header>
          <p>{props.poster}</p>
        </>
      }
    />
  )
}
