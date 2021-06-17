import React from "react"
import Image from "gatsby-image"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"
import "../style/blogLayout.scss"

class PortfolioPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const profile = this.props.data.avatar.childImageSharp.fixed
    const author = this.props.data.site.siteMetadata.author
    const editor = post.frontmatter.editor
    const version = post.frontmatter.version
    const library = post.frontmatter.library
    const status = post.frontmatter.status

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <article>
          <header>
            <h1>{post.frontmatter.title}</h1>
            <div className="a">
              <Image fixed={profile} />
              <div>
                <div>
                  <p>{author}</p>
                </div>
                <p>{post.frontmatter.date}</p>
              </div>
            </div>
          </header>
          <blockquote style={{backgroundColor:`#f5f5f5`, paddingTop:`1.42188rem`,paddingBottom:`1.42188rem`}}>
            <p>Version : {version}</p>
            <p>Status : {status}</p>
            <p>Editor : {editor}</p>
            <p>Library : {library}</p>
          </blockquote>
          <section dangerouslySetInnerHTML={{ __html: post.html }} />
          <hr />
        </article>
      </Layout>
    )
  }
}

export default PortfolioPostTemplate

export const pageQuery = graphql`
  query PortfolioPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    avatar: file(absolutePath: { regex: "/profile.jpg/" }) {
      childImageSharp {
        fixed(width: 60, height: 60) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        label
        editor
        library
        status
        version
      }
    }
  }
`
