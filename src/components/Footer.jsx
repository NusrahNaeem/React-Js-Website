// Footer.jsx
const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container container">
        
        {/* About */}
        <div className="footer-col">
          <h3>BrandName</h3>
          <p>
            Providing high-quality shoes with comfort, style, and trust since 2025.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Shop</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-col">
          <h4>Contact Info</h4>
          <p><strong>Address:</strong> 123 Main Street, City, Country</p>
          <p><strong>Phone:</strong> +1 (234) 567-890</p>
          <p><strong>Email:</strong> support@brandname.com</p>
          <p><strong>Hours:</strong> Mon - Sat: 9 AM - 8 PM</p>
        </div>

        {/* Social */}
<div className="footer-col">
  <h4>Follow Us</h4>
  <div className="social-icons">
    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
      <i className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.6 0 0 .6 0 1.325v21.351C0 23.4.6 24 1.325 24h11.49v-9.294H9.847V11.41h2.968V8.691c0-2.937 1.794-4.54 4.415-4.54 1.255 0 2.336.093 2.648.135v3.07h-1.82c-1.428 0-1.704.678-1.704 1.67v2.187h3.406l-.445 3.296h-2.961V24h5.803C23.4 24 24 23.4 24 22.676V1.325C24 .6 23.4 0 22.675 0z"/></svg></i>
    </a>

    {/* <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
      <i className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.2c3.18 0 3.584.012 4.849.07 1.17.055 1.96.24 2.41.41a4.92 4.92 0 011.79 1.17 4.92 4.92 0 011.17 1.79c.17.45.355 1.24.41 2.41.058 1.265.07 1.669.07 4.849s-.012 3.584-.07 4.849c-.055 1.17-.24 1.96-.41 2.41a4.92 4.92 0 01-1.17 1.79 4.92 4.92 0 01-1.79 1.17c-.45.17-1.24.355-2.41.41-1.265.058-1.669.07-4.849.07s-3.584-.012-4.849-.07c-1.17-.055-1.96-.24-2.41-.41a4.92 4.92 0 01-1.79-1.17 4.92 4.92 0 01-1.17-1.79c-.17-.45-.355-1.24-.41-2.41C2.212 15.784 2.2 15.38 2.2 12s.012-3.584.07-4.849c.055-1.17.24-1.96.41-2.41a4.92 4.92 0 011.17-1.79 4.92 4.92 0 011.79-1.17c.45-.17 1.24-.355 2.41-.41C8.416 2.212 8.82 2.2 12 2.2m0-2.2C8.735 0 8.332.013 7.052.072 5.771.13 4.71.325 3.84.66a7.122 7.122 0 00-2.61 1.69A7.122 7.122 0 00-.46 4.96C-.795 5.83-.99 6.891-1.048 8.172-.107 9.453-.12 9.855-.12 12s.013 2.547.072 3.828c.058 1.281.253 2.342.588 3.212a7.122 7.122 0 001.69 2.61 7.122 7.122 0 002.61 1.69c.87.335 1.931.53 3.212.588C8.332 23.987 8.735 24 12 24s3.668-.013 4.948-.072c1.281-.058 2.342-.253 3.212-.588a7.122 7.122 0 002.61-1.69 7.122 7.122 0 001.69-2.61c.335-.87.53-1.931.588-3.212C23.987 15.668 24 15.265 24 12s-.013-2.547-.072-3.828c-.058-1.281-.253-2.342-.588-3.212a7.122 7.122 0 00-1.69-2.61 7.122 7.122 0 00-2.61-1.69c-.87-.335-1.931-.53-3.212-.588C15.668.013 15.265 0 12 0z"/></svg></i>
    </a> */}

    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
      <i className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M23.954 4.569c-.885.39-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.564-2.004.974-3.127 1.195-.897-.955-2.173-1.55-3.591-1.55-2.717 0-4.924 2.207-4.924 4.924 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.733-.666 1.587-.666 2.497 0 1.722.875 3.24 2.207 4.125-.807-.026-1.566-.247-2.229-.616v.061c0 2.404 1.708 4.406 3.977 4.86-.416.111-.855.171-1.309.171-.321 0-.633-.031-.937-.089.633 1.953 2.466 3.376 4.633 3.418-1.7 1.333-3.847 2.127-6.179 2.127-.402 0-.799-.024-1.19-.07 2.206 1.416 4.827 2.24 7.643 2.24 9.161 0 14.307-7.721 14.307-14.426 0-.219-.005-.438-.015-.656.983-.72 1.834-1.6 2.506-2.614z"/></svg></i>
    </a>
  </div>
</div>

      </div>

      <div className="footer-bottom">
        <p>© 2025 BrandName. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
