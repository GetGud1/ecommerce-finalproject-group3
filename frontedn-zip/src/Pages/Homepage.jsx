import React from "react";
import HomeCarousel from "../customer/Components/Carousel/HomeCarousel";
import { homeCarouselData } from "../customer/Components/Carousel/HomeCaroselData";
import HomeProductSection from "../customer/Components/Home/HomeProductSection";
import { sareePage1 } from "../Data/Saree/page1";
import { dressPage1 } from "../Data/dress/page1";
import { gounsPage1 } from "../Data/Gouns/gouns";
import { kurtaPage1 } from "../Data/Kurta/kurta";
import { mensShoesPage1 } from "../Data/shoes";
import { mens_kurta } from "../Data/Men/men_kurta";
import "./banner.css";

const Homepage = () => {

  

  return (
    <div className="">
      <HomeCarousel images={homeCarouselData} />

      <div className="space-y-10 py-20">
      <HomeProductSection data={mens_kurta} section={"Men's shirts"} />
      <div className="banner">
          <img src="https://images.pexels.com/photos/18946632/pexels-photo-18946632/free-photo-of-sole-of-sports-shoe.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          <h1>Sales</h1>
        </div>
        <HomeProductSection data={mensShoesPage1} section={"Dresses"}/>
        <HomeProductSection data={mens_kurta} section={"Dresses"} />
        <div className="banner">
          <img src="https://images.pexels.com/photos/833052/pexels-photo-833052.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          <h1>Sales</h1>
        </div>
        <HomeProductSection data={dressPage1} section={""} />
        <HomeProductSection data={gounsPage1} section={"Women's full dress"} />
        <HomeProductSection data={kurtaPage1} section={"Men's jeans"} />
        {/* <HomeProductSection data={mensPantsPage1} section={"Men's Pants"} /> */}
        
      </div>

      
      
    </div>
  );
};

export default Homepage;
