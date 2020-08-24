export default {
    // The display name for this field
    title: "Learning Resources (UK)",

    // The identifier for this field used in the api's
    name: "learningresourcesUK",
    type: "document",

    fields: [
      {
        // The display name for this field
        name: "title",
        title: "Title",
        type: "string"
      },      {
        // The display name for this field
        name: "mainContent",
        title: "Main Content",
        type: "localeRichText"
      },
      {
        // The display name for this field
        name: "document",
        title: "Document",
        type: "file"
      } 
    
    ]
}