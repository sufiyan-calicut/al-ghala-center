import dashboard from "/images/dashboard.jpg";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <>
      <div className="w-full h-screen flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 h-full order-1 lg:order-2 relative">
          {/* Text for smaller screens */}
          <h1 className="lg:hidden absolute mt-4 left-1/2 transform -translate-x-1/2 font-bold text-sm text-center">
            Al-Ghala Children <br /> Skill Development Center
          </h1>
          <div className="lg:mt-40 mt-28 lg:mr-28 m-5">
            <p className="lg:hidden lg:text-lg text-xs tracking-wider lg:text-left text-center">
              Al Ghala Children Skill Development Centre is dedicated to
              nurturing young minds, offering diverse educational and
              developmental programs. Through innovative activities, we provide
              a supportive environment for kids to grow academically, socially,
              and creatively.
            </p>
            <br />
            <p className="lg:hidden lg:text-lg text-sm tracking-wider lg:text-left text-center">
              With experienced educators and a comprehensive curriculum, we
              empower children to explore interests, develop skills, and build a
              strong foundation for future success—a hub of learning and growth
              for the community's young minds.
            </p>
            <p className="hidden lg:block lg:text-lg text-sm tracking-wider">
              Al Ghala Children Skill Development Centre is a dedicated
              institution committed to nurturing the potential of young minds.
              This center offers a wide range of educational and developmental
              programs for children, focusing on enhancing their skills and
              talents.
            </p>
            <br />
            <p className="hidden lg:block lg:text-lg text-sm tracking-wider">
              With a team of experienced educators and a comprehensive
              curriculum, this center is a place where children can explore
              their interests, develop potential skills, and build a strong
              foundation for future success. It is a hub of learning and growth
              for young learners in the community.
            </p>
            <br />
            <p className="hidden lg:block lg:text-lg text-sm tracking-wider">
              Through innovative and engaging activities, Al Ghala Children
              Skill Development Centre provides a supportive and stimulating
              environment for kids to grow academically, socially, and
              creatively. With a team of experienced educators and a
              comprehensive curriculum, this center is a place where children
              can explore their interests, develop potential skills, and build a
              strong foundation for future success. It is a hub of learning and
              growth for young learners in the community.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 h-full order-2 lg:order-1 relative">
          <img
            src={dashboard}
            alt="Dashboard"
            className="dashboard-image absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-32 w-1/2 h-1/2"
          />
          {/* Text for larger screens */}
          <h1 className="hidden lg:block absolute top-28 left-1/2 transform -translate-x-1/2 font-bold text-3xl text-center tracking-wider">
            Al-Ghala Children
            <br />
            Skill Development Center
          </h1>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
