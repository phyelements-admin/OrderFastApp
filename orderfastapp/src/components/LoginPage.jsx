import React from 'react';
import "./Login.css";

function LoginPage() {
    return (
        <div class="body">
            <div class="bg-img1">
                <form  class="container1">
                    <h1 class="heading1"><span class="appName1">Order Fast</span>- Registration</h1>
                    <input type="text" placeholder="Name of Restaurant" name="RestaurantName" required /> 
                    <input type="text" placeholder="First Name" name="fname" required /> 
                    <input type="text" placeholder="Second Name" name="sname" required /> 
                    <input type="text" placeholder="Email Id" name="email" required /> 
                    <input type="password" placeholder=" New Password" name="psw" required /> 
                    <input type="password" placeholder="Confirm Password" name="cpsw" required /> 
                    <button type="submit" class="btn1">Save & Authentication via Email</button>  
                </form>
            </div>
        </div>    
    );
}

export default LoginPage;