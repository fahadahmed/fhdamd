import React from 'react';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { API_URL } from '../../utils/constants';
import LogoutButton from '../../components/LogoutButton';

async function getUserSession() {
  const nextCookies = cookies();
  const token = nextCookies.get('__session');
  const res = await fetch(`${API_URL}/api/auth/getUserSession`, {
    cache: 'no-store',
    method: 'POST',
    body: JSON.stringify({ token, redirectTo: '/admin' }),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const data = await res.json();
  return data;
}
export default async function Admin(req: Request) {
  const data = await getUserSession();
  console.log(data.user);
  if (!data.user) {
    redirect('/login')
  }
  return (
    <div>
      <h1>Admin Section</h1>
      <LogoutButton />
    </div>
  )
}