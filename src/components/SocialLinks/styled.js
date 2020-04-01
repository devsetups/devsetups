import styled from "styled-components"
import media from "styled-media-query"

export const SocialLinksWrapper = styled.nav`
  margin: 0 auto;
  width: 150px;
  float: right;
  ${media.lessThan("small")`
    width: 100px;
  `}
`

export const SocialLinksList = styled.ul`
  align-items: center;
  display: flex;
  justify-content: space-around;
  list-style: none;
`

export const SocialLinksItem = styled.li``

export const SocialLinksLink = styled.a`
  color: #000;
  text-decoration: none;
`

export const IconWrapper = styled.div`
  fill: #bbb;
  width: 20px;
`
