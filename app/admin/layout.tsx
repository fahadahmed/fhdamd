import React from 'react';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { API_URL } from '../../utils/constants';

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

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const data = await getUserSession();
  console.log(data.user);
  if (!data.user) {
    redirect('/login')
  }
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <div style={{ display: 'grid', gridTemplateColumns: '3fr 9fr', gap: '1rem' }}>
          <div>Sidebar</div>
          <div>{children}</div>
        </div>
      </body>
    </html>
  )
}
