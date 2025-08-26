import { FaAmazon, FaFacebook } from "react-icons/fa";

const HeroSection = () => {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>
          Your Feet <br /> Deserve The Best
        </h1>
        <p>
          Welcome to StepUp Shoes, your ultimate destination for trendy,
          comfortable, and durable footwear. Explore our latest collection of
          sneakers, casual shoes, sports footwear, and more – all designed to
          keep you stylish and confident. Whether you’re running, walking, or
          relaxing, we have the perfect pair for every occasion. Shop now and
          step into comfort with quality you can trust!
        </p>

        <div className="hero-btn">
          <button>Shop Now</button>
          <button>Category</button>
        </div>

        <div className="shopping">
          <p>Also Available On</p>
          <div className="brand-icons">
            <FaAmazon className="brand-icon amazon" />
            <FaFacebook className="brand-icon facebook" />
          </div>
        </div>
      </div>

      <div className="hero-image">
        <img src="/images/shoes1.jpg" alt="Shoes" />
      </div>
    </main>
  );
};

export default HeroSection;



// const HeroSection = () => {
//     return  (
//    <main className="hero container">
//     <div className="hero-content">
//         <h1>Your Feet <br/>Deserves The Best</h1>
//        <p>
//        Welcome to StepUp Shoes, your ultimate destination for trendy, comfortable, and durable footwear.  
// Explore our latest collection of sneakers, casual shoes, sports footwear, and more – all designed to keep you stylish and confident.  
// Whether you’re running, walking, or relaxing, we have the perfect pair for every occasion.  
// Shop now and step into comfort with quality you can trust!

//        </p>

//        <div className="hero-btn">
//         <button>Shop Now</button>
//         <button>Category</button>
//        </div>
//        <div className="shopping">
//         <p>Also Available On</p>
//         <div className="brand-icons">
//           <img src="/images/amazon.png"  alt="" />
//           <img src="/images/facebook.png" alt="" />

//         </div>
//        </div>
//     </div>
//      <div className="hero-image">
//       <img src="/images/shoes1.jpg" alt="" />
//      </div>

//    </main>

//     )
// }

// export default HeroSection