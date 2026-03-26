import React from 'react';

const Footer = () => {
  return (
    <div>
      <footer className="bg-black">
        <div className="w-11/12 mx-auto ">
          <div className="footer sm:footer-horizontal py-10 text-gray-200 ">
            <nav className='w-75'>
              <h6 className=" text-xl">CS — Ticket System</h6>
              <p>A smart ticket management system designed to streamline customer support, track progress efficiently, and resolve issues faster with real-time task updates.</p>
            </nav>
            <nav >
              <h6 className=" text-xl">Company</h6>
              <a className="link link-hover">About us</a>
              <a className="link link-hover">Our Mission</a>
              <a className="link link-hover">Contact Saled</a>
            </nav>
            <nav>
              <h6 className="text-xl">Services</h6>
              <a className="link link-hover">Product & Services</a>
              <a className="link link-hover">Customer Stories</a>
              <a className="link link-hover">Download Apps</a>
            </nav>
            <nav>
              <h6 className="text-xl">Information</h6>
              <a className="link link-hover">Privacy Policy</a>
              <a className="link link-hover">Terms & Conditions</a>
              <a className="link link-hover">Join Us</a>
            </nav>
            <nav>
              <h6 className="text-xl">Social Links</h6>
              <a className="link link-hover">@CS — Ticket System</a>
              <a className="link link-hover">@CS — Ticket System</a>
              <a className="link link-hover">@CS — Ticket System</a>
              <a className="link link-hover">support@cst.com</a>
            </nav>

          </div>
          <div class="my-4 border border-gray-400 "></div>

          <div className='text-center text-gray-100 pb-10'>
            <p>© {new Date().getFullYear()} CS — Ticket System. All rights reserved.</p>
          </div>

        </div>
      </footer>
    </div>
  );
};

export default Footer;