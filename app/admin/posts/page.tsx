import React from 'react';
import { API_URL } from '../../../utils/constants';
import DisplayPosts from '../../../components/DisplayPosts/DisplayPosts';

async function getAllPosts() {
  const res = await fetch(`${API_URL}/api/posts`, { cache: 'no-store' });
  return res.json();
}

export default async function Posts() {
  const posts = await getAllPosts();
  return (
    <DisplayPosts posts={posts} />
  )
}