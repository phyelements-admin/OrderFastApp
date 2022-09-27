import React from 'react';
import "./WelcomePage.css"
// import RegistrationPage from "./RegistrationPage";
// import {Routes, Route, useNavigate} from 'react-router-dom';


function WelcomePage() {
    // const navigate = useNavigate();

    // const navigateToRegistartionPage = () => {
    //     navigate('/RegistrationPage');
    // }
    return (   
        //  {/* <img  src="https://b.zmtcdn.com/data/pictures/4/19586034/1b5f4d46da15131e47f97658193d6709.jpg"  alt ="backgroundimage" class="responsive" />  */}
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
                    <center><button type="submit" class="btn" >Register your Restaurant</button></center>
                    {/* <button type="submit" class="btn" onClick={navigateToRegistartionPage}>Register your Restaurant</button>
                    <Routes>
                        <Route path="/RegistrationPage" element={<RegPage />} />
                    </Routes> */}
                    <p id="text1"> Already have an account? <a href="">Login</a></p>
                </div>
                </form>
            </div>
        </div>
    </div>
        
    );
}
// function RegPage(){
//     return <RegistrationPage />
    
// }

export default WelcomePage;