import React from "react"
import { Link, graphql } from "gatsby"
import { Card, Grid, Image } from "semantic-ui-react"
import "../style/card.css"
import "../style/grid.css"
import "../style/image.css"
import Profile from "../components/profile"
import Layout from "../components/layout"
import SEO from "../components/seo"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />
        <Profile />
        <hr />
        <h4>Latest Blog Post</h4>
        <Grid>
          <Grid.Row>
            {posts.slice(0, 6).map(({ node }, index) => {
              const title = node.frontmatter.title || node.fields.slug
              const thumbnail =
                node.frontmatter.featuredImage.childImageSharp.sizes.src

              return (
                <Grid.Column mobile={16} computer={8} key={index}>
                  <Card
                    style={{
                      marginBottom: `2.5rem`,
                      width: `100%`,
                      boxShadow: `0 1px 25px 0 #d4d4d5`,
                    }}
                  >
                    <Image style={{ marginBottom: 0 }} src={thumbnail} />
                    <Card.Content>
                      <h3 style={{ margin: 0, lineHeight: `1.5` }}>
                        <Link to={node.fields.slug}>{title}</Link>
                      </h3>
                      <Card.Meta>
                        <span className="date">{node.frontmatter.date}</span>
                      </Card.Meta>
                      <Card.Description>
                        {
                          <p
                            dangerouslySetInnerHTML={{
                              __html:
                                node.frontmatter.description || node.excerpt,
                            }}
                          />
                        }
                      </Card.Description>
                    </Card.Content>
                  </Card>
                </Grid.Column>
              )
            })}
          </Grid.Row>
        </Grid>
      </Layout>
    )
  }
}

export default BlogIndex

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
