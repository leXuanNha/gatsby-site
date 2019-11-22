import React, { useState } from 'react'
// import PropTypes from "prop-types"
import Image from "../Images";
import Layout from '../layout';
import SEO from '../seo';
import ProductItem from './ProductItem';

const SIZE_OPTIONS = ['S', 'M', 'L', 'XL'];

const ProductDetailPage = ({ pageContext: { product } }) => {
  const [size, setSize] = useState('S');

  const [quantity, setQuantity] = useState(1);

  return (
    <Layout>
      <SEO title={product.name} />

      <div className="bread-crumb flex-w">
        <div className='container'>
          <a href="index.html" className="s-text16">
            Home
			      <i className="fa fa-angle-right m-l-8 m-r-9" aria-hidden="true"></i>
          </a>

          <a href="#" className="s-text16">
            T-Shirt
			      <i className="fa fa-angle-right m-l-8 m-r-9" aria-hidden="true"></i>
          </a>

          <span className="s-text17">
            {product.name}
          </span>
        </div>
      </div>

      <div className="container bgwhite p-t-35 p-b-80">
        <div className="flex-w flex-sb">
          <div className="w-size14 p-t-30 respon5">
            <div className='product-detail-main-img'>
              <Image imgName='imgProductDetail' />
            </div>
            <div className='product-detail-sm-block'>
              <div className='product-detail-sm-img active'>
                <Image imgName='imgProductDetail' />
              </div>
              <div className='product-detail-sm-img'>
                <Image imgName='imgProductDetail' />
              </div>
              <div className='product-detail-sm-img'>
                <Image imgName='imgProductDetail' />
              </div>
              <div className='product-detail-sm-img'>
                <Image imgName='imgProductDetail' />
              </div>
            </div>
          </div>

          <div className="w-size13 p-t-30 respon5">
            <h4 className="product-detail-name m-text16 p-b-5 m-b-0">
              Boxy T-Shirt with Roll Sleeve Detail
				    </h4>

            <div className="m-text25 bo3 p-t-10 p-b-10">
              150,000 VND
				    </div>

            <div className='size-block bo3 p-t-10 p-b-10'>
              {SIZE_OPTIONS.map(option => {
                let sizeItemClass = 'size-item s-text6';

                if (option === size) {
                  sizeItemClass += ' active';
                }

                return <div className={sizeItemClass} onClick={() => setSize(option)}>{option}</div>;
              })}
            </div>

            <div className="flex-w bo3 p-t-2">
              <div className="w-size16 flex-m flex-w">
                <div className="flex-w bo5 of-hidden m-r-22 m-t-10 m-b-10">
                  <button className="btn-num-product-down color1 flex-c-m size7 bg8 eff2" onClick={() => setQuantity(quantity - 1)} disabled={quantity === 1}>
                    <i className="fs-12 fa fa-minus" aria-hidden="true"></i>
                  </button>

                  <input className="size8 m-text18 t-center num-product" type="number" name="num-product" value={quantity} />

                  <button className="btn-num-product-up color1 flex-c-m size7 bg8 eff2" onClick={() => setQuantity(quantity + 1)}>
                    <i className="fs-12 fa fa-plus" aria-hidden="true"></i>
                  </button>
                </div>
              </div>
            </div>

            <div className="btn-addcart-product-detail size16 trans-0-4 m-t-5 m-b-5">
              <button className="flex-c-m sizefull bg1 bo-rad-23 hov1 s-text1 trans-0-4">
                Thêm vào giỏ hàng
						  </button>
            </div>

            <h5 class="m-text19 m-b-10 p-t-25">
              Mô tả
            </h5>

            <p className="s-text8">
              Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.
              Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.
              Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.
              Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.
				    </p>

          </div>
        </div>
      </div>

      <div className='container'>
        <div class="sec-title p-b-60 m-t-60">
          <h3 class="m-text5 t-center m-b-0">
            SẢN PHẨM CÙNG CHUYÊN MỤC
				  </h3>
        </div>
        <div className='row m-b-100'>
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </div>
      </div>

    </Layout>
  )
}

// ProductDetail.propTypes = {

// }

export default ProductDetailPage;