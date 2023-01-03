import React from 'react';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { API_URL } from '../../utils/constants';

async function getUserSession() {
  const nextCookies = cookies();
  const token = nextCookies.get('__session');
  console.log(token);
  const res = await fetch(`${API_URL}/api/auth/getUserSession`, {
    cache: 'no-store'
  });
  console.log('response from server', res.status)
  const data = await res.json();

  console.log(data)
  return data;
}
export default async function Admin(req: Request) {
  const currentUser = true;
  const user = await getUserSession();
  if (!currentUser) {
    redirect('/login')
  }
  return (
    <div>Admin Section</div>
  )
}