import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = ({ ...props }) => {
  const data = useStaticQuery(graphql`
    query {
      imgLogo: file(relativePath: { eq: "icons/logo.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      imgCartHeader: file(relativePath: { eq: "icons/icon-header-02.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      imgBanner: file(relativePath: { eq: "bg-banner.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      imgTopCategory: file(relativePath: { eq: "top-category-2.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      imgCart: file(relativePath: { eq: "item-10.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      imgProductDetail: file(relativePath: { eq: "product-detail-01.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data[props.imgName].childImageSharp.fluid} />
}

export default Image;
