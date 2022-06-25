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

  & + h3, p {
    margin-bottom: 2rem;
  }
`
const Figcaption = styled.figcaption`
  color: var(--secondary-color) !important;
  font-size: .9rem;
  padding: .5rem;
  text-align: center;
  font-style: italic;
  font-family: var(--font-family-heading);
`

const Container = styled.div`
  overflow: hidden;
  border-radius: 1rem;
  border: 1px solid var(--border-color);
  
`