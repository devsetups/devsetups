import styled from 'styled-components'
import { Link } from 'gatsby'

export const Container = styled.div`
  /* width: 420px; */
  margin: 0 auto;
  /* float: left; */
  /* position: relative; */
  /* &:nth-of-type(1) {
    width: 100%;
    background-color: #000;
    height: 400px;
    display: block;
    img {
      width: 400px;
    }
  } */
`
export const PostItemLink = styled(Link)`
  color: #8899a6;
  /* display: flex; */
  text-decoration: none;
  &:hover {
    background-color: #ccc;
    /* color: #ef652a; */
  }
  `
export const PostItemImage = styled.img`
  width: 100%;
  height: 230px;
`
export const PostItemImgWrapper = styled.div`
  /* float: left;
  margin-right: 10px; */

`
export const PostItemWrapper = styled.section`
  align-items: center;
  padding: 1rem;
  width: 100%;
  display: grid;
  grid-template-columns: 380px 1fr;
  grid-gap: 10px;
`
export const PostItemTag = styled.span`
  align-items: center;
  color: #8899a6;
  font-size: 1rem;
  font-weight: 700;
  min-width: 50px;
  margin-bottom: 1rem;
  text-transform: uppercase;
  display: block;
`
export const PostItemInfo = styled.div`
  float: left;
  margin-bottom: 20px;
`
export const PostInfoWrapper = styled.div`
  padding: 20px 10px;
  height: 230px;
  border-top: 1px solid #666;
  border-bottom: 1px solid #666;
  float: left;
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
  margin-bottom: 1rem;
`
export const PostItemDescription = styled.p`
  font-size: .9rem;
  font-weight: 300;
  line-height: 1.2;
`
export const PostSocialMediaWrapper = styled.div`
  float: left;
  width: 100%;
`
export const PostLinkSocialMediaWrapper = styled.div`
  width: 30px;
  float: left;
  margin: 0 10px;
`
export const PostLinkSocialMedia = styled.a`
  font-size: .9rem;
  font-weight: 300;
  display: block;
  text-decoration: none;
  color: #8899a6;
`
