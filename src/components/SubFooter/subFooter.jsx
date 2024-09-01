import React from "react";
import "../SubFooter/subFooter.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faHeadphonesSimple, faCircleCheck } from '@fortawesome/free-solid-svg-icons'

const SubFooter = () => {
    return (
        <>
            <section className="SubFooter_section ml-auto py-20">
                <div>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                        <div className="flex items-start justify-center gap-5">
                            <FontAwesomeIcon icon={faCartShopping} className="text-4xl text-[#D29A5A]" />
                            <div>
                                <h1 className="text-2xl	font-normal text-[#D29A5A] mb-3">FREE SHIPPING WORLDWIDE</h1>
                                <p className="text-lg text-[#ffffff]">Guaranteed Delivery</p>
                            </div>
                        </div>
                        <div className="flex items-start justify-center gap-5">
                            <FontAwesomeIcon icon={faHeadphonesSimple} className="text-4xl text-[#D29A5A]" />
                            <div>
                                <h1 className="text-2xl	font-normal text-[#D29A5A] mb-3">24/7 CUSTOMER SERVICE</h1>
                                <p className="text-lg text-[#ffffff]">Text Us 24/7 at 070-7782-9137</p>
                            </div>
                        </div>
                        <div className="flex items-start justify-center gap-5">
                            <FontAwesomeIcon icon={faCircleCheck} className="text-4xl text-[#D29A5A]" />
                            <div>
                                <h1 className="text-2xl	font-normal text-[#D29A5A] mb-3">QUALITY GUARANTEE!</h1>
                                <p className="text-lg text-[#ffffff]">Send Within 30 Days</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};

export default SubFooter;