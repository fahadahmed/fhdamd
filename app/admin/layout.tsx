import React from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
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
