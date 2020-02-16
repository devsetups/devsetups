import React from 'react'


import MenuLinks from '../MenuLinks'

import * as S from './styled'

const Header = () => (
  <S.Container>
    <MenuLinks color="#5a5050" />
    <S.LinkLogo to="/">
      <S.Logo>DevSetups</S.Logo>
    </S.LinkLogo>
  </S.Container>
)

export default Header
