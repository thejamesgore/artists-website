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

  console.log(`blog data >>>`, postData)

  return (
    <main>
      <section>
        <div>
          {postData &&
            postData.map((post, index) => (
              <article>
                <Link to={'/blog/' + post.slug.current} key={post.slug.current}>
                  <span key={index}>
                    <span>
                      <h4 className="blog-link">{post.title}</h4>
                    </span>
                    <img
                      src={post.mainImage.asset.url}
                      alt={post.mainImage.alt}
                      className="blog-img"
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

export default Blog
