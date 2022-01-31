import sanityClient from '@sanity/client'

const client = sanityClient({
  projectId: 'onybpq7o',
  dataset: 'production',
  apiVersion: '2021-08-31',
  token: '',
  useCdn: false,
})

export default client
