import React from "react"
import { Link, graphql } from "gatsby"
import { Item } from "semantic-ui-react"
import "../style/image.css"
import "../style/item.css"
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
        <Item.Group>
        {/* <Grid>
          <Grid.Row> */}
            {posts.slice(0, 6).map(({ node }, index) => {
              const title = node.frontmatter.title || node.fields.slug
              const thumbnail =
                node.frontmatter.featuredImage.childImageSharp.sizes.src

              return (
                <Item key={index} style={{boxShadow:`rgb(212, 212, 213) 0px 1px 25px 0px`}}>
                <Item.Image
                  size="medium"
                  src={thumbnail}
                  className="im"
                />

                <Item.Content style={{padding:`1.25rem`}}>
                  <Item.Header>
                    <h3 style={{marginTop:0,marginBottom:`0.5rem`,color: `black` }}>
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
          {/* </Grid.Row>
        </Grid> */}
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
