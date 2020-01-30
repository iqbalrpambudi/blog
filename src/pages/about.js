import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Images from "../../content/assets/animate.gif"
import { Grid } from "semantic-ui-react"
import "../style/grid.css"

class About extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="About" />
        <Grid>
          <Grid.Row>
            <Grid.Column mobile={16} computer={8}>
              <h2>Coming Soon</h2>
              <p>Something Special is Coming Soon!</p>
            </Grid.Column>
            <Grid.Column mobile={16} computer={8}>
              <img src={Images} alt="Coming Soon" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Layout>
    )
  }
}

export default About

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
