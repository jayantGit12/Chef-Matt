import React from "react";
import "../../components/Subscibe/subscribe.css"

const Subscribe = () => {
    return (
        <>
            <section className="subscribe_section ml-auto mt-11">
                <div className="flex items-center h-[65vh] pl-12">
                    <div>
                        <h1 className="relative text-4xl font-normal text-[#ffffff] leading-[60px] max-w-[520px]">SIGN UP SPECIAL PROMOTIONS</h1>
                        <p className="text-lg text-[#ffffff] font-normal py-7 tracking-wide">Get exclusive deals you won’t find anywhere else straight to your inbox!</p>
                        <div className="flex max-w-full">
                            <input type="email" name="email" id="" placeholder="Enter email address" className="placeholder-white text-sm pl-2 w-full max-w-[500px] text-[#ffffff] leading-10 bg-[#ffffff17] border-2 border-fuchsia-50 outline-none mt-3" />
                            <button href="" className="w-[188px] text-[#ffffff] leading-10 bg-[#D29A5A] border-2 border-[#ffffff17] inline-block text-center text-sm font-normal ml-4 mt-3">Subscribe</button>
                        </div>
                    </div>
                    </div>
            </section>
        </>
    )
}

export default Subscribe;