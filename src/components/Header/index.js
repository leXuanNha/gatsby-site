import React from "react"
// import PropTypes from "prop-types"
import { Link } from 'gatsby'
import Image from "../Images";

const Header = () => (
  <React.Fragment>
    <div className="flex-c-m size22 bg0 s-text21 pos-relative">
      20% off everything!
		<a href="product.html" className="s-text22 hov6 p-l-5">
        Shop Now
		</a>

      <button className="flex-c-m pos2 size23 colorwhite eff3 trans-0-4 btn-romove-top-noti">
        <i className="fa fa-remove fs-13" aria-hidden="true"></i>
      </button>
    </div>

    <header className="header2">
      <div className="container-menu-header-v2 p-t-26">
        <div className="topbar2">
          <div className="topbar-social">
            <a href="#" className="topbar-social-item fa fa-facebook"></a>
            <a href="#" className="topbar-social-item fa fa-instagram"></a>
          </div>

          <a href="index.html" className="logo2">
            {/* <img src="../../images/icons/logo.png" alt="IMG-LOGO" /> */}
            <Image imgName='imgLogo' />
          </a>

          <div className="topbar-child2">
            <div className="header-wrapicon2 m-r-13">
              <Link to="/cart/">
                <Image imgName='imgCartHeader' className='img-cart-header' />
                {/* <img src="images/icons/icon-header-02.png" className="header-icon1 js-show-header-dropdown" alt="ICON" /> */}
                <span className="header-icons-noti">0</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="wrap_header">

          <div className="wrap_menu">
            <nav className="menu">
              <ul className="main_menu">
                <li>
                  <Link to="/">Home</Link>
                  {/* <ul className="sub_menu">
                    <li><a href="index.html">Homepage V1</a></li>
                    <li><a href="home-02.html">Homepage V2</a></li>
                    <li><a href="home-03.html">Homepage V3</a></li>
                  </ul> */}
                </li>

                <li>
                  <Link to="/products/">Shop</Link>
                </li>

                <li className="sale-noti">
                  <a href="product.html">Sale</a>
                </li>

                <li>
                  <a href="cart.html">Features</a>
                </li>

                <li>
                  <a href="blog.html">Blog</a>
                </li>

                <li>
                  <a href="about.html">About</a>
                </li>

                <li>
                  <Link to="/contact/">Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  </React.Fragment>
)

Header.propTypes = {

}

Header.defaultProps = {

}

export default Header
