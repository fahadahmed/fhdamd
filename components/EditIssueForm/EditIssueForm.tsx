'use client';
import React, { useState } from 'react';
import { API_URL } from '../../utils/constants';
import Link from 'next/link';

type Props = {
  name: string,
  description: string,
  id: string,
  slug: string
}

export default function EditIssueForm({ name, description, id, slug }: Props) {

  const [issueName, setIssueName] = useState(name);
  const [issueDescription, setIssueDescription] = useState(description);
  const [didIssueUpdate, setDidIssueUpdate] = useState(false);

  const handleEditIssue = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const res = await fetch(`${API_URL}/api/issue/updateIssue`, {
      method: 'POST',
      body: JSON.stringify({
        name: issueName,
        description: issueDescription,
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
      setDidIssueUpdate(true);
    }
  }

  return (
    <div>
      <h1>Edit new Issue</h1>
      <form onSubmit={handleEditIssue}>
        <div>
          <label htmlFor="issueName">
            <input
              type="text"
              name="issueName"
              placeholder="Enter name (e.g.: Issue One)"
              value={issueName}
              onChange={e => setIssueName(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label htmlFor="issueDescription">
            <textarea
              name="issueDescription"
              id=""
              cols={30}
              rows={10}
              placeholder="Enter details about the issue"
              value={issueDescription}
              onChange={e => setIssueDescription(e.target.value)}
            />
          </label>
        </div>
        <button type='submit'>Edit New Issue</button>
      </form>
      {didIssueUpdate ? (
        <div>
          <p>This should be a toast notification but <strong>The issue has been updated</strong></p>
        </div>
      ) : null}
      <Link href="/admin/issues">Back to Issues</Link>
    </div>
  )
}