import React, { useEffect, useState } from 'react'
import sanityClient from '../sanity'
import { Link } from 'react-router-dom'

function Galleries() {
  const [postData, setPostData] = useState(null)

  useEffect(() => {
    sanityClient
      .fetch(
        `
         *[_type == "gallery"]{
  _id,
  title,
  slug,
image1{
  asset -> {
  _id,
  url
}
},
categories,
publishedAt,
  body,
  author -> {
  name,
  image
}
}`
      )
      .then((data) => setPostData(data))
      .catch(console.error)
  }, [])

  return (
    <main>
      <section>
        <div>
          {postData &&
            postData.map((post, index) => (
              <article className="gallery-container">
                <Link
                  to={'/galleries/' + post.slug.current}
                  key={post.slug.current}
                >
                  <span>
                    <h3 className="blog-link">{post.title}</h3>
                  </span>
                  <span key={index}>
                    <img
                      src={post.image1.asset.url}
                      alt={post.image1.alt}
                      className="gallery-img"
                    />
                  </span>
                </Link>
              </article>
            ))}
        </div>
      </section>
    </main>
  )
}

export default Galleries
