import React from 'react';
import Link from 'next/link';
import { API_URL } from '../../../utils/constants';
import DisplayTags from '../../../components/DisplayTags';

async function getAllTags() {
  const res = await fetch(`${API_URL}/api/tag/getTags`, { cache: 'no-store' });
  return await res.json();
}

export default async function Tags() {
  const tags = await getAllTags();
  return (
    <div style={{ padding: '2rem' }}>
      <h3>Tags Section</h3>
      <div>
        <Link href='admin/tags/create'>Create New Tag</Link>
      </div>
      <DisplayTags tags={tags} />
    </div>
  )
}