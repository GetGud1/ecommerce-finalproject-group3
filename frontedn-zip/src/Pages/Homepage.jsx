import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { API_BASE_URL } from '../config/api';
import HomeProductSection from '../customer/Components/Home/HomeProductSection';
import HomeProductSection1 from '../customer/Components/Home/HomeProductSection1';
import { homeCarouselData } from "../customer/Components/Carousel/HomeCaroselData";

// Import default data
import { sareePage1 } from "../Data/Saree/page1";
import { dressPage1 } from "../Data/dress/page1";
import { gounsPage1 } from "../Data/Gouns/gouns";
import { kurtaPage1 } from "../Data/Kurta/kurta";
import { mensShoesPage1 } from "../Data/shoes";
import { mens_kurta } from "../Data/Men/men_kurta";

// Import product images
import shirt from './sectionImg/shirtMenInnit.jpg';
import men_jeans from './sectionImg/jeansmen.jpg';
import sweater from './sectionImg/sweater.jpg';
import jacket from './sectionImg/jacket.jpg';
import top from './sectionImg/tops.jpg';
import women_jacket from './sectionImg/Wjacket.jpg';
import women_jeans from './sectionImg/Wjeans.jpg';
import t_shirt from './sectionImg/Wtshirt.jpg';
import women_dress from './sectionImg/dresswomen.jpg';
import backpack from './sectionImg/backpack.jpg';
import belt from './sectionImg/belt.jpg';
import sunglasses from './sectionImg/sunglassesImg.jpg';
import wallets from './sectionImg/wallets.jpg';
import watch from './sectionImg/watches.jpg';

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { useNavigate } from "react-router-dom";
import "./banner.css";

const prodImg = [
  { image: men_jeans, path: "/men/mens%20clothing/men_jeans", className: "men_jeans" },
  { image: shirt, path: "/shirt", className: "shirt" },
  { image: sweater, path: "/sweater", className: "sweate" },
  { image: jacket, path: "/jacket", className: "jacket" },
  { image: top, path: "/top", className: "top" },
  { image: women_jacket, path: "/women_jacket", className: "women_jacket" },
  { image: women_jeans, path: "/women_jeans", className: "women_jeans" },
  { image: t_shirt, path: "/t-shirt", className: "t-shirt" },
  { image: women_dress, path: "/women_dress", className: "women_dress" },
  { image: backpack, path: "/bag", className: "bag" },
  { image: belt, path: "/belt", className: "belt" },
  { image: sunglasses, path: "/sunglasses", className: "sunglasses" },
  { image: wallets, path: "/wallet", className: "wallets" },
  { image: watch, path: "/watch", className: "watch" },
];

const handleDragStart = (e) => e.preventDefault();

const HomeCarousel1 = ({ images }) => {
  const navigate = useNavigate();
  const items = useMemo(() => (
    images.map((item) => (
      <img
        key={item.className}
        className="cursor-pointer"
        onClick={() => navigate(item.path)}
        src={item.image}
        alt=""
        onDragStart={handleDragStart}
        role="presentation"
      />
    ))
  ), [navigate, images]);

  return (
    <AliceCarousel
      mouseTracking
      items={items}
      autoPlay
      infinite
      autoPlayInterval={2000}
      disableButtonsControls
      disableDotsControls
    />
  );
};

const Homepage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [targetedContent, setTargetedContent] = useState([]);
  const [defaultContent, setDefaultContent] = useState({
    mensKurta: mens_kurta,
    mensShoes: mensShoesPage1,
    dresses: dressPage1,
    gouns: gounsPage1,
    kurta: kurtaPage1,
  });
  const [ImgBanner, setImgBanner] = useState([]);

  const jwt = localStorage.getItem("jwt");

  useEffect(() => {
    if (jwt) {
      setIsLoggedIn(true);
      fetchUserData();
    }
  }, [jwt]);

  const fetchUserData = async () => {
    try {
      const headers = { Authorization: `Bearer ${jwt}` };

      const [ordersResponse, userResponse] = await Promise.all([
        axios.get(`${API_BASE_URL}/api/admin/orders`, { headers, params: { populate: 'user,orderItems' } }),
        axios.get(`${API_BASE_URL}/api/users/profile`, { headers }),
      ]);

      const orders = ordersResponse.data;
      const currentUser = userResponse.data;

      const currentUserOrders = orders.filter(order => order.user === currentUser._id);

      const prodArr = currentUserOrders.flatMap(order =>
        order.orderItems.map(item => item.product._id)
      );

      const countMap = prodArr.reduce((acc, id) => {
        acc[id] = (acc[id] || 0) + 1;
        return acc;
      }, {});

      const top5Ids = Object.entries(countMap)
        .sort(([, countA], [, countB]) => countB - countA)
        .slice(0, 5)
        .map(([id]) => id);

      const prodCat = await Promise.all(top5Ids.map(async id => {
        const prodResponse = await axios.get(`${API_BASE_URL}/api/products/id/${id}`);
        return prodResponse.data.category.name;
      }));

      const categoryProductMap = await Promise.all(prodCat.map(async category => {
        const response = await axios.get(`${API_BASE_URL}/api/products/`, {
          params: { category, _limit: 100 },
        });
        return { category, products: response.data.content };
      }));

      const finalProductList = categoryProductMap.map(({ category, products }) => ({
        category,
        products: getRandomItems(products, 7)
      }));

      const filteredProdImg = prodImg.filter(item => prodCat.includes(item.className));
      setTargetedContent(finalProductList);
      setImgBanner(filteredProdImg);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const getRandomItems = (arr, num) => {
    if (!Array.isArray(arr)) return [];
    const shuffled = arr.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  };

  return (
    <div className="">
      
      {isLoggedIn && ImgBanner.length > 0 && (
        <>
          <HomeCarousel1 images={ImgBanner} />
        </>
      )}
      {!isLoggedIn && (
        <>
          <HomeCarousel1 images={homeCarouselData} />
        </>
      )}
      <div className="space-y-10 py-20">
        {isLoggedIn && targetedContent.length > 0 ? (
          <>
            {targetedContent.map((section, index) => (
              <HomeProductSection1 key={index} data={section.products} section={section.category} navigate={section.category} />
            ))}

            <div className="banner">
              <img src="https://images.pexels.com/photos/18946632/pexels-photo-18946632/free-photo-of-sole-of-sports-shoe.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <h1>Sales</h1>
            </div>
          </>
        ) : (
          <>
            <HomeProductSection data={defaultContent.mensKurta} section={"Men's Kurta"} />
            <div className="banner">
              <img src="https://images.pexels.com/photos/18946632/pexels-photo-18946632/free-photo-of-sole-of-sports-shoe.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <h1>Sales</h1>
            </div>
            <HomeProductSection data={defaultContent.mensShoes} section={"Men's Shoes"} />
            <HomeProductSection data={defaultContent.dresses} section={"Dresses"} />
            <div className="banner">
              <img src="https://images.pexels.com/photos/833052/pexels-photo-833052.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <h1>Sales</h1>
            </div>
            <HomeProductSection data={defaultContent.gouns} section={"Women's Gowns"} />
            <HomeProductSection data={defaultContent.kurta} section={"Men's Kurta"} />
          </>
        )}
      </div>
    </div>
  );
};

export default Homepage;
