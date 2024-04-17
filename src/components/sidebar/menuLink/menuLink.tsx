"use client";

import React from 'react'

import styles from './menuLink.module.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type MenuItem = {
  title: string,
  path: string,
  icon: React.ReactNode,
  active: boolean,
}

const MenuLink = ({ item }:
  { item: MenuItem }
) => {
  const pathname = usePathname();

  return (
    <Link href={item.path} aria-disabled={item.active} tabIndex={item.active ? -1 : undefined} className={`${styles.container} ${pathname === item.path && styles.active} ${!item.active ? 'pointer-events-none' : ''}`}>
      {item.icon}
      {item.title}
    </Link>
  )
}

export default MenuLink