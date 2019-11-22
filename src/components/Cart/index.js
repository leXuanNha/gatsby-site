import React from 'react'
// import PropTypes from "prop-types"
import { Link } from "gatsby";
import Image from '../Images';

const Cart = () => {
  return (
    <React.Fragment>
      <div className="bread-crumb flex-w">
        <div className='container'>
          <Link to='/' className="s-text16">
            Trang chủ
            <i className="fa fa-angle-right m-l-8 m-r-9" aria-hidden="true"></i>
          </Link>
          <span className="s-text17">
            Giỏ hàng của bạn
          </span>
        </div>
      </div>

      <section className="bgwhite p-t-45 p-b-58">
        <div className="container">
          <div className="sec-title p-b-22">
            <h3 className="m-text5 t-center">
              Giỏ hàng
          </h3>
          </div>


          <div className="container-table-cart pos-relative">
            <div className="wrap-table-shopping-cart bgwhite">
              <table className="table-shopping-cart">
                <tr className="table-head">
                  <th className="column-1"></th>
                  <th className="column-2">Product</th>
                  <th className="column-3">Price</th>
                  <th className="column-4 p-l-70">Quantity</th>
                  <th className="column-5">Total</th>
                </tr>

                <tr className="table-row">
                  <td className="column-1">
                    <div className="cart-img-product b-rad-4 o-f-hidden">
                      <Image imgName='imgCart' />
                    </div>
                  </td>
                  <td className="column-2">Men Tshirt</td>
                  <td className="column-3">$36.00</td>
                  <td className="column-4">
                    <div className="flex-w bo5 of-hidden w-size17">
                      <button className="btn-num-product-down color1 flex-c-m size7 bg8 eff2">
                        <i className="fs-12 fa fa-minus" aria-hidden="true"></i>
                      </button>

                      <input className="size8 m-text18 t-center num-product" type="number" name="num-product1" value="1" />

                      <button className="btn-num-product-up color1 flex-c-m size7 bg8 eff2">
                        <i className="fs-12 fa fa-plus" aria-hidden="true"></i>
                      </button>
                    </div>
                  </td>
                  <td className="column-5">$36.00</td>
                </tr>

                <tr className="table-row">
                  <td className="column-1">
                    <div className="cart-img-product b-rad-4 o-f-hidden">
                      <Image imgName='imgCart' />
                    </div>
                  </td>
                  <td className="column-2">Mug Adventure</td>
                  <td className="column-3">$16.00</td>
                  <td className="column-4">
                    <div className="flex-w bo5 of-hidden w-size17">
                      <button className="btn-num-product-down color1 flex-c-m size7 bg8 eff2">
                        <i className="fs-12 fa fa-minus" aria-hidden="true"></i>
                      </button>

                      <input className="size8 m-text18 t-center num-product" type="number" name="num-product2" value="1" />

                      <button className="btn-num-product-up color1 flex-c-m size7 bg8 eff2">
                        <i className="fs-12 fa fa-plus" aria-hidden="true"></i>
                      </button>
                    </div>
                  </td>
                  <td className="column-5">$16.00</td>
                </tr>
              </table>
            </div>
          </div>

          <div className="bo8 cart-total">
            <span className="m-text22">
              Total:
					</span>

            <span className="m-text21" style={{ marginLeft: 20 }}>
              $39.00
					</span>
          </div>

          <div className="flex-w flex-sb-m p-t-25 p-b-25 bo8 p-l-40 p-r-30 p-lr-15-sm cart-btn-group">
            <div className="size11 trans-0-4 m-t-10 m-b-10">
              <button className="flex-c-m sizefull bg1 bo-rad-23 hov1 s-text1 trans-0-4">
                Tiếp tục mua hàng
					  </button>
            </div>
            <div className="size10 trans-0-4 m-t-10 m-b-10">
              <button className="flex-c-m sizefull bg1 bo-rad-23 hov1 s-text1 trans-0-4">
                Cập nhật
					  </button>
            </div>
            <div className="size10 trans-0-4 m-t-10 m-b-10">
              <button className="flex-c-m sizefull bg1 bo-rad-23 hov1 s-text1 trans-0-4">
                Thanh toán
					  </button>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

// Cart.propTypes = {

// }


export default Cart;