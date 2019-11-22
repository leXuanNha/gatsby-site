import React, { useState } from 'react'
// import PropTypes from "prop-types"
import Image from "../Images";
import Layout from '../layout';
import SEO from '../seo';

const SIZE_OPTIONS = ['S', 'M', 'L', 'XL'];

const ProductDetailPage = ({ pageContext: { product } }) => {
  const [size, setSize] = useState('S');

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
          <div className="w-size13 p-t-30 respon5">
            <div className="wrap-slick3 flex-sb flex-w">
              <div className="wrap-slick3-dots"></div>

              <div className="slick3">
                <div className="item-slick3" data-thumb="images/thumb-item-01.jpg">
                  <div className="wrap-pic-w">
                    <Image imgName='imgCart' />
                  </div>
                </div>

                {/* <div className="item-slick3" data-thumb="images/thumb-item-02.jpg">
                <div className="wrap-pic-w">
                  <Image imgName='imgCart' />
                </div>
              </div>

              <div className="item-slick3" data-thumb="images/thumb-item-03.jpg">
                <div className="wrap-pic-w">
                  <Image imgName='imgCart' />
                </div>
              </div> */}
              </div>
            </div>
          </div>

          <div className="w-size14 p-t-30 respon5">
            <h4 className="product-detail-name m-text16 p-b-5 m-b-0">
              Boxy T-Shirt with Roll Sleeve Detail
				    </h4>

            <div className="m-text25 bo3 p-t-10 p-b-10">
              150 000 VND
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
                  <button className="btn-num-product-down color1 flex-c-m size7 bg8 eff2">
                    <i className="fs-12 fa fa-minus" aria-hidden="true"></i>
                  </button>

                  <input className="size8 m-text18 t-center num-product" type="number" name="num-product" value="1" />

                  <button className="btn-num-product-up color1 flex-c-m size7 bg8 eff2">
                    <i className="fs-12 fa fa-plus" aria-hidden="true"></i>
                  </button>
                </div>
              </div>
            </div>

            <div className="btn-addcart-product-detail size16 trans-0-4 m-t-5 m-b-5">
              <button className="flex-c-m sizefull bg1 bo-rad-23 hov1 s-text1 trans-0-4">
                Add to Cart
						  </button>
            </div>

            <h5 class="m-text19 m-b-10 p-t-25">
              Description
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
    </Layout>
  )
}

// ProductDetail.propTypes = {

// }

export default ProductDetailPage;