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

const Landing = () => {
  return (
    <>
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
    </>
  );
};

export default Landing;
