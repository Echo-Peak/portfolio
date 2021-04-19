import React, { useState } from "react";
import styled from 'styled-components';
import uuid from 'node-uuid';
import { Panel, PanelGroup, Button, Icon } from 'rsuite';
import {DataConsumer, CONTENT_IDS} from '../../contexts/contentful';
import ContentFullRichTechParser from '../util/contentful-rich-text-parser';

function createBlogPostCards(posts=[]){
  if(!posts.length) return false;
  return posts.map(post => {
    let style = {
      pannel:{
        background:'white',

      },
      button:{
        margin:10,
        width:100
      }
    }
    const {title, subTitle, shortDescription} = post.fields;
    const thumbnail = post.fields.thumbnail.fields.file.url;
    //const bg = post.fields.thumbnail.fields.
   // console.log('---->>S> D', shortDescription)
    return (
      <BlogPostCard key={uuid.v4()}>
        <Panel shaded bodyFill style={style.pannel}>
          <BlogPostImage src={thumbnail}/>

          <Panel header={title}>
            <p>
              {shortDescription}
            </p>
          </Panel>
        </Panel>
    </BlogPostCard>
    );
  });
}

function createSocialMediaLinks(links=[]){
  if(!links.length) return false;
  return links.map((social)=>{
    console.log('_____________ social', social);
    return (<SocialLink key={uuid.v4()}>
      <SocialLinkContainer>
        <Icon icon={social.fields.fontAwesomeIcon} size='3x' style={{lineHeight: '64px'}}/>
      </SocialLinkContainer>
    </SocialLink>)
  })
}


class Footer extends React.Component {
  state = {
    posts:[],
    loading:true
  }
  constructor(props){
    super();
    this.DataContext = props.context;
  }
  componentDidMount(){
    this.DataContext.loadEntriesFor(CONTENT_IDS.blogPosts, {limit:3}).then(entries => {
      //console.log('----LOADED BLOG ENTRIES', entries);
      this.setState({loading: false, posts:entries.items});
    })
    .catch(err => {
      console.log(err);
      this.setState({loading:false});
    })
  }
  render(){
    const scoialMediaLinks = this.DataContext.data.about.socialLinks;
    const blogPosts = this.state.posts;

    return (
    <Container>
      <InnerContainer>
        <BlogContainer>
          <BlogHeading>Latest</BlogHeading>
          {createBlogPostCards(blogPosts)}
        <MoreButton>
          <Button>View more</Button>
        </MoreButton>
        </BlogContainer>
        <SocialMediaContainer>
          <SocialMedia>
            <SocialMeadiaHeading>Social</SocialMeadiaHeading>
            <SocialMeadiaList>
            {createSocialMediaLinks(scoialMediaLinks)}
            </SocialMeadiaList>
          </SocialMedia>
          <Contact>
            <ContactButton>Contact me</ContactButton>
            <HireButton>Hire</HireButton>
          </Contact>
        </SocialMediaContainer>
      </InnerContainer>
      <TermsContainer>
        <Terms><a href="/privacy">Privacy</a></Terms>
        <Copyright>{this.DataContext.data.about.copyright}</Copyright>
      </TermsContainer>
    </Container>
    );
  }
}


const component = (props) => (
  <DataConsumer>
    {context => <Footer context={context} {...props}/>}
  </DataConsumer>
);


export default component;

const Container = styled.div`
width:100%;
//height:380px;
background:#333;
padding-bottom:20px;
position:relative;
`;

const InnerContainer = styled.div`
width:80%;
height:inherit;
margin:0 auto;

display:flex;
`;

const BlogContainer = styled.div`
flex:3;
order:1;
padding:12px;

`;

const BlogHeading = styled.h2`
padding:12px;
color:white;
`;

const MoreButton = styled.div`
margin:20px;
`;

const SocialMediaContainer = styled.div`
flex:1;
order:2;
padding:12px;
`;

const SocialMedia = styled.div`

`;

const SocialMeadiaHeading = styled.h3`
color:white;
text-align:center;
`;

const Contact = styled.div`
display: flex;
flex-direction: row;
margin-top:60px;
justify-content: center;
`;

const ContactButton = styled.div`
width:180px;
height:50px;
background: red;
border-radius: 10px;
text-align: center;
line-height: 50px;
font-weight: bold;
color: black;
font-size: 20px;
transition: all .3s;
cursor: pointer;
&:hover{
  background:white;
}
`;

const HireButton = styled.div`
width:180px;
height:50px;
background: green;
border-radius: 10px;
text-align: center;
line-height: 50px;
font-weight: bold;
color: black;
font-size: 20px;
margin-left:10px;
transition: all .3s;
cursor: pointer;
&:hover{
  background:white;
}
`;

const BlogPostCard = styled.div`
width:300px;
height:300px;
display:inline-block;
margin-left:10px;
margin-right:10px;
`;

const BlogPostImage = styled.img`
background-size:cover;
width:300px;
height:300px;
`;

const TermsContainer = styled.div`
display:flex;
flex-direction: row;
position:absolute;
bottom:0px;
right:0px;
margin:10px;

`;
const Terms = styled.div`
width:200px;
a {
  color: #999;
}
`;

const Copyright = styled.div`
width:200px;
`;

const SocialLink = styled.div`

`;
const SocialMeadiaList = styled.div`
display:flex;
flex-direction: row;
justify-content: center;
`;
const SocialLinkContainer = styled.div`
width:64px;
height:64px;
background:#777;
border-radius:10px;
margin:10px;
text-align: center;
i{
  transition: all .2s;
  cursor: pointer;
  &:hover {
    color:white;
  }
}
`;