import React from 'react'
import PropTypes from "prop-types"
import ProductItem from './ProductItem';

const renderProductList = (label) => {
  const productList = [];
  for (let i = 0; i < 20; i++) {
    productList.push(<ProductItem label={label} />);
  }

  return <React.Fragment>{productList}</React.Fragment>;
}

const ProductList = ({ ...props }) => {
  const { title, label } = props;
  return (
    <div className="container">
      <div className="sec-title p-b-22">
        <h3 className="m-text20 m-left" style={{ marginBottom: 0 }}>
          {title}
        </h3>
      </div>

      <div className="row">
        {renderProductList(label)}
      </div>
    </div>
  )
}

ProductList.propTypes = {
  title: PropTypes.string.isRequired,
  label: PropTypes.string
}


export default ProductList;