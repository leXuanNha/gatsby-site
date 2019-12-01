import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Image from '../components/Images'

const ThankFeedbackPage = () => (
  <Layout>
    <SEO title="Góp ý thành công" />
    <div className="bread-crumb flex-w">
      <div className="container">
        <Link to="/" className="s-text26">
          Trang chủ
          <i className="fa fa-angle-right m-l-8 m-r-9" aria-hidden="true"></i>
        </Link>
        <span className="s-text27">Góp ý thành công</span>
      </div>
    </div>
    <div className="container p-t-100">
      <div style={{ width: 70, margin: '0 auto' }}>
        <Image imgName="imgFeedbackSuccessIcon" />
      </div>
      <h2 className="m-text4 m-t-30 m-b-10 text-center">
        ĐÃ GỬI GÓP Ý THÀNH CÔNG
      </h2>

      <p className="s-text18 m-b-10 m-t-5 m-b-100 text-center">
        Cảm ơn bạn đã góp ý cho TekTee Zone. Chúng tôi sẽ phản hồi sớm nhất có
        thể.
      </p>
    </div>
  </Layout>
)

export default ThankFeedbackPage
