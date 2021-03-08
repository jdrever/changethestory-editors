export default {

    title: "Story Comment",

    // The identifier for this document type used in the api's
    name: "storyComment",

    // Documents have the type 'document'. Your schema may describe types beyond documents
    // but let's get back to that later.
    type: "document",

    // Now we proceed to list the fields of our document
    fields: [
        {
            // The display name for this field
            title: "Name",

            // The identifier for this field used in the api's
            name: "name",

            // The type of this field
            type: "string",
        },
        {
            // The display name for this field
            title: "School/Organisation",

            // The identifier for this field used in the api's
            name: "school",

            // The type of this field
            type: "string",
        },
        {
            // The display name for this field
            title: "Comment",

            // The identifier for this field used in the api's
            name: "comment",

            // The type of this field
            type: "text",
        },
        {
            name: "story",
            title: "Story",
            type: "reference",
            to: [{type: 'story'}]
        }
    ]
}
