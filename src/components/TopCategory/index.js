import React from 'react'
import Image from "../Images";

const TopCategory = () => (
  <div class="bgwhite p-t-40 p-b-40">
    <div class="container">
      <div class="row">
        <div class="col-sm-10 col-md-8 col-lg-4 m-l-r-auto">

          <div class="block1 hov-img-zoom pos-relative m-b-30">
            <Image imgName="imgTopCategory" />

            <div class="block1-wrapbtn w-size2">
              <a href="#" class="flex-c-m size2 m-text2 bg3 hov1 trans-0-4">
                Sunglasses
							</a>
            </div>
          </div>
        </div>

        <div class="col-sm-10 col-md-8 col-lg-4 m-l-r-auto">
          <div class="block1 hov-img-zoom pos-relative m-b-30">
            <Image imgName="imgTopCategory" />

            <div class="block1-wrapbtn w-size2">
              <a href="#" class="flex-c-m size2 m-text2 bg3 hov1 trans-0-4">
                Watches
							</a>
            </div>
          </div>
        </div>

        <div class="col-sm-10 col-md-8 col-lg-4 m-l-r-auto">
          <div class="block1 hov-img-zoom pos-relative m-b-30">
            <Image imgName="imgTopCategory" />

            <div class="block1-wrapbtn w-size2">
              <a href="#" class="flex-c-m size2 m-text2 bg3 hov1 trans-0-4">
                Bags
							</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default TopCategory;
