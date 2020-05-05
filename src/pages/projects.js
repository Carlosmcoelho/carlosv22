import React from 'react'
import { graphql } from 'gatsby'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Img from 'gatsby-image'
import Layout from "../components/layout"

const Projects = ({ data: { projects } }) => (
  <Layout>
    <article className="sheet">
      <HelmetDatoCms seo={projects.seoMetaTags} />
      <div className="sheet__inner">
        <h1 className="sheet__title">{projects.title}</h1>
        <p className="sheet__lead">{projects.subtitle}</p>
        <div className="sheet__gallery">
          <Img fluid={projects.photo.fluid} />
        </div>
        <div
          className="sheet__body"
          dangerouslySetInnerHTML={{
            __html: projects.bioNode.childMarkdownRemark.html,
          }}
        />
      </div>
    </article>
  </Layout>
)

export default Projects

export const query = graphql`
  query ProjectsQuery {
    projects: datoCmsProjectsPage {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      title
      subtitle
      photo {
        fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      }
      bioNode {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
