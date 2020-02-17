import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Header from '../components/Header'
import SEO from '../components/seo'
import PostItem from '../components/PostItem'

import * as S from '../components/Post/styled'
import Pagination from "../components/Pagination"
import Footer from '../components/Footer'
import Greetings from '../components/Greetings'

const BlogList = props => {
  const postList = props.data.allMarkdownRemark.edges

  const { currentPage, numPages } = props.pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? "/" : `/page/${currentPage - 1}`
  const nextPage = `/page/${currentPage + 1}`

  return (
    <Layout>
      <SEO title="Home" />
      <Header />
      <Greetings />
      <S.PostItemList>
        {postList.map(
          ({
            node: {
              frontmatter: {
                position,
                date,
                company,
                title,
                image,
                description,
              },
              timeToRead,
              fields: { slug },
            },
          }) => (
            <PostItem
              image={image}
              slug={slug}
              position={position}
              date={date}
              timeToRead={timeToRead}
              title={title}
              description={description}
              company={company}
            />
          )
        )}
      </S.PostItemList>

      <Pagination
        isFirst={isFirst}
        isLast={isLast}
        currentPage={currentPage}
        numPages={numPages}
        prevPage={prevPage}
        nextPage={nextPage}
      />
      <Footer />
    </Layout>
  )
}

export const query = graphql`
  query PostList($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            position
            date(locale: "pt-br", formatString: "MM/YYYY")
            description
            company
            title
            image
          }
          timeToRead
        }
      }
    }
  }
`

export default BlogList
