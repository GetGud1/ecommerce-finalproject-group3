import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { getOrders } from '../Redux/Admin/Orders/Action';
import { API_BASE_URL } from '../config/api';
import HomeCarousel from '../customer/Components/Carousel/HomeCarousel';
import { homeCarouselData } from '../customer/Components/Carousel/HomeCaroselData';
import HomeProductSection from '../customer/Components/Home/HomeProductSection';

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

const Homepage = () => {
  const [uniqueProductIds, setUniqueProductIds] = useState([]);
  const [top5Products, setTop5Products] = useState([]);
  const [randomProductsByCategory, setRandomProductsByCategory] = useState([]);
  const [bestSelling, setBestSelling] = useState([]);
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

        setRandomProductsByCategory(allRandomProducts);

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
      <HomeCarousel images={homeCarouselData} />

      <div className="space-y-10 py-20">
        <HomeProductSection data={bestSelling} section="Top 10 Products" />
        <div className="banner">
          <img src="https://images.pexels.com/photos/18946632/pexels-photo-18946632/free-photo-of-sole-of-sports-shoe.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          <h1>Sales</h1>
        </div>
        {randomProductsByCategory.map(({ category, products }, index) => (
          <HomeProductSection key={index} data={products} section={category} />
        ))}
      </div>

      <h2>Unique Products:</h2>
      <ul>
        {uniqueProductIds.map((product, index) => (
          <li key={index}>{product._id} - Count: {product.count}</li>
        ))}
      </ul>

      <h2>Top 5 Products:</h2>
      <ul>
        {top5Products.map((product, index) => (
          <li key={index}>{product._id} - Count: {product.count}</li>
        ))}
      </ul>

      <h2>Random Products by Category:</h2>
      {randomProductsByCategory.map(({ category, products }, index) => (
        <div key={index}>
          <h3>Category: {category}</h3>
          <ul>
            {products.map((product, index) => (
              <li key={index}>{product.name}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Homepage;
