import React from 'react'
import Styled from '../../styles/pages/project.styled'


type TextModuleProps = {
  title?: string;
  body: string;
}

export const TextSectionModule = ({ title, body }: TextModuleProps) => {
  return (
    <Styled.Section style={{ margin: '2.625rem 0'}}>
      {title && <Styled.SectionHeading>{title}</Styled.SectionHeading> }
      <Styled.SectionText>{body}</Styled.SectionText>
    </Styled.Section>
  )
}
