import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import ProductItem from '../Product/ProductItem'

const renderProductList = data => {
  const productList = []

  for (let i = 0; i < 4; i++) {
    productList.push(<ProductItem data={data.allAirtable.nodes[i].data} />)
  }

  return <React.Fragment>{productList}</React.Fragment>
}

const NewProduct = () => {
  const newProducts = useStaticQuery(graphql`
    query newProductsQuery {
      allAirtable(
        filter: { table: { eq: "Tshirt" }, data: { Label: { eq: "Mới" } } }
      ) {
        nodes {
          data {
            DisplayName
            PathName
            Label
            Price
            Image {
              thumbnails {
                large {
                  url
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <section className="bgwhite p-t-45 p-b-58">
      <div className="container">
        <div className="sec-title p-b-22">
          <h1 className="m-text5 t-center">Hàng mới về</h1>
        </div>

        <div className="row">{renderProductList(newProducts)}</div>
      </div>
    </section>
  )
}

export default NewProduct
