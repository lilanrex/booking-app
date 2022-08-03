import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import "./home.css";
import Featured from "../../components/featured/Featured";

function Home() {
   return (
       <div>
        <Navbar />
        <Header />
        <div className="homeContainer">
           <Featured />
           
        </div>
       </div>
   );
}

export default Home; 