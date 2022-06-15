import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import sanityClient from '../sanity'
import imageUrlBuilder from '@sanity/image-url'
import BlockContent from '@sanity/block-content-to-react'
import { Row } from 'react-bootstrap'

const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
  return builder.image(source)
}

function BlogPost() {
  const [singlePost, setSinglePost] = useState(null)
  const { slug } = useParams()

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"]{
        title,
        _id,
        slug,
        mainImage{
          asset->{
            _id,
              url
            }
          },
          body,
          "name": author->name,
          "authorImage": author->image
        }`
      )
      .then((data) => setSinglePost(data[0]))
      .catch(console.error)
  }, [slug])

  if (!singlePost) return <div>Loading...</div>

  return (
    <main className="bg-gray-200 min-h-screen p-12">
      <article className="container shadow-lg mx-auto bg-green-100 rounded-lg">
        <header className="relative">
          <div className="absolute h-full w-full flex items-center justify-center p-8">
            <div className="bg-white bg-opacity-75 rounded p-12">
              <h1
                className="blog-title cursive  text-3xl lg:text-6xl mb-4"
                style={{ marginTop: '10px' }}
              >
                {singlePost.title}
              </h1>
            </div>
          </div>
          <div className="blog-image-container">
            <img
              src={singlePost.mainImage.asset.url}
              alt={singlePost.title}
              className="w-full object-cover rounded-t "
              style={{ height: '300px' }}
            />
          </div>
        </header>
        <div
          className="px-16 lg:px-48 py-12 lg:py-20 prose lg:prose-xl max-w-full"
          style={{ padding: '10px' }}
        >
          <BlockContent
            blocks={singlePost.body}
            projectId="ph4hgpxb"
            dataset="production"
          />
        </div>

        {/* Client unsure if they want to add author image and name yet */}

        {/* <div
          className="author flex justify-center  text-gray-800"
          style={{
            marginTop: '10px',
            alignItems: 'center',
          }}
        >
          <img
            src={urlFor(singlePost.authorImage).url()}
            alt={singlePost.name}
            className="w-10 h-10 rounded author"
            style={{ height: '75px' }}
          />
          <div></div>
          <p className="cursive flex items-center pl-2 text-2xl">
            {singlePost.name}
          </p>
        </div> */}
      </article>
    </main>
  )
}

export default BlogPost
