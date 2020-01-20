import React from "react"
import { Grid, Icon } from "semantic-ui-react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Images from "../../content/assets/hero-commute.gif"
import "../style/icons.css"

class Connect extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="About" />
        <Grid>
          <Grid.Row>
            <Grid.Column>
              <h2>Follow Me</h2>
              <div>
                <a
                  href="https://instagram.com/iqbalrpambudi"
                  style={{ boxShadow: `none`, marginRight: `1em` }}
                  title="Instagram"
                >
                  <Icon color="black" name="instagram" size="big" link />
                </a>
                <a
                  href="https://twitter.com/iqbalrpambudi"
                  style={{ boxShadow: `none`, marginRight: `1em` }}
                  title="Twitter"
                >
                  <Icon color="black" name="twitter" size="big" link />
                </a>
                <a
                  href="https://github.com/iqbalrpambudi"
                  style={{ boxShadow: `none`, marginRight: `1em` }}
                  title="Github"
                >
                  <Icon color="black" name="github" size="big" link />
                </a>
              </div>
              <img width={500} src={Images} alt="Coming Soon" />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column></Grid.Column>
          </Grid.Row>
        </Grid>
      </Layout>
    )
  }
}

export default Connect

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
