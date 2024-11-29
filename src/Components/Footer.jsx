import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark border-top border-secondary py-5">
      <div className="container text-center">
        <div className="row">
          <div className="col-12 col-md-4 mb-4">
            <h3 className="h5 mb-3">Company</h3>
            <ul className="list-unstyled">
              <li><a href="/about" className="text-secondary text-decoration-none">About Us</a></li>
              <li><a href="/jobs" className="text-secondary text-decoration-none">Jobs</a></li>
              <li><a href="/press" className="text-secondary text-decoration-none">Press</a></li>
              <li><a href="/blog" className="text-secondary text-decoration-none">Blog</a></li>
            </ul>
          </div>
          <div className="col-12 col-md-4 mb-4">
            <h3 className="h5 mb-3">Support</h3>
            <ul className="list-unstyled">
              <li><a href="/help" className="text-secondary text-decoration-none">Help Center</a></li>
              <li><a href="/contact" className="text-secondary text-decoration-none">Contact Us</a></li>
              <li><a href="/devices" className="text-secondary text-decoration-none">Supported Devices</a></li>
              <li><a href="/accessibility" className="text-secondary text-decoration-none">Accessibility</a></li>
            </ul>
          </div>
          <div className="col-12 col-md-4 mb-4">
            <h3 className="h5 mb-3">Legal</h3>
            <ul className="list-unstyled">
              <li><a href="/terms" className="text-secondary text-decoration-none">Terms of Use</a></li>
              <li><a href="/privacy" className="text-secondary text-decoration-none">Privacy Policy</a></li>
              <li><a href="/cookies" className="text-secondary text-decoration-none">Cookie Preferences</a></li>
              <li><a href="/corporate" className="text-secondary text-decoration-none">Corporate Information</a></li>
            </ul>
          </div>
        </div>
        <div className="border-top border-secondary pt-4 mt-4">
          <p className="text-secondary text-center small">© 2024 Netflix Clone. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
