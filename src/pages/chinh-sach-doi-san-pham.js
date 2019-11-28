import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

const ExchangePage = () => (
  <Layout>
    <SEO title="Chính sách đổi sản phẩm" />
    <div className="bread-crumb flex-w">
      <div className="container">
        <Link to="/" className="s-text26">
          Trang chủ
          <i className="fa fa-angle-right m-l-8 m-r-9" aria-hidden="true"></i>
        </Link>
        <span className="s-text27">Chính sách đổi sản phẩm</span>
      </div>
    </div>
    <div className="container exchange-page">
      <h2 className="m-text4 m-t-30 m-b-35 text-center">
        Chính sách đổi sản phẩm
      </h2>
      <p className="s-text18 m-b-10 m-t-25">I. Chính sách áp dụng</p>
      <p className="s-text25 m-b-5">
        1. Đổi hàng trong vòng 15 ngày kể từ ngày nhận đối với các sản phẩm
        không sale.
      </p>
      <p className="s-text25 m-b-5">
        2. Không áp dụng đổi hàng với các sản phẩm sale.
      </p>

      <p className="s-text18 m-b-10 m-t-25">II. Quy định đổi sản phẩm</p>
      <p className="s-text25 m-b-5">1. Mỗi sản phẩm chỉ được đổi 1 lần.</p>
      <p className="s-text25 m-b-5">2. Khách có thể đổi sản phẩm như sau:</p>
      <p className="s-text25 m-b-5">
        - Sản phẩm cao hơn hoặc ngang giá, Nếu sản phẩm đổi có giá trị cao hơn
        sản phẩm đã mua, khách hàng vui lòng thanh toán bù thêm phần tiền chênh
        lệch.
      </p>
      <p className="s-text25 m-b-5">
        - Sản phẩm giá thấp hơn sẽ không được hoàn lại tiền thừa.
      </p>
      <p className="s-text25 m-b-5">
        - Trường hợp sản phẩm khách muốn đổi đã hết thì sẽ đổi sang sản phẩm
        khác.
      </p>
      <p className="s-text25 m-b-5">
        3. Sản phẩm đổi chưa qua sử dụng, không bị vấy bẩn, ám mùi lạ, còn giữ
        nguyên tem tag sản phẩm đầy đủ, sản phẩm đổi phải đi cùng quà tặng kèm (
        nếu có).
      </p>

      <p className="s-text18 m-b-10 m-t-25">III. Quy Trình Đổi Sản Phẩm</p>
      <p className="s-text25 m-b-5">
        1. Khách hàng vui lòng nhắn tin cho fan page của TekTee Zone hoặc gọi
        đến số 0966 928 690 để được hướng dẫn quy trình đổi sản phẩm.
      </p>
      <p className="s-text25 m-b-5">
        2. TekTee Zone sẽ miễn phí 100% chi phí vận chuyển khi đổi hàng.
      </p>
    </div>
  </Layout>
)

export default ExchangePage
