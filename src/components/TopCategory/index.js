import React from 'react'
import { Link } from 'gatsby'
import Image from '../Images'

const TOP_CATEGORY = ['Developer', 'Coding', 'Funny']

const TopCategory = () => (
  <div className="bgwhite p-t-40 p-b-40">
    <div className="container">
      <div className="row">
        {TOP_CATEGORY.map((item, index) => {
          return (
            <div className="col-sm-10 col-md-8 col-lg-4 m-l-r-auto" key={index}>
              <div className="block1 hov-img-zoom pos-relative m-b-30">
                <Image imgName={`img${item}Category`} />
                <div className="block1-wrapbtn w-size2">
                  <Link
                    to={`/collection/${item.toLowerCase()}`}
                    className="flex-c-m size2 m-text2 bg3 hov1 trans-0-4"
                  >
                    {item}
                  </Link>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  </div>
)

export default TopCategory
