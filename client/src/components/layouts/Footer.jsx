import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import {
  FaPhoneAlt,
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

function Footer() {
  return (
    <footer className="mt-10 w-full text-light bg-dark">
      <div className="w-full flex flex-col items-start justify-center">
        <div className="w-full flex flex-col lg:flex-row items-start justify-between">
          {/* GET IN TOUCH */}
          <div className="px-4 pt-10 pb-6 space-y-2">
            <h3 className="text-xl font-semibold">GET IN TOUCH</h3>
            <p className="py-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
              earum?
            </p>
            <p className="flex flex-row items-center justify-start gap-2">
              <FaLocationDot className="text-yellow" />
              123 Street, New York, USA
            </p>
            <p className="flex flex-row items-center justify-start gap-2">
              <IoMdMail className="text-yellow" />
              info@example.com
            </p>
            <p className="flex flex-row items-center justify-start gap-2">
              <FaPhoneAlt className="text-yellow" />
              +012 345 67890
            </p>
          </div>
          <div className="w-full px-4 flex flex-col md:flex-row items-start justify-center">
            {/* QUICK SHOP */}
            <div className="w-full pt-10 pb-6 space-y-2 whitespace-nowrap">
              <h3 className="text-xl font-semibold">QUICK SHOP</h3>
              <div className="pt-4 flex flex-col space-y-2">
                <a href="/" className="group">
                  <IoIosArrowForward className="inline-block pr-1 text-2xl" />
                  <span className="group-hover:underline hover:opacity-60">
                    Home
                  </span>
                </a>
                <a href="/" className="group">
                  <IoIosArrowForward className="inline-block pr-1 text-2xl" />
                  <span className="group-hover:underline hover:opacity-60">
                    Our Shop
                  </span>
                </a>
                <a href="/" className="group">
                  <IoIosArrowForward className="inline-block pr-1 text-2xl" />
                  <span className="group-hover:underline hover:opacity-60">
                    Shop Detail
                  </span>
                </a>
                <a href="/" className="group">
                  <IoIosArrowForward className="inline-block pr-1 text-2xl" />
                  <span className="group-hover:underline hover:opacity-60">
                    Shopping Cart
                  </span>
                </a>
                <a href="/" className="group">
                  <IoIosArrowForward className="inline-block pr-1 text-2xl" />
                  <span className="group-hover:underline hover:opacity-60">
                    Checkout
                  </span>
                </a>
                <a href="/" className="group">
                  <IoIosArrowForward className="inline-block pr-1 text-2xl" />
                  <span className="group-hover:underline hover:opacity-60">
                    Contact Us
                  </span>
                </a>
              </div>
            </div>
            {/* MY ACCOUNT */}
            <div className="w-full pt-10 pb-6 space-y-2 whitespace-nowrap">
              <h3 className="text-xl font-semibold">MY ACCOUNT</h3>
              <div className="pt-4 flex flex-col space-y-2">
                <a href="/" className="group">
                  <IoIosArrowForward className="inline-block pr-1 text-2xl" />
                  <span className="group-hover:underline hover:opacity-60">
                    Home
                  </span>
                </a>
                <a href="/" className="group">
                  <IoIosArrowForward className="inline-block pr-1 text-2xl" />
                  <span className="group-hover:underline hover:opacity-60">
                    Our Shop
                  </span>
                </a>
                <a href="/" className="group">
                  <IoIosArrowForward className="inline-block pr-1 text-2xl" />
                  <span className="group-hover:underline hover:opacity-60">
                    Shop Detail
                  </span>
                </a>
                <a href="/" className="group">
                  <IoIosArrowForward className="inline-block pr-1 text-2xl" />
                  <span className="group-hover:underline hover:opacity-60">
                    Shopping Cart
                  </span>
                </a>
                <a href="/" className="group">
                  <IoIosArrowForward className="inline-block pr-1 text-2xl" />
                  <span className="group-hover:underline hover:opacity-60">
                    Checkout
                  </span>
                </a>
                <a href="/" className="group">
                  <IoIosArrowForward className="inline-block pr-1 text-2xl" />
                  <span className="group-hover:underline hover:opacity-60">
                    Contact Us
                  </span>
                </a>
              </div>
            </div>
            {/* NEWSLETTER */}
            <div className="w-full pt-10 pb-6 space-y-2">
              <h3 className="text-xl font-semibold">NEWSLETTER</h3>
              <p className="py-4">
                Duo stet tempor ipsum sit amet magna ipsum tempor est
              </p>
              <div className="flex flex-row rounded">
                <input
                  type="email"
                  placeholder="Your Email Address"
                  className="px-4 py-2 w-full text-dark"
                />
                <button className="btn-primary">
                  Sign Up
                </button>
              </div>
              {/* FOLLOW US */}
              <div>
                <h3 className="py-4 text-xl font-semibold">FOLLOW US</h3>
                <div className="flex flex-row items-start gap-2">
                  <a href="/" className="p-2 rounded text-dark bg-yellow hover:bg-yellowDark">
                    <FaTwitter />
                  </a>
                  <a href="/" className="p-2 rounded text-dark bg-yellow hover:bg-yellowDark">
                    <FaFacebookF />
                  </a>
                  <a href="/" className="p-2 rounded text-dark bg-yellow hover:bg-yellowDark">
                    <FaLinkedinIn />
                  </a>
                  <a href="/" className="p-2 rounded text-dark bg-yellow hover:bg-yellowDark">
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="w-full bg-light opacity-40" />
        <div className="px-4 pt-4 pb-6 w-full flex flex-col md:flex-row items-center justify-between gap-4">
          {/* COPYRIGHT TEXT */}
          <p className="text-lg">
            ©
            <a href="/" className="pl-2 text-yellow hover:opacity-70 hover:underline">
              PN INFOSYS
            </a>
            .
            <a href="/" className="pl-2 text-yellow hover:opacity-70 hover:underline">
              PNINFOSYS
            </a>
          </p>
          {/* PAYMENTS */}
          <div>
            <img src="/payments.png" alt="Payments" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
