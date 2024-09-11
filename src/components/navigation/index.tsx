import "@/styles/globals.css";
import { FileText, Heart, Grid, Sliders, Archive } from "react-feather";
import MenuItem from "./MenuItem";
import classes from "./navigation.module.css";

const menuList = [
  { id: "project", label: "Project", icon: <FileText />, href: "/project" },
  { id: "wish", label: "Wish", icon: <Heart />, href: "/wish" },
  { id: "feed", label: "Feed", icon: <Grid />, href: "/feed" },
  { id: "gauge", label: "Gauge", icon: <Sliders />, href: "/gauge" },
  { id: "storage", label: "Storage", icon: <Archive />, href: "/storage" },
];

export default function Navigation({}) {
  return (
    <nav className={classes.nav}>
      <ul className={classes.ul}>
        {menuList.map((menu) => (
          <MenuItem
            key={menu.id}
            name={menu.label}
            icon={menu.icon}
            href={menu.href}
          />
        ))}
      </ul>
    </nav>
  );
}
