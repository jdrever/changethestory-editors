import React from 'react'


const Preview = ({value}) => {
  const { media } = value;
  return (<div dangerouslySetInnerHTML={{__html: media }}></div>)
}


export default {
    name: 'padlet',
    type: 'object',
    title: 'Padlet',
    fields: [
      {
        name: 'embedCode',
        type: 'text',
        title: 'Padlet Embed Code'
      },
      {
        name: 'altText',
        type: 'text',
        title: 'Alternative Text'
      },      
    ],
    preview: {
      select: {
        media: "embedCode"
      }
      ,
      component: Preview
    }  
  }