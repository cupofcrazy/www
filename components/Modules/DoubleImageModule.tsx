import styled from "styled-components";
import { Image } from '../Image'
import {  FlexImage } from "./";


interface Props {
  module: any
}

export const DoubleImageModule = ({ module }: Props) => {
  return (
    <DoubleImage>
      <FlexImage>
        <Image
          src={module.left.url}
          aspectRatio={
            module.left.metadata.dimensions.aspectRatio
          }
          color={module.left.metadata.palette.vibrant.background}
          alt="Image"
        />
      </FlexImage>
      <FlexImage>
        <Image
          src={module.right.url}
          aspectRatio={
            module.right.metadata.dimensions.aspectRatio
          }
          color={module.right.metadata.palette.vibrant.background}
          alt="Image"
        />
      </FlexImage>
    </DoubleImage>
  )
}

const DoubleImage = styled.div`
  display: flex;
  gap: 1rem;
  margin: 1rem 0;
`;