import React from 'react';
import Link from 'next/link';
import { API_URL } from '../utils/constants';
import type { Post } from '../pages/types/post';
import Image from 'next/image';
import logo from '../public/fa_logo.svg';

async function getData() {
  const res = await fetch(`${API_URL}/api/posts`, { cache: 'no-store' });
  return res.json();
}

export default async function Home() {
  const posts = await getData();
  return (
    <main className="blog-container">
      <div className="sidebar">
        <Image src={logo} alt="Logo" />
      </div>
      <div className="main-content">
        <div className="header">
          <h4>ISSUE 1 <span className="byline">FEB 2023</span></h4>
        </div>
        <div>
          {posts.map((post: Post) => (
            <div key={post.id}>
              <Link href={`post/${post.slug}`}>{post.title}</Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
