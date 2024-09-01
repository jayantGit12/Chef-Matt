import React from "react";
import "../../components/Footer/footer.css"
import FooterImg from "../../assets/images/logo.png";

const Footer = () => {
    return (
        <>
            <footer className="Footer ml-auto">
                <div>
                    <img src={FooterImg} alt="Footer Logo" className="w-[447px] m-auto h-60 object-cover"/>
                </div>
            </footer>
        </>
    )
}

export default Footer;