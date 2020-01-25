import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TokenList from '../components/TokenList/TokenList'
import tokens from '../../build/js-internal/variables-scss'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <TokenList tokens={tokens} />
  </Layout>
)

export default IndexPage
