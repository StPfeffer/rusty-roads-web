"use client";

import React from "react";

import { usePathname } from "next/navigation";
import SearchIcon from '@mui/icons-material/Search';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PublicIcon from '@mui/icons-material/Public';

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="bg-[color:var(--bgSoft)] p-5 flex items-center justify-between rounded-lg">
      <div className="text-[color:var(--textSoft)] font-bold">
        {String(pathname.length == 1 ? "Dashboard" : pathname.split("/").pop()?.charAt(0).toUpperCase()) + pathname.split("/").pop()?.slice(1).split("-").join(" ")}
      </div>

      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2.5 p-2.5 rounded-lg bg-[#2E374A]">
          <SearchIcon />
          <input type="text" placeholder="Search..." className="bg-[#2E374A] border-none outline-none text-[color:var(--text)]" />
        </div>

        <div className="flex gap-5">
          <ChatIcon fontSize="small" />
          <NotificationsIcon fontSize="small" />
          <PublicIcon fontSize="small" />
        </div>
      </div>
    </div>
  )
}

export default Navbar