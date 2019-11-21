import React from 'react'
// import PropTypes from "prop-types"

const Contact = () => {
  return (
    <section className="bgwhite p-t-66 p-b-60">
      <div className="container">
        <div className="row">
          <div className="col-md-6 p-b-30">
            <div className="p-r-20 p-r-0-lg">
              {/* <MapContainer /> */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.6623882566714!2d106.71287921474942!3d10.837127792280343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175287c793d02b7%3A0x3a9904d1253beae8!2zMjFhIMSQxrDhu51uZyBz4buRIDIsIEhp4buHcCBCw6xuaCBQaMaw4bubYywgVGjhu6cgxJDhu6ljLCBI4buTIENow60gTWluaCwgVmlldG5hbQ!5e0!3m2!1sen!2s!4v1574325305494!5m2!1sen!2s"
                width="100%"
                height="490"
                frameborder="0"
                style={{ border: 0 }}
                allowfullscreen="true"></iframe>
            </div>
          </div>

          <div className="col-md-6 p-b-30">
            <form className="leave-comment">
              <h4 className="m-text26 p-t-15">
                Ý kiến của bạn
						  </h4>

              <div className="bo4 of-hidden size15 m-b-20">
                <input className="sizefull s-text7 p-l-22 p-r-22" type="text" name="name" placeholder="Họ tên" />
              </div>

              <div className="bo4 of-hidden size15 m-b-20">
                <input className="sizefull s-text7 p-l-22 p-r-22" type="text" name="phone-number" placeholder="Số điện thoại" />
              </div>

              <div className="bo4 of-hidden size15 m-b-20">
                <input className="sizefull s-text7 p-l-22 p-r-22" type="text" name="email" placeholder="Địa chỉ email" />
              </div>

              <textarea className="dis-block s-text7 size20 bo4 p-l-22 p-r-22 p-t-13 m-b-20" name="message" placeholder="Nội dung"></textarea>

              <div className="w-size25">
                <button className="flex-c-m size2 bg1 bo-rad-23 hov1 m-text3 trans-0-4">
                  Gửi
							</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

// Contact.propTypes = {

// }


export default Contact;