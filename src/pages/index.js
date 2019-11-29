import React from 'react'
// import { Link } from 'gatsby'

import Layout from '../components/layout'
import Banner from "../components/Banner"
import TopCategory from "../components/TopCategory"
import OurProduct from "../components/OurProduct"
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Trang chủ" />
    <Banner />
    <TopCategory />
    <OurProduct title='Hàng mới về' label='Mới' />
    {/* <OurProduct title='Bán chạy' label="Bán chạy" /> */}
  </Layout>
)

export default IndexPage
