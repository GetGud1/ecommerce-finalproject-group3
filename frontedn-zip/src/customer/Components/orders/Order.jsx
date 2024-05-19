import { Box, Grid } from "@mui/material";
import React, { useEffect, useSyncExternalStore } from "react";
import OrderCard from "./OrderCard";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { useDispatch, useSelector } from "react-redux";
import { getOrderHistory } from "../../../Redux/Customers/Order/Action";
import BackdropComponent from "../BackDrop/Backdrop";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Link,
  Avatar,
  AvatarGroup,
  Button,
  Card,
  CardHeader,
  Chip,
  FormControl,
  InputLabel,
  Menu,
  MenuItem,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { getUser } from "../../../Redux/Auth/Action";

import { getOrders } from "../../../Redux/Admin/Orders/Action";
import { GET_USER_SUCCESS } from "../../../Redux/Auth/ActionTypes";


const orderStatus = [
  { label: "On The Way", value: "onTheWay" },
  { label: "Delivered", value: "delevered" },
  { label: "Cancelled", value: "cancelled" },
  { label: "Returned", vlue: "returned" },
];

const Order = (item, order) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ status: "", sort: "" });
  const [orderStatus, setOrderStatus] = useState("");
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { adminsOrder } = useSelector((store) => store);
  const [anchorElArray, setAnchorElArray] = useState([]);

  useEffect(() => {
    dispatch(getOrders({ jwt }));
  }, [jwt,adminsOrder.delivered, adminsOrder.shipped, adminsOrder.confirmed]);


  
  return (
    <Card className="mt-2">
        <CardHeader
          title="All Orders"
          sx={{
            pt: 2,
            alignItems: "center",
            "& .MuiCardHeader-action": { mt: 0.6 },
          }}
         
         
        />
        <TableContainer>
          <Table sx={{ minWidth: 800 }} aria-label="table in dashboard">
            <TableHead>
              <TableRow>
                <TableCell>Image</TableCell>
                <TableCell>Title</TableCell>

                <TableCell>Price</TableCell>
                <TableCell>Id</TableCell>
                <TableCell sx={{ textAlign: "center" }}>Status</TableCell>
                <TableCell >View</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {adminsOrder?.orders?.map((item, index) => (
                <TableRow
                  hover
                  key={item.name}
                  sx={{ "&:last-of-type td, &:last-of-type th": { border: 0 } }}
                >
                  <TableCell sx={{}}>
                  <AvatarGroup max={4} sx={{justifyContent: 'start'}}>
      {item.orderItems.map((orderItem)=><Avatar  alt={item.title} src={orderItem.product?.imageUrl} /> )}
    </AvatarGroup>
                    {" "}
                  </TableCell>

                  <TableCell
                    sx={{ py: (theme) => `${theme.spacing(0.5)} !important` }}
                  >
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <Typography
                        sx={{
                          fontWeight: 500,
                          fontSize: "0.875rem !important",
                        }}
                      >
                        {item?.orderItems.map((order) => (
                          <span className=""> {order.product?.title},</span>
                        ))}
                      </Typography>
                      <Typography variant="caption">
                        {item?.orderItems.map((order) => (
                          <span className="opacity-60">
                            {" "}
                            {order.product?.brand},
                          </span>
                        ))}
                      </Typography>
                    </Box>
                  </TableCell>

                  <TableCell>{item?.totalPrice}</TableCell>
                  <TableCell>{item?._id}</TableCell>
                  <TableCell className="text-white">
                    <Chip
                      sx={{
                        color: "white !important",
                        fontWeight: "bold",
                        textAlign: "center",
                      }}
                      label={item?.orderStatus}
                      size="small"
                      color={
                        item.orderStatus === "PENDING" ? "info" :item?.orderStatus==="DELIVERED"? "success":"secondary"
                      }
                      className="text-white"
                    />
                  </TableCell>
                  <TableCell
                    sx={{ textAlign: "center" }}
                    className="text-white"
                  >
                    {/* <Button>{item.orderStatus==="PENDING"?"PENDING": item.orderStatus==="PLACED"?"CONFIRMED":item.orderStatus==="CONFIRMED"?"SHIPPED":"DELEVERED"}</Button> */}
                    <div>
 

                    </div>
                  </TableCell>
                  <TableCell
                    sx={{ textAlign: "center" }}
                    className="text-white"
                  >

                  </TableCell>

                  <TableCell>
                  <a href={`/account/order/${item?._id}`}>View Order</a>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
  );
};

export default Order;
