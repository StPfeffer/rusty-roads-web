"use client";

import React from "react";

import styles from "./navbar.module.css";
import { usePathname } from "next/navigation";
import SearchIcon from '@mui/icons-material/Search';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PublicIcon from '@mui/icons-material/Public';

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className={styles.container}>
      <div className={styles.stitle}>
        {String(pathname.split("/").pop()?.charAt(0).toUpperCase()) + pathname.split("/").pop()?.slice(1)}
      </div>

      <div className={styles.menu}>
        <div className={styles.search}>
          <SearchIcon />
          <input type="text" placeholder="Search..." className={styles.input} />
        </div>

        <div className={styles.icons}>
          <ChatIcon fontSize="small" />
          <NotificationsIcon fontSize="small" />
          <PublicIcon fontSize="small" />
        </div>
      </div>
    </div>
  )
}

export default Navbar