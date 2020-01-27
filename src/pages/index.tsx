import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import TokenList from '../components/TokenList/TokenList'
import tokensCss from '../../build/js-internal/variables-css'

const IndexPage = () => {
  const data = useStaticQuery(graphql`
      query {
        css: file(relativePath: {eq: "variables.css"}) {
          id
          publicURL
        }
      }
  `)

  return (
    <Layout>
      <SEO title="Minimum Viable Design System" />
      <h3>This is a very barebones design system</h3>
      <p>Created by <a href="https://tinyeahno.com" target="_blank" rel="noopener noreferrer">Jeremy Tinianow</a>.</p>
      <section className="how-to">
        <h4 className="how-to__title">How to use</h4>
        <pre className="how-to__text"><a href={data.css.publicURL} download="variables.css">Download the variables.css</a> and add it to your project.</pre>
      </section>
      <h4>Design Tokens</h4>
      <pre className="how-to__text">Click to copy the css variable or its associated value. Paste it where you want it.</pre>
      <TokenList tokens={tokensCss} />
    </Layout>
  )
}

export default IndexPage
