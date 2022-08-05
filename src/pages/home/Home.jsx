import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import "./home.css";
import Featured from "../../components/featured/Featured";
import PropertyList from "../../components/propertyList/PropertyList";
import FeaturedHomes from "../../components/featuredProperties/FeaturedHomes";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";

function Home() {
   return (
       <div>
        <Navbar />
        <Header />
        <div className="homeContainer">
           <Featured />
           <h1 className="homeTitle">Browse by property type</h1>
           <PropertyList />
           <h1 className="homeTitle">Homes guests love</h1>
           <FeaturedHomes />
           <MailList />
           <Footer />
         </div>
       </div>
   );
}

export default Home; 