import React from "react";
import "../../components/ImageGrid/imageGrid.css";
import Grid1 from "../../assets/images/ImageGrid/grid1.jpg";
import Grid2 from "../../assets/images/ImageGrid/grid2.png";
import Grid3 from "../../assets/images/ImageGrid/grid3.jpg";
import Grid4 from "../../assets/images/ImageGrid/grid4.jpg";

const ImageGrid = () => {
    return (
        <>
            <section className="ImageGrid_section mt-20">
                <div className="container">
                    <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
                        <div className="max-w-[100%] h-[250px]">
                            <img src={Grid1} alt="Grid_1" className="h-[250px] w-[100%] object-fit-cover"/>
                        </div>
                        <div className="max-w-[100%] h-[250px]">
                            <img src={Grid2} alt="Grid_1" className="h-[250px] w-[100%] object-fit-cover" />
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
                        <div className="max-w-[100%] h-[250px]">
                            <img src={Grid3} alt="Grid_1" className="h-[250px] w-[100%] object-fit-cover" />
                        </div>
                        <div className="max-w-[100%] h-[250px]">
                            <img src={Grid4} alt="Grid_1" className="h-[250px] w-[100%] object-fit-cover" />
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default ImageGrid;