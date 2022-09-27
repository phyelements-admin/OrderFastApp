import React from 'react';
import "./LoginPage.css";

function LoginPage() {
    return (
        <div class="body">
            <div class="bg-img">
                <form  class="container">
                    <h1 class="heading"><span class="appName">Order Fast</span>- Registration</h1>
                    <input type="text" placeholder="Name of Restaurant" name="RestaurantName" required /> 
                    <input type="text" placeholder="First Name" name="fname" required /> 
                    <input type="text" placeholder="Second Name" name="sname" required /> 
                    <input type="text" placeholder="Email Id" name="email" required /> 
                    <input type="password" placeholder=" New Password" name="psw" required /> 
                    <input type="password" placeholder="Confirm Password" name="cpsw" required /> 
                    <button type="submit" class="btn">Save & Authentication via Email</button>  
                </form>
            </div>
        </div>    
    );
}

export default LoginPage;