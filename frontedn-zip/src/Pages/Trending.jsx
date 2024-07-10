import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { getOrders } from '../Redux/Admin/Orders/Action';
import { API_BASE_URL } from '../config/api';
import HomeProductSection1 from '../customer/Components/Home/HomeProductSection1';
import HomeProductSection2 from '../customer/Components/Home/HomeProductSection2';

// Men
import shirt from './sectionImg/shirtMenInnit.jpg';
import men_jeans from './sectionImg/jeansmen.jpg';
import sweater from './sectionImg/sweater.jpg';
import jacket from './sectionImg/jacket.jpg';

// Women
import top from './sectionImg/tops.jpg';
import women_jacket from './sectionImg/Wjacket.jpg';
import women_jeans from './sectionImg/Wjeans.jpg';
import t_shirt from './sectionImg/Wtshirt.jpg';
import women_dress from './sectionImg/dresswomen.jpg';

// Acc
import backpack from './sectionImg/backpack.jpg';
import belt from './sectionImg/belt.jpg';
import sunglasses from './sectionImg/sunglassesImg.jpg';
import wallets from './sectionImg/wallets.jpg';
import watch from './sectionImg/watches.jpg';

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { useNavigate } from "react-router-dom";

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

const ImgBanner = [];

const handleDragStart = (e) => e.preventDefault();

