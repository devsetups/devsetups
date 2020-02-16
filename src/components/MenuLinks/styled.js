import styled from "styled-components"
import { Link } from "gatsby"

export const MenuLinksWrapper = styled.nav`
  padding: 10px;
  /* width: 100%; */
  height: 40px;
  float: right;
`
export const MenuLinksList = styled.ul`
  float: right;
  width: 130px;
`
export const MenuLinksItem = styled.li``

export const MenuLinksLink = styled(Link)`
  color: ${props => props.color};
  display: block;
  text-decoration: none;
  float: right;
  margin: 0 5px;
  text-transform: uppercase;
  font-size: 14px;
`