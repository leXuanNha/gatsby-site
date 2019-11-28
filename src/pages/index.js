import React from 'react'
// import { Link } from 'gatsby'

import Layout from '../components/layout'
import Banner from "../components/Banner"
import TopCategory from "../components/TopCategory"
import OurProduct from "../components/OurProduct"
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <Banner />
    <TopCategory />
    <OurProduct title='Hàng mới về' label='Mới' />
    {/* <OurProduct title='Bán chạy' label="Bán chạy" /> */}
    <SEO title="Trang chủ" />

    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
