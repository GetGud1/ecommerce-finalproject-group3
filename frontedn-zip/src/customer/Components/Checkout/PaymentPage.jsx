import React from 'react'
import { useLocation, useNavigate } from "react-router-dom";
import { getOrderById } from "../../../Redux/Customers/Order/Action";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import './PaymentPage.css';



const PaymentPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const orderId = searchParams.get("order_id");
    const dispatch=useDispatch();
    const jwt=localStorage.getItem("jwt");
    const {order}=useSelector(state=>state)

    console.log("orderId ", order)

    useEffect(()=>{
        
        dispatch(getOrderById(orderId))
    },[orderId])

  return (
    <>
        <div class="cardCheckout">
        <div class="credit-card-box">
        <div class="flip">
            <div class="front">
            <div class="chip"></div>
            <div class="logo">
                
            </div>
            <div class="number"></div>
            <div class="card-holder">
                <label>Card holder</label>
                <div></div>
            </div>
            <div class="card-expiration-date">
                <label>Expires</label>
                <div></div>
            </div>
            </div>
            <div class="back">
            <div class="strip"></div>
            <div class="logo">
                
    
            </div>
            <div class="ccv">
                <label>CCV</label>
                <div></div>
            </div>
            </div>
        </div>
        </div>
        <form class="form" autocomplete="off" action={`/payment/${orderId}`} novalidate>
            <fieldset>
                <label for="card-number">Card Number</label>
                <input type="num" id="card-number" class="input-cart-number" maxlength="4" />
                <input type="num" id="card-number-1" class="input-cart-number" maxlength="4" />
                <input type="num" id="card-number-2" class="input-cart-number" maxlength="4" />
                <input type="num" id="card-number-3" class="input-cart-number" maxlength="4" />
            </fieldset>
            <fieldset>
                <label for="card-holder">Card holder</label>
                <input type="text" id="card-holder" />
            </fieldset>
            <fieldset class="fieldset-expiration">
                <label for="card-expiration-month">Expiration date</label>
                <div class="select">
                <select id="card-expiration-month">
                    <option></option>
                    <option>01</option>
                    <option>02</option>
                    <option>03</option>
                    <option>04</option>
                    <option>05</option>
                    <option>06</option>
                    <option>07</option>
                    <option>08</option>
                    <option>09</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                </select>
                </div>
                <div class="select">
                <select id="card-expiration-year">
                    <option></option>
                    <option>2024</option>
                    <option>2025</option>
                    <option>2026</option>
                    <option>2027</option>
                    <option>2028</option>
                    <option>2029</option>
                    <option>2030</option>
                    <option>2031</option>
                    <option>2032</option>
                    <option>2033</option>
                </select>
                </div>
            </fieldset>
            <fieldset class="fieldset-ccv">
                <label for="card-ccv">CCV</label>
                <input type="text" id="card-ccv" maxlength="3" />
            </fieldset>
            <button class="btn"><i class="fa fa-lock"></i> submit</button>
        </form>
    </div>
    </>
  )
}

export default PaymentPage;