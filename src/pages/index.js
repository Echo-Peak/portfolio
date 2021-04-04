import React from 'react';
import { graphql } from 'gatsby';
import Masonry from 'react-masonry-component'
import Img from 'gatsby-image'
import Layout from "../components/layouts/main"
import { Popover, Whisper } from 'rsuite';
import {IconButton, ButtonGroup, ButtonToolbar } from 'rsuite';
import Button from '../components/UI/button';
import styled from 'styled-components';


import ProjectsSection from '../components/landing-page/projects-section';
let skills = ['Javascript', 'Node.js', 'react'];


const moreSkills = (
  <Popover title="Title">
    <p>This is a default Popover </p>
    <p>Content</p>
    <p>
      <a>link</a>
    </p>
  </Popover>
);

const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consequat cursus molestie. Etiam neque odio, laoreet sed nunc in, pulvinar porttitor orci. Nullam interdum interdum libero a rutrum. Suspendisse id ultrices nibh. Etiam ornare tempus elit a efficitur. Praesent nec massa quis erat porttitor cursus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.`;
const IndexPage = ({ data }) => {
  console.log(data);
  let aboutData = data.allContentfulAbout.edges[0].node;
  let books = data.allContentfulBooks.nodes;
  let websites = data.allContentfulWebsites.nodes;
  let projects = data.allContentfulProjects.nodes;
  let writingPieces = data.allContentfulWriting.nodes;

  return (<Layout allowMargins setTo={8}>
    <PersonalSection data={aboutData}>
      <FullWidth>
        <Background>
          
          <BackgroundLeft>
            <Flex amount={2}/>
            <GroupButtons>
              <Button>More about me</Button>
            </GroupButtons>
          </BackgroundLeft>
          <BackgroundRight>
            <Flex amount={2}/>
            <GroupButtons>
              <Button style={{margin:10}}>Servies</Button>
              <Button style={{margin:10}}>Get in touch</Button>
            </GroupButtons>
          </BackgroundRight>
        </Background>
      </FullWidth>
    </PersonalSection>

  <MainSkillSets>
    <CodingSkill>
      <Content>
        <CodingSkillLeft>
          <Image/>
        </CodingSkillLeft>
        <CodingSkillRight>
          <CodingSkillText>{lorem}</CodingSkillText>
          <CodingSkillButton>
            Coding
          </CodingSkillButton>
        </CodingSkillRight>
      </Content>
    </CodingSkill>
    <WrittingSkill>
      <Content>
        <WrittingSkillLeft>
        <WrigingSkillText>{lorem}</WrigingSkillText>
          <WritingSkillButton>
            Writing
          </WritingSkillButton>
        </WrittingSkillLeft>
        <WrittingSkillRight>
          <Image/>
        </WrittingSkillRight>
      </Content>
    </WrittingSkill>
  </MainSkillSets>

{/* ------------------------------------------ */}
    <ProjectsSection data={projects}>

    </ProjectsSection>
{/* ------------------------------------------ */}
    <WrittingSection data={writingPieces}>

    </WrittingSection>

{/* ------------------------------------------ */}

    <OtherProjects data={websites}>
      
    </OtherProjects>
  </Layout>);
}

export default IndexPage

export const query = graphql`
  query IndexQuery {
    allContentfulAbout {
      edges {
        node {
          hireable
        }
      }
    }
    allContentfulBooks {
      nodes {
        title
        description {
          raw
        }
        publishDate
        coverArt {
          file {
            url
            fileName
            contentType
          }
        }
      }
    }
    allContentfulWebsites {
      nodes {
        title
        thumbnail {
          file {
            url
            fileName
            contentType
          }
        }
        link
      }
    }
    allContentfulProjects {
      nodes {
        title
        screenshots {
          file {
            url
            fileName
            contentType
          }
        }
        description {
          raw
        }
      }
    }
    allContentfulWriting {
      edges {
        node {
          title
          content {
            raw
          }
        }
      }
    }
  }
`;

const PersonalSection = styled.div`
display:flex;
flex-direction:row;
width:100%;
height:800px;
`;

const FullWidth = styled.div`
background: url("https://i.pinimg.com/originals/5d/cf/5d/5dcf5d1723ab806a754b3e7398c9dfe5.jpg");
width:100%;
background-repeat: none;
background-size: cover;
`;

const Background = styled.div`
display:flex;
flex-direction: row;
height:100%;
`;
const BackgroundLeft = styled.div`
background:green;
flex:2;
order:1;
display: flex;
flex-direction:column;
height:inherit;
`;
const BackgroundRight = styled.div`
order:2;
flex:1;
display: flex;
flex-direction:column;
height:inherit;
`;

const GroupButtons = styled.div`
order:2;
margin-bottom:40px;
margin-left:40px;
flex-direction:row;
display:flex;
`;


const WrittingSection = styled.div`

`;

const WorkplaceSection = styled.div`

`;

const OtherProjects = styled.div`

`;

const Flex = styled.div`
order:1;
flex: ${props => props.flex ? props.flex : 1};
`;

const MainSkillSets = styled.div`
width:100%;
height:400px;
background:pink;
display: flex;
flex-direction:row;
`;
const CodingSkill = styled.div`
flex:1;
order:1;
background:#991;
`;
const WrittingSkill = styled.div`
flex:1;
order:2;
background:#998;
`;

const Content = styled.div`
display:flex;
height:100%;
width:100%;
flex-direction: row;
`;

const CodingSkillLeft = styled.div`
flex:3;
order:1;
margin:40px;
`;

const CodingSkillRight = styled.div`
flex:2;
order:2;
text-align: center;
margin:40px;
`;

const CodingSkillText = styled.div`
text-align:center;
`;

const CodingSkillButton = styled.div`
  background:red;
  border-radius: 10px;
  width:160px;
  height:50px;
  display:block;
  color:white;
  line-height:50px;
  font-weight:bold;
  margin:0 auto;
  margin-top: 40px;
`;

const WrittingSkillLeft = styled.div`
flex:2;
order:1;
text-align: center;
margin:40px;
`;

const WrigingSkillText = styled.div`
text-align:center;
`;

const WritingSkillButton = styled.div`
  background:red;
  border-radius: 10px;
  width:160px;
  height:50px;
  display:block;
  color:white;
  line-height:50px;
  font-weight:bold;
  margin:0 auto;
  margin-top: 40px;
`;

const WrittingSkillRight = styled.div`
flex:3;
order:2;
margin:40px;
`;

const Image = styled.div`
width:100%;
height:100%;
background: url("https://www.davrous.com/wp-content/uploads/2018/12/screen001_thumb.jpg");
background-repeat:none;
background-size:contain;
`;