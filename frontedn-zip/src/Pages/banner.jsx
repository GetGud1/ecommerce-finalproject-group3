import { width } from "@mui/system";
import React from "react";

const backgroundStyle ={
    backgroundImage: 'https://res.cloudinary.com/ddkso1wxi/image/upload/v1675919455/Logo/Copy_of_Zosh_Academy_nblljp.png"',
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width:"100%",
};

const banner1 = () =>{
    return (
        <>
            <div style={backgroundStyle} className="py-14">
                <div className="container">
                    <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-4">
                        <div className="space-y-6 max-w-xl mx-auto">
                            <h1 className="text-2xl text-center sm:text-left sm:text-4xl font-semibold pl-3 text-white/90">
                                Active offers 
                            </h1>
                            <div className="flex flex-wrap justify-center sm:justify-start items-center">
                                <a href="#">
                                    <h1>Sales</h1>
                                </a>
                            </div>
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default banner1;

