import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
// import Logo from '../../images/logo_frontjobs.svg'

import * as S from './styled'

const Greetings = () => {

  const {
    site: {
      siteMetadata: { description },
    },
  } = useStaticQuery(graphql`
    query MySiteMetaData {
      site {
        siteMetadata {
          description
        }
      }
    }
  `)

  return (
    <S.Container>
      <S.Title>{description}</S.Title>
    </S.Container>
  )
}

export default Greetings