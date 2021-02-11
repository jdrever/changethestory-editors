export default {
  // The display name for this field
  title: "Student Support Page",

  // The identifier for this field used in the api's
  name: "studentsupportpage",
  type: "document",

  fields: [

    {

      // The display name for this field
      name: "title",
      title: "Title",
      type: "localeString"
    },
    // The display name for this field
    {
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
