import styled from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.section`
  margin: 0 auto;
  align-self: center;
  height: 20rem;
  width: 940px;
  padding: 100px 0;
  ${media.lessThan("large")`
    width: 100%;
    padding: 100px 10px;
  `}
`

export const Description = styled.p`
  font-size: 16px;
  color: #000;
  margin-top: 10px;
`

export const Title = styled.h1`
  color: #000;
  font-size: 2rem;
  display: block;
  width: 390px;
  font-weight: normal;
  ${media.lessThan("small")`
    width: 100%;
    text-align: center;
    font-size: 1.3rem;
  `}
`
