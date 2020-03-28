import styled from "styled-components"
import media from 'styled-media-query'

export const PaginationWrapper = styled.section`
  align-items: center;
  color: #000;
  display: flex;
  padding: 1.5rem 0;
  justify-content: space-between;
  margin: 40px auto 0;
  width: 920px;
  ${media.lessThan("large")`
    width: 100%;
    padding: 1.5rem 10px;
  `}

  a {
    color: #000;
    text-decoration: none;
    transition: color 0.5s;

    &:hover {
      text-decoration: underline;
    }
  }
`

export const NumberPage = styled.span`
  display: block;
`
