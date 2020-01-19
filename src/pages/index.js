import React from "react"
import { Link, graphql } from "gatsby"
import { Card, Grid, Image } from "semantic-ui-react"
import "../style/card.css"
import "../style/grid.css"
import "../style/image.css"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges
    console.log(this.props)
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />
        <Bio />
        <Grid columns={2}>
          <Grid.Row>
            {posts.map(({ node }) => {
              const title = node.frontmatter.title || node.fields.slug
              const thumbnail =
                node.frontmatter.featuredImage.childImageSharp.sizes.src

              return (
                <Grid.Column>
                  <Card
                    style={{
                      marginBottom: `2.5rem`,
                      width: `100%`,
                      boxShadow: `0 1px 25px 0 #d4d4d5`,
                    }}
                  >
                    <Image style={{ marginBottom: 0 }} src={thumbnail} />
                    <Card.Content>
                      <h3 style={{ margin: 0 }}>
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

                  {/* <Card
                      style={{ width: `100%` }}
                      header={
                        <h3 style={{ margin: `1rem auto` }}>
                          <Link
                            style={{ boxShadow: `none` }}
                            to={node.fields.slug}
                          >
                            {title}
                          </Link>
                        </h3>
                      }
                      meta={node.frontmatter.date}
                      description={
                        <p
                          dangerouslySetInnerHTML={{
                            __html:
                              node.frontmatter.description || node.excerpt,
                          }}
                        />
                      }
                    /> */}
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

{
  /* <header>
  <h3
  style={{
  marginBottom: rhythm(1 / 4),
  }}
  >
  <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
  {title}
  </Link>
  </h3>
  <small>{node.frontmatter.date}</small>
  </header>
  <section>
  <p
  dangerouslySetInnerHTML={{
  __html: node.frontmatter.description || node.excerpt,
  }}
  />
  </section> */
}
