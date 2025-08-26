// Gallery.jsx
const Gallery = () => {
  return (
    <section className="gallery-section container">
      <div className="section-header">
        <h2>Our Collections</h2>
        <p>Explore our exclusive men’s and women’s shoe collections crafted for comfort, durability, and style.</p>
      </div>

      {/* Men Collection */}
      <div className="collection-block">
        <h3 className="collection-title">Men’s Collection</h3>
        <div className="collection-grid">
          <div className="collection-card">
            <img src="/images/c-sneakers.jpg" alt="Men Shoe 1" />
            <p>Classic Sneakers</p>
          </div>
          <div className="collection-card">
            <img src="/images/running.jpg" alt="Men Shoe 2" />
            <p>Running Shoes</p>
          </div>
          <div className="collection-card">
            <img src="/images/leather.jpg" alt="Men Shoe 3" />
            <p>Leather Shoes</p>
          </div>
          <div className="collection-card">
            <img src="/images/loafers.jpg" alt="Men Shoe 4" />
            <p>Casual Loafers</p>
          </div>
        </div>
      </div>

      {/* Women Collection */}
      <div className="collection-block">
        <h3 className="collection-title">Women’s Collection</h3>
        <div className="collection-grid">
          <div className="collection-card">
            <img src="/images/heels.jpg" alt="Women Shoe 1" />
            <p>Stylish Heels</p>
          </div>
          <div className="collection-card">
            <img src="/images/w-sneakers.jpg" alt="Women Shoe 2" />
            <p>Running Sneakers</p>
          </div>
          <div className="collection-card">
            <img src="/images/flats.jpg" alt="Women Shoe 3" />
            <p>Flat Sandals</p>
          </div>
          <div className="collection-card">
            <img src="/images/boots.jpg" alt="Women Shoe 4" />
            <p>Leather Boots</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
