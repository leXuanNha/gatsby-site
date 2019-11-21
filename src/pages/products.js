import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import ProductList from '../components/Product/ProductList';
import Tags from '../components/Tags';

const tags = [
  {
    id: 1,
    name: 'All',
    selected: true
  },
  {
    id: 2,
    name: 'Developer',
    selected: false
  },
  {
    id: 3,
    name: 'Coding',
    selected: false
  },
  {
    id: 4,
    name: 'Javascript',
    selected: false
  }
]

const ProductListPage = () => (
  <Layout>
    <SEO title="Products" />
    <Tags data={tags} />
    <ProductList title='All products' />
  </Layout>
)

export default ProductListPage
