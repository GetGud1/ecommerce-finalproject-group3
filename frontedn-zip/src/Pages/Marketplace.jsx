import { useState } from "react";
import { Typography } from "@mui/material";
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

import { Fragment } from "react";
import "./CreateProductForm.css";
import { useDispatch } from "react-redux";
import { createProduct } from "../Redux/Customers/Product/Action";

import React from "react";
import ProductCard from "../customer/Components/Product/ProductCard/ProductCard";
import { productdata } from "./data";


const Homepage = () => {
  // const [ product, setProduct] = useState(null)

  // useEffect(()=>{
  //   const fetchData = async () =>{
  //     const response = await fetch('http://localhost:5454/api/products?category=other1')
  //     const json = await response.json()

  //     if(response.ok){
  //       setProduct(json)
  //       console.log("its the fookin product innit", setProduct)
  //     }
  //   }

  // },[])
  

    
    const [productData, setProductData] = useState({
      imageUrl: "",
      brand: "",
      title: "",
      color: "",
      discountedPrice: "",
      price: "",
      discountPersent: "",

      topLavelCategory: "",
      secondLavelCategory: "",
      thirdLavelCategory: "",
      description: "",
    });


  const dispatch=useDispatch();
  const jwt=localStorage.getItem("jwt")
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setProductData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    };
  
    const handleSizeChange = (e, index) => {
      let { name, value } = e.target;
      name==="size_quantity"?name="quantity":name=e.target.name;
  
      const sizes = [...productData.size];
      sizes[index][name] = value;
      setProductData((prevState) => ({
        ...prevState,
        size: sizes,
      }));
    };
  
    const handleAddSize = () => {
      const sizes = [...productData.size];
      sizes.push({ name: "", quantity: "" });
      setProductData((prevState) => ({
        ...prevState,
        size: sizes,
      }));
    };
  
    // const handleRemoveSize = (index) => {
    //   const sizes = [...productData.size];
    //   sizes.splice(index, 1);
    //   setProductData((prevState) => ({
    //     ...prevState,
    //     size: sizes,
    //   }));
    // };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(createProduct({data:productData,jwt}))
      console.log(productData);
    };






  return (
    <div className="">


    <div className="px-10 -z-10">


      {/* bottom part */}
      <div className="flex justify-between ">
        {/* filter */}
        <div className="w-[20%] border rounded-md bg-white"></div>
        {/* product */}

        <div className="flex  flex-wrap justify-between w-[78%] bg-white border p-5 rounded-md">
          {productdata.map((item) => (
            <ProductCard product={item} />
          ))}
        </div>
      </div>
    </div>













<Fragment className="createProductContainer ">
      <Typography
        variant="h3"
        sx={{ textAlign: "center" }}
        className="py-10 text-center "
      >
        Add New Product
      </Typography>
      <form
        onSubmit={handleSubmit}
        className="createProductContainer min-h-screen"
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Image URL"
              name="imageUrl"
              value={productData.imageUrl}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Brand"
              name="brand"
              value={productData.brand}
              onChange={handleChange}
            />
          </Grid>
        
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Title"
              name="title"
              value={productData.title}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Color"
              name="color"
              value={productData.color}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Quantity"
              name="quantity"
              value={productData.quantity}
              onChange={handleChange}
              type="number"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Price"
              name="price"
              value={productData.price}
              onChange={handleChange}
              type="number"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Discounted Price"
              name="discountedPrice"
              value={productData.discountedPrice}
              onChange={handleChange}
              type="number"
            />
          </Grid>
          
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Discount Percentage"
              name="discountPersent"
              value={productData.discountPersent}
              onChange={handleChange}
              type="number"
            />
          </Grid>
          <Grid item xs={6} sm={4}>
            <FormControl fullWidth>
              <InputLabel>Top Level Category</InputLabel>
              <Select
                name="topLavelCategory"
                value={productData.topLavelCategory}
                onChange={handleChange}
                label="Top Level Category"
              >
                <MenuItem value="marketplace">Marketplace</MenuItem>

              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6} sm={4}>
            <FormControl fullWidth>
              <InputLabel>Second Level Category</InputLabel>
              <Select
                name="secondLavelCategory"
                value={productData.secondLavelCategory}
                onChange={handleChange}
                label="Second Level Category"
              >
                <MenuItem value="mens_mp">Men</MenuItem>
                <MenuItem value="womens_mp">Women</MenuItem>
                <MenuItem value="accessories_mp">Accessories</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6} sm={4}>
            <FormControl fullWidth>
              <InputLabel>Third Level Category</InputLabel>
              <Select
                name="thirdLavelCategory"
                value={productData.thirdLavelCategory}
                onChange={handleChange}
                label="Third Level Category"
              >
                <MenuItem value="mensfashion">Mens fashion</MenuItem>
                <MenuItem value="womensfashion">Womens fashion</MenuItem>
                <MenuItem value="tech">Tech</MenuItem>
                <MenuItem value="smartphone">Smartphones</MenuItem>

                <MenuItem value="games">Games</MenuItem>
                <MenuItem value="sports">Sports</MenuItem>                
                <MenuItem value="vehicles">Vehicles</MenuItem>
                <MenuItem value="services">Services</MenuItem>
                <MenuItem value="properties">Properties</MenuItem>

                <MenuItem value="pets">Pets</MenuItem>
                <MenuItem value="furniture">Furniture</MenuItem>                
                <MenuItem value="job">Jobs</MenuItem>
                <MenuItem value="other">Other</MenuItem>

              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="outlined-multiline-static"
              label="Description"
              multiline
              name="description"
              rows={3}
              onChange={handleChange}
              value={productData.description}
            />
          </Grid>
          {/* {productData.size.map((size, index) => (
            <Grid container item spacing={3} >
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Size Name"
                  name="name"
                  value={size.name}
                  onChange={(event) => handleSizeChange(event, index)}
                  required
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Quantity"
                  name="size_quantity"
                  type="number"
                  onChange={(event) => handleSizeChange(event, index)}
                  required
                  fullWidth
                />
              </Grid> </Grid>
            
          ))} */}
          <Grid item xs={12} >
            <Button
              variant="contained"
              sx={{ p: 1.8 }}
              className="py-20"
              size="large"
              type="submit"
            >
              Add New Product
            </Button>
            {/* <Button
              variant="contained"
              sx={{ p: 1.8 }}
              className="py-20 ml-10"
              size="large"
              onClick={()=>handleAddProducts(dressPage1)}
            >
              Add Products By Loop
            </Button> */}
          </Grid>
        </Grid>
      </form>
    </Fragment>

      
    </div>
  );
};

export default Homepage;
