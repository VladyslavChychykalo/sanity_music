import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'band',
  title: 'Band',
  type: 'document',
  groups: [
    {
      name: 'info',
      title: 'Info',
    },
    {
      name: 'media',
      title: 'Media',
    },
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
      name: 'bandList',
      title: 'Band List',
      type: 'array',
      group: 'media',
      of: [
        {
          type: 'object',
          name: 'bandItem',
          title: 'Band Item',
          fields: [
            {type: 'localizedString', name: 'name', title: 'Name'},
            {type: 'localizedString', name: 'specialization', title: 'Specialization'},
            {
              type: 'array',
              name: 'descriptionList',
              title: 'Description List',
              of: [
                {
                  type: 'object',
                  name: 'descriptionItem',
                  title: 'Description Item',
                  fields: [{type: 'localizedString', name: 'description', title: 'Description'}],
                },
              ],
            },
            {type: 'image', name: 'bandImage', title: 'Photo'},
          ],
        },
      ],
    }),
  ],
})
