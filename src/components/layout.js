import React from "react"
import { Link } from "gatsby"
import { rhythm } from "../utils/typography"
import "../style/navbar.css"

class Layout extends React.Component {
  render() {
    const { children } = this.props
    // const rootPath = `${__PATH_PREFIX__}/`
    let header

    // if (location.pathname === rootPath) {
    header = (
      <div className="ui secondary  menu">
        <div className="right menu">
          <Link to={"/"} className="item">
            Home
          </Link>
          <Link to={"/about"} className="item">
            About
          </Link>
          <Link to={"/connect"} className="item">
            Connect
          </Link>
        </div>
      </div>
    )
    // } else {

    // <h3
    //   style={{
    //     fontFamily: `Montserrat, sans-serif`,
    //     marginTop: 0,
    //   }}
    // >
    //   <Link
    //     style={{
    //       boxShadow: `none`,
    //       textDecoration: `none`,
    //       color: `inherit`,
    //     }}
    //     to={`/`}
    //   >
    //     {title}
    //   </Link>
    // </h3>
    // )
    // }
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(30),
          padding: `1rem`,
        }}
      >
        <header
          style={{
            marginBottom: `2rem`,
          }}
        >
          {header}
        </header>

        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    )
  }
}

export default Layout
