import React from "react"
import { graphql, Link } from "gatsby"
import { Item } from "semantic-ui-react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../style/item.css"

class Blog extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Blog Post" />
        <h3>Blog Post</h3>
        <hr />
        <Item.Group divided>
          {posts.slice(0, 6).map(({ node }, index) => {
            const title = node.frontmatter.title || node.fields.slug
            const thumbnail =
              node.frontmatter.featuredImage.childImageSharp.sizes.src

            return (
              <Item key={index}>
                <Item.Image
                  size="medium"
                  src={thumbnail}
                  style={{ marginBottom: 0 }}
                />

                <Item.Content>
                  <Item.Header>
                    <h3 style={{ margin: `0 auto`, color: `black` }}>
                      <Link to={node.fields.slug}>{title}</Link>
                    </h3>
                  </Item.Header>

                  <Item.Meta>{node.frontmatter.date}</Item.Meta>

                  <Item.Description>
                    {
                      <p
                        style={{ font: `120%` }}
                        dangerouslySetInnerHTML={{
                          __html: node.frontmatter.description || node.excerpt,
                        }}
                      />
                    }
                  </Item.Description>
                </Item.Content>
              </Item>
            )
          })}
        </Item.Group>
      </Layout>
    )
  }
}

export default Blog

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            featuredImage {
              childImageSharp {
                sizes(maxWidth: 500, maxHeight: 300) {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`
