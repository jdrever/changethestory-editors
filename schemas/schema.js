// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// document schemas
import about from './about'
import country from './country'
import homepage from './homepage'
import newspage from './newspage'
import newsstory from './newsstory'
import backgroundpage from './backgroundpage'
import learningresources from './learningresources'
import assessmentpage from './assessmentpage'
import projectdocument from './projectdocument'
import teachersupportpage from './teachersupportpage'
import studentsupportpage from './studentsupportpage'
import contactpage from './contactpage'
import story from './story'
import storycomment from './storycomment'
import learningresource from './learningresourcesUK'
import school from './school'

// story elements
import youtube from './youtube'
import padlet from './padlet'

// object types
import localeString from './localeString'
import localeRichText from './localeRichText'
import localeText from './localeText'


// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({

  // We name our schema
  name: 'CTSSchema',

  // Then proceed to concatenate our document types (just one, for now)
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // document schemas
    country,
    homepage,
    about,
    contactpage,
    newspage,
    newsstory,
    learningresources,
    assessmentpage,
    teachersupportpage,
    studentsupportpage,
    backgroundpage,
    story,
    storycomment,
    school,

    //story elements
    youtube,
    padlet,

    // object types
    localeString,
    localeRichText,
    localeText
  ])
})
