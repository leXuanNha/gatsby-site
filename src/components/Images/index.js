import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Image = ({ ...props }) => {
  const data = useStaticQuery(graphql`
    query {
      imgLogo: file(relativePath: { eq: "icons/logo.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imgCartHeader: file(relativePath: { eq: "icons/icon-header-02.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imgDeveloperCategory: file(relativePath: { eq: "developer.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imgCodingCategory: file(relativePath: { eq: "coding.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imgFunnyCategory: file(relativePath: { eq: "funny.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imgCart: file(relativePath: { eq: "item-10.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imgProductDetail: file(relativePath: { eq: "product-detail-01.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imgTShirtIcon: file(relativePath: { eq: "icons/tshirt.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imgQualityIcon: file(relativePath: { eq: "icons/quality.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imgDonationIcon: file(relativePath: { eq: "icons/donation.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imgSubscribeSuccessIcon: file(
        relativePath: { eq: "icons/subscribe.png" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imgOrderSuccessIcon: file(
        relativePath: { eq: "icons/order-success.png" }
      ) {
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

export default Image
