import styled from "styled-components"
import media from "styled-media-query"
import { Link } from "gatsby"

export const RecommendedWrapper = styled.section`
  background: #fff;
  display: flex;
  width: 960px;
  margin: 0 auto;
  ${media.lessThan("940px")`
    width: 100%;
  `}
`

export const RecommendedLink = styled(Link)`
  align-items: center;
  background: #fff;
  color: #5a5050;
  display: flex;
  padding: 1rem 0;
  text-decoration: none;
  transition: background 0.5s;
  width: 50%;

  &:hover {
    text-decoration: underline;
  }

  &.next {
    justify-content: flex-end;
  }

  &.previous:before {
    content: "\\2190";
    margin-right: 0.5rem;
  }

  &.next:after {
    content: "\\2192";
    margin-left: 0.5rem;
  }
`
