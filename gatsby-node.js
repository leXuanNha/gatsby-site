/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const resultTshirt = await graphql(`
    query tshirtDetail {
      allAirtable(filter: {table: {eq: "Tshirt"}}) {
        nodes {
          data {
            PathName
        DisplayName
        Price
        Label
        In_stock
        Collection
        Description
        Size
        Image {
          url
        }
          }
        }
      }
    }
  `);

  resultTshirt.data.allAirtable.nodes.forEach(product => {
    const { data } = product;
    createPage({
      path: `/products/${data["PathName"]}`,
      component: require.resolve(`./src/components/Product/ProductDetail.js`),
      context: { data },
    })
  })

  const resultTshirtCollection = await graphql(`
  query tshirtGroupByCollection {
    allAirtable(filter: {table: {eq: "Tshirt"}}) {
      group(field: data___Collection) {
        edges {
          node {
            id
            data {
              DisplayName
              Collection
              Image {
                thumbnails {
                  full {
                    url
                  }
                }
              }
              PathName
              Label
              Price
            }
          }
        }
        fieldValue
      }
    }
  }
  `);

  resultTshirtCollection.data.allAirtable.group.forEach(collection => {
    const { edges, fieldValue } = collection;
    createPage({
      path: `/collection/${fieldValue.toLowerCase()}`,
      component: require.resolve(`./src/template/collection.js`),
      context: { productList: edges },
    })
  })
}
