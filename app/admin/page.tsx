import React from 'react';
import LogoutButton from '../../components/LogoutButton';

export default async function Admin(req: Request) {
  return (
    <div>
      <h1>Admin Section</h1>
      <LogoutButton />
    </div>
  )
}