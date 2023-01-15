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
      <h3>Posts Section</h3>
      <ul>
        <li>Create Posts</li>
        <li>Read a list of posts</li>
        <li>Update Posts</li>
        <li>Delete Posts</li>
      </ul>
      <div><Link href='admin/posts/create'>Create a new Post</Link></div>
      <div>
        {posts.map((post: Post) => (
          <div key={post.id} style={{
            padding: '1rem',
            background: '#efefef',
            marginTop: '0.5rem',
            display: 'grid',
            gridTemplateColumns: '8fr 3fr 1fr'
          }}>
            <div>{post.title}</div>
            <div>{post.tags.map((tag, i) => (
              <span key={i} style={{
                padding: '0.5rem',
                background: '#d3d3d3',
                borderRadius: '3rem',
                margin: '0.5rem'
              }}>{tag}</span>
            ))}</div>
            <div>
              <Link
                href={{
                  pathname: '/admin/posts/edit',
                  query: { id: post.id },
                }}
              >
                Edit
              </Link>
              <button onClick={() => handleDeletePost(post)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}