import React, {Component, createContext, useContext} from 'react';
import * as contentful from 'contentful';

export const DataContext = createContext();
export const Data = () => useContext(DataContext);
export const DataConsumer = DataContext.Consumer;


export const SCOPES = {
  about: '5lzMxuCX84uYqmgGmU8iKU',
  blogPosts:'wvoDi9kFeEOgN6wM'
};

export const CONTENT_IDS = {
    blogPosts: 'blogPost',
    projects: 'projects',
    books: 'book',
    websites: 'websites',
    work: 'workPlace'
}

export default class DataProvider extends Component {
  state = {
    loading:true,
    data:{
      projects:[],
      blogPosts:[],
      websites:[],
      books:[],
      work: [],
      about:{}
    }
  }
  constructor(){
    super();
    this.scopes = {
      about: '5lzMxuCX84uYqmgGmU8iKU',
      blogPosts:'wvoDi9kFeEOgN6wM'
    }
   // console.log('------------',process.env);
    this.client = contentful.createClient({
      space: 'jdk6bt9w3e2r',
      accessToken: 'eDpLfdiBSAPTh798fJX0uXFhNQePGCiXBfe7LSFWJDw'
    });

    this.preload();
  }
  async preload(){
    for(let contentID in CONTENT_IDS){
      if(contentID === CONTENT_IDS.blogPosts) continue;
      try{
        let _content = await this.loadEntries(CONTENT_IDS[contentID], 12);
        this.state.data[contentID] = _content;
   //     console.log(contentID, _content);
        this.setState(this.state);
      }catch(err){
        console.log(err);
      }
    }
    try{
      let aboutContent = await this.loadAbout();
      this.state.data.about = aboutContent;
      this.setState(this.state);
    }catch(err){
      console.log('Unable to load about content');
    }
  }
  loadAbout(){
    return new Promise((resolve, reject)=> {
      this.client.getEntry(SCOPES.about).then(content => {
        resolve(content.fields);
      }).catch(reject);
    })
  }
  loadEntries(contentID='', limit=1){
    return new Promise((resolve, reject)=>{
      this.client.getEntries({
        content_type: contentID,
        limit
      }).then(entries => {
        resolve(entries.items);
      })
      .catch(err => {
        reject(err);
      });
    })
  }
  loadProjects(limit=1){

  }
  fetchContent(contentTypeID='', onErrorCallback){
    this.client.getEntries(contentTypeID).then(entries => {
      this.state.data[contentTypeID] = entries;
      this.setState(this.state);
    })
    .catch(err => {
      onErrorCallback(err);
      console.log(`unable to fetch content for ${contentTypeID}. Error: ${err}`);
    })
  }
  loadEntriesFor(ContentID='', queryOptions={}){
    let query = {
      content_type: ContentID,
      ...queryOptions
    };
    return this.client.getEntries(query);
  }
  render() {
    const configObject = {
      ...this.state,
      fetchContent: this.fetchContent.bind(this),
      loadEntriesFor: this.loadEntriesFor.bind(this)
    };

      return (
          <DataContext.Provider value={configObject}>
            {this.props.children}
          </DataContext.Provider>
      );
  }
}