import React from "react";
import AdminSideBar from "../components/AdminSideBar";
import { BsSearch } from "react-icons/bs";
import { HiTrendingDown, HiTrendingUp } from "react-icons/hi";
import dashboardData from "../assets/data.json";
import { BarChart } from "../components/Charts";
interface WidgetItemsProps {
  heading: string;
  value: number;
  percent: number;
  color: string;
  amount?: boolean;
}

interface WidgetItemsProps {
  heading: string;
  value: number;
  percent: number;
  color: string;
  amount?: boolean;
}

const WidgetItem = ({
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
          <HiTrendingUp />+{percent}%
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

            <input type="text" placeholder="Search for data, users, docs..." />
          </div>

          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/021/919/677/small_2x/login-icon-in-trendy-flat-style-isolated-on-white-background-approach-symbol-for-your-web-site-design-logo-app-ui-illustration-eps10-flat-style-for-graphic-design-vector.jpg"
            alt="User"
          />
        </div>

        {/* Dashboard Widgets */}
        <section className="widgetcontainer">
          {dashboardData.widgets.map((widget) => (
            <WidgetItem key={widget.heading} {...widget} />
          ))}
        </section>

        {/* for graph */}
        <section className="graphContainer">
          <div className="revenueChart">
            <h2>Revenue & Transaction</h2>
            {/* graph here */}
            <BarChart
              data_1={[300, 144, 433, 655]}
              data_2={[200, 300, 250, 400]}
              title_1="Revenue"
              bgColor_1="rgb(53, 162, 235)"
              bgColor_2="rgb(255, 159, 64)"
              labels={["Q1", "Q2", "Q3", "Q4"]} // optional — na do to default "months" array use hoga
              horizontal={false} // optional — na do to default false (vertical bars)
            />
          </div>
          <div className="dashboardCategory">
            <h2>Inventory</h2>

            <div className="categoryList">
              {dashboardData.categories.map((category) => (
                <CategoryItem key={category.heading} {...category} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

interface CategoryItemsProps {
  color: string;
  value: number;
  heading: string;
}

const CategoryItem = ({ color, heading, value }: CategoryItemsProps) => (
  <div className="categoryItem">
    <div className="categoryHeader">
      <h5>{heading}</h5>
      <span>{value}%</span>
    </div>

    <div className="categoryProgress">
      <div
        className="categoryProgressBar"
        style={{
          backgroundColor: color,
          width: `${Math.min(value, 100)}%`,
        }}
      />
    </div>
  </div>
);
export default DashBoard;
