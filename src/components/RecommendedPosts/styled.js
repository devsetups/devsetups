import styled from "styled-components"
import { Link } from "gatsby"

export const RecommendedWrapper = styled.section`
  /* border-bottom: 1px solid #38444d;
  border-top: 1px solid #38444d; */
  background: #fff;
  display: flex;
  width: 960px;
  margin: 0 auto;
`

export const RecommendedLink = styled(Link)`
  align-items: center;
  background: #fff;
  color: #a2d4ab;
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
