import React from 'react';
import Link from 'next/link';
import { API_URL } from '../utils/constants';
import type { Post } from '../pages/types/post';

async function getData() {
  const res = await fetch(`${API_URL}/api/posts`, { cache: 'no-store' });
  return res.json();
}

export default async function Home() {
  const posts = await getData();
  return (
    <main>
      <div>
        <h1>Fahad Ahmed Blog</h1>
      </div>
      {posts.map((post: Post) => (
        <div key={post.id}>
          <Link href={`post/${post.slug}`}>{post.title}</Link>
        </div>
      ))}
    </main>
  )
}
