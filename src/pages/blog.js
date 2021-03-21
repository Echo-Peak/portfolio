import React from 'react'
import BlogLayout from '../components/layouts/blog';
import ContentfulRichTextParser from '../components/util/contentful-rich-text-parser';

const NotFoundPage = (props) => {
  console.log(props);

  return (<BlogLayout>
    {props.data.allContentfulBlogPost.edges.map(d => (
      ContentfulRichTextParser(d.node.content.raw)
    ))}
  </BlogLayout>
)}

export default NotFoundPage

export const query = graphql`
query GetLatestPosts {
  allContentfulBlogPost(limit: 10) {
    edges {
      node {
        id
        title
        subTitle
        createdAt
        content {
          raw
        }
      }
    }
  }
}
`