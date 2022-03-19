import Sidebar from "../../components/sidebar/SideBar";
import Navbar from '../../components/navbar/NavBar'
import "./home.scss";


const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
     
      </div>
    </div>
  );
};

export default Home;
