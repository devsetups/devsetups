import styled from 'styled-components'
import media from 'styled-media-query'

export const PostHeader = styled.header`
  color: #5a5050;
  margin: 0 auto;
  width: 60rem;
  padding: 2rem 0 0;
`

export const PostTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin: 1rem auto;
  text-align: center;

`

export const PostCompany = styled.h2`
  font-size: 2rem;
  font-weight: 200;
`

export const PostLabel = styled.label`
  font-size: 1.5rem;
  font-weight: 200;
`

export const PostDate = styled.p`
  font-size: 1rem;
  font-weight: 100;
  text-align: center;
`

export const PostItemList = styled.section`
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 300px);
  grid-gap: 10px;
  margin-top: 20px;
  ${media.lessThan("940px")`
    margin: 0;
    padding: 0 10px;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    justify-content: center;
    justify-items: center;
  `}
`

export const MainContent = styled.section`
  margin: auto;
  max-width: 70rem;
  padding: 2rem 5rem 0;

  p,
  h1,
  h2,
  h3,
  h4,
  ul,
  ol,
  .tags,
  iframe,
  .button-post {
    color: #5a5050;
    font-size: 1.25rem;
    font-weight: 300;
    line-height: 1.7;
    letter-spacing: 0.069rem;
    padding: 0;
  }

  p {
    margin: 0 auto 1.6rem;
    font-size: 1rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 2.4rem auto 1rem;
  }

  ul,
  ol {
    list-style: disc;
    padding-left: 2.5rem;
    margin: 0 auto 1.6rem;
  }

  li {
    font-size: 1rem;    

    & > ul {
      margin-bottom: 0;
    }
  }

  p,
  li {
    code {
      word-wrap: break-word;
    }
  }

  img {
    display: block;
    max-width: 100%;
    margin: 1.875rem auto;
  }

  iframe {
    padding: 0 1.6rem 1.6rem;
    width: 100%;
  }

  blockquote {
    color: #000;
    border-left: 0.3rem solid #a2d4ab;
    padding: 0 1.875rem;
    margin: 3.125rem auto;
  }

  hr {
    border: 1px solid #38444d;
    margin: 3rem auto;
  }

  #twitter-widget-0,
  .instagram-media,
  .twitter-tweet {
    margin: 20px auto !important;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    font-weight: 800;
    letter-spacing: 0.069rem;
    line-height: 1.4;
  }

  h1 {
    font-size: 2.8rem;
  }

  h2 {
    font-size: 1.6rem;
    padding: 0;
  }

  h3 {
    font-size: 1.4rem;
  }

  h4 {
    font-size: 1.4rem;
  }

  h5 {
    font-size: 1.2rem;
  }

  strong {
    font-weight: 700;
  }

  .gatsby-resp-image-background-image {
    z-index: 2;
    opacity: 1 !important;
  }

  .gatsby-resp-image-image {
    box-shadow: none !important;
    transition: opacity 0.2s;

    &.lazyload {
      opacity: 0;
    }

    &.lazyloaded {
      opacity: 1;
      z-index: 3;
    }
  }

  .gatsby-highlight {
    padding: 0 1.6rem 1.6rem;
  }

  .instagram-media {
    margin: 1rem auto !important;
  }

  a {
    border-bottom: 1px dashed #a2d4ab;
    color: #a2d4ab;
    text-decoration: none;
    transition: opacity 0.5s;

    svg {
      color: #000;
    }

    &:hover {
      opacity: 0.8;
    }
  }
`

export const PostSocialMediaWrapper = styled.div`
  float: left;
  margin: 0 auto;
`
export const PostLinkSocialMediaWrapper = styled.div`
  width: 30px;
  float: left;
  margin: 0 10px;
`

export const PostLinkSocialMedia = styled.a`
  font-size: 0.9rem;
  font-weight: 300;
  display: block;
  text-decoration: none;
  color: #8899a6;
`