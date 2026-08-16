import React from "react";
import AdminSideBar from "../components/AdminSideBar";
import { BsSearch } from "react-icons/bs";
import { HiTrendingDown, HiTrendingUp } from "react-icons/hi";

interface WidgetItemsProps {
  heading: string;
  value: number;
  percent: number;
  color: string;
  amount?: boolean;
}

const widgetItem = ({
  heading,
  value,
  percent,
  amount,
  color,
}: WidgetItemsProps) => (
  <article className="widget">
    <div className="widgetInfo">
      <p>{heading}</p>

      <h4>{amount ? `$${value.toLocaleString()}` : value.toLocaleString()}</h4>

      {percent > 0 ? (
        <span className="green">
          <HiTrendingUp />
          +{percent}%
        </span>
      ) : (
        <span className="red">
          <HiTrendingDown />
          {percent}%
        </span>
      )}
    </div>

    <div
      className="widgetCircle"
      style={
        {
          "--circle-color": color,
          "--circle-degree": `${Math.min(Math.abs(percent) * 20, 360)}deg`,
        } as React.CSSProperties
      }
    >
      <span>{percent}%</span>
    </div>
  </article>
);

const DashBoard = () => {
  return (
    <div className="adminContainer">
      <AdminSideBar />

      <main className="dashboard">
        {/* Top Bar */}
        <div className="bar">
          <div className="searchBox">
            <BsSearch />

            <input
              type="text"
              placeholder="Search for data, users, docs..."
            />
          </div>

          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/021/919/677/small_2x/login-icon-in-trendy-flat-style-isolated-on-white-background-approach-symbol-for-your-web-site-design-logo-app-ui-illustration-eps10-flat-style-for-graphic-design-vector.jpg"
            alt="User"
          />
        </div>

        {/* Dashboard Widgets */}
        <section className="widgetcontainer">
          {widgetItem({
            heading: "Total Revenue",
            value: 125000,
            percent: 12.5,
            color: "#6366f1",
            amount: true,
          })}

          {widgetItem({
            heading: "Total Users",
            value: 8540,
            percent: 8.2,
            color: "#22c55e",
          })}

          {widgetItem({
            heading: "Total Orders",
            value: 1248,
            percent: -3.4,
            color: "#f59e0b",
          })}

          {widgetItem({
            heading: "Total Products",
            value: 342,
            percent: 5.7,
            color: "#ec4899",
          })}
        </section>
      </main>
    </div>
  );
};

export default DashBoard;