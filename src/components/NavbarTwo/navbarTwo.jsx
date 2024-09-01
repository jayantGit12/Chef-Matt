import React from "react";
import Logo from "../../assets/images/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import "../NavbarTwo/navbarTwo.css"

const NavbarTwo = ({ openNav, isOpen, setIsOpen }) => {
    return (
        <>
            <div>
                <div
                    className="border-r-8 border-[#D29A5A] h-full w-0 fixed z-50 top-0 left-0 bg-[#130f0ccf] overflow-x-hidden duration-500"
                    style={{ width: isOpen ? '0' : '160px' }}
                >
                    <FontAwesomeIcon icon={faBars} onClick={openNav} className="relative text-4xl left-[60px] text-[#ffffff] cursor-pointer pt-8" />
                    <img src={Logo} alt="logo" style={{ transform: 'rotate(-0.25turn)' }} className="max-w-[447px] relative right-36 top-56" />
                </div>

            </div>
        </>
    )
}

export default NavbarTwo;