const HomeCarousel1 = () => {
  const navigate = useNavigate();
  const items = ImgBanner.map((item) => (
    <img
      className="cursor-pointer"
      onClick={() => navigate(item.path)}
      src={item.image}
      alt=""
      onDragStart={handleDragStart}
      role="presentation"
    />
  ));
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

const ageGroups = [
  { name: 'teen', range: [13, 19] },
  { name: 'twenties', range: [20, 29] },
  { name: 'thirties', range: [30, 39] },
];

const getUserAgeGroup = (user) => {
  for (const group of ageGroups) {
    const [min, max] = group.range;
    if (user.age >= min && user.age <= max) {
      return group.name;
    }
  }
  return 'out of range';
};

const getSeason = (date) => {
  const month = new Date(date).getMonth() + 1;
  if (month >= 3 && month <= 5) {
    return 'spring';
  } else if (month >= 6 && month <= 8) {
    return 'summer';
  } else if (month >= 9 && month <= 11) {
    return 'fall';
  } else {
    return 'winter';
  }
};

const Homepage = () => {
  const [uniqueProductIds, setUniqueProductIds] = useState([]);
  const [top5Products, setTop5Products] = useState([]);
  const [randomProductsByCategory, setRandomProductsByCategory] = useState([]);
  const [bestSelling, setBestSelling] = useState([]);
  const [seasonalProducts, setSeasonalProducts] = useState({
    spring: [],
    summer: [],
    fall: [],
    winter: [],
  });
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");

  useEffect(() => {
    if (jwt) {
      dispatch(getOrders({ jwt }));
    }
  }, [jwt, dispatch]);

  useEffect(() => {
    const fetchOrdersAndUsers = async () => {
      try {
        const headers = { Authorization: `Bearer ${jwt}` };

        const [ordersResponse, userResponse, usersResponse] = await Promise.all([
          axios.get(`${API_BASE_URL}/api/admin/orders`, { headers, params: { populate: 'user,orderItems' } }),
          axios.get(`${API_BASE_URL}/api/users/profile`, { headers }),
          axios.get(`${API_BASE_URL}/api/users`, { headers }),
        ]);

        const orders = ordersResponse.data;
        const currentUser = userResponse.data;
        const users = usersResponse.data;

        const currentUserAgeGroup = getUserAgeGroup(currentUser);
        const seasonalProductCounts = {
          spring: {},
          summer: {},
          fall: {},
          winter: {},
        };

        orders.forEach(order => {
          const orderUser = users.find(user => user._id === order.user);
          if (orderUser && getUserAgeGroup(orderUser) === currentUserAgeGroup && orderUser.gender === currentUser.gender) {
            const season = getSeason(order.orderDate);
            order.orderItems.forEach(item => {
              const productId = item.product._id;
              if (seasonalProductCounts[season][productId]) {
                seasonalProductCounts[season][productId] += 1;
              } else {
                seasonalProductCounts[season][productId] = 1;
              }
            });
          }
        });

        const uniqueProductIds = [];
        orders.forEach(order => {
          const orderUser = users.find(user => user._id === order.user);
          if (orderUser && getUserAgeGroup(orderUser) === currentUserAgeGroup && orderUser.gender === currentUser.gender) {
            order.orderItems.forEach(item => {
              const productId = item.product._id;
              const existingProduct = uniqueProductIds.find(product => product._id === productId);
              if (existingProduct) {
                existingProduct.count += 1;
              } else {
                uniqueProductIds.push({ _id: productId, count: 1 });
              }
            });
          }
        });

        uniqueProductIds.sort((a, b) => b.count - a.count);
        setUniqueProductIds(uniqueProductIds); // Update uniqueProductIds state
        setTop5Products(uniqueProductIds.slice(0, 5));

        const productCats = await Promise.all(
          uniqueProductIds.slice(0, 5).map(async product => {
            try {
              const response = await axios.get(`${API_BASE_URL}/api/products/id/${product._id}`);
              return response.data.category.name;
            } catch (error) {
              console.error(`Error fetching category for product ${product._id}:`, error);
              return null;
            }
          })
        );

        async function fetchBestSellingProducts() {
          const bestSellingProducts = [];
          for (let i = 0; i < uniqueProductIds.length; i++) {
            const prod = uniqueProductIds[i]._id;
            try {
              const response = await axios.get(`${API_BASE_URL}/api/products/id/${prod}`);
              bestSellingProducts.push(response.data);
            } catch (error) {
              console.error(`Error fetching product with ID ${prod}:`, error);
            }
          }
          setBestSelling(bestSellingProducts.slice(0, 10)); // Set top 10 products
          console.log("=========??????????========", bestSellingProducts.slice(0, 10));
        }

        fetchBestSellingProducts();

        const allRandomProducts = await Promise.all(
          productCats.filter(Boolean).map(async category => {
            try {
              const response = await axios.get(`${API_BASE_URL}/api/products/`, {
                params: { category, _limit: 7, _sort: 'random' },
              });
              const randomProducts = response.data.content.slice(0, 7);
              console.log(`Random products for category ${category}:`, randomProducts);
              return { category, products: randomProducts };
            } catch (error) {
              console.error(`Error fetching random products for category ${category}:`, error);
              return { category, products: [] };
            }
          })
        );

        for(let i = 0; i < productCats.length; i++ ){
          prodImg.forEach(item => {
            if(productCats[i]==item.className){
              ImgBanner.push(item)
            }
          });
        }
        console.log('Image Banner data: ', ImgBanner)
        
        setRandomProductsByCategory(allRandomProducts);

        const seasonalProducts = await Promise.all(Object.entries(seasonalProductCounts).map(async ([season, productCounts]) => {
          const productIds = Object.keys(productCounts);
          const productResponses = await Promise.all(productIds.map(productId => axios.get(`${API_BASE_URL}/api/products/id/${productId}`)));
          const products = productResponses.map((response, index) => ({
            ...response.data,
            count: productCounts[productIds[index]],
          }));
          products.sort((a, b) => b.count - a.count);
          return { season, products: products.slice(0, 7) };
        }));

        const seasonalProductsMap = seasonalProducts.reduce((acc, { season, products }) => {
          acc[season] = products;
          return acc;
        }, {});

        setSeasonalProducts(seasonalProductsMap);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (jwt) {
      fetchOrdersAndUsers();
    }
  }, [jwt]);

  return (
    <div>
      <HomeCarousel1 images={prodImg} />

      <div className="space-y-10 py-20">
        {/* Display current data sections */}
        {/* <HomeProductSection data={top5Products} section="Top 5 Products" /> */}
        <HomeProductSection2 data={bestSelling} section="Best Selling Products" nav/>
        
        <div className="banner">
          <img src="https://images.pexels.com/photos/18946632/pexels-photo-18946632/free-photo-of-sole-of-sports-shoe.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          <h1>Sales</h1>
        </div>
        {randomProductsByCategory.map(({ category, products }) => (
          <HomeProductSection1 key={category} data={products} section={`${category}`} />
        ))}
        
        <div className="banner">
          <img src="https://media.istockphoto.com/id/519089645/photo/colourful-seasonal-leaf.jpg?s=1024x1024&w=is&k=20&c=mPqI1SPIKkSwVcUr3I0-SUnlDR8mINPhMCEt8rJoS68=" alt="" />
          <h1>Sales</h1>
        </div>

        {/* Display seasonal data sections */}
        {Object.entries(seasonalProducts).map(([season, products]) => (
          <HomeProductSection2 key={season} data={products} section={`${season.charAt(0).toUpperCase() + season.slice(1)} Products`} />
        ))}
        
      </div>
    </div>
  );
};

export default Homepage;
