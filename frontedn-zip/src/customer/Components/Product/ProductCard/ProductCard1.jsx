import React from 'react';
import "./ProductCard.css";
import{useLocation, useNavigate} from "react-router-dom";
import { Avatar } from '@mui/material';
import { deepOrange } from '@mui/material/colors';
import {  useSelector } from "react-redux";
import { useState } from 'react';

const ProductCard1 = ({ product }) => {
  const { title, userImg, username, brand, imageUrl, price ,discountedPrice,color,discountPersent} = product;
  const navigate= useNavigate();
  

  const handleNavigate=()=>{
    navigate(`/productMP/${product?._id}`)
  }
  const { auth } = useSelector((store) => store);
  const [open, setOpen] = useState(false);
  

 const  img1 = "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
 const  img2= "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
 const  img3 = "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
 const  img4 = "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHVzZXJ8ZW58MHx8MHx8fDA%3D"
 const img5 = "https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHVzZXJ8ZW58MHx8MHx8fDA%3D"
 const img6 = "https://images.unsplash.com/photo-1619895862022-09114b41f16f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHVzZXJ8ZW58MHx8MHx8fDA%3D"
 const img7 = "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fHVzZXJ8ZW58MHx8MHx8fDA%3D"
 const img8 = "https://images.unsplash.com/photo-1474176857210-7287d38d27c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fHVzZXJ8ZW58MHx8MHx8fDA%3D"

const u1 = "Walter White";
const u2 = "Aaron";
const u3 = "Furqan";
const u4 = "Honey";
const u5 = "Haris";
const u6 = "Pek";
const u7 = "Random";
const u8 = "Testing";



 const getRandomImage = () => {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8];
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
};

const usernames = [u1, u2, u3, u4, u5, u6, u7, u8];

const getRandomUsername = () => {
  const randomIndex = Math.floor(Math.random() * usernames.length);
  return usernames[randomIndex];
};
const getRandomDate = () => {
  const startDate = new Date(2010, 0, 1); // Start date for random date range
  const endDate = new Date(); // Current date as the end date
  const randomTimestamp = Math.random() * (endDate.getTime() - startDate.getTime()) + startDate.getTime();
  const randomDate = new Date(randomTimestamp);
  return randomDate.toDateString();
};

const randomDate = getRandomDate();

const randomUsername = getRandomUsername();

const randomImage = getRandomImage();

  return (
   <div onClick={handleNavigate} className='productCard w-[15rem] border m-3 transition-all cursor-pointer '>
     <div style={{ display: "flex", alignItems: "center" }}>
      <Avatar
        className="text-white"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        // onClick={handleUserClick}
        sx={{
          bgcolor: deepOrange[100],
          color: "white",
          cursor: "pointer",
        }}
      >
        <img src={randomImage} alt="" />
      </Avatar>
      <div style={{marginLeft: "5px"}}>
        <p>{randomUsername}</p>
        <p style={{ fontSize: "10px", opacity: 0.65 }}>Uploaded at {randomDate}</p>
      </div>
    </div>
    <div className='h-[20rem]'>
        <img className='h-full w-full object-cover object-left-top' src={imageUrl} alt="" />
    </div>
    <div className='textPart bg-white p-3 '>
        <div>
        <p  className='font-bold opacity-60'>{brand}</p>
            <p className=''>{title}</p>
        
        <p className='font-semibold opacity-50'>{color}</p>
        </div>
        
        <div className='flex space-x-2 items-center'>
            <p className='opacity-90'>${price}</p>
        </div>
        
    </div>
   </div>
  );
};

export default ProductCard1;
