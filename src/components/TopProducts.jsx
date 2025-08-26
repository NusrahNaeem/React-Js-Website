

// TopProducts.jsx
const TopProducts = () => {
  return (
    <section className="top-products container">
      <div className="section-header">
        <h2>Our Top Products</h2>
        <p>Discover our best-selling items loved by customers for their style, comfort, and quality.</p>
      </div>

      <div className="products-grid">
        {/* Product 1 */}
        <div className="product-card">
          <img src="/images/pro1.jpg" alt="Product 1" />
          <h3>Classic Heels</h3>
          <p className="price">$79.99</p>
          <div className="rating">⭐⭐⭐⭐☆ (4.0)</div>
        </div>

        {/* Product 2 */}
        <div className="product-card">
          <img src="/images/pro2.jpg" alt="Product 2" />
          <h3>Running Shoes</h3>
          <p className="price">$99.99</p>
          <div className="rating">⭐⭐⭐⭐⭐ (5.0)</div>
        </div>

        {/* Product 3 */}
        <div className="product-card">
          <img src="/images/pro3.jpg" alt="Product 3" />
          <h3>Leather Boots</h3>
          <p className="price">$120.00</p>
          <div className="rating">⭐⭐⭐⭐☆ (4.5)</div>
        </div>

        {/* Product 4 */}
        <div className="product-card">
          <img src="/images/pro4.jpg" alt="Product 4" />
          <h3>Casual Loafers</h3>
          <p className="price">$65.50</p>
          <div className="rating">⭐⭐⭐☆☆ (3.5)</div>
        </div>
      </div>
    </section>
  );
};

export default TopProducts;
