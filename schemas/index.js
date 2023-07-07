import bandSchema from './documents/band'
import historySchema from './documents/history'
import contactsSchema from './documents/contacts'
import musicSchema from './documents/music'
import localizedString from './objects/localizedString'
import latestReleasesSchema from './documents/latestReleases'
import videoSchema from './documents/video'

export const schemaTypes = [
  historySchema,
  bandSchema,
  latestReleasesSchema,
  musicSchema,
  videoSchema,
  contactsSchema,
  localizedString,
]
