import React from 'react'
// import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Cart from '../components/Cart';

const CartPage = () => (
  <Layout>
    <SEO title="Cart" />
    <Cart />
  </Layout>
)

export default CartPage
