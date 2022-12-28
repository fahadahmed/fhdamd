import React from 'react';
import { API_URL } from '../../../utils/constants';

async function getData(slug) {
  const res = await fetch(`${API_URL}/api/post/${slug}`, {
    cache: 'no-store'
  });
  return await res.json();
}
export default async function Index({ params: { slug } }) {
  const post = await getData(slug);
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  )
}