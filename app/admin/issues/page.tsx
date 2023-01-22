import React from 'react';
import Link from 'next/link';
import { API_URL } from '../../../utils/constants';
import DisplayIssues from '../../../components/DisplayIssues';


async function getAllIssues() {
  const res = await fetch(`${API_URL}/api/issue/getIssues`, { cache: 'no-store' });
  return await res.json();
}
export default async function Issues() {
  const issues = await getAllIssues();
  return (
    <div style={{ padding: '2rem' }}>
      <h3>Issues Section</h3>
      <Link href='/admin/issues/create'>Create a new issue</Link>
      <DisplayIssues issues={issues} />
    </div>
  )
}