import React from "react"
import { graphql, Link } from "gatsby"
import { Item } from "semantic-ui-react"
import Layout from "../components/layout"
import SEO from "../components/seo"

class Blog extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges
    

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Blog Post" />
        <h3>Blog Post</h3>
        <Item.Group>
          {posts.map(({ node }, index) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <Item
                key={index}
                style={{ boxShadow: `rgb(212 212 213 / 41%) 0px 1px 25px 0px` }}
              >
                <Item.Content style={{ padding: `1.25rem` }}>
                  <Item.Header>
                    <h3
                      style={{
                        marginTop: 0,
                        marginBottom: `0.5rem`,
                        color: `black`,
                        lineHeight: 1.35,
                      }}
                    >
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
