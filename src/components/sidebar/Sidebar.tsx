import React from "react"

import styles from "./sidebar.module.css";
import { menuItems } from "@/config/routes/menuItems";
import MenuLink from "./menuLink/menuLink";
import LogoutIcon from '@mui/icons-material/Logout';
import Image from "next/image";

const Sidebar = async () => {
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image
          className={styles.userImage}
          src="/noavatar.png"
          alt=""
          width="50"
          height="50"
        />
        <div className={styles.userDetail}>
          <span className={styles.username}>John Doe</span>
          <span className={styles.userTitle}>Administrator</span>
        </div>
      </div>
      <ul className={styles.list}>
        {menuItems.map((cat) => (
          <li key={cat.title}>
            <span className={styles.cat}>{cat.title}</span>
            {cat.list.map((item) => (
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>
      {/* <form>
        <button className={styles.logout}>
          <LogoutIcon />
          Sair
        </button>
      </form> */}
    </div>
  );
};

export default Sidebar;