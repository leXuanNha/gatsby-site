import React from 'react'
import PropTypes from "prop-types"
import Image from "../Images";

const ProductItem = ({ ...props }) => {
  const { label } = props;

  let productLabelClass = '';

  if (label === 'new') {
    productLabelClass = 'block2-labelnew';
  }

  if (label === 'sale') {
    productLabelClass = 'block2-labelsale';
  }


  return (
    <div className="col-sm-6 col-md-4 col-lg-3 p-b-50">
      <div className="block2">
        <div className={`block2-img wrap-pic-w of-hidden pos-relative ${productLabelClass}`}>
          <Image imgName="imgTopCategory" />
          <div className="block2-overlay trans-0-4">
            <a href="#" className="block2-btn-addwishlist hov-pointer trans-0-4">
              <i className="icon-wishlist icon_heart_alt" aria-hidden="true"></i>
              <i className="icon-wishlist icon_heart dis-none" aria-hidden="true"></i>
            </a>
            <div className="block2-btn-addcart w-size1 trans-0-4">
              <button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
                Add to Cart
						</button>
            </div>
          </div>
        </div>
        <div className="block2-txt p-t-20">
          <a href="product-detail.html" className="block2-name dis-block s-text3 p-b-5">
            Herschel supply co 25l
				</a>
          <span className="block2-price m-text6 p-r-5">
            $75.00
				</span>
        </div>
      </div>
    </div>
  )
}

ProductItem.propTypes = {
  label: PropTypes.string
}

export default ProductItem;