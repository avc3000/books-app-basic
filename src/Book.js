import React from 'react';

function Book({ id, image, title, author }) {
  return (
    <article className='book'>
      <img alt={author} src={image} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      <span className='number'>{`# ${id}`}</span>
    </article>
  )
}

export default Book;