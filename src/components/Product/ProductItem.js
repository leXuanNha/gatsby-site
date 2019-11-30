import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { Link, navigate } from 'gatsby'
import { addToCartMessage } from '../../store/actions'

const numberWithCommas = x => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

const ProductItem = ({ ...props }) => {
  const { data } = props

  let productLabelClass = ''

  if (data.Label === 'Mới') {
    productLabelClass = 'block2-labelnew'
  }

  if (data.Label === 'Sale') {
    productLabelClass = 'block2-labelsale'
  }

  const dispatch = useDispatch()

  return (
    <div className="col-sm-6 col-md-4 col-lg-3 p-b-50 product-item-wrapper">
      <div className="block2">
        <div
          className={`block2-img wrap-pic-w of-hidden pos-relative ${productLabelClass}`}
        >
          <img
            src={data.Image[0].thumbnails.large.url}
            alt={data.DisplayName}
            onClick={() => navigate(`/products/${data.PathName}`)}
          />
          <div
            className="block2-overlay trans-0-4"
            onClick={() => navigate(`/products/${data.PathName}`)}
          >
            {/* <div className="block2-btn-addcart w-size1 trans-0-4">
              <button
                className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4"
                onClick={(e) => { dispatch(addToCartMessage(data)); e.stopPropagation() }}
              >
                Thêm vào giỏ
              </button>
            </div> */}
          </div>
        </div>
        <div className="block2-txt p-t-20">
          <Link
            to={`/products/${data.PathName}`}
            className="block2-name dis-block s-text3 p-b-5"
          >
            {data.DisplayName}
          </Link>
          <span className="block2-price m-text6 p-r-5 price-text">
            {numberWithCommas(data.Price)}
          </span>
        </div>
      </div>
    </div>
  )
}

ProductItem.propTypes = {
  data: PropTypes.object,
}

export default ProductItem
