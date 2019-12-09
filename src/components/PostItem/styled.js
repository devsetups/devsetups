import styled from 'styled-components'
import { Link } from 'gatsby'

export const Container = styled.div`
  width: 420px;
  margin: 0 auto;
  float: left;
  /* display: grid; */
  /* grid-template-columns: 1fr 1fr; */
  &:nth-of-type(1) {
    width: 100%;
    background-color: #000;
    height: 400px;
    display: block;
    img {
      width: 400px;
    }
  }
`
export const PostItemLink = styled(Link)`
  color: #8899a6;
  /* display: flex; */
  text-decoration: none;
  &:hover {
    color: #ef652a;
    /* text-decoration: underline; */
  }
  `
export const PostItemImage = styled.img`
  width: 100%;
`
export const PostItemImgWrapper = styled.div`
  width: 200px;
`
export const PostItemWrapper = styled.section`
  align-items: center;
  padding: 1rem;
  width: 100%;
  grid-template-columns: 1fr 200px;
  grid-gap: 10px;
`
export const PostItemTag = styled.div`
  align-items: center;
  background: ${props => props.background ? props.background : "#1fa1f2"};
  color: #fff;
  display: flex;
  font-size: .5rem;
  font-weight: 700;
  justify-content: center;
  min-height: 50px;
  min-width: 50px;
  text-transform: uppercase;
`
export const PostItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
export const PostItemDateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
  width: 230px;
  align-items: flex-end;
`
export const PostItemDate = styled.time`
  font-size: 0.9rem;
`
export const PostItemPlace = styled.span`
  font-size: 0.9rem;
`
export const PostItemTitle = styled.h1`
  font-size: 1.2rem;
  font-weight: 700;
  margin: 0.2rem 0 0.5rem;
`
export const PostItemDescription = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.2;
`