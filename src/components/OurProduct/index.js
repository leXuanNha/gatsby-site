import React from 'react'
import PropTypes from "prop-types"
import ProductItem from '../Product/ProductItem';

const renderProductList = (label) => {
  const productList = [];
  for (let i = 0; i < 4; i++) {
    productList.push(<ProductItem label={label} />);
  }

  return <React.Fragment>{productList}</React.Fragment>;
}

const OurProduct = ({ ...props }) => {
  const { title, label } = props;
  return (
    <section className="bgwhite p-t-45 p-b-58">
      <div className="container">
        <div className="sec-title p-b-22">
          <h3 className="m-text5 t-center">
            {title}
          </h3>
        </div>

        <div className="row">
          {renderProductList(label)}
        </div>
      </div>
    </section>
  )
}

OurProduct.propTypes = {
  title: PropTypes.string.isRequired,
  label: PropTypes.string
}


export default OurProduct;