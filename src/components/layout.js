import React, { useState } from "react"
import { Link } from "gatsby"
import { Menu, Sidebar, Icon } from "semantic-ui-react"
import { rhythm } from "../utils/typography"
import { useMediaQuery } from "react-responsive"
import "../style/navbar.css"
import "../style/menu.css"
import "../style/sidebar.css"

function Layout(props) {
  const { children } = props
  const [visible, setVisible] = useState(false)
  const isMobile = useMediaQuery({
    query: "(min-device-width: 480px)",
  })

  const sidebar = (
    <>
      <div className="ui secondary  menu">
        <div
          className="right menu"
          style={{ padding: `0 1rem`, alignItems: `center` }}
        >
          <Icon name="list ul" circular onClick={() => setVisible(!visible)} />
        </div>
      </div>
      <Sidebar as={Menu} animation="push" vertical visible={visible}>
        <Menu.Item>
          <div style={{ height: `75px` }}></div>
        </Menu.Item>
        <Menu.Item as={Link} to="/" className="clean">
          Home
        </Menu.Item>
        <Menu.Item as={Link} to="/blog" className="clean">
          Blog
        </Menu.Item>
        <Menu.Item as={Link} to="/portfolio" className="clean">
          Portfolio
        </Menu.Item>
        <Menu.Item as={Link} to="/about" className="clean">
          About
        </Menu.Item>
      </Sidebar>
    </>
  )
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
      </div>
    </div>
  )
  const closeSidebar = () => {
    if (visible) {
      setVisible(false)
    }
  }
  return (
    <>
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
          {isMobile ? header : sidebar}
        </header>
        <main>{children}</main>
        <footer style={{ marginTop: `2rem` }}>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
      <div
        onClick={() => closeSidebar()}
        style={{
          backgroundColor: `black`,
          display: visible ? "block" : "none",
          opacity: `0.2`,
          transition: " display ease-in-out",
          position: `fixed`,
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
        }}
      ></div>
    </>
  )
}

export default Layout
