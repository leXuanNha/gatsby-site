import React from 'react'
import PropTypes from "prop-types"
import ProductItem from './ProductItem';

const renderProductList = (data) => {
  const productList = [];

  return data.map(item => {
    return <ProductItem data={item.node.data} />
  });
}

const ProductList = ({ ...props }) => {
  const { title, data } = props;
  return (
    <div className="container">
      <div className="sec-title p-b-22">
        <h3 className="m-text20 m-left" style={{ marginBottom: 0 }}>
          {title}
        </h3>
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