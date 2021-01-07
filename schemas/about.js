export default {
  // The display name for this field
  title: "About The Project Page",

  // The identifier for this field used in the api's
  name: "about",
  type: "document",

  fields: [
    // This document has only one field
    {
      // The display name for this field
      name: "title",
      title: "Title",
      type: "localeString"
    },
    {
      // The display name for this field
      name: "mainContent",
      title: "Main Content",
      type: "localeRichText"
    }],
    preview: 
    {
        select: 
        {
          title: 'title.en'
        }
    }
}
