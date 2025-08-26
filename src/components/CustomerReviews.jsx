// CustomerReviews.jsx
const CustomerReviews = () => {
  return (
    <section className="customer-reviews container">
      <div className="section-header">
        <h2>What Our Customers Say</h2>
        <p>Real feedback from our happy customers who love our shoes and service.</p>
      </div>

      <div className="reviews-grid">
        {/* Review 1 */}
        <div className="review-card">
          <img src="/images/cus4.jpg" alt="Customer 1" />
          <h3>Sarah Johnson</h3>
          <div className="rating">⭐⭐⭐⭐⭐</div>
          <p>“Amazing quality and super comfortable sneakers. Delivery was quick and packaging was premium. Highly recommended!”</p>
        </div>

        {/* Review 2 */}
        <div className="review-card">
          <img src="/images/cus2.jpg" alt="Customer 2" />
          <h3>Michael Smith</h3>
          <div className="rating">⭐⭐⭐⭐☆</div>
          <p>“The running shoes are lightweight and durable. Exactly what I needed for my workouts. Great value for the price.”</p>
        </div>

        {/* Review 3 */}
        <div className="review-card">
          <img src="/images/cus3.jpg" alt="Customer 3" />
          <h3>Emily Davis</h3>
          <div className="rating">⭐⭐⭐⭐⭐</div>
          <p>“Loved the stylish boots I bought. The fit was perfect and customer support was very helpful with size guidance.”</p>
        </div>

        {/* Review 4 */}
        <div className="review-card">
          <img src="/images/cus1.jpg" alt="Customer 4" />
          <h3>James Wilson</h3>
          <div className="rating">⭐⭐⭐☆☆</div>
          <p>“The loafers look good but delivery took a little longer. Overall, still happy with the purchase.”</p>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
