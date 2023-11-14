import Header from "../header/Header";
import dashboard from "/images/dashboard.jpg";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <>
      <Header />
      <div className="w-full h-screen flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 bg-red-100 h-full order-1 lg:order-2"></div>
        <div className="w-full lg:w-1/2 h-full order-2 lg:order-1 relative">
          <img
            src={dashboard}
            alt="Dashboard"
            className="dashboard-image absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-32 w-1/2 h-1/2"
          />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
