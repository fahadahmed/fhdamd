import React from 'react';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { API_URL } from '../../utils/constants';
import SideNav from '../../components/SideNav/SideNav';

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

const SIDEBAR_ITEMS = [
  {
    label: 'Home',
    url: 'admin'
  },
  {
    label: 'Issues',
    url: 'admin/issues'
  },
  {
    label: 'Posts',
    url: 'admin/posts'
  },
  {
    label: 'Tags',
    url: 'admin/tags'
  }
]

export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  const data = await getUserSession();
  if (!data.user) {
    redirect('/login')
  }
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '100px 9fr', gap: '1rem', height: '100%' }}>
      <SideNav navLinks={SIDEBAR_ITEMS} />
      <div>{children}</div>
    </div>
  )
}
