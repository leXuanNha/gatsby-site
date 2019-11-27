import React from "react";
import Layout from '../components/layout'
import SEO from '../components/seo'
import ProductList from '../components/Product/ProductList';
import Tags from '../components/Tags';

const CollectionPage = ({ pageContext: { productList, tag } }) => {

  return (
    <Layout>
      <SEO title="Products" />
      <Tags selected={tag} />
      <ProductList title='All products' data={productList} />
    </Layout>
  )
}

export default CollectionPage;