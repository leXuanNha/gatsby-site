import React from 'react'
import Image from "../Images";

const CategoryItem = () => (
  <div className="col-sm-10 col-md-8 col-lg-4 m-l-r-auto">
    <div className="block1 hov-img-zoom pos-relative m-b-30">
      <Image imgName="imgTopCategory" />
      <div className="block1-wrapbtn w-size2">
        <a href="#" className="flex-c-m size2 m-text2 bg3 hov1 trans-0-4">
          Sunglasses
				</a>
      </div>
    </div>
  </div>
);

const TopCategory = () => (
  <div className="bgwhite p-t-40 p-b-40">
    <div className="container">
      <div className="row">
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
      </div>
    </div>
  </div>
)

export default TopCategory;

