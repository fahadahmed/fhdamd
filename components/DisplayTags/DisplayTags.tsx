'use client'

import React from 'react';
import Link from 'next/link';
import { API_URL } from '../../utils/constants';

type Props = {
  tags: any
}

export default function DisplayTags({ tags }: Props) {

  const handleDelete = async (tag: any) => {
    console.log(tag);
    const res = await fetch(`${API_URL}/api/tag/deleteTag`, {
      method: 'POST',
      body: JSON.stringify({
        id: tag.id,
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      cache: 'no-store'
    });

    console.log(await res.json())
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