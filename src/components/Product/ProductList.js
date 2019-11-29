import React from 'react'
import PropTypes from "prop-types"
import ProductItem from './ProductItem';

const renderProductList = (data) => {
  return data.map((item, index) => {
    return <ProductItem data={item.node.data} key={index} />
  });
}

const ProductList = ({ ...props }) => {
  const { title, data } = props;
  return (
    <div className="container">
      <div className="sec-title p-b-22">
        <h1 className="m-text20 m-left" style={{ marginBottom: 0 }}>
          {title}
        </h1>
      </div>

      <div className="row">
        {renderProductList(data)}
      </div>
    </div>
  )
}

ProductList.propTypes = {
  title: PropTypes.string.isRequired,
  label: PropTypes.string
}


export default ProductList;