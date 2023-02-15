'use client'

import React from 'react';
import Link from 'next/link';
import type { Post } from '../../pages/types/post';
import { API_URL } from '../../utils/constants';

type Props = {
  posts: Post[]
}

export default function DisplayPosts({ posts }: Props) {

  const handleDeletePost = async (post: Post) => {
    console.log('we need to delete this item');
    console.log(post);
    const res = await fetch(`${API_URL}/api/post/deletePost`, {
      method: 'POST',
      body: JSON.stringify({
        id: post.id,
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      cache: 'no-store'
    });

    console.log(await res.json())
  }

  return (
    <div style={{ padding: '2rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
        <h3>Posts Section</h3>
        <div><Link href='admin/posts/create'>Create a new Post</Link></div>
      </div>
      <div style={{ background: '#ffffff', padding: '1rem', border: '2px solid #EBE9DA' }}>
        {posts.map((post: Post) => (
          <div key={post.id} style={{
            padding: '1rem',
            borderBottom: '2px solid #EBE9DA',
            marginTop: '0.5rem',
            display: 'grid',
            gridTemplateColumns: '8fr 3fr 1fr'
          }}>
            <div style={{ color: '#453E3E' }}>
              <Link
                href={{
                  pathname: '/admin/posts/edit',
                  query: { id: post.id },
                }}
              >
                {post.title}
              </Link>
            </div>
            <div>{post.tags.map((tag, i) => (
              <span key={i} style={{
                padding: '0.25rem 0.5rem',
                background: '#EBE9DA',
                borderRadius: '0.25rem',
                margin: '0.5rem',
                fontSize: '0.75rem',
                fontWeight: 'bold',
                textTransform: 'uppercase',
                color: '#453E3E'
              }}>{tag}</span>
            ))}</div>
            <div>
              <button onClick={() => handleDeletePost(post)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}