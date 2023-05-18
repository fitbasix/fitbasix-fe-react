import React from "react";
import AboutUs from "./AboutUs";
import BMI from "./BMI";
import Footer from "./Footer";
import GetStarted from "./GetStarted";
import Home from "./Home";
import LiveClass from "./LiveClass";
import PopularClasses from "./PopularClasses";
import TopTrainers from "./TopTrainers";
import UserReviews from "./UserReviews";
import WorkoutSessions from "./WorkoutSessions";
import "./styles.css";
const Landing = () => {
  return (
    <div className="landingContainer">
      <Home />
      <LiveClass />
      <AboutUs />
      <PopularClasses />
      <WorkoutSessions />
      <TopTrainers />
      <BMI />
      <UserReviews />
      <GetStarted />
      <Footer />
    </div>
  );
};

export default Landing;
