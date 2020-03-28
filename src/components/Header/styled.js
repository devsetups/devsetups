import styled from 'styled-components'
import media from 'styled-media-query'
import { Link } from "gatsby"

export const Container = styled.header`
  width: 940px;
  margin: 0 auto;
  height: 80px;
  padding: 20px 0;
  ${media.lessThan("large")`
    width: 100%;
  `}
`
export const Logo = styled.h1`
  display: block;
  float: left;
  padding: 10px;
`
export const LinkLogo = styled(Link)`
  color: #000;
`