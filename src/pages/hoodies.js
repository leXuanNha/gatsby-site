import React from 'react'
// import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Hoodies from '../components/Hoodies';

const HoodiesPage = () => (
  <Layout>
    <SEO title="Áo hoodie" />
    <Hoodies />
  </Layout>
)

export default HoodiesPage
