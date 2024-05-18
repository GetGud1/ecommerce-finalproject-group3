import { useState } from "react";
import { Typography, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { useEffect } from "react";
import {
  Grid,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { Category } from '@mui/icons-material'; // Import the Category icon from Material-UI Icons
// import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
// import FaceIcon from '@material-ui/icons/Face';
// import ComputerIcon from '@material-ui/icons/Computer';
// import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
// import SportsBasketballIcon from '@material-ui/icons/SportsBasketball';
// import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
// import DriveEtaIcon from '@material-ui/icons/DriveEta';
// import RoomServiceIcon from '@material-ui/icons/RoomService';
// import HomeWorkIcon from '@material-ui/icons/HomeWork';
// import PetsIcon from '@material-ui/icons/Pets';
// import DeckIcon from '@material-ui/icons/Deck';
// import WorkIcon from '@material-ui/icons/Work';
// import ArrowForwardIcon from '@material-ui/icons/ArrowForward';




import { Fragment } from "react";
import "./CreateProductForm.css";
import { useDispatch } from "react-redux";
import { createProduct } from "../Redux/Customers/Product/Action";

import React from "react";
import ProductCard1 from "../customer/Components/Product/ProductCard/ProductCard1";
import { productdata } from "./data";
import MenuIcon from '@mui/icons-material/Menu';



 

const Marketplace = () => {
  
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5454/api/products?category=other1', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data.content)) {
          setProductData(data.content); // Update the productData state with the fetched data
        } else {
          console.error('Error: Fetched data is not in the expected array format');
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []); // Empty dependency array to run the effect only once on mount

  const fetchNextPage = () => {
    const nextPageSize = productData.length + 10; // Increase the pageSize by 1
    const apiUrl = `http://localhost:5454/api/products?category=other1&pageSize=${nextPageSize}`;
  
    fetch(apiUrl, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data.content)) {
          setProductData(data.content); // Update the productData state with the fetched data
        } else {
          console.error('Error: Fetched data is not in the expected array format');
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };
  
  






  return (

     <div className="">

<Fragment className="createProductContainer ">
<Typography
        variant="h3"
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', marginRight: '5%', fontSize: '1.5rem' }}
        className="py-10 text-center"
      >
        <IconButton onClick={handleSidebarToggle} sx={{ marginRight: '0.5rem' }}>
          <MenuIcon />
        </IconButton>
        Categories
      </Typography>
      <Drawer anchor="right" open={sidebarOpen} onClose={() => setSidebarOpen(false)}>
        {/* Sidebar content goes here */}
        <div style={{ width: '250px' }}>
        <div style={{ width: '250px' }}>
          <List>
            <ListItem button>
              
              <ListItemIcon>
                <Category />
              </ListItemIcon>
              <a href="/marketplace/other/mensfashion">
              <ListItemText primary="Mens Fashion" />
              </a>
            </ListItem>

            <ListItem button>
              <ListItemIcon>
                <Category />
              </ListItemIcon>
              <a href="/marketplace/other/womensfashion">
              <ListItemText primary="Womens Fashion" />
              </a>
            </ListItem>

            <ListItem button>
              <ListItemIcon>
                <Category />
              </ListItemIcon>
              <a href="/marketplace/other/tech">
              <ListItemText primary="Tech" />
              </a>
            </ListItem>

            <ListItem button>
              <ListItemIcon>
                <Category />
              </ListItemIcon>
              <a href="/marketplace/other/smartphone">
              <ListItemText primary="Smartphones" />
              </a>
            </ListItem>

            <ListItem button>
              <ListItemIcon>
                <Category />
              </ListItemIcon>
              <a href="/marketplace/other/games">
              <ListItemText primary="Games" />
              </a>
            </ListItem>

            <ListItem button>
              <ListItemIcon>
                <Category />
              </ListItemIcon>
              <a href="/marketplace/other/sports">
              <ListItemText primary="Sports" />
              </a>
            </ListItem>

            <ListItem button>
              <ListItemIcon>
                <Category />
              </ListItemIcon>
              <a href="/marketplace/other/vehicles">
              <ListItemText primary="Vehicles" />
              </a>
            </ListItem>

            <ListItem button>
              <ListItemIcon>
                <Category />
              </ListItemIcon>
              <a href="/marketplace/other/services">
              <ListItemText primary="Services" />
              </a>
            </ListItem>

            <ListItem button>
              <ListItemIcon>
                <Category />
              </ListItemIcon>
              <a href="/marketplace/other/properties">
              <ListItemText primary="Properties" />
              </a>
            </ListItem>

            <ListItem button>
              <ListItemIcon>
                <Category />
              </ListItemIcon>
              <a href="/marketplace/other/pets">
              <ListItemText primary="Pets" />
              </a>
            </ListItem>

            <ListItem button>
              <ListItemIcon>
                <Category />
              </ListItemIcon>
              <a href="/marketplace/other/furniture">
              <ListItemText primary="Furniture" />
              </a>
            </ListItem>

            <ListItem button>
              <ListItemIcon>
                <Category />
              </ListItemIcon>
              <a href="/marketplace/other/job">
              <ListItemText primary="Jobs" />
              </a>
            </ListItem>

            <ListItem button>
              <ListItemIcon>
                <Category />
              </ListItemIcon>
              <a href="/marketplace/other/other1">
              <ListItemText primary="Other" />
              </a>
            </ListItem>
            {/* Add more ListItems for other categories */}
          </List>
        </div>
        </div>
      </Drawer>
      <form

        className="createProductContainer min-h-screen"
      >
        <Grid container spacing={2}>
          
          <Grid item xs={4} sm={1.5}>
            <a href="/marketplace/other/properties">
            <img src="https://i.ibb.co/wNcNKqD/image-2024-05-15-185925386.png" alt="" />
            </a>
          </Grid>
          <Grid item xs={4} sm={1.5}>
          <a href="/marketplace/other/vehicles">
            <img src="https://i.ibb.co/8MVsV5f/image-2024-05-15-185359457.png" alt="" />
            </a>
          </Grid>
          
          
          <Grid item xs={4} sm={1.5}>
          <a href="/marketplace/other/services">
            <img src="https://i.ibb.co/7JdZjkc/image-2024-05-15-185532293.png" alt="" />
            </a>
          </Grid>

          <Grid item xs={4} sm={1.5}>
          <a href="/marketplace/other/smartphones">
            <img src="https://i.ibb.co/djsd1wh/image-2024-05-15-185619722.png" alt="" />
            </a>
          </Grid>
          <Grid item xs={4} sm={1.5}>
          <a href="/marketplace/other/womensfashion">
            <img src="https://i.ibb.co/YNTvQqD/image-2024-05-15-185701610.png" alt="" />
            </a>
          </Grid>
          <Grid item xs={4} sm={1.5}>
          <a href="/marketplace/other/mensfashion">
            <img src="https://i.ibb.co/Yp83Zx2/image-2024-05-15-185729914.png" alt="" />
            </a>
          </Grid>
          <Grid item xs={4} sm={1.5}>
          <a href="/marketplace/other/services">
            <img src="https://i.ibb.co/By6Srp5/image-2024-05-15-185810986.png" alt="" />
            </a>
          </Grid>
          <Grid item xs={4} sm={1.5}>
          <a href="/marketplace/other/vehicles">
            <img src="https://i.ibb.co/8MVsV5f/image-2024-05-15-185359457.png" alt="" />
            </a>
          </Grid>

        </Grid>
      </form>
    </Fragment>


    <div className="margintopinnit">
      <div className="px-10 -z-10">
        <div className="flex justify-between">
          <div className="flex flex-wrap justify-between w-[98%] bg-white border p-5 rounded-md">
            {productData.map((item) => (
              <ProductCard1 key={item._id} product={item} />
            ))}
          </div>
        </div>
      </div>
      <div className="btnwrapper">
        <a href="#" className="showMore" onClick={fetchNextPage}>Show more</a>
      </div>
    </div>
















      
    </div>
  );
};

export default Marketplace;
