import styled from "styled-components"
import media from 'styled-media-query'

export const Container = styled.footer`
  border-top: 1px solid #eee;
  padding: 20px 0;
  width: 920px;
  margin: 0 auto;
  ${media.lessThan("large")`
    width: 100%;
    padding: 20px 10px;
  `}
`

export const Copyright = styled.p`
  font-size: 12px;
  float: left;
`
