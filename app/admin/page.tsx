import React from 'react';
import { redirect } from 'next/navigation';

export default function Admin() {
  const currentUser = false;

  if (!currentUser) {
    redirect('/login')
  }
  return (
    <div>Admin Section</div>
  )
}