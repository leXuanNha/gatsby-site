import React from 'react'
// import { Link } from 'gatsby'

import Layout from '../components/layout'
import Banner from '../components/Banner'
import TopCategory from '../components/TopCategory'
import NewProduct from '../components/NewProduct'
import BestSellerProduct from '../components/BestSellerProduct'
import FeaturedTee from '../components/FeaturedTee'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="TekTee Zone | Home" />
    <Banner />
    <TopCategory />
    <NewProduct />
    <BestSellerProduct />
    <FeaturedTee />
  </Layout>
)

export default IndexPage
