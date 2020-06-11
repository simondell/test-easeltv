import React, { useState } from 'react'
import { useSpring, animated as a } from 'react-spring'
import LazyImage from '../LazyImage/LazyImage'
import './Card.css'

interface Props {
  poster: string,
  title: string,
}

export default function Card(props: Props) {
  const [flipped, set] = useState(false)
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 }
  })
  return (
    <div
      className="movie-card"
      onClick={() => set(state => !state)}>
      <a.div 
        className="c back"
        style={{
          opacity: opacity.interpolate((o: any) => 1 - o),
          transform
        }}
      >
        <LazyImage
          alt={props.title}
          src={props.poster}
        />
      </a.div>
      <a.div
        className="c front"
        style={{
          opacity,
          transform: transform.interpolate(t => `${t} rotateX(180deg)`)
        }}
      >
        <p>{props.title}</p>
        <p>{props.poster}</p>
      </a.div>
    </div>
  )
}
