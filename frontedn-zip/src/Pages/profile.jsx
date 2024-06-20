import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { getUser } from '../Redux/Auth/Action';
import "./profile.css";
import { Avatar } from '@mui/material';
import { deepOrange } from '@mui/material/colors';

const Profile = () => {
  const { auth } = useSelector((store) => store);
  const dispatch = useDispatch();
  const [openAuthModal, setOpenAuthModal] = useState(false);
  const jwt = localStorage.getItem('jwt');

  useEffect(() => {
    if (jwt) {
      dispatch(getUser(jwt)); // Dispatch the getUser action
    }
  }, [jwt, dispatch]);

  const user = auth.user; // Assuming you have a user state in your Redux store

  return (
    <div >
      <div className='Img' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Avatar
       className="Avatar"

       // onClick={handleUserClick}
       sx={{
        bgcolor: deepOrange[100],
        color: "white",
        cursor: "pointer",
        width: 150,
        height: 150,
        fontSize: 48,
      }}
     >
       {auth.user?.firstName[0].toUpperCase()}
     </Avatar>
      </div>
      {user ? (

        
        <div className='wrapper' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          
          <div>
            <h2>Name: <span>{user.firstName} {user.lastName}</span></h2>
            <h2>Email: <span>{user.email}</span></h2>
            <h2>Role: <span>{user.role}</span></h2>
          
          <h2>Addresses: {user.addresses.map((address) => (
            <span key={address._id}>
              <p>Street Address: {address.streetAddress}</p>
              <p>City: {address.city}</p>
              <p>State: {address.state}</p>
              <p>Zip Code: {address.zipCode}</p>
              <p>Mobile: {address.mobile}</p>
              <p>Name: {address.firstName} {address.lastName}</p>
            </span>

          ))}</h2>
          </div>
          

        </div>
      ) : (
        <p>Loading...</p>
      )}
      <a className='home' href="/"><span className='span'>&lt;</span> Home</a>
    </div>
    
  );
};

export default Profile;

