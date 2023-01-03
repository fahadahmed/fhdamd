'use client';
import React from 'react';
import { API_URL } from '../../utils/constants';

export default function LogoutButton() {
  const handleLogout = async () => {
    console.log('we must handle the logout functionality here');
    const res = await fetch(`${API_URL}/api/auth/signOutUserSession`, {
      cache: 'no-store'
    });
    console.log(res.status)
  }
  return (
    <button onClick={handleLogout}>Logout</button>
  )
}