import React from "react"
import { graphql } from "gatsby"
// import { Twitter } from 'styled-icons/boxicons-logos/Twitter'
// import { World } from 'styled-icons/boxicons-regular/World'
// import { Github } from 'styled-icons/boxicons-logos/Github'
// import { LinkedinSquare } from 'styled-icons/boxicons-logos/LinkedinSquare'

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Footer from "../components/Footer"
import RecommendedPosts from "../components/RecommendedPosts"
import Header from "../components/Header"

import * as S from "../components/Post/styled"

const BlogPost = ({ data, pageContext }) => {
  const post = data.markdownRemark
  const next = pageContext.nextPost
  const previous = pageContext.previousPost

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        image={post.frontmatter.image}
      />
      <Header />
      <S.PostHeader>
        <S.PostTitle>{post.frontmatter.title}</S.PostTitle>
        <S.PostDate>{post.frontmatter.date}</S.PostDate>
      </S.PostHeader>
      <S.MainContent>
        <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
      </S.MainContent>
      <RecommendedPosts next={next} previous={previous} />
      <Footer />
    </Layout>
  )
}

export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        title
        place
        company
        position
        date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
        image
        twitter
        github
        linkedin
        site
      }
      html
      timeToRead
    }
  }
`

export default BlogPost
