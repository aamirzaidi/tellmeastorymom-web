import React from "react";
import Header from "./Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../comp/Footer/Footer";
import HomePageBody from "./homepage/body/HomePageBody";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import StoryPage from "./StoryPage/StoryPage";
import addStory from "./AddStoryPage/addStoryPage";
import MompreneurCarousel from "./Mompreneur/MompreneurCarousel";
import SignUp from "../comp/SignUpPage/signUp";
import Login from "./LoginPage/Login";
import Developers from "./FooterPages/Developers";
import ExploreCategories from "../comp/ExploreCategoriesPage/exploreCategories";
import Search from "./homepage/body/SearchPage";
import AdminPage from "./AdminPanel/AdminPage";
import TopHeader from './Header/TopHeader';
import About from "./FooterPages/About";
import PrivacyPolicy from "./FooterPages/privacyPolicy"
import Terms from "./FooterPages/terms";
import GuestPostPage from "./GuestPosts/GuestPostPage";
import AddMultipleStoryPage from "./AddStoryPage/AddMultipleStoryPage";
import Page404 from "./Page404";

function App(){

  return (
      <div className="cd">
        <TopHeader />    
        <Header/>
          <div className="container in">
            <Switch>
                  <Route exact path={"/"} component={HomePageBody}/>
                  <Route exact path={"/exploreCategories"} component={ExploreCategories}/>
                  <Route exact path={"/Mompreneur"} component={MompreneurCarousel}/>
                  <Route exact path={"/addStory"} component={addStory}/>    
                  <Route exact path={"/addMultipleStory"} component={AddMultipleStoryPage}/>  
                  <Route  exact path={"/guestposts"} component={GuestPostPage}/>  
                  <Route  exact path={"/about"} component={About}/>    
                  <Route  exact path={"/login"} component={Login}/>
                  <Route  exact path={"/signup"} component={SignUp}/>
                  <Route  exact path ={"/search/:searchTerm"} component={Search}/>
                  <Route  exact path={"/privacyPolicy"} component={PrivacyPolicy}/>
                  <Route  exact path={"/terms-and-conditions"} component={Terms}/>
                  <Route  exact path={"/developers"} component={Developers}/>
                  <Route  exact path={"/adminpage"} component={AdminPage}/>
                  <Route exact path={"/:storyData"} component={StoryPage}/> 
                  <Route component={Page404} />
              </Switch>
          </div> 
        <Footer/>
      </div>
);
}
export default App;