import React from "react"

import Layout from "../components/Layout"
import Header from "../components/Header"
import Footer from '../components/Footer'
import SEO from "../components/seo"

import { MainContent } from '../styles/base'

const AboutPage = () => (
  <Layout>
    <SEO
      title="About" 
      description="Saiba mais sobre o projeto com a intenção de se aproximar de pessoas com talento."
    />
    <Header />
    <MainContent>
      <section>
        <h1>DevSetups</h1>
        <p>
          DevSetups é um projeto com a intenção de se aproximar de pessoas com
          talento para compartilhar ferramentas, workflow e desafios que
          enfrentaram.
        </p>
        <p>
          Uma coleção de entrevistas com pessoas referência no mundo da Web. De
          programadores a designers de interface, de empreendedores a freelancers.
          Conheça pessoas que causaram impacto na Web ou na comunidade.
        </p>
      </section>
      <section>
        <h2>Curadoria</h2>
        <p>Daniel Castro</p>
      </section>
      <section>
        <h2>Contato</h2>
        <p>
          Fale através de e-mail:
          <a href="mailto:dancasttro@gmail.com"> dancasttro@gmail.com</a>
        </p>
      </section>
    </MainContent>
    <Footer />
  </Layout>
)

export default AboutPage
