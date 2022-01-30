import React, { useState, useEffect } from 'react'
import sanityClient from '../sanity'
import { Link } from 'react-router-dom'

function Blog() {
  const [postData, setPostData] = useState(null)

  useEffect(() => {
    sanityClient
      .fetch(
        `

          *[_type =="post"]{
            _id,
            title,
            slug,
            mainImage{
                asset->{
                  _id,
                  url
                },
                alt
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
                <Link to={'/post/' + post.slug.current} key={post.slug.current}>
                  <span key={index}>
                    <img
                      src={post.mainImage.asset.url}
                      alt={post.mainImage.alt}
                    />

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

export default Blog
