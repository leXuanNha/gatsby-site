import React, { useState } from 'react'
import { Link } from "gatsby";
import { useStaticQuery, graphql } from "gatsby";
import { useSelector } from "react-redux";
import Select from 'react-select';
import Layout from '../components/layout'
import SEO from '../components/seo';
import tinhThanhJson from "../dist/tinh_tp.json";
import quanHuyenJson from "../dist/quan_huyen.json";

const processTinhThanhData = () => {
  const tinhThanhArray = [];

  Object.keys(tinhThanhJson).map(key => {
    tinhThanhArray.push(tinhThanhJson[key]);
  })

  return tinhThanhArray;
}

const customStyles = {
  input: () => ({
    fontSize: 13,
    paddingLeft: 8
  }),
  placeholder: () => ({
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    color: "#a6a6a6",
    lineHeight: 1.8,
    paddingLeft: 8
  }),
  option: (provided) => ({
    ...provided,
    fontSize: 13,
  }),
  control: (provided, state) => ({
    ...provided,
    border: '1px solid #e6e6e6',
    boxShadow: 'none',
    '&:hover': {
      border: '1px solid #e6e6e6',
    }
  }),
  singleValue: (provided) => ({
    ...provided,
    fontFamily: "Montserrat-Regular",
    color: "#666666",
    fontSize: 13,
    lineHeight: 1.8,
    paddingLeft: 8
  })
}

const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const processTotalBill = cartProducts => {
  let totalCash = 0;

  cartProducts.map(item => {
    totalCash += item.Price * item.count;
  });

  return totalCash;
}

const FAQPage = () => {
  const tinhThanhOptions = processTinhThanhData();

  const storageProducts = useSelector(state => state.cartReducer.products);

  const data = useStaticQuery(graphql`
    query cartCheckoutQuery {
      allAirtable(filter: {table: {eq: "Tshirt"}}) {
        nodes {
          data {
            DisplayName
            PathName
            Price
            Image {
              thumbnails {
                full {
                  url
                }
              }
            }
          }
        }
      }
    }`
  );

  const cartProducts = [];

  data.allAirtable.nodes.map(node => {
    if (storageProducts.find(x => x.product === node.data.PathName)) {
      cartProducts.push({ ...node.data, count: storageProducts.find(x => x.product === node.data.PathName).count });
    }
  })

  const [tinhThanh, setTinhThanh] = useState(null);

  const [quanHuyen, setQuanHuyen] = useState(null);

  const [quanHuyenArray, setQuanHuyenArray] = useState([]);

  return (
    <Layout>
      <SEO title="Thanh toán đơn hàng" />
      <div className="bread-crumb flex-w m-b-45">
        <div className='container'>
          <Link to="/" className="s-text16">
            Trang chủ
			      <i className="fa fa-angle-right m-l-8 m-r-9" aria-hidden="true"></i>
          </Link>
          <Link to="/cart" className="s-text16">
            Giỏ hàng
			      <i className="fa fa-angle-right m-l-8 m-r-9" aria-hidden="true"></i>
          </Link>
          <span className="s-text17">
            Thanh toán đơn hàng
        </span>
        </div>
      </div>
      <div className="container">
        <div className="row p-b-60">
          <div className="col-sm-12 col-md-6">
            <h5 className="m-text11 m-b-10">Thông tin giao hàng</h5>

            <div className="bo4 m-b-20">
              <input className="sizefull s-text7 p-l-15 p-r-15 p-b-12 p-t-10" type="text" name="name" placeholder="Họ và tên" />
            </div>

            <div style={{ display: "flex" }}>
              <div className="bo4 m-b-20" style={{ marginRight: 8, width: "70%" }}>
                <input className="sizefull s-text7 p-l-15 p-r-15 p-b-12 p-t-10" type="email" name="email" placeholder="Email" />
              </div>

              <div className="bo4 m-b-20">
                <input className="sizefull s-text7 p-l-15 p-r-15 p-b-12 p-t-10" type="text" name="phone" placeholder="Số điện thoại" />
              </div>
            </div>

            <div className="bo4 m-b-20">
              <input className="sizefull s-text7 p-l-15 p-r-15 p-b-12 p-t-10" type="text" name="address" placeholder="Địa chỉ" />
            </div>

            <div className="checkout-select-wrapper">
              <div style={{ width: "50%", marginRight: 8 }}>
                <Select
                  styles={customStyles}
                  value={tinhThanh}
                  onChange={(selectedOption) => {
                    setTinhThanh(selectedOption);
                    setQuanHuyen(null);
                    const quanHuyenOptions = [];
                    Object.keys(quanHuyenJson).map(key => {
                      if (quanHuyenJson[key]['parent_code'] === selectedOption.code) {
                        quanHuyenOptions.push(quanHuyenJson[key]);
                      }
                    })
                    setQuanHuyenArray(quanHuyenOptions);
                  }}
                  options={tinhThanhOptions}
                  getOptionLabel={option => option.name}
                  getOptionValue={option => option.code}
                  placeholder="Tỉnh/thành"
                />
              </div>
              <div style={{ width: "50%" }}>
                <Select
                  styles={customStyles}
                  value={quanHuyen}
                  onChange={(selectedOption) => setQuanHuyen(selectedOption)}
                  options={quanHuyenArray}
                  getOptionLabel={option => option.name_with_type}
                  getOptionValue={option => option.code}
                  placeholder="Quận/huyện"
                  isDisabled={!tinhThanh}
                />
              </div>
            </div>

            <div className="m-t-30">
              <h5 className="m-text11 m-b-5">Phương thức thanh toán: </h5>
              <span className="s-text7">Thanh toán khi nhận hàng (COD)</span>
            </div>

            <div className="size10 trans-0-4 m-t-50 m-b-30" style={{ width: 300, float: "right" }}>
              <button className="flex-c-m sizefull bg1 bo-rad-23 hov1 s-text1 trans-0-4">
                Đặt hàng
					  </button>
            </div>
          </div>
          <div className="col-sm-12 col-md-6">
            <h5 className="m-text11 m-b-0 p-b-10" style={{ borderBottom: "1px solid #e6e6e6" }}>Đơn hàng của bạn</h5>
            {cartProducts.map(item => {
              return (
                <div className="checkout-item" key={item.PathName}>
                  <img src={item.Image[0].thumbnails.full.url} alt={item.DisplayName} />
                  <div className="item-name s-text15">{item.DisplayName}</div>
                  <div className="item-count s-text12">{item.count}</div>
                  <div className="item-sub-price price-text s-text12">{numberWithCommas(item.Price * item.count)}</div>
                </div>
              )
            })}
            <div className="checkout-bill p-t-10">
              <p className="s-text6 price-text">Tạm tính</p>
              <p className="s-text6 price-text">{numberWithCommas(processTotalBill(cartProducts))}</p>
            </div>
            <div className="checkout-bill">
              <p className="s-text6 price-text">Phí ship</p>
              <p className="s-text6 price-text">{numberWithCommas(processTotalBill(cartProducts))}</p>
            </div>
            <div className="checkout-bill">
              <p className="s-text18 price-text">Tổng cộng</p>
              <p className="s-text18 price-text">{numberWithCommas(processTotalBill(cartProducts))}</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default FAQPage
