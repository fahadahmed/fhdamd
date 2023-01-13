import React from 'react';
import Link from 'next/link';

export default function Issues() {
  return (
    <div>
      <h3>Issues Section</h3>
      <Link href='/admin/issues/create'>Create a new issue</Link>
      <ul>
        <li>Create Issues</li>
        <li>Read a list of Issues</li>
        <li>Update Issues</li>
        <li>Delete Issues</li>
      </ul>
    </div>
  )
}