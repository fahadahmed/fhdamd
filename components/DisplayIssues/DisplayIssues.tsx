'use client'

import React from 'react';
import Link from 'next/link';
import { API_URL } from '../../utils/constants';

type Props = {
  issues: any
}

export default function DisplayIssues({ issues }: Props) {

  const handleDelete = async (issue: any) => {
    console.log(issue);
    const res = await fetch(`${API_URL}/api/issue/deleteIssue`, {
      method: 'POST',
      body: JSON.stringify({
        id: issue.id,
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      cache: 'no-store'
    });

    console.log(await res.json())
  }


  return (
    <div>
      <div>
        {issues.map((issue: any) => (
          <div key={issue.id} style={{
            display: 'grid',
            gridTemplateColumns: '2fr 6fr 2fr 2fr',
            background: '#efefef',
            padding: '1rem',
            marginBottom: '0.5rem'
          }}>
            <span>{issue.name}</span>
            <span>{issue.description}</span>
            <span>
              <Link
                href={{
                  pathname: '/admin/issues/edit',
                  query: { id: issue.id },
                }}
              >
                Edit
              </Link>
              <button onClick={e => handleDelete(issue)}>Delete</button>
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}