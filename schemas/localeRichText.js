const supportedLanguages= [
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
            of: [{ type: 'block' }],
            fieldset: lang.isDefault ? null : 'translations'
        }
    ))
}