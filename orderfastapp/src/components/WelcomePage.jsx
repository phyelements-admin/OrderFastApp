import React from 'react';
import "./Welcome.css";
import {
    BrowserRouter as Router,
    // Switch,
    Routes,
    Route,
    Link,
    useNavigate
  } from "react-router-dom";
import LoginPage from "./LoginPage";



function WelcomePage() {
    const navigate = useNavigate();
    
    const navigateToLogin = () => {
        navigate('/loginpage');
    }
    
    return ( 
        <>  
    <div>
         <div class="bg-img">
            <div class="container" >
                <form>
                <div class="welcomeScreen">
                    <h2 class="welcome">Welcome to</h2>
                    <h1 class="appname">Order Fast</h1>
                    {/* <p class="details">This App will give you the capability that your guests are able to order by themselves.... go on to register your</p>
                    <p><center>restaurant</center></p> */}
                    <p class="details">This App will give you the capability that your guests are able to order by themselves.... go on to register your restaurant</p>
                    {/* <Router>
                    <Link to="/loginpage"><center><button type="submit" class="btn" onClick={navigateToLogin} >Register your Restaurant</button></center></Link>
                    <Routes>
                    <Route path="/loginpage" element={<Login />} > </Route>
                    </Routes>
                    </Router> */}

                    <Link to="/loginpage" ><center><button class="btn" onClick={navigateToLogin}>Register your Restaurant</button></center></Link>
                    
                    <p id="text1"> Already have an account? <a href="">Login</a></p>
                </div>
                </form>
            </div>
             
        </div>
        
    </div>
     <Routes>
     <Route path="loginpage" element={<Login />} />
     </Routes>
     </>
       
    );
}
function Login(){
    return <LoginPage />
    
}

export default WelcomePage;