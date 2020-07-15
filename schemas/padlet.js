import HtmlPreview from './htmlPreview'

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
        subtitle: 'embedCode'
      },
      component: HtmlPreview
    }
  
  }