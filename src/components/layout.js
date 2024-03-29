/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { useSelector } from "react-redux"
import Header from "./Header"
import Footer from "./Footer"

import 'bootstrap/dist/css/bootstrap.min.css';
import "./layout.css"
import "../fonts/font-awesome-4.7.0/css/font-awesome.min.css"
// import "../vendor/bootstrap/css/bootstrap.min.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const loading = useSelector(state => state.commonReducer.loading)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      {loading &&
        <div className="loading-overlay">
          <div class="lds-dual-ring"></div>
        </div>
      }
      <div>
        <main>{children}</main>
        {/* <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer> */}
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
