import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import ProductItem from '../Product/ProductItem';

const renderProductList = (data) => {
  return data.map((item, index) => {
    return <ProductItem data={item.data} key={index} />
  });
}

const Hoodies = () => {
  const hoodies = useStaticQuery(graphql`
    query hoodiesQuery {
      allAirtable(filter: { table: { eq: "Hoodie" } }) {
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

  console.log('hoodies', hoodies)
  return (
    <div className="container">
      <div className="sec-title p-b-22">
        <h1 className="m-text20 m-left" style={{ marginBottom: 0 }}>
          Hoodies
        </h1>
      </div>

      <div className="row">
        {renderProductList(hoodies.allAirtable.nodes)}
      </div>
    </div>
  )
}

export default Hoodies;