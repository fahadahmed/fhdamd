'use client';
import React, { useState } from 'react';
import { API_URL } from '../../utils/constants';
import { redirect } from 'next/navigation';

export default function LogoutButton() {
  const [loggedOut, setLoggedOut] = useState(false);

  const handleLogout = async () => {
    const res = await fetch(`${API_URL}/api/auth/signOutUserSession`, {
      cache: 'no-store',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': process.env.CORS_URL || 'http://localhost:3000'
      }
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