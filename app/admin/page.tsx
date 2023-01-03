import React from 'react';
import { redirect } from 'next/navigation';
import { API_URL } from '../../utils/constants'

async function getUserSession() {
  const res = await fetch(`${API_URL}/api/auth/getUserSession`, {
    cache: 'no-store'
  });
  console.log('response from server', res.status)
  const data = res.json();
  return data;
}
export default async function Admin() {
  const currentUser = true;
  const user = await getUserSession();

  if (!currentUser) {
    redirect('/login')
  }
  return (
    <div>Admin Section</div>
  )
}