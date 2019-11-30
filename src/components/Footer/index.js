import React from 'react'
import { Link, navigate } from 'gatsby'
import { useDispatch } from 'react-redux'
import Airtable from 'airtable'
import {
  showLoadingMessage,
  hideLoadingMessage,
} from '../../store/actions/common'

const handleSubmit = (e, dispatch) => {
  e.preventDefault()

  dispatch(showLoadingMessage())

  const form = e.target

  const formData = new FormData(form)

  const objectFormData = {}

  formData.forEach((value, key) => {
    objectFormData[key] = value
  })

  const base = new Airtable({ apiKey: 'keyTJm4V5i1tprmMb' }).base(
    'appKeThV2yFTVBxZj'
  )

  base('Subscribers').create(
    [
      {
        fields: {
          Email: objectFormData.email,
        },
      },
    ],
    err => {
      if (err) {
        console.error(err)
        return
      }

      form.reset()

      navigate('/thank-subscribe')

      dispatch(hideLoadingMessage())
    }
  )
}

const Footer = () => {
  const dispatch = useDispatch()

  return (
    <footer className="bg6 p-t-45 p-b-43 p-l-45 p-r-45">
      <div className="flex-w p-b-90">
        <div className="w-size6 p-t-30 p-l-15 p-r-15 respon3">
          <h4 className="s-text12 p-b-30">THÔNG TIN SHOP</h4>

          <div>
            <p className="s-text24 w-size27 m-b-15">
              Địa chỉ: 21A đường số 2, P.Hiệp Bình Phước, Q.Thủ Đức, TP.Hồ Chí
              Minh
              <br />
              Số điện thoại: 0966 928 690
            </p>

            {/* <div className="flex-m p-t-0">
              <a href="https://www.facebook.com/tektee.zone/" className="color1 p-r-20 fa fa-facebook-official" target="_blank" style={{ fontSize: 25 }}></a>
            </div> */}

            <iframe
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ftektee.zone%2F&tabs&width=340&height=300&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=2432388470422348"
              width="340"
              height="300"
              style={{ border: 'none', overflow: 'hidden', marginBottom: -180 }}
              scrolling="no"
              frameborder="0"
              allowTransparency="true"
              allow="encrypted-media"
            ></iframe>
          </div>
        </div>

        <div
          className="w-size6 p-t-30 p-l-15 p-r-15 respon4"
          style={{ zIndex: 98 }}
        >
          <h4 className="s-text12 p-b-25">Chính sách khách hàng</h4>

          <ul>
            <li className="p-b-5">
              <Link to="/chinh-sach-giao-hang/" className="s-text24">
                Chính sách giao hàng
              </Link>
            </li>

            <li className="p-b-5">
              <Link to="/chinh-sach-doi-san-pham/" className="s-text24">
                Chính sách đổi sản phẩm
              </Link>
            </li>
            <li className="p-b-5">
              <Link to="/chinh-sach-tra-san-pham/" className="s-text24">
                Chính sách trả sản phẩm
              </Link>
            </li>
          </ul>
        </div>

        <div className="w-size8 p-t-30 p-l-15 p-r-15 respon3">
          <h4 className="s-text12 p-b-5">
            Đăng ký để nhận thông tin khuyến mãi và sản phẩm mới
          </h4>

          <form
            name="subscribe-form"
            method="POST"
            onSubmit={e => handleSubmit(e, dispatch)}
          >
            <div className="effect1 w-size9">
              <input
                className="s-text24 bg6 w-full p-b-5"
                type="email"
                name="email"
                placeholder="Email của bạn"
              />
              <span className="effect1-line"></span>
            </div>

            <div className="w-size2 p-t-20">
              <button
                type="submit"
                className="flex-c-m size2 bg4 bo-rad-23 hov1 m-text3 trans-0-4"
              >
                Đăng ký
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="t-center p-l-15 p-r-15">
        <div className="t-center s-text8 p-t-20">
          Copyright © 2019, TekTee Zone
        </div>
      </div>
    </footer>
  )
}

export default Footer
