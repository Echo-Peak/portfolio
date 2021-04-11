import React from 'react';
import styled from 'styled-components';
import { Panel, PanelGroup, Button } from 'rsuite';
import ContentfulRichTextParser from '../util/contentful-rich-text-parser';
import uuid from 'node-uuid';
import {DataConsumer} from '../../contexts/contentful';

function generateWebsites(arr=[]){
  //console.log('website',arr);
  return arr.map(website => {
    let style = {
      margin: 20,
      maxWidth:600
    }
    return (
      <Panel shaded bordered header={website.fields.title} style={style} key={uuid.v4()}>
        <ThumbnailContainer>
          <Img src={website.fields.thumbnail.fields.file.url}/>
        </ThumbnailContainer>
        <Button style={{marginTop:20}} appearance="primary" href={website.fields.link}>Checkout {website.fields.title}!</Button>
      </Panel>
    )
  })
}
class WebsitesSection extends React.Component{
  render(){
    let websites = this.props.context.data.websites;
    
    let currentContent = <NoContent>No websites to show</NoContent>;
    if(websites.length){
      currentContent = generateWebsites(websites);
    }
    return (
      <Container>
        <Top>
          <h2>Websites</h2>
        </Top>
        <Content>
          {currentContent}
        </Content>
      </Container>
    );
  }
}

let component = (props) => (
  <DataConsumer>
    {context => <WebsitesSection context={context} {...props}/>}
  </DataConsumer>
);
export default component;

const Container = styled.div`
margin-top:60px;
padding-bottom:100px;
`;

const Top = styled.div`

`;
const Content = styled.div`
display:flex;
`;

const NoContent = styled.h4`
margin:60px;

`;

const ThumbnailContainer = styled.div`

`;
const Img = styled.img`
width:300px;
`;