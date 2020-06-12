import React from 'react'

interface Props {
	alt: string,
	className?: string,
	src: string,
}

export default ({
	alt,
	className,
	src
}: Props) =>
    <img
      alt={alt}
      className={className}
      src={src}
    />
