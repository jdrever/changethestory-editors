// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'


// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  
  // We name our schema
  name: 'ctsSchema',

  // Then proceed to concatenate our document types (just one, for now)
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    {
      // This is the display name for the type
      title: "Country",
      
      // The identifier for this document type used in the api's
      name: "country",
      
      // Documents have the type 'document'. Your schema may describe types beyond documents
      // but let's get back to that later.
      type: "document",
      
      // Now we proceed to list the fields of our document
      fields: [
        // This document has only one field
        {
          // The display name for this field
          title: "Name",

          // The identifier for this field used in the api's
          name: "name",

          // The type of this field
          type: "string",
        }
        ,
        {
          // The display name for this field
          title: "Flag",

          // The identifier for this field used in the api's
          name: "flag",

          // The type of this field
          type: "image",
        }
        ,
        {
          // The display name for this field
          title: "Main Content",

          // The identifier for this field used in the api's
          name: "mainContent",
          type: 'array', 
          of: [{type: 'block'}] 
        }
        ,
        {
          // The display name for this field
          title: "About the Project",

          // The identifier for this field used in the api's
          name: "aboutTheProject",
          type: 'array', 
          of: [{type: 'block'}] 
        }
      ]
    }
  ])
})
