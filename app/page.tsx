import React from 'react';
import admin from '../lib/firebase';
import Link from 'next/link';


type Post = {
  id: string;
  title: string;
  slug: string;
  content: string;
  tags: string[];
}

const API_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : ' https://ssrfahadweb-ji5xummm4q-uc.a.run.app'

async function getData() {
  const res = await fetch(`${API_URL}/api/posts`, { cache: 'no-store' });
  return res.json();
}

export default async function Home() {
  const posts = await getData();
  console.log(posts);

  return (
    <main>
      <div>NextJS and Firebase Blog</div>
      {posts.map((post: Post) => (
        <div key={post.id}>
          <Link href={`post/${post.slug}`}>{post.title}</Link>
        </div>
      ))}
    </main>
  )
}
