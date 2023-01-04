'use client';
import React, { useState } from 'react';
import { API_URL } from '../../utils/constants';
import { redirect } from 'next/navigation';

export default function LogoutButton() {
  const [loggedOut, setLoggedOut] = useState(false);

  const handleLogout = async () => {
    const res = await fetch(`${API_URL}/api/auth/signOutUserSession`, {
      cache: 'no-store'
    });
    if (res.status === 200) {
      setLoggedOut(true)
    }
  }

  if (loggedOut) {
    redirect('/login')
  }
  return (
    <button onClick={handleLogout}>Logout</button>
  )
}