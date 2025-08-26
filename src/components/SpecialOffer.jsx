// SpecialOffers.jsx
const SpecialOffers = () => {
  return (
    <section className="special-offers container">
      <div className="section-header">
        <h2>Special Offers</h2>
        <p>Don’t miss out on our limited-time deals. Grab your favorites at unbeatable prices!</p>
      </div>

      <div className="offers-grid">
        {/* Offer 1 */}
        <div className="offer-card">
          <img src="/images/sp2.jpg" alt="Offer 1" />
          <div className="offer-badge">20% OFF</div>
          <div className="offer-content">
            <h3>Flat 20% Off</h3>
            <p>Get premium sneakers at an exclusive discounted price.</p>
            <button className="offer-btn">Shop Sale</button>
          </div>
        </div>

        {/* Offer 2 */}
        <div className="offer-card">
          <img src="/images/sp1.jpg" alt="Offer 2" />
          <div className="offer-badge">BOGO</div>
          <div className="offer-content">
            <h3>Buy 1 Get 1</h3>
            <p>Shop our stylish loafers and get another pair free.</p>
            <button className="offer-btn">Shop Sale</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
