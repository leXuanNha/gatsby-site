import React from 'react';
// import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby";
import { useDispatch, useSelector } from "react-redux";
import { Link, navigate } from "gatsby";
import { updateQuantityToCartMessage } from '../../store/actions';

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

const Cart = () => {
  const storageProducts = useSelector(state => state.cartReducer.products);

  const dispatch = useDispatch();

  const data = useStaticQuery(graphql`
    query cartQuery {
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
        {cartProducts.length > 0 ? (
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
                    <th className="column-2">Sản phẩm</th>
                    <th className="column-3">Giá</th>
                    <th className="column-4 p-l-70">Số lượng</th>
                    <th className="column-5">Tổng</th>
                  </tr>

                  {cartProducts.map(item => {
                    return (
                      <tr className="table-row">
                        <td className="column-1">
                          <div className="cart-img-product b-rad-4 o-f-hidden" onClick={() => navigate(`/products/${item.PathName}`)}>
                            <img src={item.Image[0].thumbnails.full.url} alt={item.DisplayName} />
                          </div>
                        </td>
                        <td className="column-2">{item.DisplayName}</td>
                        <td className="column-3 price-text">{numberWithCommas(item.Price)}</td>
                        <td className="column-4">
                          <div className="flex-w bo5 of-hidden w-size17">
                            <button
                              className="btn-num-product-down color1 flex-c-m size7 bg8 eff2"
                              onClick={() => dispatch(updateQuantityToCartMessage(item.PathName, item.count - 1))}
                            >
                              <i className="fs-12 fa fa-minus" aria-hidden="true"></i>
                            </button>

                            <input className="size8 m-text18 t-center num-product" type="number" name="num-product1" value={item.count} />

                            <button
                              className="btn-num-product-up color1 flex-c-m size7 bg8 eff2"
                              onClick={() => dispatch(updateQuantityToCartMessage(item.PathName, item.count + 1))}
                            >
                              <i className="fs-12 fa fa-plus" aria-hidden="true"></i>
                            </button>
                          </div>
                        </td>
                        <td className="column-5 price-text">{numberWithCommas(item.Price * item.count)}</td>
                      </tr>
                    );
                  })}
                </table>
              </div>
            </div>

            <div className="bo8 cart-total">
              <span className="m-text22">
                Tổng:
					</span>

              <span className="m-text21 price-text" style={{ marginLeft: 20 }}>
                {numberWithCommas(processTotalBill(cartProducts))}
              </span>
            </div>

            <div className="flex-w flex-sb-m p-t-25 p-b-25 bo8 p-l-40 p-r-30 p-lr-15-sm cart-btn-group">
              <div className="size11 trans-0-4 m-t-10 m-b-10">
                <button className="flex-c-m sizefull bg1 bo-rad-23 hov1 s-text1 trans-0-4" onClick={() => navigate("/collection/all")}>
                  Tiếp tục mua hàng
					  </button>
              </div>
              <div className="size10 trans-0-4 m-t-10 m-b-10">
                <button className="flex-c-m sizefull bg1 bo-rad-23 hov1 s-text1 trans-0-4" onClick={() => navigate("/checkout/")}>
                  Thanh toán
					  </button>
              </div>
            </div>
          </div>
        ) : (
            <div className="text-center">
              <h2 className="text-center m-text16">Giỏ hàng của bạn đang trống</h2>
              <div className="size10 trans-0-4 m-t-10 m-b-10" style={{ margin: "0 auto", width: 300 }} onClick={() => navigate("/collection/all")}>
                <button className="flex-c-m sizefull bg1 bo-rad-23 hov1 s-text1 trans-0-4">
                  Tiếp tục mua hàng
					  </button>
              </div>
            </div>
          )}
      </section>
    </React.Fragment>
  )
}

// Cart.propTypes = {

// }


export default Cart;