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
        <h1>Posts</h1>
        <h2>Posts n ting</h2>
        <div>
          {postData &&
            postData.map((post, index) => (
              <article>
                <Link
                  to={'/galleries/' + post.slug.current}
                  key={post.slug.current}
                >
                  <span key={index}>
                    <img src={post.image1.asset.url} alt={post.image1.alt} />

                    <span>
                      <h3>{post.title}</h3>
                    </span>
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
