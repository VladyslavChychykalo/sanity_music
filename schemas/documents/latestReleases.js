import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'releases',
  title: 'Latest Releases',
  type: 'document',
  groups: [
    {name: 'info', title: 'Info'},
    {name: 'media', title: 'Media'},
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'localizedString',
      group: 'info',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'localizedString',
      group: 'info',
    }),
    defineField({
      name: 'latestReleasesList',
      title: 'Latest Releases List',
      type: 'array',
      group: 'media',
      of: [
        {
          type: 'object',
          name: 'latestReleasesItem',
          title: 'Latest Releases Item',
          fields: [
            {type: 'localizedString', name: 'name', title: 'Name'},
            {type: 'string', name: 'songLink', title: 'Song Link'},
            {type: 'image', name: 'songImage', title: 'Song Image'},
            // {
            //   name: 'audio',
            //   title: 'Audio',
            //   type: 'file',
            //   options: {accept: 'audio/*'},
            // },
          ],
        },
      ],
    }),
  ],
})
