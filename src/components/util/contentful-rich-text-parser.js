import React from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';

const renderOptions = {
  renderNode: {
    [BLOCKS.QUOTE]: (node) => {
      console.log(node);
      // NOTE: We are using blockqoutes as a hack to interpolate values!!!
      // e.g: IMG | https://image.png | {"one":1}
      let content = node.content[0].content[0].value;
      let parts = content.split('|');
      if(parts.length > 1){
        let type = parts[0];
        let value = parts[1];
        let options = parts[2];
        if(options && options.length){
          options = JSON.parse(options);
        }
        switch(type.trim()){
          case 'IMG':{
            let defaultHeight = options.height || 0;
            let defaultWidth = options.width || 0;
            let altText = options.alt || '';
            return <img src={value} height={defaultHeight} width={defaultWidth} alt={altText}/>
          }
        }
      }else{
        return <blockquote>{content}</blockquote>
      }
    }
  }
};

export default function RichTextParser(contentFullNodeString=''){
  if(contentFullNodeString.length){
    return documentToReactComponents(JSON.parse(contentFullNodeString), renderOptions)
  }
  return false;
}