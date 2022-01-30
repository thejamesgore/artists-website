export default {
  name: 'gallery',
  title: 'Gallery',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: { type: 'author' },
    },
    {
      name: 'image1',
      title: 'Image 1',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'image2',
      title: 'Image 2',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'image3',
      title: 'Image 3',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'image4',
      title: 'Image 4',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'image5',
      title: 'Image 5',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'image6',
      title: 'Image 6',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'image7',
      title: 'Image 7',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'image8',
      title: 'Image 8',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'image9',
      title: 'Image 9',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'image10',
      title: 'Image 10',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'image11',
      title: 'Image 11',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'image12',
      title: 'Image 12',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'image13',
      title: 'Image 13',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'image14',
      title: 'Image 14',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'image15',
      title: 'Image 15',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'image16',
      title: 'Image 16',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'image17',
      title: 'Image 17',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'image18',
      title: 'Image 18',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'image19',
      title: 'Image 19',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'image20',
      title: 'Image 20',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }],
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'image1',
    },
    prepare(selection) {
      const { author } = selection
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      })
    },
  },
}
