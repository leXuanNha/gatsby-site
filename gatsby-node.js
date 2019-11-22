/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createPages = ({ actions }) => {
  const { createPage } = actions;

  const productData = [
    {
      id: '1234',
      name: 'Ao 1234'
    },
    {
      id: '5678',
      name: 'Ao 5678'
    },
  ];

  productData.forEach(product => {
    createPage({
      path: `/products/${product.id}`,
      component: require.resolve(`./src/components/Product/ProductDetail.js`),
      context: { product },
    })
  })
}
