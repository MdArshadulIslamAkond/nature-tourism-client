import { BsSkype } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { FcIphone } from "react-icons/fc";
import { IoMail } from "react-icons/io5";
import { MdArrowCircleRight } from "react-icons/md";
import { PiPhoneFill, PiPhoneThin } from "react-icons/pi";

const Footer = () => {
  return (
    <div className="mt-8">
      <div className="max-w-7xl sm:mx-auto">
        <div className="md:grid grid-cols-3 gap-x-8 p-4">
          <div>
            <h1 className="text-green-500 text-2xl font-bold">About Us</h1>
            <p className="dark:text-white">
              We are a group of passionate and adventurous tourism
              professionals. As a leading travel agent in Bangladesh, we have
              assembled the best in the business who can tell you all there is
              to know about Bangladesh. We love doing what we do. In many and
              varied ways we love to show all about our beautiful Bangladesh.
            </p>
          </div>
          <div>
            <div className="flex gap-4 items-center">
              <div>
                <MdArrowCircleRight className="text-red-400" />
              </div>
              <p className="dark:text-white">About Bangladesh</p>
            </div>
            <div className="flex gap-4 items-center">
              <div>
                <MdArrowCircleRight className="text-red-400" />
              </div>
              <p className="dark:text-white">History of Bangladesh</p>
            </div>
            <div className="flex gap-4 items-center">
              <div>
                <MdArrowCircleRight className="text-red-400" />
              </div>
              <p className="dark:text-white">Attractions of Bangladesh</p>
            </div>
            <div className="flex gap-4 items-center">
              <div>
                <MdArrowCircleRight className="text-red-400" />
              </div>
              <p className="dark:text-white">People of Bangladesh</p>
            </div>
            <div className="flex gap-4 items-center">
              <div>
                <MdArrowCircleRight className="text-red-400" />
              </div>
              <p className="dark:text-white">Things to do in Dhaka Tour</p>
            </div>
            <div className="flex gap-4 items-center">
              <div>
                <MdArrowCircleRight className="text-red-400" />
              </div>
              <p className="dark:text-white">
                Top archaeological sites in Bangladesh
              </p>
            </div>
            <div className="flex gap-4 items-center">
              <div>
                <MdArrowCircleRight className="text-red-400" />
              </div>
              <p className="dark:text-white">Sundarbans Forest</p>
            </div>
            <div className="flex gap-4 items-center">
              <div>
                <MdArrowCircleRight className="text-red-400" />
              </div>
              <p className="dark:text-white">Live Flight Information</p>
            </div>
            <div className="flex gap-4 items-center">
              <div>
                <MdArrowCircleRight className="text-red-400" />
              </div>
              <p className="dark:text-white">FAQ</p>
            </div>
            <div className="flex gap-4 items-center">
              <div>
                <MdArrowCircleRight className="text-red-400" />
              </div>
              <p className="dark:text-white">Bangladesh Embassy in your Town</p>
            </div>
            <div className="flex gap-4 items-center">
              <div>
                <MdArrowCircleRight className="text-red-400" />
              </div>
              <p className="dark:text-white">Foreign Embassies in Bangladesh</p>
            </div>
            <div className="flex gap-4 items-center">
              <div>
                <MdArrowCircleRight className="text-red-400" />
              </div>
              <p className="dark:text-white">Visa</p>
            </div>
            <div className="flex gap-4 items-center">
              <div>
                <MdArrowCircleRight className="text-red-400" />
              </div>
              <p className="dark:text-white">Do’s & Don’ts</p>
            </div>
            <div className="flex gap-4 items-center">
              <div>
                <MdArrowCircleRight className="text-red-400" />
              </div>
              <p className="dark:text-white">Go Eat Do</p>
            </div>
          </div>
          <div>
            <h1 className="text-green-500 text-2xl font-bold">Contact Us</h1>
            <div className="flex gap-x-8 items-center">
              <div>
                <FaLocationDot className="text-red-400 text-xl" />
              </div>
              <p className="dark:text-white">Flat#2B, House#51/E, Road #7B, Sector#3, Uttara 1230</p>
            </div>
            <div className="flex gap-x-8 items-center">
              <div>
                <PiPhoneFill className="text-xl text-red-400" />
              </div>
              <p className="dark:text-white">+8801920881757</p>
            </div>
            <div className="flex gap-x-8 items-center">
                <div>
                <FcIphone className="text-xl text-red-400" />
                </div>
                <p className="dark:text-white">+8801715186657</p>
            </div>
            <div className="flex gap-x-8 items-center">
                <div>
                <IoMail className="text-xl text-red-400" />
                </div>
                <p className="dark:text-white">	info@toursntripsbd.com</p>
            </div>
            <div className="flex gap-x-8 items-center">
                <div>
                <BsSkype className="text-xl text-red-400"/>
                </div>
                <p className="dark:text-white">live:toursntripsbd</p>
            </div>
            <div className="mt-8">
                <p className="text-1xl dark:text-white">Government Approved Licence No. 01-19269</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
