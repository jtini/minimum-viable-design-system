import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import TokenList from '../components/TokenList/TokenList'
import tokens from '../../build/js-internal/variables-scss'

const IndexPage = () => {
  const data = useStaticQuery(graphql`
      query {
        sass: file(relativePath: {eq: "_variables.scss"}) {
          id
          publicURL
        }
      }
  `)
  return (
    <Layout>
      <SEO title="Home" />
      <h3>This is a very barebones design system</h3>
      <section className="how-to">
        <h4 className="how-to__title">How to use</h4>
        <pre className="how-to__text"><a href={data.sass.publicURL} download="_variables.scss">Download the _variables.scss</a> and add it to your project.</pre>
      </section>
      <h4>Design Tokens</h4>
      <pre className="how-to__text">Click to copy the sass variable or its associated value. Paste it where you want it.</pre>
      <TokenList tokens={tokens} />
    </Layout>
  )
}

export default IndexPage
