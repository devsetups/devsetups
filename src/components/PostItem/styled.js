import styled from 'styled-components'
import { Link } from 'gatsby'

export const Container = styled.div`
  margin: 0 auto;
  position: relative;
`
export const PostItemLink = styled(Link)`
  color: #8899a6;
  text-decoration: none;
  &:hover {
    background-color: #ccc;
    PostInfoWrapper {
      bottom: 0;
      opacity: 1;
    }
  }
`
export const PostItemImage = styled.img`
  width: 100%;
`
export const PostItemImgWrapper = styled.div`
  height: 230px;
  overflow: hidden;
`
export const PostItemWrapper = styled.section`
  align-items: center;
  width: 300px;
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
`
export const PostInfoWrapper = styled.div`
  padding: 20px 10px;
  background-color: #3eaca8;
  position: absolute;
  width: 100%;
  bottom: 0px;
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
  color: #fff;
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
