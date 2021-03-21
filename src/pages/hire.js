import React from 'react'
import Layout from '../components/layouts/main';

const HirePage = (props) => {
  console.log(props);

  return (<Layout>

  </Layout>
)}

export default HirePage;

export const query = graphql`
query ContactQueryAndHire {
  allContentfulAbout {
    edges {
      node {
        name
        roles
        updatedAt
        description
        aboutMe {
          aboutMe
        }
        socialLinks {
          name
          fontAwesomeIcon
          url
        }
      }
    }
  }
}
`