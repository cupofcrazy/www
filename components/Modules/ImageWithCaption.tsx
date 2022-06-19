import { Props as ImageProps, Image } from 'components/Image'
import React from 'react'
import styled from 'styled-components'


interface Props extends ImageProps {
  caption?: string
}

export const ImageWithCaption = ({ caption, alt,  ...props }: Props) => {
  return (
    <Figure>
      <Container>
        <Image {...props} alt={caption || 'Project Screenshot' } />
      </Container>
      { caption && <Figcaption><p>{caption}</p></Figcaption> }
    </Figure>
  )
}


const Figure = styled.figure`
  margin: 1rem 0;
`
const Figcaption = styled.figcaption`
  font-size: .85rem;
  padding: .5rem;
  text-align: center;
  color: var(--secondary-color);
  font-style: italic;
`

const Container = styled.div`
  overflow: hidden;
  border-radius: 1rem;
  
`