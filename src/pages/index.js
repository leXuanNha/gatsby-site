import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Banner from "../components/Banner"
import TopCategory from "../components/TopCategory"
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <Banner />
    <TopCategory />
    <SEO title="Home" />

    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
