/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Media from "react-media"

import Header from "./header"
import Sidebar from "./sidebar"
import "./layout.css"
import "../styles/layout-override.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: "0 auto",
            maxWidth: 980,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            height: "100%",
          }}
        >
          <Media query={{ maxWidth: 848 }}>
            {matches =>
              matches ? (
                <div
                  style={{
                    margin: "0 auto",
                    maxWidth: 980,
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    height: "100%",
                    padding: "25px",
                  }}
                >
                  <main style={{ flex: 1 }}>{children}</main>
                </div>
              ) : (
                <div
                  style={{
                    margin: "0 auto",
                    maxWidth: 980,
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    height: "100%",
                    padding: "25px",
                  }}
                >
                  <main style={{ flex: 2.5, paddingRight: "30px" }}>
                    {children}
                  </main>
                  <div style={{ flex: 1 }}>
                    <Sidebar
                      title="UNII"
                      description="Posts on life, technology, and games."
                    />
                    <Sidebar
                      title="About author"
                      description="I am a Software Developer specializing in iOS and Unity development."
                    />
                  </div>
                </div>
              )
            }
          </Media>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
