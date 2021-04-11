import React, { useState } from "react";
import styled from 'styled-components';
import uuid from 'node-uuid';
import { graphql, StaticQuery } from 'gatsby';
import { Panel, PanelGroup, Button } from 'rsuite';
import ContentFullRichTechParser from '../util/contentful-rich-text-parser';

function createBlogPostCards(posts=[]){
  console.log('fired')
  return posts.map(post => {
    let style = {
      width: 300
    }
    const {content, id, createdAt, subTitle, title, thumbnail, shortDescription} = post.node;
    console.log('---->>S>D', shortDescription)
    return (
      <BlogPostCard key={uuid.v4()}>
        <Panel shaded bordered bodyFill style={style}>
          <BlogPostImage src={thumbnail.file.url}/>

          <Panel header={title}>
            <p>
              
            </p>
          </Panel>
          <Button>View</Button>
        </Panel>
      </BlogPostCard>
    );
  });
}

function createSocialMediaLinks(links=[]){

}


const Footer = (props)=>{
//   const query = graphql`
//   query {
//     allContentfulAbout {
//       edges {
//         node {
//           socialLinks {
//             url
//             name
//           }
//           hireable
//           copyright
//         }
//       }
//     }
//     allContentfulBlogPost(limit: 3) {
//       edges {
//         node {
//           title
//           subTitle
//           createdAt
//           id
//           content {
//             raw
//           }
//           thumbnail {
//             file {
//               url
//               fileName
//               contentType
//             }
//           }
//         }
//       }
//     }
//   }
// `;
  const renderThis = (data={}) => {
    console.log('fired');
    // let posts = data.allContentfulPosts.edges;
    // let aboutData = data.allContentfulAbout.edges[0].node;
    return (
      <Container>
      <BlogContainer>
        <h2>latest</h2>
       
      </BlogContainer>
      <MoreButton>
        View More
      </MoreButton>
      <SocialMediaContainer>
        <SocialMedia>
          <SocialMeadiaHeading>Social</SocialMeadiaHeading>
        </SocialMedia>
        <Contact>
          <ContactButton>Contact me</ContactButton>
          <HireButton>Hire</HireButton>
        </Contact>
      </SocialMediaContainer>
    </Container>
    )
  }
  return <StaticQuery query={
    graphql`
  query {
    allContentfulAbout {
      edges {
        node {
          socialLinks {
            url
            name
          }
          hireable
          copyright
        }
      }
    }
    allContentfulBlogPost(limit: 3) {
      edges {
        node {
          title
          subTitle
          createdAt
          id
          content {
            raw
          }
          thumbnail {
            file {
              url
              fileName
              contentType
            }
          }
        }
      }
    }
  }
`
  } render={renderThis}/>
};
export default Footer;

const Container = styled.div`
width:100%;
height:160px;
background:#333;
`;

const InnerContainer = styled.div`
width:60%;
height:inherit;
margin:auto;
background-color:red;
`;

const BlogContainer = styled.div`

`;

const MoreButton = styled.div`

`;

const SocialMediaContainer = styled.div`

`;

const SocialMedia = styled.div`

`;

const SocialMeadiaHeading = styled.div`

`;

const Contact = styled.div`

`;

const ContactButton = styled.div`

`;

const HireButton = styled.div`

`;

const BlogPostCard = styled.div`

`;

const BlogPostImage = styled.img``;