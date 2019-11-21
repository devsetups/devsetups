import styled from "styled-components"
import { Link } from "gatsby"

export const MenuLinksWrapper = styled.nav`
  padding: 10px 15px;
  width: 100%;
  height: 40px;
`
export const MenuLinksList = styled.ul`
  float: right;
  width: 110px;
`
export const MenuLinksItem = styled.li``

export const MenuLinksLink = styled(Link)`
  color: ${props => props.color};
  display: block;
  text-decoration: none;
  float: right;
  margin: 0 5px;
`