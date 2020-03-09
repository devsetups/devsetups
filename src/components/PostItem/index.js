import React from "react"
import PropTypes from "prop-types"

import * as S from "./styled"

const PostItem = ({
  slug,
  position,
  date,
  title,
  place,
  company,
  image,
  description,
  twitter,
  github,
  linkedin,
  site,
}) => (
  <S.Container>
    <S.PostItemWrapper>
      <S.PostItemLink to={slug}>
        <S.PostItemImgWrapper>
          <S.PostItemImage src={image} alt="" />
        </S.PostItemImgWrapper>
      </S.PostItemLink>
    </S.PostItemWrapper>
  </S.Container>
)

PostItem.propTypes = {
  slug: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  place: PropTypes.string,
  company: PropTypes.string,
  description: PropTypes.string.isRequired,
  github: PropTypes.string,
  linkedin: PropTypes.string,
  site: PropTypes.string,
  twitter: PropTypes.string,
}

export default PostItem
