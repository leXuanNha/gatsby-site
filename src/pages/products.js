import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import ProductList from '../components/Product/ProductList';

const SecondPage = () => (
  <Layout>
    <SEO title="Products" />
    <ProductList title='All products' />
  </Layout>
)

export default SecondPage
