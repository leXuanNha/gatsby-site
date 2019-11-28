import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

const ReturnPage = () => (
  <Layout>
    <SEO title="Chính sách trả sản phẩm" />
    <div className="bread-crumb flex-w">
      <div className="container">
        <Link to="/" className="s-text26">
          Trang chủ
          <i className="fa fa-angle-right m-l-8 m-r-9" aria-hidden="true"></i>
        </Link>
        <span className="s-text27">Chính sách trả sản phẩm</span>
      </div>
    </div>
    <div className="container exchange-page">
      <h2 className="m-text4 m-t-30 m-b-35 text-center">
        Chính sách trả sản phẩm
      </h2>
      <p className="s-text25 m-b-5">
        1. TekTee Zone nhận lại sản phẩm trong trường hợp lỗi phát sinh từ nhà
        sản xuất.
      </p>
      <p className="s-text25 m-b-5">
        2. Các trường hợp lỗi do nhà sản xuất gồm: ố màu, phai màu, lỗi chất
        liệu, lỗi đường may, lỗi kiểu dáng… không theo đúng mô tả và tiêu chuẩn
        sản phẩm.
      </p>
      <p className="s-text25 m-b-5">
        3. TekTee Zone miễn phí 100% chi phí trả hàng.
      </p>
      <p className="s-text25 m-b-5">
        4. Khách hàng vui lòng nhắn tin đến fan page TekTee Zone hoặc gọi đến số
        0966 928 690 để được hướng dẫn quy trình trả sản phẩm.
      </p>
    </div>
  </Layout>
)

export default ReturnPage
