import "../Navbar/navbar.css";
import Logo from "../../assets/images/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faBagShopping, faHeart } from '@fortawesome/free-solid-svg-icons'

const Sidenav = ({ closeNav, isOpen, setIsOpen }) => {


    return (
        <div>
            <div
                className="sidenav h-full w-0 fixed z-50 top-0 left-0 bg-[#130f0ce8] overflow-hidden duration-500"
                style={{ width: isOpen ? '345px' : '0' }}
            >
                {/* <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>
                    &times;
                </a> */}
                <FontAwesomeIcon icon={faXmark} onClick={closeNav} className="relative top-8 left-[60px] text-3xl text-[#fff] cursor-pointer" />
                <img src={Logo} alt="logo" className="max-[330px]" />
                <a href="#" className="pl-8 no-underline text-[21px] text-[#fff] block duration-300 font-noraml leading-[56px] hover:text-[#D29A5A]">HOME</a>
                <a href="#" className="pl-8 no-underline text-[21px] text-[#fff] block duration-300 font-noraml leading-[56px] hover:text-[#D29A5A]">PRODUCTS</a>
                <a href="#" className="pl-8 no-underline text-[21px] text-[#fff] block duration-300 font-noraml leading-[56px] hover:text-[#D29A5A]">MEET CHEF MATT</a>
                <a href="#" className="pl-8 no-underline text-[21px] text-[#fff] block duration-300 font-noraml leading-[56px] hover:text-[#D29A5A]">FAQ</a>
                <a href="#" className="pl-8 no-underline text-[21px] text-[#fff] block duration-300 font-noraml leading-[56px] hover:text-[#D29A5A]">CONNECT WITH US</a>
                <div className="pt-12">
                    <p className="text-[#ffffff] divide-y divide-slate-700 font-normal pl-8">TEXT SUPPORT 24/7  <span className="text-[#D29A5A] ms-2 border-b border-[#d29a5a] border-solid">070-7782-9137</span></p>
                    <hr class="my-4 border-t-2 border-[#fff] bg-white/100" />
                    <div className="flex justify-around">
                        <span className="text-[#fff] text-[22px]"><FontAwesomeIcon icon={faBagShopping} className="text-[29px] text-[#fff] pr-3" />CART</span><span className="text-[#fff] text-[22px]"><FontAwesomeIcon icon={faHeart} className="text-[29px] text-[#fff] pr-3" />WISHLIST</span>
                    </div>
                </div>
            </div>
            {/* <button onClick={openNav} className='text-white'>open</button> */}
        </div>
    );
};

export default Sidenav;
