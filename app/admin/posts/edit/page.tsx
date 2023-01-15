import React from 'react';
import EditPostForm from '../../../../components/EditPostForm/EditPostForm';
import { API_URL } from '../../../../utils/constants';

async function getPostData(id: string) {
  const res = await fetch(`${API_URL}/api/post/getPostById`, {
    method: 'POST',
    body: JSON.stringify({ id }),
    headers: {
      'Content-Type': 'application/json'
    },
    cache: 'no-store'
  });
  return await res.json();
}

export default async function EditPost({ searchParams: { id } }: any) {
  const post = await getPostData(id);

  return (
    <EditPostForm post={post} />
  )
}