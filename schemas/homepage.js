export default {
    title: "Home Page",
    name: "homepage",
    type: "document",

    fields: [


        {
            // The display name for this field
            name: "title",
            title: "Title",
            type: "localeString"
        },
        {
            // The display name for this field
            title: "Main Content",
            name: "mainContent",
            type: "localeRichText"
        }
        ,
        {
            // The display name for this field
            title: "Tagline",

            // The identifier for this field used in the api's
            name: "tagline",

            // The type of this field
            type: "localeString",
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
