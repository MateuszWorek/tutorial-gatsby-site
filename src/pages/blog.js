import * as React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle='My Blog Posts'>
      {/* <p>My cool posts will go in here</p>
      <ul>
        {data.allFile.nodes.map((node) => {
          return <li key={node.name}>{node.name}</li>
        })}
      </ul> */}
      {data.allMdx.nodes.map((node) => {
        return (
          <article key={node.id}>
            <h2>{node.frontmatter.title}</h2>
            <p>Posted: {node.frontmatter.date}</p>
            <MDXRenderer>{node.body}</MDXRenderer>
          </article>
        )
      })}
    </Layout>
  )
}

// export const query = graphql`
//   query {
//     allFile {
//       nodes {
//         name
//       }
//     }
//   }
// `
export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        body
      }
    }
  }
`

export default BlogPage
