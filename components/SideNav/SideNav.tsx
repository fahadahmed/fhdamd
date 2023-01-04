import React from 'react';
import Link from 'next/link';

type NavLinks = {
  label: string;
  url: string;
}

type Props = {
  navLinks: NavLinks[]
}
export default function SideNav({ navLinks }: Props) {
  return (
    <div>
      {navLinks.map((link, index) => (
        <div key={index}>
          <Link href={link.url}>{link.label}</Link>
        </div>
      ))}
    </div>
  )
}