import "./App.css";
import CustomerReviews from "./components/CustomerReviews";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import HeroSection from "./components/Hero";
import InstagramShowcase from "./components/InstagramShowcase";
import Navigation from "./components/Navigation";
import SpecialOffers from "./components/SpecialOffer";
import TopProducts from "./components/TopProducts";
import WhyChooseUs from "./WhyChooseUs";



const App = () => {
  return (
<div>

 <Navigation/>

  <HeroSection/>

  <TopProducts/>

  <WhyChooseUs/>

  <SpecialOffers/>

  <Gallery/>

  <CustomerReviews/>

  <InstagramShowcase/>

  <Footer/>


  </div>
  )
}

export default App;
