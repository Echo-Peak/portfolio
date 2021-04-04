import React from 'react';
import styled from 'styled-components';
import { Panel, PanelGroup } from 'rsuite';
import ContentfulRichTextParser from '../util/contentful-rich-text-parser';

function generateProjects(arr=[]){
  return arr.map(project => {
    let style = {
      display: 'inline-block',
      width: '30%',
      margin: 20
    }
    const multipleScreenshots = project.screenshots.length > 1;
    const renderMore = ()=> (
      <PanelGroup accordion bordered>
      <Panel header="More screenshots">
        <ScreenShotGroup>
        {project.screenshots.slice(1).map(s => (
          <ScreenshotImage src={s.file.url}/>
        ))}
        </ScreenShotGroup>
      </Panel>
    </PanelGroup>
    );
    return (
    <Panel shaded bordered bodyFill style={style}>
      <Img src={project.screenshots[0].file.url} />
      {multipleScreenshots && renderMore()}
      <Panel header={project.title}>
        <p>
          <small>{ContentfulRichTextParser(project.description.raw)}</small>
        </p>
      </Panel>
    </Panel>
    )
  })
}

function generateWebsites(){
  
}
export default function WebsitesSection(props){
  let websites = props.data;

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

const Container = styled.div`
margin-top:60px;
padding-bottom:100px;
`;

const Top = styled.div`

`;
const Content = styled.div`
display:flex;
`;
