'use client'

import React from 'react';

export default function Tags() {

  const handleCreateTag = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      tagLabel: { value: string };
      tagDescription: { value: string };
    };
    console.log(target);
    const label = target.tagLabel.value;
    const description = target.tagDescription.value;
    console.log('We need to make the API call for Tag creation here', label, description);
    const res = await fetch(`/api/tag/createTag`, {
      method: 'POST',
      body: JSON.stringify({ label, description }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    console.log(await res.json())
  }

  return (
    <div>
      <h1>Create a new Tag</h1>
      <form onSubmit={handleCreateTag}>
        <div>
          <label htmlFor="tagLabel">
            <input type="text" name="tagLabel" placeholder="Enter label (e.g.: Frontend)" />
          </label>
        </div>
        <div>
          <label htmlFor="tagDescription">
            <textarea name="tagDescription" id="" cols={30} rows={10} placeholder="Enter details about the tag"></textarea>
          </label>
        </div>
        <button type='submit'>Create New Tag</button>
      </form>
    </div>
  )
}