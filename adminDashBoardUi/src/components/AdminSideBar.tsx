import React from "react";
import type { IconType } from "react-icons/lib";
import { Link, type Location } from "react-router-dom";

const AdminSideBar = () => {
  interface LiProp {
    url: string;
    text: string;
    location: Location;
    Icon: IconType;
  }
  const li = ({ url, text, location, Icon }: LiProp) => (
    <li>
      <Link to={url}>
        <Icon />

        {text}
      </Link>
    </li>
  );
  return (
    <aside className="adminSideBar">
      <h2>
        Logo.
        <div>
          <h5>Dashboard</h5>
          <ul></ul>
        </div>
      </h2>
    </aside>
  );
};

export default AdminSideBar;
