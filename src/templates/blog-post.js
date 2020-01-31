import React from "react"
import Image from "gatsby-image"
import Disqus from "disqus-react"
import { Link, graphql } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Bio from "../components/bio"
import "../style/blogLayout.scss"


class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const profile = this.props.data.avatar.childImageSharp.fixed
    const author = this.props.data.site.siteMetadata.author
    const FeaturedName = post.frontmatter.featuredImage.name
    const { previous, next } = this.props.pageContext
    const FeaturedImage =
      post.frontmatter.featuredImage.childImageSharp.resize.src
    const disqusShortname = "MyBlog"
    const disqusConfig = {
      url: this.props.location.href,
      identifier: post.id,
      title: post.frontmatter.title,
    }
  
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
          <img src={FeaturedImage} alt={FeaturedName} />
          <section dangerouslySetInnerHTML={{ __html: post.html }} />
          <hr />
          <footer>
            <Bio />
          </footer>
        </article>

        <nav>
          <ul className="n">
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </nav>
        <Disqus.DiscussionEmbed
          shortname={disqusShortname}
          config={disqusConfig}
        />
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
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
        featuredImage {
          childImageSharp {
            resize(width: 912, height: 450) {
              src
            }
          }
        }
      }
    }
  }
`
