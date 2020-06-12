import React from 'react'
import Bars from './bars-1s-200px.gif'

interface Props {
  alt: string,
  className?: string,
  src: string,
}

export default ({
  alt,
  className,
  src
}: Props) => {
  const [path, setPath] = React.useState(src)

  function onError () {
    setPath(Bars)
  }

  return (
    <img
      alt={alt}
      className={className}
      onError={onError}
      src={path}
    />
  );
}
