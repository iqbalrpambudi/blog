import React from "react"
import { Link } from "gatsby"
import { rhythm } from "../utils/typography"
import "../style/navbar.css"

class Layout extends React.Component {
  render() {
    const { children } = this.props
    const header = (
      <div className="ui secondary  menu">
        <div className="right menu">
          <Link to={"/"} className="item">
            Home
          </Link>
          <Link to={"/blog"} className="item">
            Blog
          </Link>
          <Link to={"/portfolio"} className="item">
            Portfolio
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
        <footer style={{marginTop:`2rem`}}>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    )
  }
}

export default Layout
