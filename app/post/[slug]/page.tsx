import React from 'react';
import { API_URL } from '../../../utils/constants';

async function getData(slug: string) {
  const res = await fetch(`${API_URL}/api/post/${slug}`, {
    cache: 'no-store'
  });
  return await res.json();
}

type Props = {
  params: {
    slug: string;
  }
}
export default async function Index({ params: { slug } }: Props) {
  const post = await getData(slug);
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <div>
        <h4>Tags</h4>
        {post.tags.map((tag: string) => <span key={tag}>{tag} </span>)}
      </div>
    </div>
  )
}