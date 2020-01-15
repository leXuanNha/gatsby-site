import React from 'react'
import { Link } from 'gatsby'

const Banner = () => (
  <div className="banner">
    <div className="banner-overlay"></div>
    <h2 className="caption1-slide1 xl-text4 t-center bo14 p-b-6 m-b-22">
      T-shirt for Developer
    </h2>

    <span className="caption2-slide1 m-text1 t-center m-b-33">
      New Collection 2020
    </span>

    <div className="button-slide1 wrap-btn-slide1 w-size1">
      <Link
        to="/collection/all"
        className="flex-c-m size2 bo-rad-23 s-text2 bgwhite hov1 trans-0-4"
      >
        Xem ngay
      </Link>
    </div>
  </div>
)

export default Banner
