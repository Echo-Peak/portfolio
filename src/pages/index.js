import React from 'react'
import { Link, graphql } from 'gatsby'
import Masonry from 'react-masonry-component'
import Img from 'gatsby-image'
import Layout from "../components/layouts/main"

const IndexPage = ({ data }) => (
  <Layout>
    
  </Layout>
);

export default IndexPage

// export const query = graphql`
//   query IndexQuery {
//     allContentfulBlogPost {
//       edges {
//         node {
//           content {
//             raw
//           }
//         }
//       }
//     }
//   }
// `
