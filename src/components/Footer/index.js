import React from 'react';
import { Link } from "gatsby";
import Airtable from 'airtable';

const handleSubmit = (e) => {
  e.preventDefault()

  // const form = e.target;

  // const data = new FormData(form);
  // const xhr = new XMLHttpRequest();
  // xhr.open(form.method, 'https://formspree.io/mrgbegpl');
  // xhr.setRequestHeader("Accept", "application/json");
  // xhr.onreadystatechange = () => {
  //   if (xhr.readyState !== XMLHttpRequest.DONE) return;
  //   if (xhr.status === 200) {
  //     form.reset();
  //     console.log("OK");
  //   } else {
  //     console.log("ERROR");
  //   }
  // };
  // xhr.send(data);

  const base = new Airtable({ apiKey: 'keyTJm4V5i1tprmMb' }).base('appKeThV2yFTVBxZj');

  base('Subscribers').create([
    {
      "fields": {
        "Email": "nha.le2@yopmail.com"
      }
    }
  ]);
}

const Footer = () => {
  return (
    <footer className="bg6 p-t-45 p-b-43 p-l-45 p-r-45">
      <div className="flex-w p-b-90">
        <div className="w-size6 p-t-30 p-l-15 p-r-15 respon3">
          <h4 className="s-text12 p-b-30">
            THÔNG TIN SHOP
				</h4>

          <div>
            <p className="s-text7 w-size27">
              Địa chỉ: 21A đường số 2, P.Hiệp Bình Phước, Q.Thủ Đức, TP.Hồ Chí Minh<br />
              Số điện thoại: 0966 928 690
					</p>

            <div className="flex-m p-t-30">
              <a href="https://www.facebook.com/tektee.zone/" className="fs-18 color1 p-r-20 fa fa-facebook" target="_blank"></a>
            </div>
          </div>
        </div>

        <div className="w-size6 p-t-30 p-l-15 p-r-15 respon4">
          <h4 className="s-text12 p-b-25">
            Chính sách khách hàng
				</h4>

          <ul>
            <li className="p-b-5">
              <Link to="/chinh-sach-giao-hang/" className="s-text7">
                Chính sách giao hàng
						</Link>
            </li>

            <li className="p-b-5">
              <Link to="/chinh-sach-doi-san-pham/" className="s-text7">
                Chính sách đổi sản phẩm
						</Link>
            </li>
            <li className="p-b-5">
              <Link to="/chinh-sach-tra-san-pham/" className="s-text7">
                Chính sách trả sản phẩm
						</Link>
            </li>
          </ul>
        </div>

        <div className="w-size8 p-t-30 p-l-15 p-r-15 respon3">
          <h4 className="s-text12 p-b-5">
            Đăng ký để nhận thông tin khuyến mãi và sản phẩm mới
				</h4>

          <form name="subscribe-form" method="POST" onSubmit={handleSubmit}>
            <input type="hidden" name="form-name" value="subscribe-form" />
            <div className="effect1 w-size9">
              <input className="s-text7 bg6 w-full p-b-5" type="email" name="email" placeholder="Email của bạn" />
              <span className="effect1-line"></span>
            </div>

            <div className="w-size2 p-t-20">
              <button type="submit" className="flex-c-m size2 bg4 bo-rad-23 hov1 m-text3 trans-0-4">
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

export default Footer;