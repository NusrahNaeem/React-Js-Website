// WhyChooseUs.jsx
const WhyChooseUs = () => {
  return (
    <section className="why-choose-us container">
      <div className="section-header">
        <h2>Why Choose Us</h2>
        <p>We are committed to delivering the best experience with top-quality products and unmatched customer service.</p>
      </div>

      <div className="features-grid">
        {/* Feature 1 */}
        <div className="feature-card">
          <div className="icon">✅</div>
          <h3>High Quality Materials</h3>
          <p>Our products are crafted with durable, premium materials ensuring long-lasting comfort and style.</p>
        </div>

        {/* Feature 2 */}
        <div className="feature-card">
          <div className="icon">🚚</div>
          <h3>Fast & Free Delivery</h3>
          <p>Enjoy quick, reliable, and free delivery straight to your doorstep with no hidden charges.</p>
        </div>

        {/* Feature 3 */}
        <div className="feature-card">
          <div className="icon">📞</div>
          <h3>24/7 Customer Support</h3>
          <p>Our dedicated support team is always available to help you with your queries, anytime.</p>
        </div>

        {/* Feature 4 */}
        <div className="feature-card">
          <div className="icon">🔄</div>
          <h3>Hassle-Free Returns</h3>
          <p>If you're not satisfied, easily return or exchange your product with no complications.</p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
