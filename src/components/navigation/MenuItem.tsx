"use client";

import Link from "next/link";
import classes from "./navigation.module.css";
import { usePathname } from "next/navigation";

interface MenuItemProps {
  name: string;
  href: string;
  icon?: React.ReactNode;
}

export default function MenuItem({ name, href, icon }: MenuItemProps) {
  const pathname = usePathname();
  const active = href === pathname ? classes.active : "";

  return (
    <li className={`${classes.li} ${active}`}>
      <Link href={href}>
        <span>{icon}</span>
        <p>{name}</p>
      </Link>
    </li>
  );
}
