export default {
    supportedLanguages: [
        { id: 'en', title: 'English', isDefault: true },
        { id: 'it', title: 'Italian' },
        { id: 'hu', title: 'Hungarian' },
        { id: 'tr', title: 'Turkish' }
        //...
    ],
    filterField: (enclosingType, field, selectedLanguageIds) =>
        !enclosingType.name.startsWith('locale') || selectedLanguageIds.includes(field.name)
}