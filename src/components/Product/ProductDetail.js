import React, { useState } from 'react'
// import PropTypes from "prop-types"
import { Link } from "gatsby";
import Image from "../Images";
import Layout from '../layout';
import SEO from '../seo';
import ProductItem from './ProductItem';

const SIZE_OPTIONS = ['S', 'M', 'L', 'XL'];

const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const ProductDetailPage = ({ pageContext: { data } }) => {
  console.log('data', data);
  const [size, setSize] = useState('S');

  const [quantity, setQuantity] = useState(1);

  return (
    <Layout>
      <SEO title={data["DisplayName"]} />

      <div className="bread-crumb flex-w">
        <div className='container'>
          <Link to="/" className="s-text16">
            Trang chủ
			      <i className="fa fa-angle-right m-l-8 m-r-9" aria-hidden="true"></i>
          </Link>

          <Link to="/collection/all" className="s-text16">
            Áo thun
			      <i className="fa fa-angle-right m-l-8 m-r-9" aria-hidden="true"></i>
          </Link>

          <span className="s-text17">
            {data["DisplayName"]}
          </span>
        </div>
      </div>

      <div className="container bgwhite p-t-35 p-b-80">
        <div className="flex-w flex-sb">
          <div className="w-size14 p-t-30 respon5">
            <div className='product-detail-main-img'>
              <img src={data.Image[0].url} alt="" />
            </div>
            <div className='product-detail-sm-block'>
              <div className='product-detail-sm-img active'>
                <img src={data.Image[0].url} alt="" />
              </div>
              <div className='product-detail-sm-img'>
                <img src={data.Image[0].url} alt="" />
              </div>
              <div className='product-detail-sm-img'>
                <img src={data.Image[0].url} alt="" />
              </div>
              <div className='product-detail-sm-img'>
                <img src={data.Image[0].url} alt="" />
              </div>
            </div>
          </div>

          <div className="w-size13 p-t-30 respon5">
            <h4 className="product-detail-name m-text16 p-b-5 m-b-0">
              {data["DisplayName"]}
            </h4>

            <div className="m-text22 bo3 p-t-10 p-b-10 price-text">
              {numberWithCommas(data["Price"])}
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

            <h5 className="m-text19 m-b-10 p-t-25">
              Mô tả
            </h5>

            <p className="s-text23 w-s-pr m-b-35">
              {data["Description"]}
            </p>

            <div className='product-specific'>
              <div className='product-specific-ic'>
                <Image imgName="imgDonationIcon" />
              </div>
              <div className='product-specific-info'>
                <h5 className='m-text19 m-b-5'>Được thiết kế dành riêng cho bạn</h5>
                <p className="s-text23">Là một developer thật sự rất cool. Những hình in trên áo đều thể hiện được cái chất cũng như tiếng lòng của dân IT. Luôn hưng phấn khi cho mọi người thấy những thông điệp đó ;)
                </p>
              </div>
            </div>

            <div className='product-specific'>
              <div className='product-specific-ic'>
                <Image imgName="imgQualityIcon" />
              </div>
              <div className='product-specific-info'>
                <h5 className='m-text19 m-b-5'>Chất lượng cao</h5>
                <p className="s-text23">Với chất liệu 95% cotton và 5% spandex mang lại cho áo sự thoáng mát và khả năng co dãn 2 chiều, thoải mái vận động mà không có sự khó chịu nào.
                </p>
              </div>
            </div>

            <div className='product-specific'>
              <div className='product-specific-ic'>
                <Image imgName="imgTShirtIcon" />
              </div>
              <div className='product-specific-info'>
                <h5 className='m-text19 m-b-5'>Bảng size áo</h5>
                <table className="size-table">
                  <thead>
                    <tr>
                      <th>Size</th>
                      <th>S</th>
                      <th>M</th>
                      <th>L</th>
                      <th>XL</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Cân nặng</td>
                      <td>45 - 54kg</td>
                      <td>55 - 65kg</td>
                      <td>65 - 75kg</td>
                      <td>70 - 78kg</td>
                    </tr>
                    <tr>
                      <td>Chiều cao</td>
                      <td>1m50 - 1m60</td>
                      <td>1m60 - 1m69</td>
                      <td>1m70 - 1m75</td>
                      <td>Trên 1m75</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* <div className='container'>
        <div className="sec-title p-b-60 m-t-60">
          <h3 className="m-text5 t-center m-b-0">
            SẢN PHẨM CÙNG CHUYÊN MỤC
				  </h3>
        </div>
        <div className='row m-b-100'>
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </div>
      </div> */}

    </Layout>
  )
}

// ProductDetail.propTypes = {

// }

export default ProductDetailPage;