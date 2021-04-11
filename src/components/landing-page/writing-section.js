import React from 'react';
import styled from 'styled-components';
import { Panel, PanelGroup, Button } from 'rsuite';
import uuid from 'node-uuid';
import {DataConsumer} from '../../contexts/contentful';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import Interweave from 'interweave';

let NoContentAvl = (str) => <NoContent>No {str} to show</NoContent>;


function generateBooks(arr=[]){
  if(!arr.length) return NoContentAvl('books');
  return arr.map(book => {
    let style = {
      display: 'inline-block',
      width: 400,
      margin: 20
    }
    let richTextContent = documentToHtmlString(book.fields.description);
    return  (
      <Panel shaded bordered bodyFill style={style} key={uuid.v4()}>
      <Img src={book.fields.coverArt.fields.file.url} />
      <Panel header={book.fields.title}>
        <Interweave content={richTextContent}/>
        <Button style={{marginTop:20}} appearance="primary" href="#">View on Kindle</Button>
      </Panel>
    </Panel>
    )
  })
}

function generateWritingPieces(arr=[]){
  if(!arr.length) return NoContentAvl('writing peices');
}

class WritingSection extends React.Component{
  render(){
    let writingPieces = this.props.context.data.writing;
    let books = this.props.context.data.books;
    console.log('-------- books', books);
    if(books.length){
      let html = documentToHtmlString(books[0].fields.description);
      console.log(html);
    //  let t = ContentfulRichTextParser(books[0].fields.description.content)

    }
    return (
      <Container>
        <Top>
          <h2>Books</h2>
        </Top>
        <Content>
          <Books>
           {generateBooks(books)}
          </Books>
        </Content>
      </Container>
    );
  }
}

let component = (props) => (
  <DataConsumer>
    {context => <WritingSection context={context} {...props}/>}
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
flex-direction: row;
`;

const NoContent = styled.h4`
margin:60px;

`;

const ThumbnailContainer = styled.div`

`;
const Img = styled.img`
width:300px;
`;

const Books = styled.div`
flex:1;
order:1;
margin-right:60px;

`;
const WritingPeices = styled.div`
flex:3;
order:2;
`;