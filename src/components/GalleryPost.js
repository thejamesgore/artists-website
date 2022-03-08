import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Carousel } from 'react-bootstrap'
import sanityClient from '../sanity'

function Gallery() {
  const [singlePost, setSinglePost] = useState(null)
  const { slug } = useParams()

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"]{
        _id,
  title,
  slug,
image1{
  asset -> {
  _id,
  url
}
},
image2{
  asset -> {
  _id,
  url
}
},
image3{
  asset -> {
  _id,
  url
}
},
image4{
  asset -> {
  _id,
  url
}
},
image5{
  asset -> {
  _id,
  url
}
},
image6{
  asset -> {
  _id,
  url
}
},
image7{
  asset -> {
  _id,
  url
}
},
image8{
  asset -> {
  _id,
  url
}
},
image9{
  asset -> {
  _id,
  url
}
},
image10{
  asset -> {
  _id,
  url
}
},
image11{
  asset -> {
  _id,
  url
}
},
image12{
  asset -> {
  _id,
  url
}
},
image13{
  asset -> {
  _id,
  url
}
},
image14{
  asset -> {
  _id,
  url
}
},
image15{
  asset -> {
  _id,
  url
}
},
image16{
  asset -> {
  _id,
  url
}
},
image17{
  asset -> {
  _id,
  url
}
},
image18{
  asset -> {
  _id,
  url
}
},
image19{
  asset -> {
  _id,
  url
}
},
image12{
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
      .then((data) => setSinglePost(data[0]))
      .catch(console.error)
  }, [slug])

  console.log(`Gallery data is >>>>`, singlePost)

  return (
    <div>
      <h1>Gallery Post</h1>

      <Carousel variant="dark">
        {singlePost?.image1 && (
          <Carousel.Item>
            <img src={singlePost.image1.asset.url} alt={singlePost.title} />
          </Carousel.Item>
        )}

        <Carousel.Item>
          <img className="d-block w-100" src="" alt="Second slide" />
        </Carousel.Item>


        <Carousel.Item>
          <img className="d-block w-100" src="" alt="Third slide" />
        
        </Carousel.Item>
      </Carousel>

      <div>
        {singlePost?.image1 && (
          <img src={singlePost.image1.asset.url} alt={singlePost.title} />
        )}
        {singlePost?.image2 && (
          <img src={singlePost.image2.asset.url} alt={singlePost.title} />
        )}
        {singlePost?.image3 && (
          <img src={singlePost.image3.asset.url} alt={singlePost.title} />
        )}
        {singlePost?.image4 && (
          <img src={singlePost.image4.asset.url} alt={singlePost.title} />
        )}
        {singlePost?.image5 && (
          <img src={singlePost.image5.asset.url} alt={singlePost.title} />
        )}
        {singlePost?.image6 && (
          <img src={singlePost.image6.asset.url} alt={singlePost.title} />
        )}
        {singlePost?.image7 && (
          <img src={singlePost.image7.asset.url} alt={singlePost.title} />
        )}
        {singlePost?.image8 && (
          <img src={singlePost.image8.asset.url} alt={singlePost.title} />
        )}
        {singlePost?.image9 && (
          <img src={singlePost.image9.asset.url} alt={singlePost.title} />
        )}
        {singlePost?.image10 && (
          <img src={singlePost.image10.asset.url} alt={singlePost.title} />
        )}
        {singlePost?.image11 && (
          <img src={singlePost.image11.asset.url} alt={singlePost.title} />
        )}
        {singlePost?.image12 && (
          <img src={singlePost.image12.asset.url} alt={singlePost.title} />
        )}
        {singlePost?.image13 && (
          <img src={singlePost.image13.asset.url} alt={singlePost.title} />
        )}
        {singlePost?.image14 && (
          <img src={singlePost.image15.asset.url} alt={singlePost.title} />
        )}
        {singlePost?.image15 && (
          <img src={singlePost.image15.asset.url} alt={singlePost.title} />
        )}
        {singlePost?.image16 && (
          <img src={singlePost.image16.asset.url} alt={singlePost.title} />
        )}
        {singlePost?.image17 && (
          <img src={singlePost.image17.asset.url} alt={singlePost.title} />
        )}
        {singlePost?.image18 && (
          <img src={singlePost.image18.asset.url} alt={singlePost.title} />
        )}
        {singlePost?.image19 && (
          <img src={singlePost.image19.asset.url} alt={singlePost.title} />
        )}
        {singlePost?.image20 && (
          <img src={singlePost.image20.asset.url} alt={singlePost.title} />
        )}
      </div>
    </div>
  )
}

export default Gallery
