import React from "react"
import * as S from "./styled"

const About = () => (
  <S.Container>
    <S.Title>Sobre</S.Title>
    <S.TextWrapper>
      <S.Text>
        DevSetups é um projeto com a intenção de se aproximar de pessoas com
        talento para compartilhar ferramentas, workflow e desafios que
        enfrentaram.
      </S.Text>
      <S.Text>
        Uma coleção de entrevistas com pessoas referência no mundo da Web. De
        programadores a designers de interface, de empreendedores a freelancers.
        Conheça pessoas que causaram impacto na Web ou na comunidade.
      </S.Text>
    </S.TextWrapper>
  </S.Container>
)

export default About
