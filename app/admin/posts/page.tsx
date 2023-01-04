import React from 'react';
import Link from 'next/link';
import { API_URL } from '../../../utils/constants';
import type { Post } from '../../../pages/types/post';

async function getAllPosts() {
  const res = await fetch(`${API_URL}/api/posts`, { cache: 'no-store' });
  return res.json();
}

export default async function Posts() {
  const posts = await getAllPosts();
  return (
    <div>
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
          <div key={post.id}>
            <Link href={`admin/post/${post.slug}`}>{post.title}</Link>
          </div>
        ))}
      </div>
    </div>
  )
}