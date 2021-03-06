export default {

    title: "Project Document",

    // The identifier for this document type used in the api's
    name: "projectdocument",

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
            title: "Document",

            // The identifier for this field used in the api's
            name: "document",

            // The type of this field
            type: "file",
        }
    ]
}
