'use client';
import React, { useState } from 'react';
import { API_URL } from '../../utils/constants';
import Link from 'next/link';

type Props = {
  label: string,
  description: string,
  id: string,
  slug: string
}

export default function EditTagForm({ label, description, id, slug }: Props) {

  const [tagLabel, setTagLabel] = useState(label);
  const [tagDescription, setTagDescription] = useState(description);
  const [didTagUpdate, setDidTagUpdate] = useState(false);

  const handleEditTag = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const res = await fetch(`${API_URL}/api/tag/updateTag`, {
      method: 'POST',
      body: JSON.stringify({
        label: tagLabel,
        description: tagDescription,
        id,
        slug
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      cache: 'no-store'
    });
    const data = await res.json();

    if (data?.success) {
      setDidTagUpdate(true);
    }
  }

  return (
    <div>
      <h1>Edit new Tag</h1>
      <form onSubmit={handleEditTag}>
        <div>
          <label htmlFor="tagLabel">
            <input
              type="text"
              name="tagLabel"
              placeholder="Enter label (e.g.: Frontend)"
              value={tagLabel}
              onChange={e => setTagLabel(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label htmlFor="tagDescription">
            <textarea
              name="tagDescription"
              id=""
              cols={30}
              rows={10}
              placeholder="Enter details about the tag"
              value={tagDescription}
              onChange={e => setTagDescription(e.target.value)}
            />
          </label>
        </div>
        <button type='submit'>Edit New Tag</button>
      </form>
      {didTagUpdate ? (
        <div>
          <p>This should be a toast notification but <strong>The tag has been updated</strong></p>
        </div>
      ) : null}
      <Link href="/admin/tags">Back to Tags</Link>
    </div>
  )
}