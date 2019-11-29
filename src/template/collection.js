import React from "react";
import Layout from '../components/layout'
import SEO from '../components/seo'
import ProductList from '../components/Product/ProductList';
import Tags from '../components/Tags';

const CollectionPage = ({ pageContext: { productList, tag } }) => {

  return (
    <Layout>
      <SEO title="Sản phẩm" />
      <Tags selected={tag} />
      <ProductList title='Áo thun unisex' data={productList} />
    </Layout>
  )
}

export default CollectionPage;