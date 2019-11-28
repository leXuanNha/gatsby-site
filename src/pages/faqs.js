import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

const FAQPage = () => (
  <Layout>
    <SEO title="FAQs" />
    <div className="bread-crumb flex-w">
      <div className="container">
        <Link to="/" className="s-text26">
          Trang chủ
          <i className="fa fa-angle-right m-l-8 m-r-9" aria-hidden="true"></i>
        </Link>
        <span className="s-text27">FAQs</span>
      </div>
    </div>
    <div className="container exchange-page">
      <h2 className="m-text4 m-t-30 m-b-35 text-center">FAQs</h2>

      <p className="s-text18 m-b-10 m-t-25">
        1. Tôi có thể xem bảng size áo ở đâu?
      </p>
      <p className="s-text25 m-b-5">
        Ở mỗi trang chi tiết sản phẩm đều có bảng size áo, bạn có thể kéo xuống
        bên dưới mục mô tả để tìm size áo phù hợp với mình.
      </p>

      <p className="s-text18 m-b-10 m-t-25">
        2. Bao lâu thì tôi nhận được hàng?
      </p>
      <p className="s-text25 m-b-5">
        Tùy theo khu vực mà sẽ có thời gian nhận hàng khác nhau:
      </p>
      <p className="s-text25 m-b-5">- Ở TP.Hồ Chí Minh, từ 1 - 2 ngày.</p>
      <p className="s-text25 m-b-5">- Khu vực khác, từ 3 - 5 ngày.</p>

      <p className="s-text18 m-b-10 m-t-25">
        3. Tôi cần làm gì nếu muốn đổi trả hàng?
      </p>
      <p className="s-text25 m-b-5">
        Trong trường hợp muốn đổi hoặc trả hàng, bạn vui lòng nhắn tin đến fan
        page của TekTee Zone hoặc gọi đến số 0966 928 690.
      </p>

      <p className="s-text18 m-b-10 m-t-25">
        4. Tôi có phải mất phí đổi trả hàng không?
      </p>
      <p className="s-text25 m-b-5">
        TekTee Zone sẽ chịu 100% chi phí đổi trả hàng.
      </p>

      <p className="s-text18 m-b-10 m-t-25">
        5. Tôi làm gì nếu không nhận được hàng?
      </p>
      <p className="s-text25 m-b-5">
        Bạn vui lòng liên hệ với chúng tôi nếu không nhận được hàng sau 1 tuần
        kể từ lúc đặt hàng. Chúng tôi sẽ kiểm tra lại, giúp bạn biết đơn hàng
        của bạn đang ở đâu hoặc giao sản phẩm mới đến cho bạn.
      </p>
    </div>
  </Layout>
)

export default FAQPage
