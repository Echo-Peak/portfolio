import React from 'react'
import BlogLayout from '../components/layouts/blog';
import {DataConsumer, CONTENT_IDS} from '../contexts/contentful';
import ContentfulRichTextParser from '../components/util/contentful-rich-text-parser';
import { graphql } from 'gatsby';

const NotFoundPage = (props) => {
  console.log(props);

  return (<BlogLayout>

  </BlogLayout>
)}

class BlogPage extends React.Component {
  state = {
    posts:[]
  }
  constructor(props){
    super();
    this.DataContext = props.context;
  }
  componentDidMount(){
    this.DataContext.loadEntriesFor(CONTENT_IDS.blogPosts).then(entries => {
      console.log('----LOADED BLOG ENTRIES', entries);
      this.setState({loading: false, posts:entries});
    })
    .catch(err => {
      console.log(err);
      this.setState({loading:false});
    })
  }
  render(){
    return (
      <BlogLayout>

      </BlogLayout>
    );
  }
}

const component = (props) => (
  <DataConsumer>
    {context => <BlogPage context={context} {...props}/>}
  </DataConsumer>
);
export default component;

