import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"

// Query
const Profile = () => {
  const data = useStaticQuery(graphql`
    query ProfileQuery {
      avatar: file(absolutePath: { regex: "/profile.jpg/" }) {
        childImageSharp {
          fixed(width: 120, height: 120) {
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
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div
      style={{
        display: `inline-block`,
        marginBottom: rhythm(1.5),
      }}
    >
      <div
        style={{
          display: `flex`,
          justifyContent: `center`,
          marginBottom: rhythm(1),
        }}
      >
        <Image
          fixed={data.avatar.childImageSharp.fixed}
          alt={author}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            minWidth: 120,
            borderRadius: `100%`,
          }}
          imgStyle={{
            borderRadius: `50%`,
          }}
        />
      </div>
      <div style={{ textAlign: `center` }}>
        <p>
          Written by <strong>{author}</strong> who lives and study in Yogyakarta
          building unuseful things.
          {` `}
          <a href={`https://instagram.com/${social.twitter}`}>
            You should follow him on Instagram
          </a>
        </p>
      </div>
    </div>
  )
}

export default Profile
