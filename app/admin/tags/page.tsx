import React from 'react';
import Link from 'next/link';
import { API_URL } from '../../../utils/constants';

async function getAllTags() {
  const res = await fetch(`${API_URL}/api/tag/getTags`, { cache: 'no-store' });
  return res.json();
}

export default async function Tags() {
  const tags = await getAllTags();
  console.log(tags)
  return (
    <div style={{ padding: '2rem' }}>
      <h3>Tags Section</h3>
      <div>
        <Link href='admin/tags/create'>Create New Tag</Link>
      </div>
      <ul>
        <li><s>Create Tags</s></li>
        <li><s>Read a list of tags</s></li>
        <li>Update tags</li>
        <li>Delete Tags - When a tag is deleted, then a cloud function is run to delete all the tags in the list of posts</li>
      </ul>
      <div>
        {tags.map((tag) => (
          <div key={tag.id} style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            background: '#efefef',
            padding: '1rem',
            marginBottom: '0.5rem'
          }}>
            <span>{tag.label}</span>
            <span>{tag.description}</span>
            <span>{tag.slug}</span>
            <span>
              <Link href='admin/tags/edit'>Edit</Link>
              <button>Delete</button>
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}