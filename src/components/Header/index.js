import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from 'gatsby';
import Image from "../Images";

class Header extends React.Component {
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    document.getElementsByClassName("btn-show-menu-mobile")[0].addEventListener("click", this.toggleMobileMenu);
  }

  handleScroll = () => {
    if (window.pageYOffset > 133) {
      document.getElementsByClassName('fixed-header2')[0].style.visibility = 'visible';
      document.getElementsByClassName('fixed-header2')[0].style.top = 0;
    } else {
      document.getElementsByClassName('fixed-header2')[0].style.visibility = 'hidden';
      document.getElementsByClassName('fixed-header2')[0].style.top = '-70px';
    }
  }

  toggleMobileMenu = () => {
    document.getElementsByClassName("btn-show-menu-mobile")[0].classList.toggle("is-active");

    if (document.getElementsByClassName("btn-show-menu-mobile")[0].classList.contains("is-active")) {
      document.getElementsByClassName("wrap-side-menu")[0].style.display = 'block';
    } else {
      document.getElementsByClassName("wrap-side-menu")[0].style.display = 'none';
    }
  }

  render() {
    const { storageProducts } = this.props;

    return (<React.Fragment>
      <div className="wrap_header fixed-header2 trans-0-4">
        <Link to="/" className="logo">
          <Image imgName='imgLogo' />
        </Link>

        <div className="wrap_menu">
          <nav className="menu">
            <ul className="main_menu">
              <li>
                <Link to="/">Trang chủ</Link>
              </li>
              {/* <li>
                <Link to="/about/">Giới thiệu</Link>
              </li> */}
              <li>
                <Link to="/collection/all">Áo thun</Link>
              </li>
              <li>
                <Link to="/hoodies">Hoodie</Link>
              </li>
              <li>
                <Link to="/faqs/">FAQs</Link>
              </li>
              <li>
                <Link to="/contact/">Liên hệ</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="header-icons">
          <div className="header-wrapicon2">
            <Link to="/cart/">
              <Image imgName='imgCartHeader' className='img-cart-header' />
              <span className="header-icons-noti">{storageProducts.length}</span>
            </Link>
          </div>
        </div>
      </div>

      {/* <div className="flex-c-m size22 bg0 s-text21 pos-relative">
      20% off everything!
		<a href="product.html" className="s-text22 hov6 p-l-5">
        Shop Now
		</a>

      <button className="flex-c-m pos2 size23 colorwhite eff3 trans-0-4 btn-romove-top-noti">
        <i className="fa fa-remove fs-13" aria-hidden="true"></i>
      </button>
    </div> */}

      <header className="header2">
        <div className="container-menu-header-v2 p-t-26">
          <div className="topbar2">
            {/* <div className="topbar-social">
              <a href="https://www.facebook.com/tektee.zone/" className="topbar-social-item fa fa-facebook-official" target="_blank"></a>
            </div> */}

            <Link to="/" className="logo2">
              <Image imgName='imgLogo' />
            </Link>

            <div className="topbar-child2">
              <div className="header-wrapicon2 m-r-13">
                <Link to="/cart/">
                  <Image imgName='imgCartHeader' className='img-cart-header' />
                  <span className="header-icons-noti">{storageProducts.length}</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="wrap_header">

            <div className="wrap_menu">
              <nav className="menu">
                <ul className="main_menu">
                  <li>
                    <Link to="/">Trang chủ</Link>
                  </li>
                  {/* <li>
                    <Link to="/about/">Giới thiệu</Link>
                  </li> */}
                  <li>
                    <Link to="/collection/all">Áo thun</Link>
                  </li>
                  <li>
                    <Link to="/hoodies">Hoodie</Link>
                  </li>
                  <li>
                    <Link to="/faqs/">FAQs</Link>
                  </li>
                  <li>
                    <Link to="/contact/">Liên hệ</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>

        <div className="wrap_header_mobile">
          <Link to="/" className="logo-mobile">
            <Image imgName='imgLogo' />
          </Link>

          <div className="btn-show-menu">
            <div className="header-icons-mobile">
              <div className="header-wrapicon2">
                <Link to="/cart/">
                  <Image imgName='imgCartHeader' className='img-cart-header' />
                  <span className="header-icons-noti">{storageProducts.length}</span>
                </Link>
              </div>
            </div>

            <div className="btn-show-menu-mobile hamburger hamburger--squeeze">
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </div>
          </div>
        </div>

        <div className="wrap-side-menu" >
          <nav className="side-menu">
            <ul className="main-menu">
              <li className="item-topbar-mobile p-l-20 p-t-8 p-b-8">
                <span className="topbar-child1">
                  Free ship khi mua từ 2 áo trở lên
						    </span>
              </li>

              {/* <li className="item-topbar-mobile p-l-10">
                <div className="topbar-social-mobile">
                  <a href="https://www.facebook.com/tektee.zone/" className="topbar-social-item fa fa-facebook-official" target="_blank"></a>
                </div>
              </li> */}

              <li className="item-menu-mobile">
                <Link to="/">Trang chủ</Link>
              </li>
              <li className="item-menu-mobile">
                <Link to="/collection/all">Áo thun</Link>
              </li>
              <li className="item-menu-mobile">
                <Link to="/hoodies">Hoodie</Link>
              </li>
              <li className="item-menu-mobile">
                <Link to="/faqs/">FAQs</Link>
              </li>
              <li className="item-menu-mobile">
                <Link to="/contact/">Liên hệ</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </React.Fragment>
    )
  }
}

Header.propTypes = {
  storageProducts: PropTypes.array
}

const mapStateToProps = state => ({
  storageProducts: state.cartReducer.products
});

export default connect(mapStateToProps, null)(Header);
