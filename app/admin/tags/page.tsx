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
      <ul>
        <li><s>Create Tags</s></li>
        <li><s>Read a list of tags</s></li>
        <li><s>Update tags</s></li>
        <li>Delete Tags - When a tag is deleted, then a cloud function is run to delete all the tags in the list of posts</li>
      </ul>
      <DisplayTags tags={tags} />
    </div>
  )
}