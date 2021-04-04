import React from 'react'
import Layout from '../components/layouts/main';
import { graphql } from 'gatsby';

const ContactPage = (props) => {
  console.log(props);

  return (<Layout>

  </Layout>
)}

export default ContactPage;

export const query = graphql`
query ContactQuery {
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