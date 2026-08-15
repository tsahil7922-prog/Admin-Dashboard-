import React from "react";
import type { IconType } from "react-icons/lib";

import {
  RiDashboardFill,
  RiShoppingBag3Fill,
  RiUser3Fill,
  RiExchangeDollarFill,
  RiLineChartFill,
  RiPieChartFill,
  RiTimerFill,
  RiCoupon3Fill,
  RiTShirt2Fill,
} from "react-icons/ri";

import { Link, useLocation } from "react-router-dom";

const AdminSideBar = () => {
  interface Menu {
    name: string;
    url: string;
    Icon: IconType;
    section: "dashboard" | "charts" | "apps";
  }

  const location = useLocation();

  const allMenus: Menu[] = [
    {
      name: "Dashboard",
      url: "/admin/dashboard",
      Icon: RiDashboardFill,
      section: "dashboard",
    },
    {
      name: "Products",
      url: "/admin/products",
      Icon: RiShoppingBag3Fill,
      section: "dashboard",
    },
    {
      name: "Customer",
      url: "/admin/customer",
      Icon: RiUser3Fill,
      section: "dashboard",
    },
    {
      name: "Transactions",
      url: "/admin/transactions",
      Icon: RiExchangeDollarFill,
      section: "dashboard",
    },

    {
      name: "Bar",
      url: "/admin/charts/bar",
      Icon: RiExchangeDollarFill,
      section: "charts",
    },
    {
      name: "Pie",
      url: "/admin/charts/pie",
      Icon: RiPieChartFill,
      section: "charts",
    },
    {
      name: "Line",
      url: "/admin/charts/line",
      Icon: RiLineChartFill,
      section: "charts",
    },

    {
      name: "StopWatch",
      url: "/admin/apps/stopwatch",
      Icon: RiTimerFill,
      section: "apps",
    },
    {
      name: "Coupon",
      url: "/admin/apps/coupon",
      Icon: RiCoupon3Fill,

      section: "apps",
    },
    {
      name: "Toss",
      url: "/admin/apps/toss",
      Icon: RiTShirt2Fill,
      section: "apps",
    },
  ];

  const renderMenus = (section: Menu["section"]) => {
    return (
      <ul>
        {allMenus
          .filter((menu) => menu.section === section)
          .map((menu) => {
            const Icon = menu.Icon;

            const isActive = location.pathname === menu.url;

            return (
              <li key={menu.name} className={isActive ? "active" : ""}>
                <Link to={menu.url}>
                  <Icon />
                  <span>{menu.name}</span>
                </Link>
              </li>
            );
          })}
      </ul>
    );
  };

  return (
    <aside className="adminSideBar">
      <h2>Logo.</h2>

      <div>
        <h5>Dashboard</h5>

        {renderMenus("dashboard")}
      </div>

      <div>
        <h5>Charts</h5>

        {renderMenus("charts")}
      </div>

      <div>
        <h5>Apps</h5>

        {renderMenus("apps")}
      </div>
    </aside>
  );
};

export default AdminSideBar;
