export default {
  // The display name for this field
  title: "News Story",

  // The identifier for this field used in the api's
  name: "newsstory",
  type: "document",

  fields: [
    // This document has only one field
    {
      // The display name for this field
      name: "title",
      title: "Title",
      type: "string"
    },
    {
      // The display name for this field
      name: "mainContent",
      title: "Main Content",
      type: 'array',
      of: [
      {
        type: 'block'
      },
    ]
    }
    ,
    {
      // The display name for this field
      name: "publishedDate",
      title: "Published Date",
      type: "date"
    }
    ,
    {
      name: "country",
      title: "Country",
      type: "reference",
      to: [{type: 'country'}]
    }
  ],
    preview: 
    {
        select: 
        {
          title: 'title.en'
        }
    }
}