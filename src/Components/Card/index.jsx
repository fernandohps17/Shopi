import React from 'react'
import './Card.scss'

const Card = (data) => {
  return (
    <div className='card'>
      <figure className='card_content'>
        <img src={data.data.images[0]} alt={data.data.title} />
        <div className='card_content_add'>+</div>
        <span className='card_content_category'>{data.data.category.name}</span>
      </figure>
      <p className='card_content_text'>
        <span>{data.data.title}</span>
        <span><b>{data.data.price}$</b></span>
      </p>
      <p className='card_content_description'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita unde eaque cupiditate iste quaerat quo porro voluptates quia, quod magnam.</p>
      </p>
    </div>
  )
}

export default Card
