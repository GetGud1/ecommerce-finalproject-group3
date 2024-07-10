import AliceCarousel from "react-alice-carousel";
import HomeProductCard from "./HomeProductCard";
import "./HomeProductSection.css";
import { Button } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useState } from "react";

const HomeProductSection = ({ section, data, navigate }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slidePrev = () => setActiveIndex(activeIndex - 1);
  const slideNext = () => setActiveIndex(activeIndex + 1);
  const syncActiveIndex = ({ item }) => setActiveIndex(item);

  const responsive = {
    0: {
      items: 2,
      itemsFit: "contain",
    },
    568: {
      items: 3,
      itemsFit: "contain",
    },
    1024: {
      items: 5.5,
      itemsFit: "contain",
    },
  };

    const items = data?.slice(0, 10).map((item) => (
    
      <div className="">
        {" "}
        
        <HomeProductCard product={item} nav={"/"+item.category.name} />
      </div>
  
    ));
    
        // console.log('================================================', item.category.name)


  // for(let i = 0; i < data.length; i++){
  //   const iteme = data[i]
  // console.log("{}{}{}{}[][][][]==========[][][][]{}{}{}{}", iteme.category.name)
  // }

  // const slideInFromRight = (t) => {
  //   return `translateX(${100 - t * 100}%)`;
  // };

  return (
    <div className="relative px-4 sm:px-6 lg:px-8 ">
      <h2 className="text-2xl font-bold text-gray-900 py-5">{section}</h2>
      <div className="relative ">
        <AliceCarousel
          disableButtonsControls
          disableDotsControls
          mouseTracking
          items={items}
          activeIndex={activeIndex}
          responsive={responsive}
          onSlideChanged={syncActiveIndex}
          animationType="fadeout"
          animationDuration={2000}
        />
        {activeIndex !== items.length - 5 && (
          <Button
            onClick={slideNext}
            variant="contained"
            className="sliderbtn z-50 bg-[]"
            sx={{
              position: "absolute",
              top: "8rem",
              right: "0rem",
              transform: "translateX(50%) rotate(90deg)",
            }}
            color="white"
            aria-label="next"
          >
            <ArrowForwardIosIcon
              className="arrow"
              sx={{ transform: "rotate(-90deg) scale(1.5)" }}
            />
          </Button>
        )}

        {activeIndex !== 0 && (
          <Button
            onClick={slidePrev}
            variant="contained"
            className="sliderbtn z-50 bg-[]"
            color="white"
            sx={{
              position: "absolute",
              top: "8rem",
              left: "0rem",
              transform: "translateX(-50%)  rotate(90deg)",
            }}
            aria-label="next"
          >
            <ArrowForwardIosIcon
              className="arrow"
              sx={{ transform: " rotate(90deg) scale(1.5)" }}
            />
          </Button>
        )}
      </div>
    </div>
  );
};

export default HomeProductSection;
