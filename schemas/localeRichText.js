const supportedLanguages = [
  { id: 'en', title: 'English', isDefault: true },
  { id: 'it', title: 'Italian' },
  { id: 'hu', title: 'Hungarian' },
  { id: 'tr', title: 'Turkish' },
  { id: 'de', title: 'Austrian' }

]

export default {
  name: 'localeRichText',
  type: 'object',
  fieldsets: [
    {
      title: 'Translations',
      name: 'translations',
      options: { collapsible: true }
    }
  ],
  fields: supportedLanguages.map(lang => (
    {
      title: lang.title,
      name: lang.id,
      type: 'array',
      of: [{
        type: 'block', marks: {
          annotations: [
            {
              name: 'internalLink',
              type: 'object',
              title: 'Internal link',
              fields: [
                {
                  name: 'reference',
                  type: 'reference',
                  title: 'Reference',
                  to: [
                    { type: 'projectdocument' },
                    // other types you may want to link to
                  ]
                }
              ]
            },
            {
              name: 'link',
              type: 'object',
              title: 'External link',
              fields: [
                {
                  name: 'href',
                  type: 'url',
                  title: 'URL'
                },
                {
                  title: 'Open in new tab',
                  name: 'blank',
                  description: 'Read https://css-tricks.com/use-target_blank/',
                  type: 'boolean'
                }
              ]
            },

          ]
        }
      }],
      fieldset: lang.isDefault ? null : 'translations'
    }
  ))
}