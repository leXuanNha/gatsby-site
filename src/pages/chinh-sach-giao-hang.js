import React from 'react'
import { Link } from "gatsby";
import Layout from '../components/layout'
import SEO from '../components/seo'

const ShippingPage = () => (
  <Layout>
    <SEO title="Chính sách giao hàng" />
    <div className="bread-crumb flex-w">
      <div className='container'>
        <Link to="/" className="s-text16">
          Trang chủ
			      <i className="fa fa-angle-right m-l-8 m-r-9" aria-hidden="true"></i>
        </Link>
        <span className="s-text17">
          Chính sách giao hàng
        </span>
      </div>
    </div>
    <div className="container exchange-page">
      <h2 className="m-text4 m-t-30 m-b-35 text-center">Chính sách giao hàng</h2>
      <p className="s-text15 m-b-5">1. TekTee Zone giao hàng COD trên toàn quốc.</p>
      <p className="s-text15 m-b-5">2. Các đơn hàng ở TP.Hồ Chí Minh tính phí ship 20.000 VND trên mỗi đơn hàng. Thời gian giao từ 1 - 2 ngày kể từ lúc đặt hàng.</p>
      <p className="s-text15 m-b-5">3. Các đơn hàng ở ngoài TP.Hồ Chí Minh tính phí ship 35.000 VND trên mỗi đơn hàng. Thời gian giao từ 3 - 5 ngày kể từ lúc đặt hàng.</p>
      <p className="s-text15 m-b-5">4. Khách hàng được miễn phí ship khi mua từ 2 áo trở lên (không áp dụng cùng các đợt giảm giá).</p>
    </div>
  </Layout>
)

export default ShippingPage
