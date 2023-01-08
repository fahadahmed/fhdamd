'use client'

import React from 'react';
import Link from 'next/link';

type Props = {
  tags: any
}

export default function DisplayTags({ tags }: Props) {

  const handleDelete = (tag: any) => {
    console.log(tag)
  }
  return (
    <div>
      <div>
        {tags.map((tag: any) => (
          <div key={tag.id} style={{
            display: 'grid',
            gridTemplateColumns: '2fr 6fr 2fr 2fr',
            background: '#efefef',
            padding: '1rem',
            marginBottom: '0.5rem'
          }}>
            <span>{tag.label}</span>
            <span>{tag.description}</span>
            <span>{tag.slug}</span>
            <span>
              <Link
                href={{
                  pathname: '/admin/tags/edit',
                  query: { id: tag.id },
                }}
              >
                Edit
              </Link>
              <button onClick={e => handleDelete(tag)}>Delete</button>
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}