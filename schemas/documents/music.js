import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'music',
  title: 'Music',
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
      name: 'musicList',
      title: 'Music List',
      type: 'array',
      group: 'media',
      of: [
        {
          type: 'object',
          name: 'mucisItem',
          title: 'Mucis Item',
          fields: [
            {type: 'localizedString', name: 'name', title: 'Name'},
            {type: 'localizedString', name: 'description', title: 'Description'},
            {type: 'string', name: 'songLink', title: 'Song Link'},
            {type: 'image', name: 'songImage', title: 'Song Image'},
            {type: 'string', name: 'songDownloadLink', title: 'Song link for download'},
            // {
            //   name: 'audio',
            //   title: 'Audio',
            //   type: 'file',
            //   options: {accept: 'audio/*'},
            // },
            {
              name: 'lyrics',
              type: 'array',
              title: 'Lyrics',
              of: [
                {
                  type: 'block',
                },
              ],
            },
          ],
        },
      ],
    }),
  ],
})
