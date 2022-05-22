import { Props as ImageProps, Image } from 'components/Image'
import React from 'react'
import styled from 'styled-components'


interface Props extends ImageProps {
  caption?: string
}

export const ImageWithCaption = ({ caption, alt,  ...props }: Props) => {
  return (
    <figure>
      <Container>
        <Image {...props} alt={caption} />
      </Container>
      { caption && <Figcaption><p>{caption}</p></Figcaption> }
    </figure>
  )
}


const Figcaption = styled.figcaption`
  padding: .5rem;
  text-align: center;
  color: var(--secondary-color);
`

const Container = styled.div`
  overflow: hidden;
  border-radius: 1rem;
`