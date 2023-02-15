import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/fa_logo.svg';

type NavLinks = {
  label: string;
  url: string;
  icon: string;
}

type Props = {
  navLinks: NavLinks[]
}
export default function SideNav({ navLinks }: Props) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#EBE9DA' }}>
      <Image src={logo} alt="Logo" />
      {navLinks.map((link, index) => (
        <div key={index} style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
          <Link href={link.url}>
            <Image src={link.icon} alt={link.label} width="24" height="24" />
          </Link>
        </div>
      ))}
    </div>
  )
}