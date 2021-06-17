import React from "react"
import { graphql, Link } from "gatsby"
import { Grid, Card } from "semantic-ui-react"
import Layout from "../components/layout"
import SEO from "../components/seo"

class Portfolio extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Portfolio" />
        <h3>Portfolio</h3>
        <Grid>
            {posts
              .filter(({ node }) => node.frontmatter.type === "portfolio")
              .map(({ node }, index) => {
                console.log(node)
                const { title, label, description } = node.frontmatter || ""
                const slug = node.fields.slug

                return (
                  <Grid.Column key={index} mobile={16} tablet={8} computer={8}>
                    <Card
                      fluid
                      as={Link}
                      to={slug}
                      header={title}
                      meta={label}
                      description={description}
                    />
                  </Grid.Column>
                )
              })}
        </Grid>
      </Layout>
    )
  }
}

export default Portfolio

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
            type
            label
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
