import "./Dashboar.css";
import dashboard from "/images/dashboard.jpg";

const Dashboard = () => {
  return (
    <div className="h-screen w-full flex relative">
      <div className="hidden lg:block lg:w-1/2 w-full relative justify-end lg:h-full">
        <img
          src={dashboard}
          alt="Dashboard"
          className="dashboard-image absolute left-1/2 transform -translate-x-1/2 bottom-40 mx-auto"
        />
      </div>
      <div className="absolute lg:hidden block bottom-32 left-1/2 transform -translate-x-1/2">
        <img src={dashboard} alt="Dashboard" className="w-80 h-80" />
      </div>
      <div className="lg:w-1/2 w-full h-1/2 lg:h-full"></div>
      <svg
        className="svg-1"
        id="curve"
        data-name="Layer 2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1428 130.87"
        width="100%"
        height="100%"
        style={{
          position: "absolute",
          left: 0,
          top: 315,
        }}
      >
        <path
          className="cls-1"
          d="M-83,345V288s158-27,262-22l104,5,138,8,300,21s245,4,281-5c0,0-9-39,33-45,0,0,8-51,58-25,0,0,48-36,61,23,0,0,27,2,28,24,0,0,163-22,163-17v90Z"
          transform="translate(83 -214.13)"
        />
      </svg>
      <div
        className="cloud-backgroung w-full h-40"
        style={{
          position: "absolute",
          top: 850,
        }}
      ></div>

      <svg
        className="svg-2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1428 94.61"
        width="100%"
        height="100%"
        style={{
          position: "absolute",
          left: 0,
          top: 550,
        }}
      >
        <g id="Layer_3" data-name="Layer 3">
          <path className="cls-1" d="M-83,10" transform="translate(83 33)" />
          <path
            className="cls-2"
            d="M986.33,46.5s132.5-37,318,0C1304.33,46.5,1200.83,80.5,986.33,46.5Z"
            transform="translate(83 33)"
          />
        </g>
        <g id="Layer_4" data-name="Layer 4">
          <path
            className="cls-2"
            d="M-83,10S127,65.11,394,30.06,986.33,46.5,986.33,46.5,1218,83,1345,38V-33H-83Z"
            transform="translate(83 33)"
          />
        </g>
      </svg>
    </div>
  );
};

export default Dashboard;
