import React from 'react'
import { useStaticQuery, graphql, navigate } from 'gatsby'
import ProductItem from '../Product/ProductItem'

const renderProductList = data => {
  const productList = []

  for (let i = 0; i < 8; i++) {
    productList.push(<ProductItem data={data.allAirtable.nodes[i].data} />)
  }

  return <React.Fragment>{productList}</React.Fragment>
}

const FeaturedTee = () => {
  const featuredTees = useStaticQuery(graphql`
    query featuredTeesQuery {
      allAirtable(
        filter: {
          table: { eq: "Tshirt" }
          data: { Label: { nin: ["Mới", "Bán chạy"] } }
        }
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
    <section className="bgwhite p-t-45 p-b-58 m-b-80">
      <div className="container">
        <div className="sec-title p-b-22">
          <h1 className="m-text5 t-center">Áo thun unisex</h1>
        </div>

        <div className="row">{renderProductList(featuredTees)}</div>

        <div
          className="size10 trans-0-4 m-t-10 m-b-10"
          style={{ margin: '0 auto', width: 300 }}
          onClick={() => navigate('/collection/all')}
        >
          <button className="flex-c-m sizefull bg1 bo-rad-23 hov1 s-text1 trans-0-4">
            Xem thêm
          </button>
        </div>
      </div>
    </section>
  )
}

export default FeaturedTee
