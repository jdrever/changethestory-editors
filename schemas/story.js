export default {

    title: "Story",

    // The identifier for this document type used in the api's
    name: "story",

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
            title: "Description",

            // The identifier for this field used in the api's
            name: "description",

            // The type of this field
            type: "localeText",
        }
        ,
        {
            // The display name for this field
            title: "Main Image",

            // The identifier for this field used in the api's
            name: "mainImage",

            // The type of this field
            type: "image",
        }
        ,
        {
            // The display name for this field
            title: "Content",

            // The identifier for this field used in the api's
            name: "content",
            type: 'array',
            of:
                [
                    {
                        type: 'block'
                    },
                    {
                        type: 'youtube'
                    },
                    {
                        type: 'image'
                    }
                    ,
                    {
                        type: 'padlet'
                    }
                ]
        }
    ]
}
