import React, { useState } from 'react'
import { useSpring, animated as a } from 'react-spring'
import './Card.css'

interface Props {
  Wrapper?: React.ElementType;
  front: React.ReactNode;
  back: React.ReactNode;
}

export default function Card({ Wrapper = 'article', ...props }: Props) {
  const [flipped, set] = useState(false)
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 }
  })
  return (
    <Wrapper
      className="card"
      onClick={() => set(state => !state)}>
      <a.div 
        className="card__face--back"
        style={{
          opacity: opacity.interpolate((o: any) => 1 - o),
          transform
        }}
      >
        {props.back}
      </a.div>
      <a.div
        className="card__face--front"
        style={{
          opacity,
          transform: transform.interpolate(t => `${t} rotateX(180deg)`)
        }}
      >
        {props.front}
      </a.div>
    </Wrapper>
  )
}
